const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const PORT = Number(process.env.PORT) || 3000;
const CLIENT_ORIGIN = (process.env.CORS_ORIGIN || process.env.CLIENT_ORIGIN || "*").trim() || "*";
const ADMIN_USERNAME = "Adonis";

const BANNED_USERNAMES = ["cool guy", "cool guy 1", "cool guy 2"];

const MOVE_BROADCAST_INTERVAL_MS = Math.floor(1000 / 15);
const MAP_LAYOUT_SCALE = 0.85;
const MAP_HALF_LENGTH = 128 * MAP_LAYOUT_SCALE;
const MAP_SCALE_XZ = 2;
const NPC_STREAM_START_Z = (-MAP_HALF_LENGTH + 0.08) * MAP_SCALE_XZ;
const NPC_STREAM_END_Z = (MAP_HALF_LENGTH - 0.08) * MAP_SCALE_XZ;
const NPC_STREAM_LANE_X = 0;
const NPC_PATROL_SPEED = 7.4;
const SPAWN_TIMER_BROADCAST_MS = 1000;

const RARITY_COMMON = "Common";
const RARITY_UNCOMMON = "Uncommon";
const RARITY_RARE = "Rare";
const RARITY_EPIC = "Epic";
const RARITY_LEGENDARY = "Legendary";
const RARITY_MYTHIC = "Mythic";
const RARITY_SECRET = "Secret";

const VARIANT_NORMAL = "normal";
const VARIANT_SHINY = "shiny";
const VARIANT_GOLDEN = "golden";
const VARIANT_DIAMOND = "diamond";
const VARIANT_RAINBOW = "rainbow";

const CHARACTER_POOLS_BY_RARITY = Object.freeze({
  [RARITY_COMMON]: ["Leo", "Eshdog Marley"],
  [RARITY_UNCOMMON]: ["Ziggy"],
  [RARITY_RARE]: ["Nate", "Hendrix"],
  [RARITY_EPIC]: ["Ledger", "Charlie"],
  [RARITY_LEGENDARY]: ["Oscar", "Beau"],
  [RARITY_MYTHIC]: ["Christian", "Vince"],
  [RARITY_SECRET]: ["Fletcher", "Eshdog Marley"],
});

const ADMIN_GRANTABLE_CHARACTER_NAMES = Object.freeze(
  Array.from(new Set(Object.values(CHARACTER_POOLS_BY_RARITY).flat()))
);

const VARIANT_DEFINITIONS = Object.freeze([
  Object.freeze({ id: VARIANT_NORMAL, chance: 80 }),
  Object.freeze({ id: VARIANT_SHINY, chance: 12 }),
  Object.freeze({ id: VARIANT_GOLDEN, chance: 5 }),
  Object.freeze({ id: VARIANT_DIAMOND, chance: 2 }),
  Object.freeze({ id: VARIANT_RAINBOW, chance: 1 }),
]);

const ADMIN_GRANTABLE_VARIANT_IDS = Object.freeze(VARIANT_DEFINITIONS.map((variant) => variant.id));

const SPAWN_SCHEDULES = Object.freeze({
  common: Object.freeze({
    id: "common",
    rarity: RARITY_COMMON,
    intervalMs: 120 * 1000,
    spawnOffsetZ: 0,
  }),
  uncommon: Object.freeze({
    id: "uncommon",
    rarity: RARITY_UNCOMMON,
    intervalMs: 120 * 1000,
    spawnOffsetZ: 6,
  }),
  rare: Object.freeze({
    id: "rare",
    rarity: RARITY_RARE,
    intervalMs: 300 * 1000,
    spawnOffsetZ: 10,
  }),
  epic: Object.freeze({
    id: "epic",
    rarity: RARITY_EPIC,
    intervalMs: 480 * 1000,
    spawnOffsetZ: 14,
  }),
  legendary: Object.freeze({
    id: "legendary",
    rarity: RARITY_LEGENDARY,
    intervalMs: 300 * 1000,
    spawnOffsetZ: 9,
  }),
  mythic: Object.freeze({
    id: "mythic",
    rarity: RARITY_MYTHIC,
    intervalMs: 900 * 1000,
    spawnOffsetZ: 18,
  }),
});

const app = express();
app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    ok: true,
    service: "catch-a-classmate-multiplayer",
    players: players.size,
    streetCharacters: streetCharacters.size,
  });
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, timestamp: Date.now() });
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: CLIENT_ORIGIN,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const players = new Map();
const streetCharacters = new Map();
const scheduleState = new Map();
let streetCharacterCounter = 1;

function sanitizeUsername(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 20) || "Player";
}

function sanitizePosition(rawPosition) {
  const safe = rawPosition && typeof rawPosition === "object" ? rawPosition : {};
  const x = Number(safe.x);
  const y = Number(safe.y);
  const z = Number(safe.z);
  const rotationY = Number(safe.rotationY);
  return {
    x: Number.isFinite(x) ? x : 0,
    y: Number.isFinite(y) ? y : 0,
    z: Number.isFinite(z) ? z : 0,
    rotationY: Number.isFinite(rotationY) ? rotationY : 0,
  };
}

function sanitizeGrantableCharacterName(value) {
  const safeName = String(value || "").trim();
  return ADMIN_GRANTABLE_CHARACTER_NAMES.includes(safeName) ? safeName : "";
}

function sanitizeVariantId(value) {
  const safeVariantId = String(value || "").trim().toLowerCase();
  return ADMIN_GRANTABLE_VARIANT_IDS.includes(safeVariantId) ? safeVariantId : VARIANT_NORMAL;
}

function getRainbowWeightMultiplier() {
  for (const player of players.values()) {
    if ((Number(player.rebirthCount) || 0) >= 5) {
      return 2;
    }
  }
  return 1;
}

function rollVariantId() {
  const rainbowMultiplier = getRainbowWeightMultiplier();
  const weightedVariants = VARIANT_DEFINITIONS.map((variant) => ({
    ...variant,
    effectiveChance: variant.id === VARIANT_RAINBOW ? variant.chance * rainbowMultiplier : variant.chance,
  }));
  const totalWeight = weightedVariants.reduce((sum, variant) => sum + variant.effectiveChance, 0);
  let roll = Math.random() * totalWeight;
  for (const variant of weightedVariants) {
    roll -= variant.effectiveChance;
    if (roll <= 0) {
      return variant.id;
    }
  }
  return VARIANT_NORMAL;
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function createStreetCharacter(scheduleConfig) {
  const names = CHARACTER_POOLS_BY_RARITY[scheduleConfig.rarity] || CHARACTER_POOLS_BY_RARITY[RARITY_COMMON];
  const spawnedAtMs = Date.now();
  const startX = NPC_STREAM_LANE_X;
  const startZ = NPC_STREAM_START_Z - scheduleConfig.spawnOffsetZ;
  const endZ = NPC_STREAM_END_Z;
  const travelDurationMs = Math.ceil(((endZ - startZ) / NPC_PATROL_SPEED) * 1000);
  return {
    id: `street_${streetCharacterCounter++}`,
    name: randomFrom(names),
    rarity: scheduleConfig.rarity,
    variantId: rollVariantId(),
    startX,
    startZ,
    endZ,
    speed: NPC_PATROL_SPEED,
    spawnedAtMs,
    expiresAtMs: spawnedAtMs + travelDurationMs,
  };
}

function serializeStreetCharacter(character) {
  return {
    id: character.id,
    name: character.name,
    rarity: character.rarity,
    variantId: character.variantId,
    startX: character.startX,
    startZ: character.startZ,
    endZ: character.endZ,
    speed: character.speed,
    spawnedAtMs: character.spawnedAtMs,
    expiresAtMs: character.expiresAtMs,
  };
}

function serializePlayer(player) {
  return {
    socketId: player.socketId,
    username: player.username,
    rebirthCount: player.rebirthCount,
    baseIndex: player.baseIndex,
    hasFletcherOnBase: Boolean(player.hasFletcherOnBase),
    hasEshdogMarleyOnBase: Boolean(player.hasEshdogMarleyOnBase),
    position: {
      x: player.position.x,
      y: player.position.y,
      z: player.position.z,
      rotationY: player.position.rotationY,
    },
  };
}

function emitPlayerList() {
  io.emit(
    "players:list",
    Array.from(players.values()).map((player) => serializePlayer(player))
  );
}

function getTimerSnapshot(nowMs = Date.now()) {
  const legendarySchedule = scheduleState.get("legendary");
  const mythicSchedule = scheduleState.get("mythic");
  return {
    legendary: {
      remainingSeconds: legendarySchedule
        ? Math.max(0, Math.ceil((legendarySchedule.nextSpawnAtMs - nowMs) / 1000))
        : 0,
    },
    mythic: {
      remainingSeconds: mythicSchedule
        ? Math.max(0, Math.ceil((mythicSchedule.nextSpawnAtMs - nowMs) / 1000))
        : 0,
    },
  };
}

function emitTimerSnapshot() {
  io.emit("spawnTimers:update", {
    serverTimeMs: Date.now(),
    timers: getTimerSnapshot(),
  });
}

function emitWorldState(socket) {
  socket.emit("world:state", {
    selfSocketId: socket.id,
    serverTimeMs: Date.now(),
    players: Array.from(players.values()).map((player) => serializePlayer(player)),
    streetCharacters: Array.from(streetCharacters.values()).map((character) => serializeStreetCharacter(character)),
    timers: getTimerSnapshot(),
  });
}

function spawnScheduledStreetCharacter(scheduleConfig) {
  const character = createStreetCharacter(scheduleConfig);
  streetCharacters.set(character.id, character);
  io.emit("streetCharacter:spawned", {
    serverTimeMs: Date.now(),
    character: serializeStreetCharacter(character),
  });
}

function removeExpiredStreetCharacters(nowMs = Date.now()) {
  for (const character of streetCharacters.values()) {
    if (character.expiresAtMs > nowMs) {
      continue;
    }
    streetCharacters.delete(character.id);
    io.emit("streetCharacter:despawned", {
      characterId: character.id,
    });
  }
}

function initializeSchedules() {
  const nowMs = Date.now();
  for (const scheduleConfig of Object.values(SPAWN_SCHEDULES)) {
    scheduleState.set(scheduleConfig.id, {
      ...scheduleConfig,
      nextSpawnAtMs: nowMs + scheduleConfig.intervalMs,
    });
  }
}

function tickSpawnSchedules() {
  const nowMs = Date.now();
  for (const schedule of scheduleState.values()) {
    while (nowMs >= schedule.nextSpawnAtMs) {
      spawnScheduledStreetCharacter(schedule);
      schedule.nextSpawnAtMs += schedule.intervalMs;
    }
  }
  removeExpiredStreetCharacters(nowMs);
  emitTimerSnapshot();
}

initializeSchedules();
setInterval(tickSpawnSchedules, SPAWN_TIMER_BROADCAST_MS);

io.on("connection", (socket) => {
  console.log(`[socket] connected ${socket.id}`);

  players.set(socket.id, {
    socketId: socket.id,
    username: `Player ${socket.id.slice(0, 4)}`,
    rebirthCount: 0,
    baseIndex: -1,
    hasFletcherOnBase: false,
    hasEshdogMarleyOnBase: false,
    position: { x: 0, y: 0, z: 0, rotationY: 0 },
    lastMovementBroadcastAt: 0,
  });

  emitWorldState(socket);
  emitPlayerList();

  socket.on("player:register", (payload = {}) => {
    const player = players.get(socket.id);
    if (!player) {
      return;
    }
    const username = sanitizeUsername(payload.username);
    if (BANNED_USERNAMES.includes(username.toLowerCase())) {
      socket.emit("banned");
      socket.disconnect(true);
      return;
    }
    player.username = username;
    player.rebirthCount = Math.max(0, Math.floor(Number(payload.rebirthCount) || 0));
    player.baseIndex = Number.isInteger(payload.baseIndex) ? payload.baseIndex : -1;
    player.hasFletcherOnBase = Boolean(payload.hasFletcherOnBase);
    player.hasEshdogMarleyOnBase = Boolean(payload.hasEshdogMarleyOnBase);
    player.position = sanitizePosition(payload.position);
    socket.broadcast.emit("player:joined", serializePlayer(player));
    socket.broadcast.emit("player:moved", {
      socketId: socket.id,
      username: player.username,
      rebirthCount: player.rebirthCount,
      baseIndex: player.baseIndex,
      hasFletcherOnBase: player.hasFletcherOnBase,
      hasEshdogMarleyOnBase: player.hasEshdogMarleyOnBase,
      position: player.position,
    });
    emitPlayerList();
  });

  socket.on("player:move", (payload = {}) => {
    const player = players.get(socket.id);
    if (!player) {
      return;
    }
    const nowMs = Date.now();
    if (nowMs - player.lastMovementBroadcastAt < MOVE_BROADCAST_INTERVAL_MS) {
      return;
    }
    player.lastMovementBroadcastAt = nowMs;
    player.position = sanitizePosition(payload);
    player.baseIndex = Number.isInteger(payload.baseIndex) ? payload.baseIndex : player.baseIndex;
    player.hasFletcherOnBase =
      typeof payload.hasFletcherOnBase !== "undefined" ? Boolean(payload.hasFletcherOnBase) : player.hasFletcherOnBase;
    player.hasEshdogMarleyOnBase =
      typeof payload.hasEshdogMarleyOnBase !== "undefined"
        ? Boolean(payload.hasEshdogMarleyOnBase)
        : player.hasEshdogMarleyOnBase;
    socket.broadcast.emit("player:moved", {
      socketId: socket.id,
      username: player.username,
      rebirthCount: player.rebirthCount,
      baseIndex: player.baseIndex,
      hasFletcherOnBase: player.hasFletcherOnBase,
      hasEshdogMarleyOnBase: player.hasEshdogMarleyOnBase,
      position: player.position,
    });
  });

  socket.on("streetCharacter:buyAttempt", (payload = {}) => {
    const characterId = typeof payload.characterId === "string" ? payload.characterId : "";
    if (!characterId || !streetCharacters.has(characterId)) {
      socket.emit("streetCharacter:purchaseDenied", {
        characterId,
      });
      return;
    }

    const character = streetCharacters.get(characterId);
    streetCharacters.delete(characterId);
    io.emit("streetCharacter:purchased", {
      characterId,
      buyerSocketId: socket.id,
      character: serializeStreetCharacter(character),
    });

    // Broadcast pull notification for non-normal variants
    const buyer = players.get(socket.id);
    const buyerName = buyer ? buyer.username : "Someone";
    if (character.variantId && character.variantId !== VARIANT_NORMAL) {
      const variantLabel = character.variantId.charAt(0).toUpperCase() + character.variantId.slice(1);
      io.emit("chat:message", {
        type: "pull",
        text: `${buyerName} just pulled a ${variantLabel} ${character.name}!`,
        timestamp: Date.now(),
      });
    }
  });

  socket.on("admin:message", (payload = {}) => {
    const player = players.get(socket.id);
    if (!player || player.username !== ADMIN_USERNAME) return;
    const text = String(payload.text || "").trim().slice(0, 200);
    if (!text) return;
    io.emit("chat:message", {
      type: "admin",
      text,
      timestamp: Date.now(),
    });
  });

  socket.on("admin:grantClassmate", (payload = {}) => {
    const player = players.get(socket.id);
    if (!player || player.username !== ADMIN_USERNAME) {
      return;
    }
    const npcName = sanitizeGrantableCharacterName(payload.npcName);
    if (!npcName) {
      return;
    }
    const variantId = sanitizeVariantId(payload.variantId);
    io.emit("admin:grantClassmate", {
      npcName,
      variantId,
      grantedBy: player.username,
      timestamp: Date.now(),
    });
  });

  socket.on("disconnect", () => {
    console.log(`[socket] disconnected ${socket.id}`);
    players.delete(socket.id);
    socket.broadcast.emit("player:left", {
      socketId: socket.id,
    });
    emitPlayerList();
  });
});

server.listen(PORT, () => {
  console.log(`Catch a Classmate multiplayer server listening on port ${PORT}`);
});
