const chapterTitleEl = document.getElementById("chapterTitle");
const chapterStoryEl = document.getElementById("chapterStory");
const objectiveTextEl = document.getElementById("objectiveText");
const goalBarEl = document.getElementById("goalBar");
const hpValueEl = document.getElementById("hpValue");
const scoreValueEl = document.getElementById("scoreValue");
const chapterValueEl = document.getElementById("chapterValue");
const menuScreenEl = document.getElementById("menuScreen");
const menuNavEl = document.querySelector(".menu-nav");
const menuMainEl = document.querySelector(".menu-main");
const menuTabButtonEls = Array.from(document.querySelectorAll("[data-menu-tab]"));
const menuPanelEls = Array.from(document.querySelectorAll(".menu-panel"));
const playPanelEl = document.getElementById("playPanel");
const saveSlotButtonEls = Array.from(document.querySelectorAll(".save-slot"));
const selectedSlotLabelEl = document.getElementById("selectedSlotLabel");
const loadSlotBtnEl = document.getElementById("loadSlotBtn");
const playValidationMessageEl = document.getElementById("playValidationMessage");
const avatarPreviewCanvasEl = document.getElementById("avatarPreviewCanvas");
const settingsShadowsToggleEl = document.getElementById("settingsShadowsToggle");
const settingsInvertMousepadToggleEl = document.getElementById("settingsInvertMousepadToggle");
const settingsQualitySelectEl = document.getElementById("settingsQualitySelect");
const settingsSensitivityRangeEl = document.getElementById("settingsSensitivityRange");
const settingsSensitivityValueEl = document.getElementById("settingsSensitivityValue");
const customizerEl = document.getElementById("customizer");
const skinToneSelectEl = document.getElementById("skinToneSelect");
const faceSelectEl = document.getElementById("faceSelect");
const leoFaceSelectEl = document.getElementById("leoFaceSelect");
const leoSmileRangeEl = document.getElementById("leoSmileRange");
const leoSmileValueEl = document.getElementById("leoSmileValue");
const hairStyleSelectEl = document.getElementById("hairStyleSelect");
const hairColorInputEl = document.getElementById("hairColorInput");
const shirtColorInputEl = document.getElementById("shirtColorInput");
const pantsColorInputEl = document.getElementById("pantsColorInput");
const nametagInputEl = document.getElementById("nametagInput");
const usernameFieldEl = document.getElementById("usernameField");
const randomizeAvatarBtnEl = document.getElementById("randomizeAvatarBtn");
const moneyHudEl = document.getElementById("moneyHud");
const interactionPromptEl = document.getElementById("interactionPrompt");
const mobileControlsEl = document.getElementById("mobileControls");
const mobileJoystickEl = document.getElementById("mobileJoystick");
const mobileJoystickThumbEl = document.getElementById("mobileJoystickThumb");
const mobileCollectBtnEl = document.getElementById("mobileCollectBtn");
const spawnNotificationEl = document.getElementById("spawnNotification");
const offlineIncomeOverlayEl = document.getElementById("offlineIncomeOverlay");
const offlineIncomeTitleEl = document.getElementById("offlineIncomeTitle");
const offlineIncomeTextEl = document.getElementById("offlineIncomeText");
const offlineIncomeCloseBtnEl = document.getElementById("offlineIncomeCloseBtn");
const rebirthFlashEl = document.getElementById("rebirthFlashOverlay");
const indexDockEl = document.getElementById("indexDock");
const indexOpenBtnEl = document.getElementById("indexOpenBtn");
const indexOverlayEl = document.getElementById("indexOverlay");
const indexCloseBtnEl = document.getElementById("indexCloseBtn");
const indexProgressTextEl = document.getElementById("indexProgressText");
const indexBonusTextEl = document.getElementById("indexBonusText");
const indexGridEl = document.getElementById("indexGrid");
const rebirthDockEl = document.getElementById("rebirthDock");
const rebirthOpenBtnEl = document.getElementById("rebirthOpenBtn");
const rebirthOverlayEl = document.getElementById("rebirthOverlay");
const rebirthTitleEl = document.getElementById("rebirthTitle");
const rebirthCloseBtnEl = document.getElementById("rebirthCloseBtn");
const rebirthBoostInfoEl = document.getElementById("rebirthBoostInfo");
const rebirthOscarCardEl = document.getElementById("rebirthOscarCard");
const rebirthChristianCardEl = document.getElementById("rebirthChristianCard");
const rebirthRequirementCardEls = [rebirthOscarCardEl, rebirthChristianCardEl];
const rebirthOscarNameEl = rebirthOscarCardEl ? rebirthOscarCardEl.querySelector(".rebirth-student-name") : null;
const rebirthChristianNameEl = rebirthChristianCardEl ? rebirthChristianCardEl.querySelector(".rebirth-student-name") : null;
const rebirthMoneyRequirementEl = document.getElementById("rebirthMoneyRequirement");
const rebirthOscarProgressEl = document.getElementById("rebirthOscarProgress");
const rebirthChristianProgressEl = document.getElementById("rebirthChristianProgress");
const rebirthMoneyProgressEl = document.getElementById("rebirthMoneyProgress");
const rebirthNextBoostEl = document.getElementById("rebirthNextBoost");
const rebirthCountLabelEl = document.getElementById("rebirthCountLabel");
const rebirthConfirmBtnEl = document.getElementById("rebirthConfirmBtn");
const sellConfirmOverlayEl = document.getElementById("sellConfirmOverlay");
const sellConfirmTitleEl = document.getElementById("sellConfirmTitle");
const sellConfirmTextEl = document.getElementById("sellConfirmText");
const sellConfirmYesBtnEl = document.getElementById("sellConfirmYes");
const sellConfirmNoBtnEl = document.getElementById("sellConfirmNo");
const adonisShopOverlayEl = document.getElementById("adonisShopOverlay");
const adonisShopCloseBtnEl = document.getElementById("adonisShopCloseBtn");
const adonisShopTitleEl = document.getElementById("adonisShopTitle");
const adonisShopSubtitleEl = document.querySelector(".adonis-shop-subtitle");
const adonisShopListEl = document.getElementById("adonisShopList");
const adonisShopMessageEl = document.getElementById("adonisShopMessage");
const jacobBlockOverlayEl = document.getElementById("jacobBlockOverlay");
const usernameRequiredOverlayEl = document.getElementById("usernameRequiredOverlay");
const usernameRequiredInputEl = document.getElementById("usernameRequiredInput");
const usernameRequiredConfirmBtnEl = document.getElementById("usernameRequiredConfirmBtn");
const usernameRequiredMessageEl = document.getElementById("usernameRequiredMessage");
const secondaryTabOverlayEl = document.getElementById("secondaryTabOverlay");
const buildStampEl = document.getElementById("buildStamp");
const canvas = document.getElementById("gameCanvas");

if (typeof window.THREE === "undefined") {
  window.alert("Three.js failed to load. Open this page from the StoryRunner3D folder.");
  throw new Error("Three.js is not available.");
}

const MAP_LAYOUT_SCALE = 0.85;
const MAP_HALF_WIDTH = 56 * MAP_LAYOUT_SCALE;
const MAP_HALF_LENGTH = 128 * MAP_LAYOUT_SCALE;
const MAP_SCALE_XZ = 2;
const WORLD_GROUND_SURFACE_Y = 0.18 * MAP_SCALE_XZ;
const STREET_PATH_SURFACE_Y = (0.18 + 0.12) * MAP_SCALE_XZ;
const SECOND_FLOOR_BASE_ENTRY_TELEPORT_DISTANCE = 1.8;
const WORLD_BOUND_X = MAP_HALF_WIDTH * MAP_SCALE_XZ - 4;
const WORLD_BOUND_Z = MAP_HALF_LENGTH * MAP_SCALE_XZ - 4;
const SPAWN_X = 0;
const SPAWN_Z = (-MAP_HALF_LENGTH + 22) * MAP_SCALE_XZ;
const WALK_SPEED = 16;
const PLAYER_SPEED_MULTIPLIER = 2;
const PLAYER_RUN_ANIM_SPEED_MULTIPLIER = 2;
const GROUND_ACCEL = 130;
const GROUND_DECEL = 90;
const AIR_ACCEL = 34;
const GRAVITY = 196.2;
const JUMP_POWER = 50;
const MIN_PITCH = -1.25;
const MAX_PITCH = 0.55;
const CAMERA_DISTANCE = 19;
const MIN_FOV = 36;
const MAX_FOV = 108;
const DEFAULT_FOV = 82;
const CAMERA_COLLISION_RADIUS = 0.42;
const CAMERA_COLLISION_PADDING = 0.14;
const ARROW_LOOK_SPEED_X = 260;
const ARROW_LOOK_SPEED_Y = 220;
const MOBILE_TOUCH_ENABLED = navigator.maxTouchPoints > 0;
const MOBILE_JOYSTICK_DEADZONE = 0.2;
const MOBILE_JOYSTICK_MAX_TRAVEL_PX = 38;
const MULTIPLAYER_ENABLED = false;
const TOUCH_LOOK_DEADZONE_PX = 0.65;
const WHEEL_LOOK_DEADZONE = 5.5;
const TORSO_BASE_Y = 2.8;
const HEAD_BASE_Y = 4.42;
const DEFAULT_SKIN_TONE = "#ffd791";
const DEFAULT_FACE = "smile";
const DEFAULT_HAIR_STYLE = "swoop";
const DEFAULT_HAIR_COLOR = "#2b1a10";
const DEFAULT_SHIRT_COLOR = "#2f65df";
const DEFAULT_PANTS_COLOR = "#3a9f4d";
const DEFAULT_NAMETAG = "Player";
const SKIN_TONE_OPTIONS = ["#ffd791", "#e6b68e", "#c08a64", "#8b5a3b", "#5f3a2c"];
const FACE_OPTIONS = ["smile", "grin", "neutral", "wink"];
const HAIR_STYLE_OPTIONS = ["swoop", "curly", "mohawk", "spikes", "none"];
const HAIR_COLOR_OPTIONS = ["#2b1a10", "#5b3a1d", "#181818", "#b98d5d", "#9f2121", "#f0d6a3"];
const SHIRT_COLOR_OPTIONS = ["#2f65df", "#d84f4f", "#f2aa28", "#222831", "#e7e7e7", "#0d8a76"];
const PANTS_COLOR_OPTIONS = ["#3a9f4d", "#3d5a80", "#5f6d7a", "#191970", "#4b3621", "#6a4c93"];
const PLAYER_COLLIDER_RADIUS = 0.72;
const PLAYER_COLLIDER_HEIGHT = 5.05;
const PLAYER_STEP_HEIGHT = 0.95;
const COLLISION_EPSILON = 0.0008;
const SETTINGS_STORAGE_KEY = "steal_a_student_settings_v1";
const SAVE_SLOTS_STORAGE_KEY = "steal_a_student_save_slots_v1";
const SAVE_SLOTS_BACKUP_STORAGE_KEY = "steal_a_student_save_slots_backup_v1";
const LEGACY_SAVE_SLOTS_ARCHIVE_KEY = "steal_a_student_legacy_slots_archive_v2";
const PRIMARY_TAB_LOCK_STORAGE_KEY = "catch_a_classmate_primary_tab_lock_v1";
const PRIMARY_PROFILE_SLOT_INDEX = 0;
const USERNAME_HIGHLIGHT_DURATION_MS = 1400;
const PRIMARY_TAB_LOCK_HEARTBEAT_INTERVAL_MS = 1000;
const PRIMARY_TAB_LOCK_STALE_MS = 3500;
const QUALITY_LEVELS = [1, 2, 3, 4];
const LEO_NAME = "Leo";
const LEO_SKIN_TONE = "#efc4a6";
const LEO_SHIRT_COLOR = "#ffffff";
const LEO_PANTS_COLOR = "#2f65df";
const LEO_HAIR_COLOR = "#8b673f";
const LEO_HAIR_HIGHLIGHT = "#b98b56";
const LEO_SUIT_COLOR = "#1f2f5c";
const LEO_TIE_COLOR = "#12203f";
const LEO_EYE_COLOR = "#4c3528";
const LEO_REFERENCE_FACE_IMAGE_PATH = "assets/leo-face-ref.png";
const LEO_PATROL_SPEED = 7.4;
const LEO_WALK_TO_PAD_SPEED = 8.6;
const LEO_SCALE = 1.5;
const LEO_DEFAULT_LANE_X = 0;
const LEO_DEFAULT_START_Z = -172;
const LEO_DEFAULT_MIN_Z = -186;
const LEO_DEFAULT_MAX_Z = 186;
const FLETCHER_NAME = "Fletcher";
const PAUSED_BALD_LEO_SKIN_TONE = "#ffe4cc";
const FLETCHER_HAIR_COLOR = "#111111";
const FLETCHER_HAIR_HIGHLIGHT = "#252525";
const FLETCHER_SPOT_COLOR = "#8a5a34";
const ESHDOG_MARLEY_NAME = "Eshdog Marley";
const ESHDOG_MARLEY_SKIN_TONE = "#8a5a3a";
const ESHDOG_MARLEY_HAIR_COLOR = "#2a1a12";
const ESHDOG_MARLEY_HAIR_HIGHLIGHT = "#4a2f22";
const ESHDOG_MARLEY_PANTS_COLOR = "#111111";
const ESHDOG_MARLEY_HAT_COLOR = "#ccb287";
const ESHDOG_MARLEY_FOOT_BOTTOM_COLOR = "#0090E0";
const ZIGGY_NAME = "Ziggy";
const ZIGGY_SKIN_TONE = "#e8bc98";
const ZIGGY_HAIR_COLOR = "#5f3f28";
const ZIGGY_HAIR_HIGHLIGHT = "#8a6244";
const ZIGGY_LANE_X = -6.8;
const ZIGGY_START_Z = -128;
const VINCE_NAME = "Vince";
const VINCE_LANE_X = -10.2;
const VINCE_START_Z = -128;
const VINCE_SCALE_MULTIPLIER = 0.75;
const VINCE_FUR_COLOR = "#4f2718";
const VINCE_FUR_HIGHLIGHT = "#6a3722";
const VINCE_FACE_COLOR = "#d5bf9d";
const VINCE_BELLY_COLOR = "#cdb188";
const VINCE_INNER_EAR_COLOR = "#cfb294";
const VINCE_2_NAME = "Vince 2";
const VINCE_2_LANE_X = -13.6;
const VINCE_2_START_Z = -128;
const VINCE_2_SCALE_MULTIPLIER = 0.93;
const VINCE_2_FUR_COLOR = "#a55a18";
const VINCE_2_FUR_HIGHLIGHT = "#cc7a2a";
const VINCE_2_FACE_COLOR = "#f3e7af";
const VINCE_2_INNER_EAR_COLOR = "#f2ddb0";
const HENDRIX_NAME = "Hendrix";
const HENDRIX_SKIN_TONE = "#d9a885";
const HENDRIX_HAIR_COLOR = "#c06a43";
const HENDRIX_HAIR_HIGHLIGHT = "#e7a16d";
const HENDRIX_LANE_X = -3.4;
const HENDRIX_START_Z = -128;
const ADONIS_NAME = "Adonis";
const ADONIS_SKIN_TONE = "#e4b08f";
const ADONIS_HAIR_COLOR = "#2f1d10";
const ADONIS_HAIR_HIGHLIGHT = "#4a2d18";
const ADONIS_LANE_X = -3.4;
const ADONIS_START_Z = -128;
const ADONIS_SCALE_MULTIPLIER = 1.2;
const ADONIS2_NAME = "Adonis 2";
const ADONIS2_HAIR_COLOR = "#1a1008";
const ADONIS2_HAIR_HIGHLIGHT = "#1d1209";
const ADONIS2_LANE_X = -6.8;
const ADONIS2_START_Z = -128;
const NATE_NAME = "Nate";
const NATE_SKIN_TONE = "#f4ccb0";
const NATE_HAIR_COLOR = "#d9b56f";
const NATE_HAIR_HIGHLIGHT = "#f2d79e";
const NATE_HAIRLINE_Y_OFFSET = 0.14;
const NATE_LANE_X = 3.4;
const NATE_START_Z = -128;
const LEDGER_NAME = "Ledger";
const LEDGER_HAIR_COLOR = "#6b4424";
const LEDGER_HAIR_HIGHLIGHT = "#8a5a34";
const LEDGER_LANE_X = 6.8;
const LEDGER_START_Z = -128;
const LEDGER_SCALE_MULTIPLIER = 0.925;
const LEDGER2_NAME = "Ledger 2";
const LEDGER2_LANE_X = 17;
const LEDGER2_START_Z = -128;
const LEDGER2_SUIT_COLOR = "#9f49c4";
const LEDGER2_FACE_SKIN = "#f2c9a7";
const LEDGER2_SCALE_MULTIPLIER = 1;
const LEDGER2_ENABLED = false;
const BEAU_NAME = "Beau";
const BEAU_HAIR_COLOR = "#d7b64d";
const BEAU_HAIR_HIGHLIGHT = "#efcf73";
const BEAU_ROOT_COLOR = "#0b0b0b";
const BEAU_LANE_X = 3.4;
const BEAU_START_Z = -128;
const BEAU_SCALE_MULTIPLIER = 1.025;
const OSCAR_NAME = "Oscar";
const OSCAR_SKIN_TONE = "#f2b9a8";
const OSCAR_HAIR_COLOR = "#b28e57";
const OSCAR_HAIR_HIGHLIGHT = "#d5b17a";
const OSCAR_LANE_X = 10.2;
const OSCAR_START_Z = -128;
const OSCAR_SCALE_MULTIPLIER = 1.05;
const CHARLIE_NAME = "Charlie";
const CHARLIE_SKIN_TONE = "#efc3a2";
const CHARLIE_HAIR_COLOR = "#cdb068";
const CHARLIE_HAIR_HIGHLIGHT = "#efd894";
const CHARLIE_LANE_X = 10.2;
const CHARLIE_START_Z = -128;
const CHARLIE_2_NAME = "Charlie 2";
const CHARLIE_2_LANE_X = 6.8;
const CHARLIE_2_START_Z = -128;
const CHRISTIAN_NAME = "Christian";
const CHRISTIAN_HAIR_COLOR = "#4d3220";
const CHRISTIAN_HAIR_HIGHLIGHT = "#6c4a31";
const CHRISTIAN_LANE_X = 13.6;
const CHRISTIAN_START_Z = -128;
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
const NPC_RARITY_BY_NAME = Object.freeze({
  [LEO_NAME]: RARITY_COMMON,
  [FLETCHER_NAME]: RARITY_SECRET,
  [ESHDOG_MARLEY_NAME]: RARITY_SECRET,
  [ZIGGY_NAME]: RARITY_UNCOMMON,
  [VINCE_NAME]: RARITY_MYTHIC,
  [HENDRIX_NAME]: RARITY_RARE,
  [ADONIS_NAME]: RARITY_UNCOMMON,
  [NATE_NAME]: RARITY_RARE,
  [LEDGER_NAME]: RARITY_EPIC,
  [BEAU_NAME]: RARITY_LEGENDARY,
  [CHARLIE_NAME]: RARITY_EPIC,
  [CHARLIE_2_NAME]: RARITY_LEGENDARY,
  [OSCAR_NAME]: RARITY_LEGENDARY,
  [CHRISTIAN_NAME]: RARITY_MYTHIC,
});
const NPC_BASE_ECONOMY_BY_NAME = Object.freeze({
  [LEO_NAME]: Object.freeze({ cost: 250, moneyPerSecond: 10 }),
  [FLETCHER_NAME]: Object.freeze({ cost: 25000000, moneyPerSecond: 15000 }),
  [ESHDOG_MARLEY_NAME]: Object.freeze({ cost: 25000000, moneyPerSecond: 15000 }),
  [ZIGGY_NAME]: Object.freeze({ cost: 1500, moneyPerSecond: 30 }),
  [NATE_NAME]: Object.freeze({ cost: 7000, moneyPerSecond: 70 }),
  [HENDRIX_NAME]: Object.freeze({ cost: 9000, moneyPerSecond: 90 }),
  [LEDGER_NAME]: Object.freeze({ cost: 44000, moneyPerSecond: 220 }),
  [CHARLIE_NAME]: Object.freeze({ cost: 38000, moneyPerSecond: 190 }),
  [OSCAR_NAME]: Object.freeze({ cost: 232000, moneyPerSecond: 580 }),
  [BEAU_NAME]: Object.freeze({ cost: 256000, moneyPerSecond: 640 }),
  [CHRISTIAN_NAME]: Object.freeze({ cost: 1520000, moneyPerSecond: 1900 }),
  [VINCE_NAME]: Object.freeze({ cost: 1720000, moneyPerSecond: 2150 }),
});
const ADMIN_GRANTABLE_CHARACTER_NAMES = Object.freeze([
  LEO_NAME,
  ZIGGY_NAME,
  NATE_NAME,
  HENDRIX_NAME,
  CHARLIE_NAME,
  LEDGER_NAME,
  OSCAR_NAME,
  BEAU_NAME,
  CHRISTIAN_NAME,
  VINCE_NAME,
  FLETCHER_NAME,
  ESHDOG_MARLEY_NAME,
]);
const ADMIN_GRANTABLE_VARIANT_IDS = Object.freeze([
  VARIANT_NORMAL,
  VARIANT_SHINY,
  VARIANT_GOLDEN,
  VARIANT_DIAMOND,
  VARIANT_RAINBOW,
]);
const RARITY_ECONOMY_BY_TIER = Object.freeze({
  [RARITY_COMMON]: Object.freeze({ cost: 25, moneyPerSecond: 1 }),
  [RARITY_UNCOMMON]: Object.freeze({ cost: 100, moneyPerSecond: 3 }),
  [RARITY_RARE]: Object.freeze({ cost: 400, moneyPerSecond: 8 }),
  [RARITY_EPIC]: Object.freeze({ cost: 1500, moneyPerSecond: 20 }),
  [RARITY_LEGENDARY]: Object.freeze({ cost: 6000, moneyPerSecond: 60 }),
  [RARITY_MYTHIC]: Object.freeze({ cost: 25000, moneyPerSecond: 200 }),
  [RARITY_SECRET]: Object.freeze({ cost: 25000000, moneyPerSecond: 15000 }),
});
const NPC_VARIANT_DEFINITIONS = Object.freeze({
  [VARIANT_NORMAL]: Object.freeze({
    id: VARIANT_NORMAL,
    label: "Normal",
    chance: 80,
    costMultiplier: 1,
    moneyMultiplier: 1,
    tintColor: "#ffffff",
    tintStrength: 0,
    emissiveColor: "#000000",
    emissiveIntensity: 0,
    glowColor: "#ffffff",
    glowOpacity: 0,
    sparkleCount: 0,
    sparkleScale: 0,
    sparkleOpacity: 0,
  }),
  [VARIANT_SHINY]: Object.freeze({
    id: VARIANT_SHINY,
    label: "Shiny",
    chance: 12,
    costMultiplier: 1.5,
    moneyMultiplier: 2,
    tintColor: "#f8fdff",
    tintStrength: 0.08,
    emissiveColor: "#ffffff",
    emissiveIntensity: 0.08,
    glowColor: "#ffffff",
    glowOpacity: 0.14,
    sparkleCount: 2,
    sparkleScale: 0.34,
    sparkleOpacity: 0.48,
  }),
  [VARIANT_GOLDEN]: Object.freeze({
    id: VARIANT_GOLDEN,
    label: "Golden",
    chance: 5,
    costMultiplier: 4,
    moneyMultiplier: 3,
    tintColor: "#f6c64e",
    tintStrength: 0.22,
    emissiveColor: "#f2b434",
    emissiveIntensity: 0.18,
    glowColor: "#ffd96c",
    glowOpacity: 0.22,
    sparkleCount: 3,
    sparkleScale: 0.4,
    sparkleOpacity: 0.56,
  }),
  [VARIANT_DIAMOND]: Object.freeze({
    id: VARIANT_DIAMOND,
    label: "Diamond",
    chance: 2,
    costMultiplier: 8,
    moneyMultiplier: 5,
    tintColor: "#85ebff",
    tintStrength: 0.2,
    emissiveColor: "#6fe2ff",
    emissiveIntensity: 0.2,
    glowColor: "#78e6ff",
    glowOpacity: 0.24,
    sparkleCount: 3,
    sparkleScale: 0.42,
    sparkleOpacity: 0.58,
  }),
  [VARIANT_RAINBOW]: Object.freeze({
    id: VARIANT_RAINBOW,
    label: "Rainbow",
    chance: 1,
    costMultiplier: 15,
    moneyMultiplier: 10,
    tintColor: "#ffffff",
    tintStrength: 0.26,
    emissiveColor: "#ffffff",
    emissiveIntensity: 0.22,
    glowColor: "#ffffff",
    glowOpacity: 0.26,
    sparkleCount: 4,
    sparkleScale: 0.46,
    sparkleOpacity: 0.62,
  }),
});
const NPC_VARIANT_ROLL_ORDER = Object.freeze([
  VARIANT_NORMAL,
  VARIANT_SHINY,
  VARIANT_GOLDEN,
  VARIANT_DIAMOND,
  VARIANT_RAINBOW,
]);
const INDEX_TRACKED_CHARACTER_NAMES = Object.freeze([
  LEO_NAME,
  ZIGGY_NAME,
  NATE_NAME,
  HENDRIX_NAME,
  CHARLIE_NAME,
  LEDGER_NAME,
  OSCAR_NAME,
  BEAU_NAME,
  CHRISTIAN_NAME,
  VINCE_NAME,
]);
const INDEX_COMPLETION_VARIANT_IDS = Object.freeze([...NPC_VARIANT_ROLL_ORDER]);
const INDEX_CHARACTER_COMPLETION_BONUS = 0.1;
const INDEX_FULL_COMPLETION_BONUS = 0.5;
const INDEX_TOTAL_COMBINATIONS = INDEX_TRACKED_CHARACTER_NAMES.length * INDEX_COMPLETION_VARIANT_IDS.length;
const NPC_RARITY_SPAWN_WEIGHTS = Object.freeze([
  Object.freeze({ rarity: RARITY_COMMON, chance: 49 }),
  Object.freeze({ rarity: RARITY_UNCOMMON, chance: 29 }),
  Object.freeze({ rarity: RARITY_RARE, chance: 15 }),
  Object.freeze({ rarity: RARITY_EPIC, chance: 5 }),
  Object.freeze({ rarity: RARITY_LEGENDARY, chance: 1.5 }),
  Object.freeze({ rarity: RARITY_MYTHIC, chance: 0.5 }),
  Object.freeze({ rarity: RARITY_SECRET, chance: 0.2 }),
]);
const GUARANTEED_SPAWN_TIMER_CONFIG = Object.freeze({
  mythic: Object.freeze({
    id: "mythic",
    rarity: RARITY_MYTHIC,
    label: "MYTHIC SPAWN IN",
    durationSeconds: 15 * 60,
    message: "A Mythic has appeared!",
    color: "#ff7adf",
    glowColor: "#b145ff",
    spawnOffsetZ: 18,
  }),
  legendary: Object.freeze({
    id: "legendary",
    rarity: RARITY_LEGENDARY,
    label: "LEGENDARY SPAWN IN",
    durationSeconds: 5 * 60,
    message: "A Legendary has appeared!",
    color: "#ffd86a",
    glowColor: "#ffb347",
    spawnOffsetZ: 9,
  }),
});
const GUARANTEED_SPAWN_TIMER_ORDER = Object.freeze(["mythic", "legendary"]);
const SPAWN_TIMER_UI_TEXT = Object.freeze({
  mythicPrefix: "MYTHIC SPAWN IN",
  legendaryPrefix: "LEGENDARY SPAWN IN",
});
const SPAWN_TIMER_WORLD_OFFSET = Object.freeze({
  x: 0,
  y: 5.3,
  z: 1.05,
});
const SPAWN_TIMER_PANEL_SCALE = 4.2;
const SPAWN_NOTIFICATION_DURATION = 3.2;
const NPC_STREAM_ENABLED = true;
const NPC_SPAWNING_PAUSED = false;
const NPC_STREAM_TARGET_COUNT = 16;
const NPC_STREAM_SPAWN_INTERVAL = 0.55;
const NPC_STREAM_START_Z = (-MAP_HALF_LENGTH + 0.08) * MAP_SCALE_XZ;
const NPC_STREAM_END_Z = (MAP_HALF_LENGTH - 0.08) * MAP_SCALE_XZ;
const NPC_STREAM_LANE_X = 0;
const NPC_STREAM_X_JITTER = 0;
const NPC_STREAM_INITIAL_GAP_Z = 26;
const NPC_STREAM_MIN_GAP_Z = 26;
const NATE_HAIR_VARIANTS = [
  {
    id: "nate-photo-curls",
    style: "photo_curls",
    baseColor: NATE_HAIR_COLOR,
    highlightColor: NATE_HAIR_HIGHLIGHT,
    yOffset: NATE_HAIRLINE_Y_OFFSET,
    laneOffset: 0,
  },
];
const NPC_SHOWCASE_MODE = false;
const NPC_SHOWCASE_BEHIND_SPAWN_OFFSET_Z = 22;
const NPC_SHOWCASE_SPACING_X = 8.2;
const STARTING_MONEY = 250;
const MAX_CURRENCY_VALUE = Number.MAX_SAFE_INTEGER;
const GAME_VERSION = "1.1.0";
const GAME_VERSION_STORAGE_KEY = "catchAClassmateVersion";
const ONE_TIME_PROFILE_TOPUP_STORAGE_KEY = "catchAClassmateOneTimeProfileTopups";
const ONE_TIME_PROFILE_TOPUPS = [];
const ONE_TIME_PROFILE_REBIRTH_GRANT_STORAGE_KEY = "catchAClassmateOneTimeProfileRebirthGrants";
const ONE_TIME_PROFILE_REBIRTH_GRANTS = [
  Object.freeze({
    username: "dddd",
    rebirthCount: 5,
  }),
  Object.freeze({
    username: "676",
    rebirthCount: 7,
  }),
];
const ONE_TIME_PROFILE_MAXED_BASE_GRANT_STORAGE_KEY = "catchAClassmateOneTimeProfileMaxedBaseGrants";
const ONE_TIME_PROFILE_MAXED_BASE_GRANTS = [
  Object.freeze({
    username: "Adonis",
    rebirthCount: 7,
    primaryNpcName: ESHDOG_MARLEY_NAME,
    secondaryNpcName: FLETCHER_NAME,
  }),
];
const ONE_TIME_PROFILE_CUSTOM_CLASSMATE_GRANT_STORAGE_KEY = "catchAClassmateOneTimeCustomClassmateGrants";
const ONE_TIME_PROFILE_CUSTOM_CLASSMATE_GRANTS = [
  Object.freeze({
    username: "leo lad",
    classmates: [{ npcName: FLETCHER_NAME, variantId: VARIANT_NORMAL, padIndex: 0 }],
  }),
  Object.freeze({
    username: "676",
    classmates: [
      { npcName: "Eshdog Marley", variantId: "normal", padIndex: 0 },
      { npcName: "Eshdog Marley", variantId: "normal", padIndex: 1 },
      { npcName: "Eshdog Marley", variantId: "normal", padIndex: 2 },
      { npcName: "Fletcher", variantId: "normal", padIndex: 3 },
      { npcName: "Eshdog Marley", variantId: "shiny", padIndex: 4 },
    ],
  }),
];
const SHOP_ITEM_SPEED_COIL = "speed_coil";
const SHOP_ITEM_GRAVITY_COIL = "gravity_coil";
const SHOP_ITEM_DUAL_COIL = "dual_coil";
const ADONIS_SHOP_STAND_ID = "spawn_side_stand";
const ADONIS_SHOP_INTERACT_DISTANCE = 8.4;
const ADONIS_SHOP_PROMPT_TEXT = "Press E to talk to Adonis";
const ADONIS_SHOPKEEPER_AVATAR_SCALE = 2.04;
const ADONIS_SHOP_STAND_SCALE = 1.32;
const ADONIS_SHOP_STAND_HEIGHT_SCALE = 1.52;
const ADONIS_SHOPKEEPER_LOCAL_OFFSET = Object.freeze({
  x: (PLAYER_COLLIDER_HEIGHT * 0.5) * 0.18,
  y: 0.16,
  z: 0,
});
const ADONIS_SHOP_UI_TEXT = Object.freeze({
  title: "Adonis's Shop",
  subtitle: "Permanent unlocks for this save slot.",
  notEnoughMoney: "Not enough money",
  alreadyOwned: "You already own this",
  lockedPrefix: "Unlocks after ",
  purchasedPrefix: "Purchased ",
});
const ADONIS_SHOP_ITEMS = Object.freeze({
  [SHOP_ITEM_SPEED_COIL]: Object.freeze({
    id: SHOP_ITEM_SPEED_COIL,
    name: "Speed Coil",
    price: 15000,
    description: "Run faster around the map.",
    buttonText: "Buy Speed Coil",
    requiredRebirthCount: 1,
    effects: Object.freeze({
      speedMultiplier: 1.45,
      jumpMultiplier: 1,
      gravityMultiplier: 1,
    }),
  }),
  [SHOP_ITEM_GRAVITY_COIL]: Object.freeze({
    id: SHOP_ITEM_GRAVITY_COIL,
    name: "Gravity Coil",
    price: 30000,
    description: "Jump higher with lighter gravity.",
    buttonText: "Buy Gravity Coil",
    requiredRebirthCount: 2,
    effects: Object.freeze({
      speedMultiplier: 1,
      jumpMultiplier: 1.26,
      gravityMultiplier: 0.7,
    }),
  }),
  [SHOP_ITEM_DUAL_COIL]: Object.freeze({
    id: SHOP_ITEM_DUAL_COIL,
    name: "Dual Coil",
    price: 75000,
    description: "Combines speed and gravity effects.",
    buttonText: "Buy Dual Coil",
    requiredRebirthCount: 3,
    effects: Object.freeze({
      speedMultiplier: 1.45,
      jumpMultiplier: 1.26,
      gravityMultiplier: 0.7,
    }),
  }),
});
const ADONIS_SHOP_ITEM_ORDER = Object.freeze([
  SHOP_ITEM_SPEED_COIL,
  SHOP_ITEM_GRAVITY_COIL,
  SHOP_ITEM_DUAL_COIL,
]);
const LEO_RARITY = NPC_RARITY_BY_NAME[LEO_NAME] || RARITY_COMMON;
const LEO_ECONOMY = NPC_BASE_ECONOMY_BY_NAME[LEO_NAME] || RARITY_ECONOMY_BY_TIER[LEO_RARITY] || RARITY_ECONOMY_BY_TIER[RARITY_COMMON];
const LEO_COST = LEO_ECONOMY.cost;
const LEO_INTERACTION_DISTANCE = 9;
const LEO_HOLD_TO_BUY_SECONDS = 1;
const PAD_INCOME_PER_SECOND = LEO_ECONOMY.moneyPerSecond;
const LEO_PAD_REACH_DISTANCE = 0.9;
const LEO_STATE_FOR_SALE = "forSale";
const LEO_STATE_WALK_TO_PAD = "walkToPad";
const LEO_STATE_GENERATING = "generating";
const NPC_BUY_INTERACTION_DISTANCE = 9;
const NPC_BUY_HOLD_SECONDS = 1;
const NPC_BUY_WALK_TO_PAD_SPEED = 8.6;
const NPC_SELL_INTERACTION_DISTANCE = 8.6;
const NPC_SELL_HOLD_SECONDS = 1;
const NPC_INFO_TAG_SCALE = 1.92;
const NPC_INFO_TAG_Y = 7.24;
const PAD_MONEY_TAG_SCALE = 1.24;
const PAD_MONEY_TAG_Y = 2.22;
const PAD_STAND_CLEARANCE_Y = 0.02;
const PAD_OFFSET_FACTOR = 1.9;
const PAD_DISPLAY_FACING_YAW = Math.PI * 0.5; // Fallback only
const SECOND_FLOOR_UNLOCK_REBIRTH_COUNT = 2;
const SECOND_FLOOR_TOTAL_PAD_SLOTS = 10;
const SECOND_FLOOR_PAD_ROWS = 5;
const SECOND_FLOOR_PAD_BONUS_BY_REBIRTH_COUNT = Object.freeze([0, 0, 1, 2, 3, 4, 5, 6]);
const SECOND_FLOOR_UNLOCK_NOTIFICATION_TEXT = "NEW FLOOR UNLOCKED";
const FLETCHER_SNITCH_ALERT_TEXT = "Fletcher snitched! Someone is in your base!";
const ESHDOG_FIGHTER_DURATION_SECONDS = 5;
const ESHDOG_FIGHTER_SPEED_MULTIPLIER = 0.3;
const REBIRTH_STAGE_CONFIG = Object.freeze([
  Object.freeze({
    id: 1,
    title: "Detention",
    requiredNpcAName: NATE_NAME,
    requiredNpcACount: 1,
    requiredNpcBName: "",
    requiredNpcBCount: 0,
    requiredMoney: 250000,
    nextMultiplier: 2,
    unlockedShopItemId: SHOP_ITEM_SPEED_COIL,
    padSlotBonus: 0,
    baseLockBonusSeconds: 10,
    legendaryTimerDurationSeconds: 10 * 60,
    mythicTimerDurationSeconds: 25 * 60,
    rainbowWeightMultiplier: 1,
  }),
  Object.freeze({
    id: 2,
    title: "Hallway Monitor",
    requiredNpcAName: HENDRIX_NAME,
    requiredNpcACount: 1,
    requiredNpcBName: CHARLIE_NAME,
    requiredNpcBCount: 1,
    requiredMoney: 2000000,
    nextMultiplier: 3,
    unlockedShopItemId: SHOP_ITEM_GRAVITY_COIL,
    padSlotBonus: 0,
    baseLockBonusSeconds: 20,
    legendaryTimerDurationSeconds: 10 * 60,
    mythicTimerDurationSeconds: 25 * 60,
    rainbowWeightMultiplier: 1,
  }),
  Object.freeze({
    id: 3,
    title: "Class President",
    requiredNpcAName: LEDGER_NAME,
    requiredNpcACount: 1,
    requiredNpcBName: OSCAR_NAME,
    requiredNpcBCount: 1,
    requiredMoney: 10000000,
    nextMultiplier: 4,
    unlockedShopItemId: SHOP_ITEM_DUAL_COIL,
    padSlotBonus: 0,
    baseLockBonusSeconds: 30,
    legendaryTimerDurationSeconds: 10 * 60,
    mythicTimerDurationSeconds: 25 * 60,
    rainbowWeightMultiplier: 1,
  }),
  Object.freeze({
    id: 4,
    title: "Principal",
    requiredNpcAName: BEAU_NAME,
    requiredNpcACount: 1,
    requiredNpcBName: CHRISTIAN_NAME,
    requiredNpcBCount: 1,
    requiredMoney: 20000000,
    nextMultiplier: 5,
    unlockedShopItemId: "",
    padSlotBonus: 0,
    baseLockBonusSeconds: 40,
    legendaryTimerDurationSeconds: 240,
    mythicTimerDurationSeconds: 720,
    rainbowWeightMultiplier: 1,
  }),
  Object.freeze({
    id: 5,
    title: "Headmaster",
    requiredNpcAName: CHRISTIAN_NAME,
    requiredNpcACount: 1,
    requiredNpcBName: VINCE_NAME,
    requiredNpcBCount: 1,
    requiredMoney: 75000000,
    nextMultiplier: 6,
    unlockedShopItemId: "",
    padSlotBonus: 0,
    baseLockBonusSeconds: 50,
    legendaryTimerDurationSeconds: 180,
    mythicTimerDurationSeconds: 600,
    rainbowWeightMultiplier: 2,
  }),
  Object.freeze({
    id: 6,
    title: "Headteacher",
    requiredNpcAGroupNames: Object.freeze([FLETCHER_NAME]),
    requiredNpcACount: 1,
    requiredNpcBGroupNames: Object.freeze([ESHDOG_MARLEY_NAME]),
    requiredNpcBCount: 1,
    requiredMoney: 2000000000,
    nextMultiplier: 7,
    unlockedShopItemId: "",
    padSlotBonus: 0,
    baseLockBonusSeconds: 60,
    legendaryTimerDurationSeconds: 180,
    mythicTimerDurationSeconds: 600,
    rainbowWeightMultiplier: 2,
  }),
  Object.freeze({
    id: 7,
    title: "School Legend",
    requiredNpcAGroupNames: Object.freeze([FLETCHER_NAME, ESHDOG_MARLEY_NAME]),
    requiredNpcACount: 2,
    requiredNpcBGroupNames: Object.freeze([CHRISTIAN_NAME, VINCE_NAME]),
    requiredNpcBCount: 2,
    requiredMoney: 10000000000,
    nextMultiplier: 8,
    unlockedShopItemId: "",
    padSlotBonus: 0,
    baseLockBonusSeconds: 70,
    legendaryTimerDurationSeconds: 180,
    mythicTimerDurationSeconds: 600,
    rainbowWeightMultiplier: 2,
  }),
]);
const BASE_UNLOCKED_INCOME_PAD_SLOTS = 10;
const REBIRTH_FLASH_DURATION_MS = 720;
const DEFAULT_LEO_FACE = "smile";
const DEFAULT_LEO_SMILE = 62;
const DEFAULT_SETTINGS = {
  shadows: true,
  invertMousepad: false,
  graphicsQuality: 3,
  sensitivity: 50,
};
const SAVE_SLOT_COUNT = 3;
const DAY_NIGHT_PHASE_SECONDS = 30 * 60;
const DAY_NIGHT_CYCLE_SECONDS = DAY_NIGHT_PHASE_SECONDS * 2;
const WORLD_SIMULATION_STEP = 0.25;
const MAX_BACKGROUND_CATCHUP_SECONDS = 90;
const SAVE_AUTOSAVE_INTERVAL_SECONDS = 2;
const OFFLINE_INCOME_MAX_SECONDS = 8 * 60 * 60;
const MULTIPLAYER_POSITION_SEND_HZ = 15;
const MULTIPLAYER_POSITION_SEND_INTERVAL = 1 / MULTIPLAYER_POSITION_SEND_HZ;
const MULTIPLAYER_REMOTE_PLAYER_LERP = 0.16;
const MULTIPLAYER_REMOTE_ROTATION_LERP = 0.2;
const SOCKET_URL = (() => {
  const configuredUrl =
    typeof globalThis.SOCKET_URL === "string"
      ? globalThis.SOCKET_URL.trim()
      : typeof window.SOCKET_URL === "string"
        ? window.SOCKET_URL.trim()
        : "";
  if (configuredUrl) {
    return configuredUrl;
  }
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    return `${window.location.protocol}//${window.location.hostname}:3000`;
  }
  return "";
})();
const BUILD_ID = "20260326-474";

const clock = new THREE.Clock();
const velocity = new THREE.Vector3();
const keyState = Object.create(null);
const tmpForward = new THREE.Vector3();
const tmpRight = new THREE.Vector3();
const tmpMoveDir = new THREE.Vector3();
const tmpTargetVelocity = new THREE.Vector3();
const upVector = new THREE.Vector3(0, 1, 0);
const cameraTarget = new THREE.Vector3();
const cameraLookDir = new THREE.Vector3();
const cameraRight = new THREE.Vector3();
const cameraDesiredPosition = new THREE.Vector3();
const cameraCollisionDir = new THREE.Vector3();
const cameraCollisionPosition = new THREE.Vector3();
const cameraShoulderOffset = new THREE.Vector3();
const cameraLookAtPoint = new THREE.Vector3();
const leoTargetPadPosition = new THREE.Vector3();
const tmpPadBounds = new THREE.Box3();
const tmpPadCenter = new THREE.Vector3();
const tmpPadBaseQuat = new THREE.Quaternion();
const tmpPadRightDir = new THREE.Vector3();
const tmpAvatarLocalBounds = new THREE.Box3();
const tmpAvatarNodeBounds = new THREE.Box3();
const tmpAvatarLocalCenter = new THREE.Vector3();
const tmpAvatarInvWorld = new THREE.Matrix4();
const tmpPlacementCenter = new THREE.Vector3();
const tmpPlacementFacing = new THREE.Vector3();
const tmpPadDisplayAnchor = new THREE.Vector3();
const tmpPadCollectLocal = new THREE.Vector3();
const tmpModelCenterOffsetWorld = new THREE.Vector3();
const tmpFacingQuat = new THREE.Quaternion();
const tmpVariantColorA = new THREE.Color();
const tmpVariantColorB = new THREE.Color();
const tmpVariantColorC = new THREE.Color();
const worldColliders = [];
const doorLaserColliders = [];
const tmpSecondFloorStairLocal = new THREE.Vector3();
const tmpSecondFloorStairWorld = new THREE.Vector3();
const facePreviewCanvasCache = Object.create(null);
const studentNpcs = [];
const streetBasePads = [];
const primaryTabId =
  window.crypto && typeof window.crypto.randomUUID === "function"
    ? window.crypto.randomUUID()
    : `tab_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
const primaryTabOpenedAt = Date.now();
console.log("Catch a Classmate build:", BUILD_ID);
if (buildStampEl) {
  buildStampEl.textContent = `BUILD ${BUILD_ID}`;
}

let running = false;
let worldSimulationAccumulator = 0;
let grounded = true;
let jumpQueued = false;
let walkCycle = 0;
let idleCycle = 0;
let pointerRotate = false;
let yaw = 0;
let pitch = -0.42;
let cameraFov = DEFAULT_FOV;
let selectedSaveSlotIndex = 0;
let activeSaveSlotIndex = -1;
let gameSettings = { ...DEFAULT_SETTINGS };
let saveSlots = [];
let saveAutosaveAccumulator = 0;
let usernameHighlightTimeoutId = 0;
let primaryTabHeartbeatIntervalId = 0;
let secondaryTabBlocked = false;
let suspendAvatarPreviewSync = false;
let activeTouchCount = 0;
let twoFingerLookActive = false;
let indexUiSignature = "";
let spawnTimerPanelSprite = null;
let spawnTimerPanelKey = "";
let spawnTimerTexture = null;
let lastHiddenAtMs = 0;
let spawnNotificationTimer = 0;
let spawnNotificationTone = "default";
const guaranteedSpawnTimers = Object.create(null);
let oneFingerLookActive = false;
let oneFingerTouchId = -1;
let oneFingerTouchX = 0;
let oneFingerTouchY = 0;
let touchCenterX = 0;
let touchCenterY = 0;
let touchPinchDistance = 0;
let leoFaceExpression = DEFAULT_LEO_FACE;
let leoSmilePercent = DEFAULT_LEO_SMILE;
let leoRespawnCooldown = 0;
let adonisRespawnCooldown = 0;
let adonis2RespawnCooldown = 0;
let nateRespawnCooldown = 0;
let ledgerRespawnCooldown = 0;
let ledger2RespawnCooldown = 0;
let oscarRespawnCooldown = 0;
let christianRespawnCooldown = 0;
let leoReferenceFaceImage = null;
let leoReferenceFaceLoaded = false;
let leoReferenceFaceFailed = false;
let leoReferenceFaceLoading = false;
let leoReferenceFaceLastAttemptAt = 0;
let leoState = LEO_STATE_FOR_SALE;
let leoBuyHoldTimer = 0;
let leoIncomeAccumulator = 0;
let npcStreamSpawnTimer = 0;
let npcBuyHoldTimer = 0;
let npcBuyTargetId = 0;
let npcSellHoldTimer = 0;
let npcSellTargetId = 0;
let sellConfirmNpcId = 0;
let adonisShopkeeper = null;
let adonisShopInteractHeld = false;
let adonisShopMessageText = "";
let adonisShopMessageTone = "default";
let adonisShopMessageTimer = 0;
let interactionPromptText = "";
let interactionPromptTone = "default";
let interactionPromptOverrideText = "";
let interactionPromptOverrideTone = "default";
let interactionPromptOverrideTimer = 0;
let npcRuntimeIdCounter = 1;
let dayNightCycleTime = 0;
let multiplayerSocket = null;
let multiplayerConnected = false;
let multiplayerStreetAuthority = false;
let multiplayerSelfSocketId = "";
let multiplayerServerTimeOffsetMs = 0;
let multiplayerMovementSendAccumulator = 0;
let multiplayerPendingPurchaseCharacterId = "";
let multiplayerPendingPurchaseNpcId = 0;
const remotePlayers = new Map();
const networkStreetCharacters = new Map();
const activeFletcherIntruderSocketIds = new Set();
let eshdogFighterSlowTimer = 0;
const mobileMoveInputState = { w: false, a: false, s: false, d: false };
let mobileJoystickTouchId = -1;
let mobileJoystickVectorX = 0;
let mobileJoystickVectorY = 0;
let menuNavigationBound = false;
let lastMenuTabActivationId = "";
let lastMenuTabActivationTimeMs = 0;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xc9e8ff);
scene.fog = null;

const camera = new THREE.PerspectiveCamera(DEFAULT_FOV, window.innerWidth / window.innerHeight, 0.1, 700);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
if ("outputColorSpace" in renderer && THREE.SRGBColorSpace) {
  renderer.outputColorSpace = THREE.SRGBColorSpace;
}

function createSolidTexture(hexColor) {
  const color = new THREE.Color(hexColor);
  const data = new Uint8Array([
    Math.round(color.r * 255),
    Math.round(color.g * 255),
    Math.round(color.b * 255),
    255,
  ]);
  const texture = new THREE.DataTexture(data, 1, 1, THREE.RGBAFormat);
  texture.needsUpdate = true;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  return texture;
}

function createSkyGradientMaterial() {
  return new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      topColor: { value: new THREE.Color(0x1a3a6b) },
      horizonColor: { value: new THREE.Color(0xc9e8ff) },
    },
    vertexShader: `
      varying vec3 vLocalPosition;
      void main() {
        vLocalPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vLocalPosition;
      uniform vec3 topColor;
      uniform vec3 horizonColor;
      void main() {
        vec3 direction = normalize(vLocalPosition);
        float gradientMix = smoothstep(-0.2, 0.72, direction.y);
        vec3 color = mix(horizonColor, topColor, gradientMix);
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });
}

function createGrassGridTexture() {
  const size = 512;
  const cellSize = 64;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = size;
  canvasEl.height = size;
  const ctx = canvasEl.getContext("2d");
  if (!ctx) {
    return createSolidTexture("#4ac457");
  }

  ctx.fillStyle = "#4ac457";
  ctx.fillRect(0, 0, size, size);

  for (let y = 0; y < size; y += cellSize) {
    for (let x = 0; x < size; x += cellSize) {
      ctx.fillStyle = ((x / cellSize) + (y / cellSize)) % 2 === 0 ? "rgba(255,255,255,0.028)" : "rgba(0,0,0,0.018)";
      ctx.fillRect(x, y, cellSize, cellSize);
    }
  }

  ctx.strokeStyle = "rgba(58,140,58,0.34)";
  ctx.lineWidth = 3;
  for (let i = 0; i <= size; i += cellSize) {
    ctx.beginPath();
    ctx.moveTo(i + 0.5, 0);
    ctx.lineTo(i + 0.5, size);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i + 0.5);
    ctx.lineTo(size, i + 0.5);
    ctx.stroke();
  }

  ctx.strokeStyle = "rgba(255,255,255,0.035)";
  ctx.lineWidth = 1.5;
  for (let i = 0; i <= size; i += cellSize) {
    const inner = i + cellSize * 0.12;
    ctx.beginPath();
    ctx.moveTo(inner, 0);
    ctx.lineTo(inner, size);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, inner);
    ctx.lineTo(size, inner);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  return texture;
}

function createStudTexture(hexColor) {
  const size = 256;
  const cellSize = 32;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = size;
  canvasEl.height = size;
  const ctx = canvasEl.getContext("2d");
  if (!ctx) {
    return createSolidTexture(hexColor);
  }

  const baseColor = new THREE.Color(hexColor);
  const panelColor = baseColor.clone().offsetHSL(0, 0, 0.006);
  const grooveColor = baseColor.clone().offsetHSL(0, 0, -0.016);
  const studTopColor = baseColor.clone().offsetHSL(0, 0, 0.015);
  const studSideColor = baseColor.clone().offsetHSL(0, 0, -0.005);
  const studShadowColor = baseColor.clone().offsetHSL(0, 0, -0.022);

  ctx.fillStyle = `#${baseColor.getHexString()}`;
  ctx.fillRect(0, 0, size, size);

  for (let y = 0; y < size; y += cellSize) {
    for (let x = 0; x < size; x += cellSize) {
      ctx.fillStyle = `#${grooveColor.getHexString()}`;
      ctx.fillRect(x, y, cellSize, cellSize);

      ctx.fillStyle = `#${panelColor.getHexString()}`;
      ctx.fillRect(x + 0.5, y + 0.5, cellSize - 1, cellSize - 1);

      ctx.fillStyle = `#${studShadowColor.getHexString()}`;
      ctx.beginPath();
      ctx.ellipse(x + cellSize * 0.5, y + cellSize * 0.53, cellSize * 0.126, cellSize * 0.082, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `#${studSideColor.getHexString()}`;
      ctx.beginPath();
      ctx.ellipse(x + cellSize * 0.5, y + cellSize * 0.5, cellSize * 0.126, cellSize * 0.082, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `#${studTopColor.getHexString()}`;
      ctx.beginPath();
      ctx.ellipse(x + cellSize * 0.488, y + cellSize * 0.474, cellSize * 0.082, cellSize * 0.054, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  return texture;
}

function createStudBumpTexture() {
  const size = 256;
  const cellSize = 32;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = size;
  canvasEl.height = size;
  const ctx = canvasEl.getContext("2d");
  if (!ctx) {
    const fallback = createSolidTexture("#7a7a7a");
    fallback.wrapS = THREE.RepeatWrapping;
    fallback.wrapT = THREE.RepeatWrapping;
    return fallback;
  }

  ctx.fillStyle = "rgb(123,123,123)";
  ctx.fillRect(0, 0, size, size);

  for (let y = 0; y < size; y += cellSize) {
    for (let x = 0; x < size; x += cellSize) {
      ctx.fillStyle = "rgb(120,120,120)";
      ctx.fillRect(x, y, cellSize, cellSize);

      ctx.fillStyle = "rgb(124,124,124)";
      ctx.fillRect(x + 0.5, y + 0.5, cellSize - 1, cellSize - 1);

      ctx.fillStyle = "rgb(128,128,128)";
      ctx.beginPath();
      ctx.ellipse(x + cellSize * 0.5, y + cellSize * 0.5, cellSize * 0.126, cellSize * 0.082, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgb(132,132,132)";
      ctx.beginPath();
      ctx.ellipse(x + cellSize * 0.488, y + cellSize * 0.474, cellSize * 0.082, cellSize * 0.054, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

function createStudMaterial(hexColor, options = {}) {
  const map = createStudTexture(hexColor);
  const bumpMap = createStudBumpTexture();
  const repeatX = Number.isFinite(options.repeatX) ? options.repeatX : 4;
  const repeatY = Number.isFinite(options.repeatY) ? options.repeatY : repeatX;
  map.repeat.set(repeatX, repeatY);
  bumpMap.repeat.set(repeatX, repeatY);

  const requestedBumpScale = Number.isFinite(options.bumpScale) ? options.bumpScale : 0.032;
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map,
    bumpMap,
    bumpScale: requestedBumpScale * 0.5,
    roughness: Number.isFinite(options.roughness) ? options.roughness : 0.84,
    metalness: Number.isFinite(options.metalness) ? options.metalness : 0.03,
  });

  if (typeof options.emissive !== "undefined") {
    material.emissive = new THREE.Color(options.emissive);
  }
  if (Number.isFinite(options.emissiveIntensity)) {
    material.emissiveIntensity = options.emissiveIntensity;
  }

  return material;
}

function boostColorVibrancy(color, saturationMultiplier = 1.34, lightnessMultiplier = 1.06, saturationLift = 0.03) {
  if (!color || !color.isColor) {
    return;
  }
  const hsl = { h: 0, s: 0, l: 0 };
  color.getHSL(hsl);
  const nextSaturation = Math.max(0, Math.min(1, hsl.s * saturationMultiplier + saturationLift));
  const nextLightness = Math.max(0, Math.min(1, hsl.l * lightnessMultiplier));
  color.setHSL(hsl.h, nextSaturation, nextLightness);
}

function applyObjectVibrancy(root, options = {}) {
  if (!root || !root.traverse || (root.userData && root.userData.vibrancyApplied)) {
    return;
  }
  const saturationMultiplier = Number.isFinite(options.saturationMultiplier) ? options.saturationMultiplier : 1.34;
  const lightnessMultiplier = Number.isFinite(options.lightnessMultiplier) ? options.lightnessMultiplier : 1.06;
  const saturationLift = Number.isFinite(options.saturationLift) ? options.saturationLift : 0.03;
  const emissiveSaturationMultiplier = Number.isFinite(options.emissiveSaturationMultiplier)
    ? options.emissiveSaturationMultiplier
    : 1.2;
  const emissiveLightnessMultiplier = Number.isFinite(options.emissiveLightnessMultiplier)
    ? options.emissiveLightnessMultiplier
    : 1.08;
  const emissiveSaturationLift = Number.isFinite(options.emissiveSaturationLift) ? options.emissiveSaturationLift : 0.03;
  const seenMaterials = new Set();
  root.traverse((node) => {
    if (!node || !node.material) {
      return;
    }
    const materials = Array.isArray(node.material) ? node.material : [node.material];
    for (let i = 0; i < materials.length; i += 1) {
      const material = materials[i];
      if (!material || seenMaterials.has(material)) {
        continue;
      }
      seenMaterials.add(material);
      if (material.color && material.color.isColor) {
        boostColorVibrancy(material.color, saturationMultiplier, lightnessMultiplier, saturationLift);
      }
      if (material.emissive && material.emissive.isColor) {
        boostColorVibrancy(
          material.emissive,
          emissiveSaturationMultiplier,
          emissiveLightnessMultiplier,
          emissiveSaturationLift
        );
      }
      material.needsUpdate = true;
    }
  });
  if (root.userData) {
    root.userData.vibrancyApplied = true;
  }
}

const hemisphere = new THREE.HemisphereLight(0xb8e4ff, 0x5d9a47, 0.82);
scene.add(hemisphere);

const sunLight = new THREE.DirectionalLight(0xffffff, 0.94);
sunLight.position.set(90, 150, 40);
sunLight.castShadow = true;
sunLight.shadow.mapSize.set(2048, 2048);
sunLight.shadow.camera.left = -300;
sunLight.shadow.camera.right = 300;
sunLight.shadow.camera.top = 300;
sunLight.shadow.camera.bottom = -300;
sunLight.shadow.camera.far = 450;
scene.add(sunLight);

const skyDome = new THREE.Mesh(new THREE.SphereGeometry(620, 40, 28), createSkyGradientMaterial());
skyDome.frustumCulled = false;
scene.add(skyDome);

const dayBackgroundColor = new THREE.Color(0xc9e8ff);
const nightBackgroundColor = new THREE.Color(0x11203a);
const daySkyTopColor = new THREE.Color(0x1a3a6b);
const daySkyHorizonColor = new THREE.Color(0xc9e8ff);
const nightSkyTopColor = new THREE.Color(0x071120);
const nightSkyHorizonColor = new THREE.Color(0x24466d);
const dayHemisphereSkyColor = new THREE.Color(0xb8e4ff);
const nightHemisphereSkyColor = new THREE.Color(0x45658f);
const dayHemisphereGroundColor = new THREE.Color(0x5d9a47);
const nightHemisphereGroundColor = new THREE.Color(0x233522);
const daySunColor = new THREE.Color(0xffffff);
const nightSunColor = new THREE.Color(0x89aee6);
const tmpDayNightColorA = new THREE.Color();
const tmpDayNightColorB = new THREE.Color();

const mapRoot = createNeighborhoodMap();
scene.add(mapRoot);
initializeGuaranteedSpawnTimers();
ensureSpawnTimerPanel();
updateSpawnTimerDisplay(true);
applyObjectVibrancy(mapRoot, {
  saturationMultiplier: 1.56,
  lightnessMultiplier: 0.97,
  saturationLift: 0.06,
  emissiveSaturationMultiplier: 1.32,
  emissiveLightnessMultiplier: 0.98,
  emissiveSaturationLift: 0.05,
});
buildWorldColliders(mapRoot);

const player = createBlockyAvatar();
player.position.set(SPAWN_X, STREET_PATH_SURFACE_Y, SPAWN_Z);
applyObjectVibrancy(player);
scene.add(player);
ensureAdonisShopkeeperExists();

if (NPC_STREAM_ENABLED) {
  seedInitialStreetNpcs();
} else {
  const initialZiggyNpc = createZiggyNpcSafe();
  if (initialZiggyNpc && initialZiggyNpc.avatar) {
    studentNpcs.push(initialZiggyNpc);
    scene.add(initialZiggyNpc.avatar);
  }
  const initialVinceNpc = createVinceNpcSafe();
  if (initialVinceNpc && initialVinceNpc.avatar) {
    studentNpcs.push(initialVinceNpc);
    scene.add(initialVinceNpc.avatar);
  }
  const initialHendrixNpc = createHendrixNpcSafe();
  if (initialHendrixNpc && initialHendrixNpc.avatar) {
    studentNpcs.push(initialHendrixNpc);
    scene.add(initialHendrixNpc.avatar);
  }
  const initialBeauNpc = createBeauNpcSafe();
  if (initialBeauNpc && initialBeauNpc.avatar) {
    studentNpcs.push(initialBeauNpc);
    scene.add(initialBeauNpc.avatar);
  }
  const initialCharlieNpc = createCharlieNpcSafe();
  if (initialCharlieNpc && initialCharlieNpc.avatar) {
    studentNpcs.push(initialCharlieNpc);
    scene.add(initialCharlieNpc.avatar);
  }
}
try {
  initCustomizerControls();
} catch (error) {
  console.error("Customizer init failed", error);
}

if (chapterTitleEl) {
  chapterTitleEl.textContent = "Catch a Classmate";
}
if (chapterStoryEl) {
  chapterStoryEl.textContent =
    "Move with WASD, jump with Space, use right-click drag on desktop, and use two-finger drag + pinch on touch.";
}
if (objectiveTextEl) {
  objectiveTextEl.textContent = "Prototype Goal: Explore the neighborhood map with Roblox-like controls";
}
if (goalBarEl) {
  goalBarEl.style.width = "100%";
}

function createBaseplateTexture() {
  const texture = createGrassGridTexture();
  texture.repeat.set(16, 16);
  return texture;
}

function createRoadTexture() {
  const texture = createStudTexture("#e85656");
  texture.repeat.set(4, 32);
  return texture;
}

function clearMeshChildren(group) {
  if (!group) {
    return;
  }
  while (group.children.length > 0) {
    const child = group.children[group.children.length - 1];
    group.remove(child);
    child.traverse((node) => {
      if (!node.isMesh || !node.geometry) {
        return;
      }
      node.geometry.dispose();
    });
  }
}

function clearPaths(pathGroup) {
  clearMeshChildren(pathGroup);
}

function createPathSegmentKey(kind, x, z, sizeX, sizeZ) {
  return `${kind}:${x.toFixed(2)}:${z.toFixed(2)}:${sizeX.toFixed(2)}:${sizeZ.toFixed(2)}`;
}

function createStraightPath(addPathBox, occupied, x, z, sizeX, sizeZ) {
  const key = createPathSegmentKey("straight", x, z, sizeX, sizeZ);
  if (occupied.has(key)) {
    return false;
  }
  occupied.add(key);
  addPathBox(sizeX, 0.16, sizeZ, x, 0.11, z);
  return true;
}

function generatePaths(addPathBox, config) {
  const occupied = new Set();
  const spawnedIntersections = new Set();
  const centerX = config.centerX || 0;
  const centerZ = config.centerZ || 0;
  const pathWidth = config.pathWidth;
  const halfLength = Math.max(pathWidth, config.halfLength || pathWidth);

  // Linear street layout: single straight strip, no branching and no cross pieces.
  createStraightPath(addPathBox, occupied, centerX, centerZ, pathWidth, halfLength * 2);

  return {
    segments: occupied.size,
    intersections: spawnedIntersections.size,
  };
}

function createNeighborhoodMap() {
  const mapGroup = new THREE.Group();
  const groundGroup = new THREE.Group();
  groundGroup.name = "Ground";
  const pathGroup = new THREE.Group();
  pathGroup.name = "Path";
  mapGroup.add(groundGroup);
  mapGroup.add(pathGroup);
  streetBasePads.length = 0;

  const grassTexture = createBaseplateTexture();
  grassTexture.repeat.set(10, 20);
  const flatBumpTexture = createSolidTexture("#808080");
  flatBumpTexture.repeat.copy(grassTexture.repeat);

  const dirtMaterial = createStudMaterial(0x8b6a47, { repeatX: 8, repeatY: 16, roughness: 0.95, metalness: 0.02, bumpScale: 0.022 });
  const grassMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: grassTexture,
    bumpMap: flatBumpTexture,
    bumpScale: 0.006,
    roughness: 0.9,
    metalness: 0.02,
  });
  grassMaterial.bumpMap.repeat.copy(grassTexture.repeat);
  const roadTexture = createRoadTexture();
  roadTexture.repeat.set(3, 32);
  const roadMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: roadTexture,
    bumpMap: createStudBumpTexture(),
    bumpScale: 0.022,
    roughness: 0.86,
    metalness: 0.03,
  });
  roadMaterial.bumpMap.repeat.copy(roadTexture.repeat);
  const darkMaterial = createStudMaterial(0x1d252f, { repeatX: 4, repeatY: 4, roughness: 0.88, metalness: 0.03, bumpScale: 0.02 });
  const boardMaterial = createStudMaterial(0x2b3645, { repeatX: 4, repeatY: 4, roughness: 0.82, metalness: 0.04, bumpScale: 0.02 });
  const caveTrimMaterial = createStudMaterial(0x4f6378, { repeatX: 4, repeatY: 4, roughness: 0.8, metalness: 0.08, bumpScale: 0.02 });
  const caveGlowMaterial = createStudMaterial(0xff8f66, {
    repeatX: 3,
    repeatY: 3,
    roughness: 0.62,
    metalness: 0.02,
    emissive: 0x4b1a0f,
    emissiveIntensity: 0.65,
    bumpScale: 0.018,
  });

  function addBox(sizeX, sizeY, sizeZ, posX, posY, posZ, material, castShadow, receiveShadow, targetGroup = mapGroup) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(sizeX, sizeY, sizeZ), material);
    mesh.position.set(posX, posY, posZ);
    mesh.castShadow = castShadow;
    mesh.receiveShadow = receiveShadow;
    targetGroup.add(mesh);
    return mesh;
  }

  function addGroundBox(sizeX, sizeY, sizeZ, posX, posY, posZ, material, castShadow, receiveShadow) {
    return addBox(sizeX, sizeY, sizeZ, posX, posY, posZ, material, castShadow, receiveShadow, groundGroup);
  }

  function addPathBox(sizeX, sizeY, sizeZ, posX, posY, posZ) {
    return addBox(sizeX, sizeY, sizeZ, posX, posY, posZ, roadMaterial, false, true, pathGroup);
  }

  function regenerateGround() {
    clearMeshChildren(groundGroup);
    addGroundBox((MAP_HALF_WIDTH + 6) * 2, 0.24, (MAP_HALF_LENGTH + 6) * 2, 0, 0.06, 0, grassMaterial, false, true);
  }

  const groundTopY = 0.18;
  const playerHeightRef = PLAYER_COLLIDER_HEIGHT;
  const playerWidthRef = playerHeightRef * 0.5;
  const playerLayingWidthRef = playerHeightRef;
  const shopsPerSide = 4;
  const baseScale = 0.75;
  const shopWidth = playerLayingWidthRef * 5.5;
  const shopDepth = playerLayingWidthRef * 4;
  const shopHeight = playerHeightRef * 3;
  const pathSetback = playerWidthRef * 6.8;
  const pathWidth = playerWidthRef * 3.2;
  const pathThickness = 0.12;
  const baseZFront = -MAP_HALF_LENGTH + playerHeightRef * 6.2;
  const baseZBack = MAP_HALF_LENGTH - playerHeightRef * 7.8;
  const rowPitch = shopsPerSide > 1 ? (baseZBack - baseZFront) / (shopsPerSide - 1) : 0;
  const rowStartZ = baseZFront;
  const streetHalfLength = MAP_HALF_LENGTH - 0.08;
  const baseCenterOffsetX = pathWidth * 0.5 + pathSetback + shopDepth * baseScale * 0.5;

  function addPathBoxAtLevel(sizeX, _sizeY, sizeZ, posX, _posY, posZ) {
    return addBox(sizeX, pathThickness, sizeZ, posX, groundTopY + pathThickness * 0.5, posZ, roadMaterial, false, true, pathGroup);
  }

  clearPaths(pathGroup);
  generatePaths(addPathBoxAtLevel, {
    centerX: 0,
    centerZ: 0,
    pathWidth,
    halfLength: streetHalfLength,
  });
  regenerateGround();

  const wallHeight = 5;
  const wallThickness = 2.4;
  const wallY = wallHeight * 0.5 - 0.1;
  addBox(wallThickness, wallHeight, MAP_HALF_LENGTH * 2 + wallThickness * 2, -MAP_HALF_WIDTH - wallThickness * 0.5, wallY, 0, dirtMaterial, true, true);
  addBox(wallThickness, wallHeight, MAP_HALF_LENGTH * 2 + wallThickness * 2, MAP_HALF_WIDTH + wallThickness * 0.5, wallY, 0, dirtMaterial, true, true);
  addBox(MAP_HALF_WIDTH * 2, wallHeight, wallThickness, 0, wallY, -MAP_HALF_LENGTH - wallThickness * 0.5, dirtMaterial, true, true);
  addBox(MAP_HALF_WIDTH * 2, wallHeight, wallThickness, 0, wallY, MAP_HALF_LENGTH + wallThickness * 0.5, dirtMaterial, true, true);

  addBox(wallThickness + 0.3, 0.34, MAP_HALF_LENGTH * 2 + wallThickness * 2, -MAP_HALF_WIDTH - wallThickness * 0.5, wallHeight - 0.1, 0, grassMaterial, false, true);
  addBox(wallThickness + 0.3, 0.34, MAP_HALF_LENGTH * 2 + wallThickness * 2, MAP_HALF_WIDTH + wallThickness * 0.5, wallHeight - 0.1, 0, grassMaterial, false, true);
  addBox(MAP_HALF_WIDTH * 2 + wallThickness * 2, 0.34, wallThickness + 0.3, 0, wallHeight - 0.1, -MAP_HALF_LENGTH - wallThickness * 0.5, grassMaterial, false, true);
  addBox(MAP_HALF_WIDTH * 2 + wallThickness * 2, 0.34, wallThickness + 0.3, 0, wallHeight - 0.1, MAP_HALF_LENGTH + wallThickness * 0.5, grassMaterial, false, true);

  const shopWallMaterial = createStudMaterial(0x6f7884, { repeatX: 4, repeatY: 4, roughness: 0.86, metalness: 0.04, bumpScale: 0.02 });
  const shopRoofMaterial = createStudMaterial(0x6f7884, { repeatX: 5, repeatY: 5, roughness: 0.86, metalness: 0.04, bumpScale: 0.018 });
  const shopFrameMaterial = createStudMaterial(0xf4f7fb, { repeatX: 4, repeatY: 4, roughness: 0.78, metalness: 0.02, bumpScale: 0.018 });
  const shopGlassMaterial = createStudMaterial(0x8eb4c9, { repeatX: 4, repeatY: 4, roughness: 0.4, metalness: 0.12, bumpScale: 0.012 });
  const shopFloorMaterial = createStudMaterial(0x9da4b0, { repeatX: 4, repeatY: 4, roughness: 0.85, metalness: 0.03, bumpScale: 0.018 });
  const signBoardMaterial = createStudMaterial(0xa77649, { repeatX: 3, repeatY: 2, roughness: 0.9, metalness: 0.02, bumpScale: 0.016 });
  const shopWindowPanelMaterial = createStudMaterial(0x45505d, { repeatX: 2, repeatY: 2, roughness: 0.92, metalness: 0.04, bumpScale: 0.01 });
  const shopRoofEdgeMaterial = createStudMaterial(0x596572, { repeatX: 4, repeatY: 2, roughness: 0.88, metalness: 0.04, bumpScale: 0.012 });
  const buyPadMaterial = createStudMaterial(0x50ef74, {
    repeatX: 3,
    repeatY: 3,
    roughness: 0.76,
    metalness: 0.02,
    emissive: 0x1a4b26,
    emissiveIntensity: 0.48,
    bumpScale: 0.018,
  });
  const padMaterial = createStudMaterial(0xf6fafb, { repeatX: 4, repeatY: 4, roughness: 0.86, metalness: 0.03, bumpScale: 0.014 });
  const interiorLaneMaterial = createStudMaterial(0xf25c57, { repeatX: 4, repeatY: 8, roughness: 0.76, metalness: 0.02, bumpScale: 0.018 });
  const interiorTileMaterial = createStudMaterial(0xaab2bf, { repeatX: 4, repeatY: 8, roughness: 0.84, metalness: 0.03, bumpScale: 0.016 });
  const interiorPadMaterial = createStudMaterial(0x54d867, { repeatX: 3, repeatY: 5, roughness: 0.78, metalness: 0.02, bumpScale: 0.016 });

  function createSignTexture(label) {
    const canvasEl = document.createElement("canvas");
    canvasEl.width = 384;
    canvasEl.height = 112;
    const ctx = canvasEl.getContext("2d");
    if (!ctx) {
      return null;
    }
    ctx.fillStyle = "#a77649";
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
    ctx.fillStyle = "#f6efe5";
    ctx.font = "bold 34px Sora, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, canvasEl.width * 0.5, canvasEl.height * 0.52);
    const texture = new THREE.CanvasTexture(canvasEl);
    if ("colorSpace" in texture && THREE.SRGBColorSpace) {
      texture.colorSpace = THREE.SRGBColorSpace;
    }
    return texture;
  }

  function createStreetBase(config) {
    const baseGroup = new THREE.Group();
    const incomePadMeshes = [];
    const incomePadLabelSprites = [];
    const secondFloorCollidableMeshes = [];
    const frontZ = shopDepth * 0.5;
    const backZ = -shopDepth * 0.5;
    const floorThickness = 0.14;
    const frameTopY = groundTopY + shopHeight;
    const roofThickness = 0.26;
    const roofOverhangX = 0.62;
    const roofOverhangZ = 0.54;
    const wallThickness = 0.46;
    const frontColumnSize = wallThickness * 1.08;
    const frontLintelHeight = playerHeightRef * 0.34;
    const interiorInset = wallThickness + 0.28;
    const interiorWidth = Math.max(1.5, shopWidth - interiorInset * 2);
    const interiorDepth = Math.max(1.5, shopDepth - wallThickness * 1.8);
    const laneWidth = interiorWidth * 0.34;
    const laneDepth = interiorDepth * 0.96;
    const sideStripWidth = Math.max(0.8, (interiorWidth - laneWidth) * 0.5 - 0.06);
    const sideStripOffsetX = laneWidth * 0.5 + sideStripWidth * 0.5 + 0.06;
    const laneThickness = 0.08;
    const tileThickness = 0.08;
    const padThickness = 0.08;
    const padRows = 5;
    const padSize = Math.min(sideStripWidth * 0.62, laneDepth * 0.14);
    const padWidth = padSize;
    const padDepth = padSize;
    const leftPadCenterX = -sideStripOffsetX;
    const rightPadCenterX = sideStripOffsetX;
    const firstPadZ = frontZ - wallThickness - padDepth * 1.15;
    const lastPadZ = backZ + wallThickness + padDepth * 1.15;
    const secondFloorPadRows = SECOND_FLOOR_PAD_ROWS;
    const secondFloorDeckThickness = 0.16;
    const secondFloorDeckBottomY = frameTopY + roofThickness + 0.12;
    const secondFloorDeckTopY = secondFloorDeckBottomY + secondFloorDeckThickness;
    const secondFloorDeckCenterY = secondFloorDeckBottomY + secondFloorDeckThickness * 0.5;
    const secondFloorDeckWidth = shopWidth + roofOverhangX * 0.5;
    const secondFloorDeckDepth = shopDepth + roofOverhangZ * 0.5;
    const secondFloorDeckFrontZ = secondFloorDeckDepth * 0.5 - wallThickness - padDepth * 1.2;
    const secondFloorDeckBackZ = -secondFloorDeckDepth * 0.5 + wallThickness + padDepth * 1.2;
    const stairWidth = Math.max(1.8, shopWidth * 0.26);
    const stairDepth = 0.9;
    const secondFloorWallHeight = shopHeight;
    const secondFloorWallCenterY = secondFloorDeckTopY + secondFloorWallHeight * 0.5;
    const secondFloorCeilingThickness = roofThickness;
    const secondFloorCeilingY = secondFloorDeckTopY + secondFloorWallHeight + secondFloorCeilingThickness * 0.5;
    const secondFloorStairSide = 1;
    const secondFloorOuterRightX = secondFloorDeckWidth * 0.5;
    const secondFloorOuterLeftX = -secondFloorDeckWidth * 0.5;
    const secondFloorOuterFrontZ = secondFloorDeckDepth * 0.5;
    const secondFloorOuterBackZ = -secondFloorDeckDepth * 0.5;
    const secondFloorDoorWidth = Math.max(2.1, stairDepth * 2.1);
    const secondFloorDoorHeight = playerHeightRef * 1.46;
    const secondFloorDoorMarginZ = Math.max(secondFloorDoorWidth * 0.7, stairDepth * 1.2);
    const secondFloorStairFrontZ = secondFloorOuterFrontZ - stairDepth * 0.5;
    const stairStepCount = Math.max(
      13,
      Math.floor(
        ((secondFloorOuterFrontZ - stairDepth * 3.2) - (secondFloorOuterBackZ + secondFloorDoorMarginZ)) / stairDepth
      ) + 1
    );
    const secondFloorStairSpanZ = stairDepth * Math.max(0, stairStepCount - 1);
    const secondFloorDoorDesiredZ = secondFloorStairFrontZ - secondFloorStairSpanZ;
    const secondFloorDoorCenterZ = THREE.MathUtils.clamp(
      secondFloorDoorDesiredZ,
      secondFloorOuterBackZ + secondFloorDoorMarginZ,
      secondFloorOuterFrontZ - secondFloorDoorMarginZ
    );
    const secondFloorLandingWidth = stairWidth;
    const secondFloorLandingDepth = stairDepth * 1.35;
    const secondFloorStairWallX = secondFloorStairSide > 0 ? secondFloorOuterRightX : secondFloorOuterLeftX;
    const secondFloorLandingCenterX =
      secondFloorStairWallX + secondFloorStairSide * secondFloorLandingWidth * 0.5;
    const secondFloorLandingCenterZ = secondFloorDoorCenterZ;
    const secondFloorStairBackEdgeZ = secondFloorDoorCenterZ - stairDepth * 0.5;
    const secondFloorSideEndFillDepth = Math.max(0, secondFloorStairBackEdgeZ - secondFloorOuterBackZ);
    const secondFloorDoorBackExtension = Math.min(
      Math.max(stairDepth * 1.6, secondFloorSideEndFillDepth * 0.75),
      Math.max(0, secondFloorDoorCenterZ - secondFloorOuterBackZ - wallThickness * 0.5)
    );
    const stairRise = Math.max(0.2, (secondFloorDeckTopY - groundTopY) / stairStepCount);
    const stairColliderThickness = Math.max(0.12, Math.min(0.24, stairRise * 0.55));
    const stairColliderWidth = Math.max(1.12, stairWidth - 0.18);
    const stairColliderDepth = Math.max(0.2, Math.min(0.26, stairDepth * 0.28));
    const stairColliderFrontOffsetZ = (stairDepth - stairColliderDepth) * 0.5 - 0.03;
    const signWidth = shopWidth * 0.34;
    const signHeight = playerHeightRef * 0.54;
    const signDepth = 0.16;

    function attachIncomePadLabelSprite(padMesh) {
      const labelData = createPadMoneyTagTexture(0);
      const labelMaterial = new THREE.SpriteMaterial({
        map: labelData.texture,
        transparent: true,
        depthWrite: false,
        toneMapped: false,
      });
      const labelSprite = new THREE.Sprite(labelMaterial);
      labelSprite.scale.set(PAD_MONEY_TAG_SCALE * labelData.aspect, PAD_MONEY_TAG_SCALE, 1);
      labelSprite.position.set(0, PAD_MONEY_TAG_Y, 0);
      labelSprite.visible = false;
      labelSprite.renderOrder = 7;
      padMesh.add(labelSprite);
      incomePadLabelSprites.push(labelSprite);
    }

    function registerSecondFloorColliderMesh(mesh) {
      if (!mesh) {
        return;
      }
      mesh.userData.excludeWorldCollider = true;
      secondFloorCollidableMeshes.push(mesh);
    }

    const floor = new THREE.Mesh(new THREE.BoxGeometry(shopWidth, floorThickness, shopDepth), shopFloorMaterial);
    floor.position.y = groundTopY + floorThickness * 0.5;
    floor.castShadow = true;
    floor.receiveShadow = true;
    baseGroup.add(floor);

    const wallY = groundTopY + shopHeight * 0.5;
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(wallThickness, shopHeight, shopDepth), shopWallMaterial);
    leftWall.position.set(-shopWidth * 0.5 + wallThickness * 0.5, wallY, 0);
    leftWall.castShadow = true;
    leftWall.receiveShadow = true;
    baseGroup.add(leftWall);

    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(wallThickness, shopHeight, shopDepth), shopWallMaterial);
    rightWall.position.set(shopWidth * 0.5 - wallThickness * 0.5, wallY, 0);
    rightWall.castShadow = true;
    rightWall.receiveShadow = true;
    baseGroup.add(rightWall);

    const backWall = new THREE.Mesh(new THREE.BoxGeometry(shopWidth, shopHeight, wallThickness), shopWallMaterial);
    backWall.position.set(0, wallY, backZ + wallThickness * 0.5);
    backWall.castShadow = true;
    backWall.receiveShadow = true;
    baseGroup.add(backWall);

    const frontLintel = new THREE.Mesh(new THREE.BoxGeometry(shopWidth, frontLintelHeight, wallThickness), shopWallMaterial);
    frontLintel.position.set(0, groundTopY + shopHeight - frontLintelHeight * 0.5, frontZ - wallThickness * 0.5);
    frontLintel.castShadow = true;
    frontLintel.receiveShadow = true;
    baseGroup.add(frontLintel);

    for (const side of [-1, 1]) {
      const frontColumn = new THREE.Mesh(new THREE.BoxGeometry(frontColumnSize, shopHeight, frontColumnSize), shopWallMaterial);
      frontColumn.position.set(side * (shopWidth * 0.5 - frontColumnSize * 0.5), wallY, frontZ - frontColumnSize * 0.5);
      frontColumn.castShadow = true;
      frontColumn.receiveShadow = true;
      baseGroup.add(frontColumn);
    }

    const roof = new THREE.Mesh(new THREE.BoxGeometry(shopWidth + roofOverhangX, roofThickness, shopDepth + roofOverhangZ), shopRoofMaterial);
    roof.position.y = frameTopY + roofThickness * 0.5;
    roof.castShadow = true;
    roof.receiveShadow = true;
    baseGroup.add(roof);

    const roofFullWidth = shopWidth + roofOverhangX;
    const roofFullDepth = shopDepth + roofOverhangZ;
    const roofLipThickness = 0.08;
    const roofLipDepth = 0.12;
    const roofLipY = roof.position.y + roofThickness * 0.5 + roofLipThickness * 0.5;

    const frontRoofLip = new THREE.Mesh(new THREE.BoxGeometry(roofFullWidth, roofLipThickness, roofLipDepth), shopRoofEdgeMaterial);
    frontRoofLip.position.set(0, roofLipY, roofFullDepth * 0.5 - roofLipDepth * 0.5);
    frontRoofLip.castShadow = true;
    frontRoofLip.receiveShadow = true;
    baseGroup.add(frontRoofLip);

    const backRoofLip = new THREE.Mesh(new THREE.BoxGeometry(roofFullWidth, roofLipThickness, roofLipDepth), shopRoofEdgeMaterial);
    backRoofLip.position.set(0, roofLipY, -roofFullDepth * 0.5 + roofLipDepth * 0.5);
    backRoofLip.castShadow = true;
    backRoofLip.receiveShadow = true;
    baseGroup.add(backRoofLip);

    const leftRoofLip = new THREE.Mesh(new THREE.BoxGeometry(roofLipDepth, roofLipThickness, roofFullDepth), shopRoofEdgeMaterial);
    leftRoofLip.position.set(-roofFullWidth * 0.5 + roofLipDepth * 0.5, roofLipY, 0);
    leftRoofLip.castShadow = true;
    leftRoofLip.receiveShadow = true;
    baseGroup.add(leftRoofLip);

    const rightRoofLip = new THREE.Mesh(new THREE.BoxGeometry(roofLipDepth, roofLipThickness, roofFullDepth), shopRoofEdgeMaterial);
    rightRoofLip.position.set(roofFullWidth * 0.5 - roofLipDepth * 0.5, roofLipY, 0);
    rightRoofLip.castShadow = true;
    rightRoofLip.receiveShadow = true;
    baseGroup.add(rightRoofLip);

    const secondFloorGroup = new THREE.Group();
    secondFloorGroup.visible = false;
    baseGroup.add(secondFloorGroup);

    const secondFloorDeck = new THREE.Mesh(
      new THREE.BoxGeometry(secondFloorDeckWidth, secondFloorDeckThickness, secondFloorDeckDepth),
      interiorTileMaterial
    );
    secondFloorDeck.position.set(0, secondFloorDeckCenterY, 0);
    secondFloorDeck.castShadow = true;
    secondFloorDeck.receiveShadow = true;
    registerSecondFloorColliderMesh(secondFloorDeck);
    secondFloorGroup.add(secondFloorDeck);

    const secondFloorCeiling = new THREE.Mesh(
      new THREE.BoxGeometry(secondFloorDeckWidth, secondFloorCeilingThickness, secondFloorDeckDepth),
      shopRoofMaterial
    );
    secondFloorCeiling.position.set(0, secondFloorCeilingY, 0);
    secondFloorCeiling.castShadow = true;
    secondFloorCeiling.receiveShadow = true;
    registerSecondFloorColliderMesh(secondFloorCeiling);
    secondFloorGroup.add(secondFloorCeiling);

    const secondFloorFrontWall = new THREE.Mesh(
      new THREE.BoxGeometry(secondFloorDeckWidth, secondFloorWallHeight, wallThickness),
      shopWallMaterial
    );
    secondFloorFrontWall.position.set(0, secondFloorWallCenterY, secondFloorOuterFrontZ - wallThickness * 0.5);
    secondFloorFrontWall.castShadow = true;
    secondFloorFrontWall.receiveShadow = true;
    registerSecondFloorColliderMesh(secondFloorFrontWall);
    secondFloorGroup.add(secondFloorFrontWall);

    const secondFloorBackWall = new THREE.Mesh(
      new THREE.BoxGeometry(secondFloorDeckWidth, secondFloorWallHeight, wallThickness),
      shopWallMaterial
    );
    secondFloorBackWall.position.set(0, secondFloorWallCenterY, secondFloorOuterBackZ + wallThickness * 0.5);
    secondFloorBackWall.castShadow = true;
    secondFloorBackWall.receiveShadow = true;
    registerSecondFloorColliderMesh(secondFloorBackWall);
    secondFloorGroup.add(secondFloorBackWall);

    const secondFloorLeftWall = new THREE.Mesh(
      new THREE.BoxGeometry(wallThickness, secondFloorWallHeight, secondFloorDeckDepth),
      shopWallMaterial
    );
    secondFloorLeftWall.position.set(secondFloorOuterLeftX + wallThickness * 0.5, secondFloorWallCenterY, 0);
    secondFloorLeftWall.castShadow = true;
    secondFloorLeftWall.receiveShadow = true;
    registerSecondFloorColliderMesh(secondFloorLeftWall);
    secondFloorGroup.add(secondFloorLeftWall);

    const doorFrontEdgeZ = secondFloorDoorCenterZ + secondFloorDoorWidth * 0.5;
    const doorBackEdgeZ = Math.max(
      secondFloorOuterBackZ + wallThickness * 0.2,
      secondFloorDoorCenterZ - secondFloorDoorWidth * 0.5 - secondFloorDoorBackExtension
    );
    const doorOpeningDepth = doorFrontEdgeZ - doorBackEdgeZ;
    const doorOpeningCenterZ = doorBackEdgeZ + doorOpeningDepth * 0.5;
    const frontRightWallDepth = secondFloorOuterFrontZ - doorFrontEdgeZ;
    if (frontRightWallDepth > 0.18) {
      const rightWallFront = new THREE.Mesh(
        new THREE.BoxGeometry(wallThickness, secondFloorWallHeight, frontRightWallDepth),
        shopWallMaterial
      );
      rightWallFront.position.set(
        secondFloorOuterRightX - wallThickness * 0.5,
        secondFloorWallCenterY,
        doorFrontEdgeZ + frontRightWallDepth * 0.5
      );
      rightWallFront.castShadow = true;
      rightWallFront.receiveShadow = true;
      registerSecondFloorColliderMesh(rightWallFront);
      secondFloorGroup.add(rightWallFront);
    }

    const backRightWallDepth = doorBackEdgeZ - secondFloorOuterBackZ;
    if (backRightWallDepth > 0.18) {
      const rightWallBack = new THREE.Mesh(
        new THREE.BoxGeometry(wallThickness, secondFloorWallHeight, backRightWallDepth),
        shopWallMaterial
      );
      rightWallBack.position.set(
        secondFloorOuterRightX - wallThickness * 0.5,
        secondFloorWallCenterY,
        secondFloorOuterBackZ + backRightWallDepth * 0.5
      );
      rightWallBack.castShadow = true;
      rightWallBack.receiveShadow = true;
      registerSecondFloorColliderMesh(rightWallBack);
      secondFloorGroup.add(rightWallBack);
    }

    const doorwayLintelHeight = Math.max(0.18, secondFloorWallHeight - secondFloorDoorHeight);
    if (doorwayLintelHeight > 0.18) {
      const doorwayLintel = new THREE.Mesh(
        new THREE.BoxGeometry(wallThickness, doorwayLintelHeight, doorOpeningDepth),
        shopWallMaterial
      );
      doorwayLintel.position.set(
        secondFloorOuterRightX - wallThickness * 0.5,
        secondFloorDeckTopY + secondFloorDoorHeight + doorwayLintelHeight * 0.5,
        doorOpeningCenterZ
      );
      doorwayLintel.castShadow = true;
      doorwayLintel.receiveShadow = true;
      registerSecondFloorColliderMesh(doorwayLintel);
      secondFloorGroup.add(doorwayLintel);
    }

    const secondFloorLanding = new THREE.Mesh(
      new THREE.BoxGeometry(secondFloorLandingWidth, tileThickness, secondFloorLandingDepth),
      interiorTileMaterial
    );
    secondFloorLanding.position.set(
      secondFloorLandingCenterX,
      secondFloorDeckTopY + tileThickness * 0.5 + 0.01,
      secondFloorLandingCenterZ
    );
    secondFloorLanding.castShadow = true;
    secondFloorLanding.receiveShadow = true;
    registerSecondFloorColliderMesh(secondFloorLanding);
    secondFloorGroup.add(secondFloorLanding);

    if (secondFloorSideEndFillDepth > 0.16) {
      const sideEndFillSupportHeight = secondFloorDeckTopY - groundTopY + 0.02;
      const sideEndFillSupport = new THREE.Mesh(
        new THREE.BoxGeometry(stairWidth, sideEndFillSupportHeight, secondFloorSideEndFillDepth + 0.04),
        interiorTileMaterial
      );
      sideEndFillSupport.position.set(
        secondFloorStairWallX + secondFloorStairSide * stairWidth * 0.5,
        groundTopY + sideEndFillSupportHeight * 0.5,
        secondFloorOuterBackZ + secondFloorSideEndFillDepth * 0.5
      );
      sideEndFillSupport.castShadow = true;
      sideEndFillSupport.receiveShadow = true;
      // Intentionally NOT registered as a world collider — this is purely visual fill.
      // Registering it blocks the player at the final stair step because the full-height
      // box sits right at stairBackZ and the player's feet haven't reached deck height yet.
      sideEndFillSupport.userData.excludeWorldCollider = true;
      secondFloorGroup.add(sideEndFillSupport);

      const sideEndFill = new THREE.Mesh(
        new THREE.BoxGeometry(stairWidth, tileThickness, secondFloorSideEndFillDepth + 0.04),
        interiorTileMaterial
      );
      sideEndFill.position.set(
        secondFloorStairWallX + secondFloorStairSide * stairWidth * 0.5,
        secondFloorDeckTopY + tileThickness * 0.5 + 0.01,
        secondFloorOuterBackZ + secondFloorSideEndFillDepth * 0.5
      );
      sideEndFill.castShadow = true;
      sideEndFill.receiveShadow = true;
      registerSecondFloorColliderMesh(sideEndFill);
      secondFloorGroup.add(sideEndFill);
    }

    const stairColliderMaterial = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0,
      depthWrite: false,
      color: 0xffffff,
    });

    for (let row = 0; row < secondFloorPadRows; row += 1) {
      const t = secondFloorPadRows > 1 ? row / (secondFloorPadRows - 1) : 0;
      const padZ = secondFloorDeckFrontZ + (secondFloorDeckBackZ - secondFloorDeckFrontZ) * t;

      const leftPad = new THREE.Mesh(new THREE.BoxGeometry(padWidth, padThickness, padDepth), interiorPadMaterial);
      leftPad.position.set(leftPadCenterX, secondFloorDeckTopY + padThickness * 0.5 + 0.01, padZ);
      leftPad.userData.excludeWorldCollider = true;
      leftPad.receiveShadow = true;
      secondFloorGroup.add(leftPad);
      incomePadMeshes.push(leftPad);
      attachIncomePadLabelSprite(leftPad);

      const rightPad = new THREE.Mesh(new THREE.BoxGeometry(padWidth, padThickness, padDepth), interiorPadMaterial);
      rightPad.position.set(rightPadCenterX, secondFloorDeckTopY + padThickness * 0.5 + 0.01, padZ);
      rightPad.userData.excludeWorldCollider = true;
      rightPad.receiveShadow = true;
      secondFloorGroup.add(rightPad);
      incomePadMeshes.push(rightPad);
      attachIncomePadLabelSprite(rightPad);
    }

    for (let stepIndex = 0; stepIndex < stairStepCount; stepIndex += 1) {
      const stepHeight = stairRise * (stepIndex + 1);
      const step = new THREE.Mesh(
        new THREE.BoxGeometry(stairWidth, stepHeight, stairDepth),
        interiorTileMaterial
      );
      step.position.set(
        secondFloorStairWallX + secondFloorStairSide * stairWidth * 0.5,
        groundTopY + stepHeight * 0.5,
        secondFloorStairFrontZ - stairDepth * stepIndex
      );
      step.castShadow = true;
      step.receiveShadow = true;
      step.userData.excludeWorldCollider = true;
      secondFloorGroup.add(step);

      const stepCollider = new THREE.Mesh(
        new THREE.BoxGeometry(stairColliderWidth, stairColliderThickness, stairColliderDepth),
        stairColliderMaterial
      );
      stepCollider.position.set(
        step.position.x,
        groundTopY + stepHeight - stairColliderThickness * 0.5,
        step.position.z + stairColliderFrontOffsetZ
      );
      stepCollider.visible = false;
      stepCollider.userData.excludeWorldCollider = true;
      secondFloorGroup.add(stepCollider);
    }

    const exteriorWindowHeight = shopHeight * 0.42;
    const sideWindowDepth = 0.08;
    const sideWindowWidth = shopDepth * 0.48;
    const wallWindowY = groundTopY + shopHeight * 0.56;
    const sideWindowInset = 0.03;
    for (const side of [-1, 1]) {
      const sideWindow = new THREE.Mesh(
        new THREE.BoxGeometry(sideWindowDepth, exteriorWindowHeight, sideWindowWidth),
        shopWindowPanelMaterial
      );
      sideWindow.position.set(
        side * (shopWidth * 0.5 - sideWindowDepth * 0.5 - sideWindowInset),
        wallWindowY,
        0
      );
      sideWindow.castShadow = false;
      sideWindow.receiveShadow = true;
      baseGroup.add(sideWindow);
    }

    const backWindowWidth = shopWidth * 0.54;
    const backWindowDepth = 0.08;
    const backWindow = new THREE.Mesh(
      new THREE.BoxGeometry(backWindowWidth, exteriorWindowHeight, backWindowDepth),
      shopWindowPanelMaterial
    );
    backWindow.position.set(0, wallWindowY, backZ + backWindowDepth * 0.5 + sideWindowInset);
    backWindow.castShadow = false;
    backWindow.receiveShadow = true;
    baseGroup.add(backWindow);

    const interiorTopY = groundTopY + floorThickness + 0.01;
    const centerLane = new THREE.Mesh(new THREE.BoxGeometry(laneWidth, laneThickness, laneDepth), interiorLaneMaterial);
    centerLane.position.set(0, interiorTopY + laneThickness * 0.5, 0);
    centerLane.receiveShadow = true;
    baseGroup.add(centerLane);

    const leftStrip = new THREE.Mesh(new THREE.BoxGeometry(sideStripWidth, tileThickness, laneDepth), interiorTileMaterial);
    leftStrip.position.set(-sideStripOffsetX, interiorTopY + tileThickness * 0.5, 0);
    leftStrip.receiveShadow = true;
    baseGroup.add(leftStrip);

    const rightStrip = new THREE.Mesh(new THREE.BoxGeometry(sideStripWidth, tileThickness, laneDepth), interiorTileMaterial);
    rightStrip.position.set(sideStripOffsetX, interiorTopY + tileThickness * 0.5, 0);
    rightStrip.receiveShadow = true;
    baseGroup.add(rightStrip);

    for (let row = 0; row < padRows; row += 1) {
      const t = padRows > 1 ? row / (padRows - 1) : 0;
      const padZ = firstPadZ + (lastPadZ - firstPadZ) * t;
      const leftPad = new THREE.Mesh(new THREE.BoxGeometry(padWidth, padThickness, padDepth), interiorPadMaterial);
      leftPad.position.set(leftPadCenterX, interiorTopY + padThickness * 0.5 + 0.01, padZ);
      leftPad.userData.excludeWorldCollider = true;
      leftPad.receiveShadow = true;
      baseGroup.add(leftPad);
      incomePadMeshes.push(leftPad);
      attachIncomePadLabelSprite(leftPad);

      const rightPad = new THREE.Mesh(new THREE.BoxGeometry(padWidth, padThickness, padDepth), interiorPadMaterial);
      rightPad.position.set(rightPadCenterX, interiorTopY + padThickness * 0.5 + 0.01, padZ);
      rightPad.userData.excludeWorldCollider = true;
      rightPad.receiveShadow = true;
      baseGroup.add(rightPad);
      incomePadMeshes.push(rightPad);
      attachIncomePadLabelSprite(rightPad);
    }

    const secondFloorPadCount = secondFloorPadRows * 2;
    if (secondFloorPadCount > 0 && incomePadMeshes.length >= secondFloorPadCount && incomePadLabelSprites.length >= secondFloorPadCount) {
      const reorderedPadMeshes = incomePadMeshes.slice(secondFloorPadCount).concat(incomePadMeshes.slice(0, secondFloorPadCount));
      incomePadMeshes.length = 0;
      incomePadMeshes.push(...reorderedPadMeshes);

      const reorderedPadLabels = incomePadLabelSprites.slice(secondFloorPadCount).concat(incomePadLabelSprites.slice(0, secondFloorPadCount));
      incomePadLabelSprites.length = 0;
      incomePadLabelSprites.push(...reorderedPadLabels);
    }

    const sign = new THREE.Mesh(new THREE.BoxGeometry(signWidth, signHeight, signDepth), signBoardMaterial);
    sign.position.set(0, frameTopY + playerHeightRef * 0.4, frontZ + 0.28);
    sign.castShadow = true;
    sign.receiveShadow = true;
    baseGroup.add(sign);

    const labelMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(signWidth * 0.96, signHeight * 0.86),
      new THREE.MeshStandardMaterial({ roughness: 0.88, metalness: 0.02 })
    );
    labelMesh.position.set(0, sign.position.y, sign.position.z + signDepth * 0.51);
    baseGroup.add(labelMesh);

    baseGroup.userData.signLabelMesh = labelMesh;
    baseGroup.userData.signLabelText = "";
    baseGroup.userData.setSignLabel = (nextLabel) => {
      const safeLabel = typeof nextLabel === "string" && nextLabel.trim() ? nextLabel.trim() : "Base";
      if (baseGroup.userData.signLabelText === safeLabel) {
        return;
      }
      const nextTexture = createSignTexture(safeLabel);
      if (!nextTexture) {
        return;
      }
      const labelMaterial = labelMesh.material;
      if (labelMaterial.map) {
        labelMaterial.map.dispose();
      }
      labelMaterial.map = nextTexture;
      labelMaterial.needsUpdate = true;
      baseGroup.userData.signLabelText = safeLabel;
    };
    baseGroup.userData.setSignLabel(config.label || "Base");

    const buyPad = new THREE.Mesh(new THREE.BoxGeometry(playerWidthRef * 3.9, 0.12, playerWidthRef * 3.15), buyPadMaterial);
    buyPad.position.set(0, groundTopY + 0.065, frontZ + playerWidthRef * 1.4);
    buyPad.userData.excludeWorldCollider = true;
    buyPad.visible = true;
    buyPad.castShadow = false;
    buyPad.receiveShadow = true;
    baseGroup.add(buyPad);
    baseGroup.userData.buyPadMesh = buyPad;
    baseGroup.userData.incomePadMeshes = incomePadMeshes;
    baseGroup.userData.incomePadLabelSprites = incomePadLabelSprites;
    baseGroup.userData.secondFloorGroup = secondFloorGroup;
    baseGroup.userData.secondFloorCollidableMeshes = secondFloorCollidableMeshes;
    baseGroup.userData.secondFloorStairWalkData = {
      minX: Math.min(secondFloorStairWallX, secondFloorStairWallX + secondFloorStairSide * stairWidth) - 0.12,
      maxX: Math.max(secondFloorStairWallX, secondFloorStairWallX + secondFloorStairSide * stairWidth) + 0.12,
      frontZ: secondFloorOuterFrontZ + 0.04,
      stairBackZ: secondFloorDoorCenterZ + secondFloorLandingDepth * 0.5,
      backZ: secondFloorOuterBackZ - 0.04,
      groundY: groundTopY,
      topY: secondFloorDeckTopY + tileThickness + 0.01,
    };
    baseGroup.userData.interiorWallBounds = {
      minX: -shopWidth * 0.5 + wallThickness,
      maxX: shopWidth * 0.5 - wallThickness,
      minZ: backZ + wallThickness,
      maxZ: frontZ - wallThickness,
    };

    baseGroup.scale.setScalar(baseScale);
    return baseGroup;
  }

  const baseLabel = "Base";

  for (let i = 0; i < shopsPerSide; i += 1) {
    const rowZ = rowStartZ + i * rowPitch;

    const leftBase = createStreetBase({
      label: baseLabel,
    });
    leftBase.position.set(-baseCenterOffsetX, 0, rowZ);
    leftBase.rotation.y = Math.PI * 0.5;
    mapGroup.add(leftBase);
    streetBasePads.push({
      index: streetBasePads.length,
      base: leftBase,
      pad: leftBase.userData.buyPadMesh || null,
      incomePads: Array.isArray(leftBase.userData.incomePadMeshes) ? leftBase.userData.incomePadMeshes : [],
      incomePadLabels: Array.isArray(leftBase.userData.incomePadLabelSprites) ? leftBase.userData.incomePadLabelSprites : [],
      incomePadLabelKeys: [],
      incomePadWorlds: [],
      incomePadOccupants: [],
      padWorld: new THREE.Vector3(),
      side: "left",
      row: i,
    });

    const rightBase = createStreetBase({
      label: baseLabel,
    });
    rightBase.position.set(baseCenterOffsetX, 0, rowZ);
    rightBase.rotation.y = -Math.PI * 0.5;
    mapGroup.add(rightBase);
    streetBasePads.push({
      index: streetBasePads.length,
      base: rightBase,
      pad: rightBase.userData.buyPadMesh || null,
      incomePads: Array.isArray(rightBase.userData.incomePadMeshes) ? rightBase.userData.incomePadMeshes : [],
      incomePadLabels: Array.isArray(rightBase.userData.incomePadLabelSprites) ? rightBase.userData.incomePadLabelSprites : [],
      incomePadLabelKeys: [],
      incomePadWorlds: [],
      incomePadOccupants: [],
      padWorld: new THREE.Vector3(),
      side: "right",
      row: i,
    });
  }

  // Safety pass: guarantee every base has a visible front green buy button.
  for (const basePad of streetBasePads) {
    if (!basePad || !basePad.base) {
      continue;
    }
    if (!basePad.pad || !basePad.pad.parent) {
      const fallbackBuyPad = new THREE.Mesh(new THREE.BoxGeometry(playerWidthRef * 3.9, 0.12, playerWidthRef * 3.15), buyPadMaterial);
      fallbackBuyPad.position.set(0, groundTopY + 0.065, shopDepth * 0.5 + playerWidthRef * 1.4);
      fallbackBuyPad.castShadow = false;
      fallbackBuyPad.receiveShadow = true;
      fallbackBuyPad.userData.excludeWorldCollider = true;
      fallbackBuyPad.visible = true;
      basePad.base.add(fallbackBuyPad);
      basePad.pad = fallbackBuyPad;
      basePad.base.userData.buyPadMesh = fallbackBuyPad;
    } else {
      basePad.pad.visible = true;
      if (!basePad.pad.userData) {
        basePad.pad.userData = {};
      }
      basePad.pad.userData.excludeWorldCollider = true;
    }
  }

  function createMarketStall(options = {}) {
    const stall = new THREE.Group();
    const scaleMultiplier = Number.isFinite(options.scaleMultiplier) ? Math.max(0.8, options.scaleMultiplier) : 1;
    const heightMultiplier = Number.isFinite(options.heightMultiplier) ? Math.max(1, options.heightMultiplier) : 1;
    const includeVendorCounter = Boolean(options.includeVendorCounter);
    const baseWidth = playerWidthRef * 2.5 * scaleMultiplier;
    const baseDepth = playerWidthRef * 2.5 * scaleMultiplier;
    const baseHeight = 0.16;
    const baseTopY = groundTopY + baseHeight;
    const postHeight = playerHeightRef * 0.85 * heightMultiplier;
    const canopyHeight = 0.18;
    const base = new THREE.Mesh(new THREE.BoxGeometry(baseWidth, baseHeight, baseDepth), padMaterial);
    base.position.y = groundTopY + baseHeight * 0.5;
    base.receiveShadow = true;
    stall.add(base);

    const postMaterial = createStudMaterial(0xb9c0ca, { repeatX: 3, repeatY: 3, roughness: 0.84, metalness: 0.05, bumpScale: 0.05 });
    const canopyMaterial = createStudMaterial(0xd84f4f, { repeatX: 3, repeatY: 3, roughness: 0.8, metalness: 0.03, bumpScale: 0.05 });
    const postOffsetX = baseWidth * 0.38;
    const postOffsetZ = baseDepth * 0.38;
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.13, postHeight, 0.13), postMaterial);
        post.position.set(sx * postOffsetX, baseTopY + postHeight * 0.5, sz * postOffsetZ);
        post.castShadow = true;
        post.receiveShadow = true;
        stall.add(post);
      }
    }

    const canopy = new THREE.Mesh(new THREE.BoxGeometry(baseWidth * 0.86, canopyHeight, baseDepth * 0.86), canopyMaterial);
    canopy.position.y = baseTopY + postHeight + canopyHeight * 0.5;
    canopy.castShadow = true;
    canopy.receiveShadow = true;
    stall.add(canopy);

    if (includeVendorCounter) {
      const counterHeight = playerHeightRef * 0.42;
      const counterWidth = playerWidthRef * 0.46 * scaleMultiplier;
      const counterDepth = baseDepth * 0.78;
      const counter = new THREE.Mesh(
        new THREE.BoxGeometry(counterWidth, counterHeight, counterDepth),
        postMaterial
      );
      counter.position.set(-baseWidth * 0.18, baseTopY + counterHeight * 0.5, 0);
      counter.castShadow = true;
      counter.receiveShadow = true;
      stall.add(counter);
      stall.userData.counterFrontX = counter.position.x;
    }

    stall.userData.baseTopY = baseTopY;
    stall.userData.shopkeeperLocalOffset = new THREE.Vector3(baseWidth * 0.08, baseTopY, 0);

    return stall;
  }

  const stallOffsetX = pathWidth * 0.5 + playerWidthRef * 3.3;
  const stallA = createMarketStall({
    scaleMultiplier: ADONIS_SHOP_STAND_SCALE,
    heightMultiplier: ADONIS_SHOP_STAND_HEIGHT_SCALE,
    includeVendorCounter: true,
  });
  stallA.position.set(stallOffsetX, 0, -playerHeightRef * 2.8);
  stallA.userData.standId = ADONIS_SHOP_STAND_ID;
  mapGroup.add(stallA);
  const stallB = createMarketStall();
  stallB.position.set(-stallOffsetX, 0, playerHeightRef * 3.1);
  mapGroup.add(stallB);
  const adonisShopAnchor = new THREE.Group();
  const adonisShopkeeperLocalOffset =
    stallA.userData.shopkeeperLocalOffset instanceof THREE.Vector3
      ? stallA.userData.shopkeeperLocalOffset
      : new THREE.Vector3(
          ADONIS_SHOPKEEPER_LOCAL_OFFSET.x,
          ADONIS_SHOPKEEPER_LOCAL_OFFSET.y,
          ADONIS_SHOPKEEPER_LOCAL_OFFSET.z
        );
  adonisShopAnchor.position.set(
    adonisShopkeeperLocalOffset.x,
    adonisShopkeeperLocalOffset.y,
    adonisShopkeeperLocalOffset.z
  );
  stallA.add(adonisShopAnchor);
  mapGroup.userData.primaryShopStand = stallA;
  mapGroup.userData.primaryShopStandId = ADONIS_SHOP_STAND_ID;
  mapGroup.userData.adonisShopAnchor = adonisShopAnchor;
  let spawnCaveUiAnchor = null;

  function addWallCave(onBackWall) {
    const wallFaceZ = onBackWall ? MAP_HALF_LENGTH : -MAP_HALF_LENGTH;
    const towardStreet = onBackWall ? -1 : 1;
    const frameWidth = pathWidth * 1.9;
    const frameHeight = wallHeight * 1.28;
    const frameDepth = 0.72;
    const openingWidth = pathWidth * 0.9;
    const openingHeight = wallHeight * 0.9;
    const openingDepth = 0.58;
    const trimThickness = 0.18;
    const trimDepth = 0.46;
    const sideButtressWidth = pathWidth * 0.24;
    const sideButtressHeight = frameHeight * 0.95;
    const sideButtressDepth = 0.56;
    const topCrownWidth = frameWidth * 0.56;
    const topCrownHeight = playerHeightRef * 0.38;
    const topCrownDepth = 0.52;
    const thresholdWidth = openingWidth * 1.08;
    const thresholdHeight = 0.18;
    const thresholdDepth = 0.66;
    const lightWidth = pathWidth * 0.13;
    const lightHeight = playerHeightRef * 0.12;
    const lightDepth = 0.2;
    const openingFrameWidth = openingWidth + trimThickness * 2;
    const openingFrameHeight = openingHeight + trimThickness * 2;

    const faceCenterZ = (depth, pad = 0.03) => wallFaceZ + towardStreet * (depth * 0.5 + pad);
    const frameCenterY = groundTopY + frameHeight * 0.5;
    const openingCenterY = groundTopY + openingHeight * 0.5;
    const sideButtressY = groundTopY + sideButtressHeight * 0.5;

    addBox(frameWidth, frameHeight, frameDepth, 0, frameCenterY, faceCenterZ(frameDepth, 0.02), boardMaterial, true, true);
    addBox(openingWidth, openingHeight, openingDepth, 0, openingCenterY, faceCenterZ(openingDepth, 0.04), darkMaterial, false, true);

    addBox(openingFrameWidth, trimThickness, trimDepth, 0, openingCenterY + openingHeight * 0.5 + trimThickness * 0.5, faceCenterZ(trimDepth, 0.05), caveTrimMaterial, true, true);
    addBox(openingFrameWidth, trimThickness, trimDepth, 0, openingCenterY - openingHeight * 0.5 - trimThickness * 0.5, faceCenterZ(trimDepth, 0.05), caveTrimMaterial, true, true);
    addBox(trimThickness, openingFrameHeight, trimDepth, -openingFrameWidth * 0.5 + trimThickness * 0.5, openingCenterY, faceCenterZ(trimDepth, 0.05), caveTrimMaterial, true, true);
    addBox(trimThickness, openingFrameHeight, trimDepth, openingFrameWidth * 0.5 - trimThickness * 0.5, openingCenterY, faceCenterZ(trimDepth, 0.05), caveTrimMaterial, true, true);

    addBox(sideButtressWidth, sideButtressHeight, sideButtressDepth, -frameWidth * 0.56, sideButtressY, faceCenterZ(sideButtressDepth, 0.01), boardMaterial, true, true);
    addBox(sideButtressWidth, sideButtressHeight, sideButtressDepth, frameWidth * 0.56, sideButtressY, faceCenterZ(sideButtressDepth, 0.01), boardMaterial, true, true);

    addBox(topCrownWidth, topCrownHeight, topCrownDepth, 0, groundTopY + frameHeight + topCrownHeight * 0.45, faceCenterZ(topCrownDepth, 0.015), caveTrimMaterial, true, true);
    addBox(thresholdWidth, thresholdHeight, thresholdDepth, 0, groundTopY + thresholdHeight * 0.5, faceCenterZ(thresholdDepth, 0.045), caveTrimMaterial, true, true);

    addBox(lightWidth, lightHeight, lightDepth, -openingWidth * 0.48, openingCenterY + openingHeight * 0.32, faceCenterZ(lightDepth, 0.065), caveGlowMaterial, false, true);
    addBox(lightWidth, lightHeight, lightDepth, openingWidth * 0.48, openingCenterY + openingHeight * 0.32, faceCenterZ(lightDepth, 0.065), caveGlowMaterial, false, true);

    if (!onBackWall && !spawnCaveUiAnchor) {
      spawnCaveUiAnchor = new THREE.Group();
      spawnCaveUiAnchor.position.set(0, groundTopY + frameHeight + topCrownHeight * 0.18, faceCenterZ(topCrownDepth, 0.12));
      mapGroup.add(spawnCaveUiAnchor);
    }
  }

  addWallCave(false);
  addWallCave(true);

  mapGroup.scale.set(MAP_SCALE_XZ, MAP_SCALE_XZ, MAP_SCALE_XZ);
  mapGroup.updateMatrixWorld(true);
  for (const basePad of streetBasePads) {
    if (basePad && basePad.pad) {
      basePad.pad.getWorldPosition(basePad.padWorld);
    }
    if (basePad && Array.isArray(basePad.incomePads)) {
      basePad.incomePadWorlds = basePad.incomePads.map((padMesh) => {
        const world = new THREE.Vector3();
        if (padMesh && padMesh.getWorldPosition) {
          padMesh.getWorldPosition(world);
        }
        return world;
      });
      basePad.incomePadOccupants = new Array(basePad.incomePadWorlds.length).fill(null);
      if (Array.isArray(basePad.incomePadLabels)) {
        basePad.incomePadLabelKeys = new Array(basePad.incomePadLabels.length).fill("");
      }
    }
  }
  mapGroup.userData.spawnCaveUiAnchor = spawnCaveUiAnchor;
  refreshIncomePadAvailabilityVisuals();
  return mapGroup;
}

function buildWorldColliders(root) {
  worldColliders.length = 0;
  if (!root) {
    return;
  }

  const bounds = new THREE.Box3();
  root.updateMatrixWorld(true);
  root.traverse((node) => {
    if (!node.isMesh) {
      return;
    }
    if (node.userData && node.userData.excludeWorldCollider) {
      return;
    }

    const geometry = node.geometry;
    if (!geometry || !geometry.attributes || !geometry.attributes.position) {
      return;
    }
    if (!geometry.boundingBox) {
      geometry.computeBoundingBox();
    }
    if (!geometry.boundingBox) {
      return;
    }

    bounds.copy(geometry.boundingBox).applyMatrix4(node.matrixWorld);
    if (!Number.isFinite(bounds.min.x) || bounds.isEmpty()) {
      return;
    }

    worldColliders.push({
      minX: bounds.min.x,
      maxX: bounds.max.x,
      minY: bounds.min.y,
      maxY: bounds.max.y,
      minZ: bounds.min.z,
      maxZ: bounds.max.z,
    });
  });
}

function hasHorizontalFootprintOverlap(collider, x, z, radius) {
  return !(x + radius < collider.minX || x - radius > collider.maxX || z + radius < collider.minZ || z - radius > collider.maxZ);
}

function resolveHorizontalCollisionAgainstCollider(collider, feetY, radius) {
  if (collider.maxY <= feetY + PLAYER_STEP_HEIGHT) {
    return false;
  }
  if (collider.minY >= feetY + PLAYER_COLLIDER_HEIGHT - 0.02) {
    return false;
  }

  const closestX = clamp(player.position.x, collider.minX, collider.maxX);
  const closestZ = clamp(player.position.z, collider.minZ, collider.maxZ);
  const offsetX = player.position.x - closestX;
  const offsetZ = player.position.z - closestZ;
  const distSq = offsetX * offsetX + offsetZ * offsetZ;
  const radiusSq = radius * radius;
  if (distSq >= radiusSq) {
    return false;
  }

  if (distSq > 1e-9) {
    const distance = Math.sqrt(distSq);
    const pushDistance = radius - distance + COLLISION_EPSILON;
    player.position.x += (offsetX / distance) * pushDistance;
    player.position.z += (offsetZ / distance) * pushDistance;
  } else {
    const toMinX = Math.abs(player.position.x - collider.minX);
    const toMaxX = Math.abs(collider.maxX - player.position.x);
    const toMinZ = Math.abs(player.position.z - collider.minZ);
    const toMaxZ = Math.abs(collider.maxZ - player.position.z);
    const minimum = Math.min(toMinX, toMaxX, toMinZ, toMaxZ);

    if (minimum === toMinX) {
      player.position.x = collider.minX - radius - COLLISION_EPSILON;
    } else if (minimum === toMaxX) {
      player.position.x = collider.maxX + radius + COLLISION_EPSILON;
    } else if (minimum === toMinZ) {
      player.position.z = collider.minZ - radius - COLLISION_EPSILON;
    } else {
      player.position.z = collider.maxZ + radius + COLLISION_EPSILON;
    }
  }

  return true;
}

function resolveHorizontalCollisions(feetY) {
  const radius = PLAYER_COLLIDER_RADIUS;
  const ownerBaseIndex = getActivePlayerBaseIndex();

  for (let iteration = 0; iteration < 4; iteration += 1) {
    let adjusted = false;

    for (const collider of worldColliders) {
      if (resolveHorizontalCollisionAgainstCollider(collider, feetY, radius)) {
        adjusted = true;
      }
    }

    for (const collider of doorLaserColliders) {
      if (ownerBaseIndex >= 0 && collider.baseIndex === ownerBaseIndex) {
        continue;
      }
      if (resolveHorizontalCollisionAgainstCollider(collider, feetY, radius)) {
        adjusted = true;
      }
    }

    if (!adjusted) {
      break;
    }
  }
}

function resolveVerticalCollisions(previousFeetY, proposedFeetY) {
  const radius = PLAYER_COLLIDER_RADIUS * 0.92;
  const previousHeadY = previousFeetY + PLAYER_COLLIDER_HEIGHT;
  const proposedHeadY = proposedFeetY + PLAYER_COLLIDER_HEIGHT;
  let landingY = null;
  let ceilingY = null;

  for (const collider of worldColliders) {
    if (!hasHorizontalFootprintOverlap(collider, player.position.x, player.position.z, radius)) {
      continue;
    }

    if (velocity.y <= 0) {
      const canLandFromAbove =
        previousFeetY >= collider.maxY - 0.03 && proposedFeetY <= collider.maxY && proposedHeadY > collider.maxY + 0.03;
      const canStepUp =
        collider.maxY > previousFeetY &&
        collider.maxY - previousFeetY <= PLAYER_STEP_HEIGHT + 0.06 &&
        proposedFeetY <= collider.maxY + 0.03;
      if (canLandFromAbove || canStepUp) {
        landingY = landingY === null ? collider.maxY : Math.max(landingY, collider.maxY);
        continue;
      }
    }

    if (velocity.y > 0 && previousHeadY <= collider.minY + 0.03 && proposedHeadY >= collider.minY && proposedFeetY < collider.minY - 0.03) {
      const headStopY = collider.minY - PLAYER_COLLIDER_HEIGHT;
      ceilingY = ceilingY === null ? headStopY : Math.min(ceilingY, headStopY);
    }
  }

  if (landingY !== null) {
    player.position.y = landingY;
    velocity.y = 0;
    return true;
  }
  if (ceilingY !== null) {
    player.position.y = ceilingY;
    velocity.y = 0;
    return false;
  }

  player.position.y = proposedFeetY;
  return false;
}

function getSecondFloorStairAssistTargetY() {
  for (let baseIndex = 0; baseIndex < streetBasePads.length; baseIndex += 1) {
    const basePad = streetBasePads[baseIndex];
    const base = basePad && basePad.base;
    const userData = base && base.userData;
    const stairData = userData && userData.secondFloorStairWalkData;
    const secondFloorGroup = userData && userData.secondFloorGroup;
    if (!base || !stairData || !secondFloorGroup || !secondFloorGroup.visible) {
      continue;
    }

    tmpSecondFloorStairLocal.copy(player.position);
    base.worldToLocal(tmpSecondFloorStairLocal);

    if (
      tmpSecondFloorStairLocal.x < stairData.minX - PLAYER_COLLIDER_RADIUS ||
      tmpSecondFloorStairLocal.x > stairData.maxX + PLAYER_COLLIDER_RADIUS ||
      tmpSecondFloorStairLocal.z > stairData.frontZ + PLAYER_COLLIDER_RADIUS * 0.35 ||
      tmpSecondFloorStairLocal.z < stairData.backZ - PLAYER_COLLIDER_RADIUS * 0.35
    ) {
      continue;
    }

    let localTargetY = stairData.topY;
    if (tmpSecondFloorStairLocal.z > stairData.stairBackZ) {
      const riseDenominator = Math.max(0.001, stairData.frontZ - stairData.stairBackZ);
      const progress = clamp((stairData.frontZ - tmpSecondFloorStairLocal.z) / riseDenominator, 0, 1);
      localTargetY = stairData.groundY + (stairData.topY - stairData.groundY) * progress;
    }

    tmpSecondFloorStairWorld.set(tmpSecondFloorStairLocal.x, localTargetY, tmpSecondFloorStairLocal.z);
    base.localToWorld(tmpSecondFloorStairWorld);
    return tmpSecondFloorStairWorld.y;
  }

  return null;
}

function applySecondFloorStairWalkAssist() {
  const targetY = getSecondFloorStairAssistTargetY();
  if (!Number.isFinite(targetY)) {
    return false;
  }
  // If the player has any meaningful upward velocity (i.e. they jumped), don't
  // interfere — let normal gravity/collision handle it. Without this the assist
  // snaps them back to the ramp surface every frame and marks them grounded,
  // letting them jump infinitely.
  if (velocity.y > 0.25) {
    return false;
  }
  // Don't pull the player back down if vertical collision already lifted them onto
  // the landing or deck surface above the ramp line — just mark as grounded.
  if (player.position.y > targetY + 0.04) {
    velocity.y = 0;
    return true;
  }

  player.position.y = targetY;
  velocity.y = 0;
  return true;
}

function snapPlayerToGround(maxDrop) {
  const radius = PLAYER_COLLIDER_RADIUS * 0.92;
  let bestGround = null;
  const feetY = player.position.y;

  for (const collider of worldColliders) {
    if (!hasHorizontalFootprintOverlap(collider, player.position.x, player.position.z, radius)) {
      continue;
    }

    const topY = collider.maxY;
    if (topY > feetY + PLAYER_STEP_HEIGHT + 0.08) {
      continue;
    }
    if (feetY - topY > maxDrop) {
      continue;
    }

    bestGround = bestGround === null ? topY : Math.max(bestGround, topY);
  }

  if (bestGround === null) {
    return false;
  }

  player.position.y = bestGround;
  velocity.y = 0;
  return true;
}

function createRoundedHeadGeometry(radius, height, cornerRadius, radialSegments, cornerSegments) {
  const halfHeight = height * 0.5;
  const corner = Math.min(cornerRadius, radius - 0.02, halfHeight - 0.02);
  const bodyHalf = halfHeight - corner;
  const profile = [];

  profile.push(new THREE.Vector2(0, halfHeight));
  profile.push(new THREE.Vector2(radius - corner, halfHeight));

  for (let i = 1; i <= cornerSegments; i += 1) {
    const t = i / cornerSegments;
    const angle = t * Math.PI * 0.5;
    const x = radius - corner + Math.sin(angle) * corner;
    const y = bodyHalf + Math.cos(angle) * corner;
    profile.push(new THREE.Vector2(x, y));
  }

  profile.push(new THREE.Vector2(radius, -bodyHalf));

  for (let i = 1; i <= cornerSegments; i += 1) {
    const t = i / cornerSegments;
    const angle = t * Math.PI * 0.5;
    const x = radius - corner + Math.cos(angle) * corner;
    const y = -bodyHalf - Math.sin(angle) * corner;
    profile.push(new THREE.Vector2(x, y));
  }

  profile.push(new THREE.Vector2(0, -halfHeight));

  const geometry = new THREE.LatheGeometry(profile, radialSegments);
  geometry.computeVertexNormals();
  return geometry;
}

function createCurvedCircleGeometry(radius, segments, curveDepth) {
  const geometry = new THREE.CircleGeometry(radius, segments);
  const positionAttr = geometry.attributes.position;
  for (let i = 0; i < positionAttr.count; i += 1) {
    const x = positionAttr.getX(i);
    const y = positionAttr.getY(i);
    const radial = Math.min(1, Math.sqrt(x * x + y * y) / radius);
    const z = -curveDepth * radial * radial;
    positionAttr.setZ(i, z);
  }
  positionAttr.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
}

function createCurvedPlaneGeometry(width, height, widthSegments, heightSegments, curveDepth) {
  const geometry = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
  const positionAttr = geometry.attributes.position;
  const halfWidth = width * 0.5 || 1;
  for (let i = 0; i < positionAttr.count; i += 1) {
    const x = positionAttr.getX(i);
    const normalized = x / halfWidth;
    const z = -curveDepth * normalized * normalized;
    positionAttr.setZ(i, z);
  }
  positionAttr.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
}

function createFaceTexture(faceStyle) {
  const size = 256;
  const faceCanvas = document.createElement("canvas");
  faceCanvas.width = size;
  faceCanvas.height = size;
  const ctx = faceCanvas.getContext("2d");
  if (!ctx) {
    return createSolidTexture("#17110d");
  }
  const centerX = size * 0.5;
  const eyeY = size * 0.42;
  const leftEyeX = size * 0.36;
  const rightEyeX = size * 0.64;

  ctx.clearRect(0, 0, size, size);
  ctx.strokeStyle = "#17110d";
  ctx.fillStyle = "#17110d";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  function drawEyeCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawEyeArc(x, y, radius, start, end) {
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(x, y, radius, start, end);
    ctx.stroke();
  }

  if (faceStyle === "neutral") {
    drawEyeCircle(leftEyeX, eyeY, 12);
    drawEyeCircle(rightEyeX, eyeY, 12);
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(size * 0.37, size * 0.66);
    ctx.lineTo(size * 0.63, size * 0.66);
    ctx.stroke();
  } else if (faceStyle === "grin") {
    drawEyeArc(leftEyeX, eyeY, 16, Math.PI * 0.08, Math.PI * 0.92);
    drawEyeArc(rightEyeX, eyeY, 16, Math.PI * 0.08, Math.PI * 0.92);
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(centerX, size * 0.63, 44, 0.18 * Math.PI, 0.82 * Math.PI, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(size * 0.42, size * 0.66);
    ctx.lineTo(size * 0.58, size * 0.66);
    ctx.stroke();
  } else if (faceStyle === "wink") {
    drawEyeArc(leftEyeX, eyeY, 15, Math.PI * 0.12, Math.PI * 0.88);
    drawEyeCircle(rightEyeX, eyeY, 12);
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(centerX, size * 0.64, 40, 0.2 * Math.PI, 0.9 * Math.PI, false);
    ctx.stroke();
  } else {
    drawEyeCircle(leftEyeX, eyeY, 12);
    drawEyeCircle(rightEyeX, eyeY, 12);
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(centerX, size * 0.63, 42, 0.1 * Math.PI, 0.9 * Math.PI, false);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(faceCanvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  return texture;
}

function createLeoPortraitTexture() {
  const size = 512;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = size;
  canvasEl.height = size;
  const ctx = canvasEl.getContext("2d");
  if (!ctx) {
    return createSolidTexture("#9fc1e8");
  }

  const centerX = size * 0.5;
  const headCenterY = size * 0.45;

  // Studio-like background.
  const bgGradient = ctx.createLinearGradient(0, 0, 0, size);
  bgGradient.addColorStop(0, "#d7e4f6");
  bgGradient.addColorStop(0.54, "#aac5e4");
  bgGradient.addColorStop(1, "#8eafd7");
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, size, size);

  const vignette = ctx.createRadialGradient(centerX, size * 0.42, size * 0.08, centerX, size * 0.45, size * 0.68);
  vignette.addColorStop(0, "rgba(255,255,255,0)");
  vignette.addColorStop(1, "rgba(31,58,94,0.34)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, size, size);

  // Film grain for a photographic look.
  for (let i = 0; i < 2600; i += 1) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const alpha = Math.random() * 0.08;
    ctx.fillStyle = i % 2 === 0 ? `rgba(255,255,255,${alpha})` : `rgba(22,35,55,${alpha})`;
    ctx.fillRect(x, y, 1.4, 1.4);
  }

  // Blazer.
  ctx.fillStyle = "#2a3041";
  ctx.beginPath();
  ctx.moveTo(size * 0.09, size);
  ctx.lineTo(size * 0.91, size);
  ctx.lineTo(size * 0.74, size * 0.66);
  ctx.lineTo(size * 0.26, size * 0.66);
  ctx.closePath();
  ctx.fill();

  // Shirt + tie.
  ctx.fillStyle = "#fbfdff";
  ctx.beginPath();
  ctx.moveTo(size * 0.31, size * 0.99);
  ctx.lineTo(size * 0.5, size * 0.69);
  ctx.lineTo(size * 0.69, size * 0.99);
  ctx.closePath();
  ctx.fill();

  const tieGradient = ctx.createLinearGradient(centerX, size * 0.71, centerX, size * 0.98);
  tieGradient.addColorStop(0, "#263758");
  tieGradient.addColorStop(1, "#1a2439");
  ctx.fillStyle = tieGradient;
  ctx.beginPath();
  ctx.moveTo(size * 0.46, size * 0.79);
  ctx.lineTo(size * 0.54, size * 0.79);
  ctx.lineTo(size * 0.57, size * 0.98);
  ctx.lineTo(size * 0.43, size * 0.98);
  ctx.closePath();
  ctx.fill();

  // Neck.
  const neckGradient = ctx.createLinearGradient(centerX, size * 0.6, centerX, size * 0.76);
  neckGradient.addColorStop(0, "#f0c8ab");
  neckGradient.addColorStop(1, "#dca686");
  ctx.fillStyle = neckGradient;
  ctx.fillRect(size * 0.44, size * 0.58, size * 0.12, size * 0.16);

  // Ears.
  ctx.fillStyle = "#e9bfa0";
  ctx.beginPath();
  ctx.ellipse(size * 0.33, size * 0.45, 20, 30, -0.1, 0, Math.PI * 2);
  ctx.ellipse(size * 0.67, size * 0.45, 20, 30, 0.1, 0, Math.PI * 2);
  ctx.fill();

  // Face base with soft shading.
  const faceGradient = ctx.createRadialGradient(centerX, size * 0.39, 16, centerX, size * 0.47, size * 0.22);
  faceGradient.addColorStop(0, "#f7d6be");
  faceGradient.addColorStop(0.55, "#efc2a3");
  faceGradient.addColorStop(1, "#d9a788");
  ctx.fillStyle = faceGradient;
  ctx.beginPath();
  ctx.ellipse(centerX, headCenterY, 104, 126, 0, 0, Math.PI * 2);
  ctx.fill();

  // Cheek/lower-face contour.
  const jawShadow = ctx.createRadialGradient(centerX, size * 0.58, 12, centerX, size * 0.63, 86);
  jawShadow.addColorStop(0, "rgba(184,118,98,0)");
  jawShadow.addColorStop(1, "rgba(168,105,86,0.33)");
  ctx.fillStyle = jawShadow;
  ctx.beginPath();
  ctx.ellipse(centerX, size * 0.61, 86, 42, 0, 0, Math.PI * 2);
  ctx.fill();

  // Nose bridge + tip shading.
  const noseGrad = ctx.createLinearGradient(centerX, size * 0.42, centerX, size * 0.57);
  noseGrad.addColorStop(0, "rgba(214,148,126,0)");
  noseGrad.addColorStop(0.55, "rgba(194,126,106,0.34)");
  noseGrad.addColorStop(1, "rgba(184,116,96,0)");
  ctx.fillStyle = noseGrad;
  ctx.beginPath();
  ctx.ellipse(centerX, size * 0.5, 19, 50, 0, 0, Math.PI * 2);
  ctx.fill();

  // Hair cap.
  const hairGrad = ctx.createLinearGradient(0, size * 0.2, 0, size * 0.42);
  hairGrad.addColorStop(0, "#8f5f39");
  hairGrad.addColorStop(1, "#5d3a21");
  ctx.fillStyle = hairGrad;
  ctx.beginPath();
  ctx.moveTo(size * 0.29, size * 0.43);
  ctx.quadraticCurveTo(size * 0.32, size * 0.2, size * 0.51, size * 0.18);
  ctx.quadraticCurveTo(size * 0.69, size * 0.2, size * 0.72, size * 0.42);
  ctx.quadraticCurveTo(size * 0.65, size * 0.36, size * 0.58, size * 0.34);
  ctx.quadraticCurveTo(size * 0.5, size * 0.31, size * 0.42, size * 0.35);
  ctx.quadraticCurveTo(size * 0.35, size * 0.37, size * 0.29, size * 0.43);
  ctx.closePath();
  ctx.fill();

  // Hair shadow cast on forehead for depth.
  const foreheadShadow = ctx.createRadialGradient(centerX, size * 0.37, 10, centerX, size * 0.42, 108);
  foreheadShadow.addColorStop(0, "rgba(54,31,18,0.36)");
  foreheadShadow.addColorStop(1, "rgba(54,31,18,0)");
  ctx.fillStyle = foreheadShadow;
  ctx.beginPath();
  ctx.ellipse(centerX, size * 0.41, 102, 62, 0, 0, Math.PI * 2);
  ctx.fill();

  // Dense curly crown + fringe clusters.
  const curls = [
    [0.28, 0.34, 14], [0.31, 0.31, 16], [0.34, 0.28, 18], [0.37, 0.26, 18],
    [0.41, 0.24, 17], [0.45, 0.23, 17], [0.49, 0.225, 18], [0.53, 0.225, 17],
    [0.57, 0.24, 17], [0.61, 0.26, 18], [0.64, 0.285, 17], [0.67, 0.31, 16],
    [0.7, 0.34, 14], [0.34, 0.34, 16], [0.39, 0.33, 15], [0.44, 0.325, 14],
    [0.49, 0.322, 14], [0.54, 0.324, 14], [0.59, 0.33, 15], [0.64, 0.34, 16],
  ];
  curls.forEach((curl, index) => {
    const cx = size * curl[0];
    const cy = size * curl[1];
    const radius = curl[2];
    const grad = ctx.createRadialGradient(cx - radius * 0.2, cy - radius * 0.25, radius * 0.25, cx, cy, radius);
    grad.addColorStop(0, index % 3 === 0 ? "#9b6a45" : "#845533");
    grad.addColorStop(0.62, "#6e452b");
    grad.addColorStop(1, "#4f311d");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
  });

  // Side fade / undercut tint on both sides.
  const leftFade = ctx.createLinearGradient(size * 0.275, size * 0.28, size * 0.35, size * 0.5);
  leftFade.addColorStop(0, "rgba(83,53,33,0.38)");
  leftFade.addColorStop(1, "rgba(83,53,33,0)");
  ctx.fillStyle = leftFade;
  ctx.beginPath();
  ctx.ellipse(size * 0.31, size * 0.41, 24, 58, -0.16, 0, Math.PI * 2);
  ctx.fill();

  const rightFade = ctx.createLinearGradient(size * 0.725, size * 0.28, size * 0.65, size * 0.5);
  rightFade.addColorStop(0, "rgba(83,53,33,0.38)");
  rightFade.addColorStop(1, "rgba(83,53,33,0)");
  ctx.fillStyle = rightFade;
  ctx.beginPath();
  ctx.ellipse(size * 0.69, size * 0.41, 24, 58, 0.16, 0, Math.PI * 2);
  ctx.fill();

  // Ringlet loops in the fringe.
  ctx.strokeStyle = "rgba(72,44,25,0.58)";
  ctx.lineWidth = 2.4;
  ctx.lineCap = "round";
  for (let i = 0; i < 24; i += 1) {
    const x = size * (0.31 + i * 0.016);
    const y = size * (0.275 + Math.sin(i * 0.82) * 0.018);
    const loopHeight = 8 + (i % 4);
    ctx.beginPath();
    ctx.moveTo(x - 4, y);
    ctx.bezierCurveTo(x - 1, y + loopHeight, x + 5, y + loopHeight, x + 2, y + 1);
    ctx.stroke();
  }

  // Fine strand highlights for texture breakup.
  ctx.strokeStyle = "rgba(224,166,124,0.26)";
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 62; i += 1) {
    const px = size * (0.3 + (i / 62) * 0.41);
    const py = size * (0.245 + Math.sin(i * 0.58) * 0.022);
    ctx.beginPath();
    ctx.moveTo(px - 3, py + 3);
    ctx.quadraticCurveTo(px, py - 3 - (i % 3), px + 3, py + 2);
    ctx.stroke();
  }

  // Flyaway wisps.
  ctx.strokeStyle = "rgba(122,79,50,0.65)";
  ctx.lineWidth = 1.25;
  for (let i = 0; i < 12; i += 1) {
    const fx = size * (0.34 + i * 0.03);
    const fy = size * (0.21 - Math.sin(i * 1.2) * 0.008);
    ctx.beginPath();
    ctx.moveTo(fx, fy + 6);
    ctx.quadraticCurveTo(fx + 2, fy - 8 - (i % 3), fx + 1, fy - 3);
    ctx.stroke();
  }

  // Temple and cheekbone shading for stronger structure.
  const templeShade = ctx.createRadialGradient(centerX, size * 0.47, 26, centerX, size * 0.47, 150);
  templeShade.addColorStop(0, "rgba(145,90,74,0)");
  templeShade.addColorStop(1, "rgba(133,79,64,0.32)");
  ctx.fillStyle = templeShade;
  ctx.beginPath();
  ctx.ellipse(size * 0.35, size * 0.49, 32, 58, -0.2, 0, Math.PI * 2);
  ctx.ellipse(size * 0.65, size * 0.49, 32, 58, 0.2, 0, Math.PI * 2);
  ctx.fill();

  // Ear anatomy lines.
  ctx.strokeStyle = "rgba(153,97,80,0.52)";
  ctx.lineWidth = 1.7;
  ctx.beginPath();
  ctx.arc(size * 0.327, size * 0.453, 11, 0.2 * Math.PI, 1.56 * Math.PI);
  ctx.moveTo(size * 0.337, size * 0.458);
  ctx.quadraticCurveTo(size * 0.344, size * 0.442, size * 0.341, size * 0.478);
  ctx.moveTo(size * 0.673, size * 0.453);
  ctx.arc(size * 0.673, size * 0.453, 11, 1.46 * Math.PI, 0.82 * Math.PI, true);
  ctx.moveTo(size * 0.663, size * 0.458);
  ctx.quadraticCurveTo(size * 0.656, size * 0.442, size * 0.659, size * 0.478);
  ctx.stroke();

  // Eyebrows with strand detail.
  ctx.strokeStyle = "#5f3a22";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(size * 0.39, size * 0.43);
  ctx.quadraticCurveTo(size * 0.44, size * 0.41, size * 0.47, size * 0.43);
  ctx.moveTo(size * 0.53, size * 0.43);
  ctx.quadraticCurveTo(size * 0.57, size * 0.41, size * 0.62, size * 0.43);
  ctx.stroke();
  ctx.strokeStyle = "rgba(109,67,39,0.66)";
  ctx.lineWidth = 1.2;
  for (let i = 0; i < 16; i += 1) {
    const lx = size * (0.387 + i * 0.0054);
    const ly = size * (0.428 - Math.sin(i * 0.45) * 0.004);
    ctx.beginPath();
    ctx.moveTo(lx, ly + 2);
    ctx.lineTo(lx + 2, ly - 2);
    ctx.stroke();
    const rx = size * (0.53 + i * 0.0054);
    const ry = size * (0.428 - Math.sin((i + 3) * 0.45) * 0.004);
    ctx.beginPath();
    ctx.moveTo(rx + 2, ry + 2);
    ctx.lineTo(rx, ry - 2);
    ctx.stroke();
  }

  // Eyes (sclera, iris depth, pupil ring, highlights, lids/lashes).
  function drawEye(cx, cy, irisColor) {
    const sclera = ctx.createRadialGradient(cx, cy, 4, cx, cy, 17);
    sclera.addColorStop(0, "#ffffff");
    sclera.addColorStop(1, "#dbe4ec");
    ctx.fillStyle = sclera;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 17, 11, 0, 0, Math.PI * 2);
    ctx.fill();

    const irisGrad = ctx.createRadialGradient(cx - 2, cy - 2, 2, cx, cy, 8);
    irisGrad.addColorStop(0, "#b2dcff");
    irisGrad.addColorStop(0.52, irisColor);
    irisGrad.addColorStop(1, "#213447");
    ctx.fillStyle = irisGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(23,31,43,0.72)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(cx, cy, 8, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = "#121212";
    ctx.beginPath();
    ctx.arc(cx, cy, 3.4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.beginPath();
    ctx.arc(cx - 2.2, cy - 2.2, 1.8, 0, Math.PI * 2);
    ctx.arc(cx + 2.4, cy + 1.8, 0.9, 0, Math.PI * 2);
    ctx.fill();

    // Upper lid and lower lid lines.
    ctx.strokeStyle = "rgba(88,52,40,0.62)";
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.arc(cx, cy - 1.2, 17, 1.03 * Math.PI, 1.96 * Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "rgba(110,70,55,0.38)";
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.arc(cx, cy + 1.3, 15, 0.06 * Math.PI, 0.94 * Math.PI);
    ctx.stroke();
  }

  const leftEyeX = size * 0.435;
  const rightEyeX = size * 0.565;
  const eyeY = size * 0.468;
  drawEye(leftEyeX, eyeY, "#4a769f");
  drawEye(rightEyeX, eyeY, "#4a769f");

  // Eyelashes.
  ctx.strokeStyle = "rgba(70,42,28,0.55)";
  ctx.lineWidth = 1.1;
  for (let i = 0; i < 8; i += 1) {
    const lx = leftEyeX - 13 + i * 3.6;
    const ly = eyeY - 9 - Math.sin(i * 0.6) * 1.2;
    ctx.beginPath();
    ctx.moveTo(lx, ly);
    ctx.lineTo(lx - 1.8, ly - 2.6);
    ctx.stroke();
    const rx = rightEyeX - 13 + i * 3.6;
    const ry = eyeY - 9 - Math.sin(i * 0.6) * 1.2;
    ctx.beginPath();
    ctx.moveTo(rx, ry);
    ctx.lineTo(rx + 1.8, ry - 2.6);
    ctx.stroke();
  }

  // Under-eye and inner corner shading.
  const underEye = ctx.createLinearGradient(0, size * 0.47, 0, size * 0.53);
  underEye.addColorStop(0, "rgba(130,86,72,0)");
  underEye.addColorStop(1, "rgba(130,86,72,0.23)");
  ctx.fillStyle = underEye;
  ctx.beginPath();
  ctx.ellipse(leftEyeX, size * 0.505, 20, 8, -0.08, 0, Math.PI * 2);
  ctx.ellipse(rightEyeX, size * 0.505, 20, 8, 0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(216,157,140,0.36)";
  ctx.beginPath();
  ctx.arc(size * 0.472, size * 0.476, 2.1, 0, Math.PI * 2);
  ctx.arc(size * 0.528, size * 0.476, 2.1, 0, Math.PI * 2);
  ctx.fill();

  // Nose side planes + bridge highlight.
  const noseSideL = ctx.createLinearGradient(size * 0.462, size * 0.46, size * 0.47, size * 0.58);
  noseSideL.addColorStop(0, "rgba(185,118,98,0)");
  noseSideL.addColorStop(1, "rgba(160,96,79,0.36)");
  ctx.fillStyle = noseSideL;
  ctx.beginPath();
  ctx.ellipse(size * 0.468, size * 0.53, 9, 34, -0.08, 0, Math.PI * 2);
  ctx.fill();
  const noseSideR = ctx.createLinearGradient(size * 0.538, size * 0.46, size * 0.53, size * 0.58);
  noseSideR.addColorStop(0, "rgba(185,118,98,0)");
  noseSideR.addColorStop(1, "rgba(160,96,79,0.33)");
  ctx.fillStyle = noseSideR;
  ctx.beginPath();
  ctx.ellipse(size * 0.532, size * 0.53, 9, 34, 0.08, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "rgba(146,90,74,0.5)";
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.moveTo(centerX, size * 0.47);
  ctx.quadraticCurveTo(size * 0.51, size * 0.53, size * 0.5, size * 0.56);
  ctx.stroke();
  ctx.strokeStyle = "rgba(247,220,205,0.36)";
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(centerX, size * 0.45);
  ctx.quadraticCurveTo(size * 0.502, size * 0.5, size * 0.5, size * 0.54);
  ctx.stroke();

  // Nostrils + nasolabial hints.
  ctx.fillStyle = "rgba(159,95,79,0.46)";
  ctx.beginPath();
  ctx.ellipse(size * 0.485, size * 0.565, 2.5, 2.2, 0, 0, Math.PI * 2);
  ctx.ellipse(size * 0.515, size * 0.565, 2.5, 2.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(150,94,79,0.26)";
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(size * 0.456, size * 0.574);
  ctx.quadraticCurveTo(size * 0.436, size * 0.588, size * 0.43, size * 0.607);
  ctx.moveTo(size * 0.544, size * 0.574);
  ctx.quadraticCurveTo(size * 0.564, size * 0.588, size * 0.57, size * 0.607);
  ctx.stroke();

  // Philtrum.
  ctx.strokeStyle = "rgba(153,96,80,0.34)";
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.moveTo(centerX, size * 0.571);
  ctx.quadraticCurveTo(size * 0.503, size * 0.586, size * 0.5, size * 0.596);
  ctx.stroke();

  // Lips: upper lip fill + lower lip volume + gloss.
  const upperLip = ctx.createLinearGradient(centerX, size * 0.594, centerX, size * 0.612);
  upperLip.addColorStop(0, "rgba(173,107,92,0.72)");
  upperLip.addColorStop(1, "rgba(147,87,74,0.86)");
  ctx.fillStyle = upperLip;
  ctx.beginPath();
  ctx.moveTo(size * 0.464, size * 0.606);
  ctx.quadraticCurveTo(size * 0.482, size * 0.595, size * 0.5, size * 0.602);
  ctx.quadraticCurveTo(size * 0.518, size * 0.595, size * 0.536, size * 0.606);
  ctx.quadraticCurveTo(size * 0.518, size * 0.612, size * 0.5, size * 0.611);
  ctx.quadraticCurveTo(size * 0.482, size * 0.612, size * 0.464, size * 0.606);
  ctx.closePath();
  ctx.fill();

  const lowerLip = ctx.createLinearGradient(centerX, size * 0.607, centerX, size * 0.636);
  lowerLip.addColorStop(0, "rgba(201,129,111,0.72)");
  lowerLip.addColorStop(1, "rgba(162,98,83,0.8)");
  ctx.fillStyle = lowerLip;
  ctx.beginPath();
  ctx.ellipse(centerX, size * 0.617, 19, 7.8, 0, 0, Math.PI);
  ctx.fill();
  ctx.fillStyle = "rgba(245,210,196,0.52)";
  ctx.beginPath();
  ctx.ellipse(centerX, size * 0.613, 11, 2.5, 0, 0, Math.PI);
  ctx.fill();
  ctx.strokeStyle = "rgba(138,82,69,0.66)";
  ctx.lineWidth = 1.7;
  ctx.beginPath();
  ctx.arc(centerX, size * 0.605, 18, 0.14 * Math.PI, 0.88 * Math.PI);
  ctx.stroke();

  // Subtle cheek warmth.
  ctx.fillStyle = "rgba(214,132,122,0.16)";
  ctx.beginPath();
  ctx.ellipse(size * 0.385, size * 0.54, 18, 12, -0.2, 0, Math.PI * 2);
  ctx.ellipse(size * 0.615, size * 0.54, 18, 12, 0.2, 0, Math.PI * 2);
  ctx.fill();

  // Light skin micro texture (faint freckles/pores).
  const skinDots = [
    [0.418, 0.516], [0.434, 0.534], [0.458, 0.548], [0.476, 0.536], [0.524, 0.537], [0.546, 0.55],
    [0.57, 0.536], [0.587, 0.515], [0.455, 0.497], [0.545, 0.497], [0.402, 0.548], [0.598, 0.548],
  ];
  ctx.fillStyle = "rgba(157,97,82,0.22)";
  for (const dot of skinDots) {
    ctx.beginPath();
    ctx.arc(size * dot[0], size * dot[1], 0.95, 0, Math.PI * 2);
    ctx.fill();
  }

  // Jaw and chin contour.
  ctx.strokeStyle = "rgba(139,86,71,0.36)";
  ctx.lineWidth = 1.25;
  ctx.beginPath();
  ctx.moveTo(size * 0.405, size * 0.61);
  ctx.quadraticCurveTo(size * 0.5, size * 0.664, size * 0.595, size * 0.61);
  ctx.stroke();
  ctx.fillStyle = "rgba(255,231,219,0.23)";
  ctx.beginPath();
  ctx.ellipse(centerX, size * 0.637, 10, 5.2, 0, 0, Math.PI * 2);
  ctx.fill();

  // Face highlight pass.
  const highlight = ctx.createRadialGradient(size * 0.44, size * 0.34, 8, size * 0.47, size * 0.41, 85);
  highlight.addColorStop(0, "rgba(255,255,255,0.23)");
  highlight.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = highlight;
  ctx.beginPath();
  ctx.ellipse(centerX, headCenterY, 104, 126, 0, 0, Math.PI * 2);
  ctx.fill();

  // Tiny skin sheen dots to finish realism.
  ctx.fillStyle = "rgba(255,244,236,0.18)";
  const sheenDots = [
    [0.462, 0.414], [0.482, 0.406], [0.502, 0.404], [0.522, 0.409], [0.541, 0.418], [0.5, 0.458], [0.5, 0.603],
  ];
  for (const dot of sheenDots) {
    ctx.beginPath();
    ctx.arc(size * dot[0], size * dot[1], 1.2, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  return texture;
}

function createLeoPixelPortraitTexture() {
  const sourceTexture = createLeoPortraitTexture();
  const sourceImage = sourceTexture && sourceTexture.image ? sourceTexture.image : null;
  const tinyCanvas = document.createElement("canvas");
  tinyCanvas.width = 64;
  tinyCanvas.height = 64;
  const tinyCtx = tinyCanvas.getContext("2d");

  const finalCanvas = document.createElement("canvas");
  finalCanvas.width = 512;
  finalCanvas.height = 512;
  const finalCtx = finalCanvas.getContext("2d");

  if (!tinyCtx || !finalCtx || !sourceImage) {
    if (sourceTexture && typeof sourceTexture.dispose === "function") {
      sourceTexture.dispose();
    }
    return createSolidTexture("#9fc1e8");
  }

  tinyCtx.imageSmoothingEnabled = false;
  tinyCtx.drawImage(sourceImage, 0, 0, tinyCanvas.width, tinyCanvas.height);
  finalCtx.imageSmoothingEnabled = false;
  finalCtx.drawImage(tinyCanvas, 0, 0, finalCanvas.width, finalCanvas.height);

  if (sourceTexture && typeof sourceTexture.dispose === "function") {
    sourceTexture.dispose();
  }

  const texture = new THREE.CanvasTexture(finalCanvas);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  return texture;
}

function createLeoStylizedFaceTexture() {
  const size = 512;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = size;
  canvasEl.height = size;
  const ctx = canvasEl.getContext("2d");
  if (!ctx) {
    return createSolidTexture(LEO_SKIN_TONE);
  }

  const centerX = size * 0.5;
  const centerY = size * 0.5;
  ctx.clearRect(0, 0, size, size);

  const faceGrad = ctx.createRadialGradient(centerX - 22, centerY - 46, 16, centerX, centerY, 168);
  faceGrad.addColorStop(0, "#f7dbc5");
  faceGrad.addColorStop(0.65, "#edc2a4");
  faceGrad.addColorStop(1, "#d7a789");
  ctx.fillStyle = faceGrad;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, 154, 184, 0, 0, Math.PI * 2);
  ctx.fill();

  // Hairline cap to match curly hair silhouette.
  const hairlineGrad = ctx.createLinearGradient(0, size * 0.14, 0, size * 0.38);
  hairlineGrad.addColorStop(0, "#8d5d38");
  hairlineGrad.addColorStop(1, "#5a3822");
  ctx.fillStyle = hairlineGrad;
  ctx.beginPath();
  ctx.moveTo(size * 0.22, size * 0.4);
  ctx.quadraticCurveTo(size * 0.24, size * 0.14, size * 0.5, size * 0.12);
  ctx.quadraticCurveTo(size * 0.76, size * 0.14, size * 0.78, size * 0.4);
  ctx.quadraticCurveTo(size * 0.69, size * 0.28, size * 0.5, size * 0.27);
  ctx.quadraticCurveTo(size * 0.31, size * 0.28, size * 0.22, size * 0.4);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "#5d3a21";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(size * 0.36, size * 0.4);
  ctx.quadraticCurveTo(size * 0.42, size * 0.37, size * 0.47, size * 0.4);
  ctx.moveTo(size * 0.53, size * 0.4);
  ctx.quadraticCurveTo(size * 0.58, size * 0.37, size * 0.64, size * 0.4);
  ctx.stroke();

  function drawEye(cx, cy) {
    ctx.fillStyle = "#f7fbff";
    ctx.beginPath();
    ctx.ellipse(cx, cy, 34, 21, 0, 0, Math.PI * 2);
    ctx.fill();

    const iris = ctx.createRadialGradient(cx - 3, cy - 4, 2, cx, cy, 15);
    iris.addColorStop(0, "#a0d8ff");
    iris.addColorStop(0.58, "#4b789f");
    iris.addColorStop(1, "#22384b");
    ctx.fillStyle = iris;
    ctx.beginPath();
    ctx.arc(cx, cy, 14, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#111";
    ctx.beginPath();
    ctx.arc(cx, cy, 5.4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(cx - 3.2, cy - 3.2, 2.3, 0, Math.PI * 2);
    ctx.fill();
  }

  drawEye(size * 0.41, size * 0.49);
  drawEye(size * 0.59, size * 0.49);

  ctx.strokeStyle = "rgba(146,90,74,0.56)";
  ctx.lineWidth = 2.8;
  ctx.beginPath();
  ctx.moveTo(centerX, size * 0.49);
  ctx.quadraticCurveTo(size * 0.51, size * 0.58, size * 0.5, size * 0.63);
  ctx.stroke();

  ctx.fillStyle = "rgba(170,107,89,0.44)";
  ctx.beginPath();
  ctx.arc(size * 0.487, size * 0.633, 3, 0, Math.PI * 2);
  ctx.arc(size * 0.513, size * 0.633, 3, 0, Math.PI * 2);
  ctx.fill();

  const lips = ctx.createLinearGradient(centerX, size * 0.67, centerX, size * 0.73);
  lips.addColorStop(0, "#cb8a7d");
  lips.addColorStop(1, "#a76458");
  ctx.strokeStyle = lips;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(centerX, size * 0.685, 32, 0.14 * Math.PI, 0.88 * Math.PI);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  return texture;
}

function refreshLeoReferenceFaceTextures() {
  const leoAvatars = getLeo3DAvatars();
  leoAvatars.forEach((avatar) => {
    if (!avatar || !avatar.userData) {
      return;
    }
    applyLeo2DFaceToAvatar(avatar);
  });
}

function ensureLeoReferenceFaceImage() {
  if (leoReferenceFaceLoaded || leoReferenceFaceLoading) {
    return;
  }
  const now = Date.now();
  if (leoReferenceFaceFailed && now - leoReferenceFaceLastAttemptAt < 2000) {
    return;
  }

  leoReferenceFaceLoading = true;
  leoReferenceFaceLastAttemptAt = now;
  const image = new Image();
  image.onload = () => {
    leoReferenceFaceImage = image;
    leoReferenceFaceLoaded = true;
    leoReferenceFaceFailed = false;
    leoReferenceFaceLoading = false;
    refreshLeoReferenceFaceTextures();
  };
  image.onerror = () => {
    leoReferenceFaceFailed = true;
    leoReferenceFaceLoading = false;
  };
  image.src = `${LEO_REFERENCE_FACE_IMAGE_PATH}?v=${BUILD_ID}`;
}

function createLeoReferenceFaceTexture(size) {
  if (!leoReferenceFaceLoaded || !leoReferenceFaceImage) {
    return null;
  }

  const canvasEl = document.createElement("canvas");
  canvasEl.width = size;
  canvasEl.height = size;
  const ctx = canvasEl.getContext("2d");
  if (!ctx) {
    return null;
  }

  ctx.clearRect(0, 0, size, size);

  const srcW = Math.max(1, leoReferenceFaceImage.naturalWidth || leoReferenceFaceImage.width || 1);
  const srcH = Math.max(1, leoReferenceFaceImage.naturalHeight || leoReferenceFaceImage.height || 1);
  const scale = Math.min(size / srcW, size / srcH);
  const drawW = Math.max(1, Math.round(srcW * scale));
  const drawH = Math.max(1, Math.round(srcH * scale));
  const drawX = Math.round((size - drawW) * 0.5);
  const drawY = Math.round((size - drawH) * 0.5);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(leoReferenceFaceImage, drawX, drawY, drawW, drawH);

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  return texture;
}

function createLeo2DFaceTexture(faceStyle, smilePercent) {
  const safeFace = FACE_OPTIONS.includes(faceStyle) ? faceStyle : DEFAULT_LEO_FACE;
  const safeSmile = clampInt(smilePercent, 1, 100, DEFAULT_LEO_SMILE);
  const smileT = clamp((safeSmile - 1) / 99, 0, 1);

  const size = 512;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = size;
  canvasEl.height = size;
  const ctx = canvasEl.getContext("2d");
  if (!ctx) {
    return createFaceTexture("smile");
  }

  ensureLeoReferenceFaceImage();
  const referenceTexture = createLeoReferenceFaceTexture(size);
  if (referenceTexture) {
    return referenceTexture;
  }

  ctx.clearRect(0, 0, size, size);
  ctx.strokeStyle = "#101010";
  ctx.fillStyle = "#101010";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Wider + lowered layout so it doesn't go into hair.
  const centerX = size * 0.5;
  const leftEyeX = size * 0.31;
  const rightEyeX = size * 0.69;
  const eyeY = size * 0.52;
  const browY = size * 0.43;
  const mouthY = size * 0.74;

  // Face based on provided reference image style.
  const browLift = safeFace === "grin" ? -3 : safeFace === "neutral" ? 3 : 0;
  const eyeOpenScale = safeFace === "neutral" ? 1.06 : safeFace === "grin" ? 0.9 : 1;
  const mouthWidth = 146 + smileT * 8;
  const mouthYBase = mouthY + 3;

  function drawArcBrow(cx) {
    ctx.lineWidth = 9.4;
    ctx.beginPath();
    ctx.moveTo(cx - 52, browY - 8 + browLift);
    ctx.quadraticCurveTo(cx - 8, browY - 30 + browLift, cx + 44, browY - 6 + browLift);
    ctx.stroke();
  }

  function drawOvalEye(cx) {
    const eyeH = 44 * eyeOpenScale;
    ctx.beginPath();
    ctx.ellipse(cx, eyeY + 6, 16, eyeH, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  drawArcBrow(leftEyeX);
  drawArcBrow(rightEyeX);
  drawOvalEye(leftEyeX);
  if (safeFace === "wink") {
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(rightEyeX - 22, eyeY + 11);
    ctx.quadraticCurveTo(rightEyeX, eyeY + 2, rightEyeX + 22, eyeY + 11);
    ctx.stroke();
  } else {
    drawOvalEye(rightEyeX);
  }

  // Main moustache-like mouth line from the reference.
  const mouthLeftX = centerX - mouthWidth * 0.52;
  const mouthRightX = centerX + mouthWidth * 0.52;
  const dipY = mouthYBase + 15;
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(mouthLeftX, mouthYBase);
  ctx.quadraticCurveTo(centerX - 34, dipY, centerX, mouthYBase + 8);
  ctx.quadraticCurveTo(centerX + 34, dipY, mouthRightX, mouthYBase);
  ctx.stroke();

  // Short end caps.
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(mouthLeftX + 1, mouthYBase - 8);
  ctx.lineTo(mouthLeftX + 1, mouthYBase + 8);
  ctx.moveTo(mouthRightX - 1, mouthYBase - 8);
  ctx.lineTo(mouthRightX - 1, mouthYBase + 8);
  ctx.stroke();

  // Small lower mouth curve.
  ctx.lineWidth = 5.4;
  ctx.beginPath();
  ctx.moveTo(centerX - 24, mouthYBase + 36);
  ctx.quadraticCurveTo(centerX, mouthYBase + 52 + smileT * 2, centerX + 24, mouthYBase + 36);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  return texture;
}

function applyLeo2DFaceToAvatar(avatar) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const head = avatar.userData.head;
  const existingFace3D = avatar.userData.leoFace3DGroup;
  if (head && existingFace3D) {
    head.remove(existingFace3D);
    disposeMeshResources(existingFace3D);
    avatar.userData.leoFace3DGroup = null;
  }

  const safeFace = FACE_OPTIONS.includes(avatar.userData.leoFaceExpression)
    ? avatar.userData.leoFaceExpression
    : DEFAULT_LEO_FACE;
  const safeSmile = clampInt(avatar.userData.leoSmilePercent, 1, 100, DEFAULT_LEO_SMILE);
  avatar.userData.leoFaceExpression = safeFace;
  avatar.userData.leoSmilePercent = safeSmile;

  if (avatar.userData.faceMaterial) {
    if (avatar.userData.faceMaterial.map) {
      avatar.userData.faceMaterial.map.dispose();
    }
    avatar.userData.faceMaterial.map = createLeo2DFaceTexture(safeFace, safeSmile);
    avatar.userData.faceMaterial.transparent = true;
    avatar.userData.faceMaterial.opacity = 1;
    avatar.userData.faceMaterial.needsUpdate = true;
  }

  if (avatar.userData.faceMesh) {
    if (avatar.userData.faceMesh.geometry) {
      avatar.userData.faceMesh.geometry.dispose();
    }
    avatar.userData.faceMesh.geometry = new THREE.PlaneGeometry(1.04, 0.9);
    avatar.userData.faceMesh.position.set(0, -0.045, 0.76);
    avatar.userData.faceMesh.visible = true;
    avatar.userData.faceMesh.renderOrder = 6;
  }

  avatar.userData.faceStyle = `leo_2d_${safeFace}`;
}

function createLeo3DHairMesh(baseHairColor = LEO_HAIR_COLOR, highlightHairColor = LEO_HAIR_HIGHLIGHT) {
  const hairGroup = new THREE.Group();
  const baseCurlMat = new THREE.MeshStandardMaterial({
    color: baseHairColor,
    roughness: 0.54,
    metalness: 0.03,
    emissive: 0x191006,
    emissiveIntensity: 0.05,
    map: getHairDetailTexture(),
    bumpMap: getHairDetailTexture(),
    bumpScale: 0.018,
  });
  const highlightCurlMat = new THREE.MeshStandardMaterial({
    color: highlightHairColor,
    roughness: 0.5,
    metalness: 0.03,
    emissive: 0x1f140a,
    emissiveIntensity: 0.04,
    map: getHairDetailTexture(),
    bumpMap: getHairDetailTexture(),
    bumpScale: 0.014,
  });

  function addCurl(
    x,
    y,
    z,
    radius,
    sx = 1.12,
    sy = 0.88,
    sz = 1.04,
    material = baseCurlMat,
    rx = 0,
    ry = 0,
    rz = 0
  ) {
    const curl = new THREE.Mesh(new THREE.SphereGeometry(radius, 12, 10), material);
    curl.position.set(x, y, z);
    curl.scale.set(sx, sy, sz);
    curl.rotation.set(rx, ry, rz);
    curl.castShadow = true;
    curl.receiveShadow = false;
    hairGroup.add(curl);
  }

  // Dense base so no scalp shows.
  addCurl(0, 0.44, -0.06, 0.75, 1.16, 0.72, 1.02, baseCurlMat);
  addCurl(0, 0.3, -0.24, 0.68, 1.02, 0.64, 0.88, baseCurlMat);
  addCurl(-0.53, 0.2, 0.08, 0.28, 0.86, 0.8, 0.82, baseCurlMat);
  addCurl(0.53, 0.2, 0.08, 0.28, 0.86, 0.8, 0.82, baseCurlMat);

  const topCurls = [
    [-0.39, 0.58, -0.13, 0.16],
    [-0.22, 0.64, -0.15, 0.17],
    [-0.03, 0.67, -0.15, 0.18],
    [0.16, 0.66, -0.15, 0.17],
    [0.34, 0.6, -0.12, 0.16],
    [-0.31, 0.71, 0.02, 0.15],
    [-0.12, 0.75, 0.03, 0.15],
    [0.08, 0.75, 0.03, 0.15],
    [0.28, 0.71, 0.02, 0.15],
  ];
  for (let i = 0; i < topCurls.length; i += 1) {
    const [x, y, z, r] = topCurls[i];
    addCurl(x, y, z, r, 1.1, 0.9, 1.05, i % 3 === 1 ? highlightCurlMat : baseCurlMat);
  }

  // Front fringe curls that drop toward eyebrows (reference style).
  const fringeCurls = [
    [-0.47, 0.32, 0.39, 0.16, 0.14, -0.18, 0.12],
    [-0.32, 0.27, 0.49, 0.16, 0.2, -0.08, 0.1],
    [-0.16, 0.23, 0.55, 0.16, 0.22, -0.02, 0.06],
    [0.02, 0.22, 0.57, 0.16, 0.2, 0.02, 0.03],
    [0.2, 0.23, 0.55, 0.16, 0.22, 0.04, -0.04],
    [0.36, 0.27, 0.49, 0.16, 0.2, 0.1, -0.08],
    [0.5, 0.32, 0.39, 0.16, 0.14, 0.2, -0.12],
  ];
  for (let i = 0; i < fringeCurls.length; i += 1) {
    const [x, y, z, r, rx, ry, rz] = fringeCurls[i];
    addCurl(x, y, z, r, 1.18, 0.84, 1.08, i % 2 === 0 ? highlightCurlMat : baseCurlMat, rx, ry, rz);
  }

  // Side curls trimmed around ear zone.
  const sideCurls = [
    [-0.64, 0.26, 0.19, 0.12, 0.14, -0.26],
    [-0.66, 0.18, 0.06, 0.11, 0.08, -0.2],
    [-0.61, 0.1, -0.07, 0.1, 0.03, -0.12],
    [0.64, 0.26, 0.19, 0.12, 0.14, 0.26],
    [0.66, 0.18, 0.06, 0.11, 0.08, 0.2],
    [0.61, 0.1, -0.07, 0.1, 0.03, 0.12],
  ];
  for (const [x, y, z, r, rx, ry] of sideCurls) {
    addCurl(x, y, z, r, 1.04, 0.86, 0.94, baseCurlMat, rx, ry, 0);
  }

  // Ringlet loops for natural curly strand look.
  const ringletGeo = new THREE.TorusGeometry(0.09, 0.022, 8, 12, Math.PI * 1.46);
  function addRinglet(x, y, z, rx, ry, rz, material) {
    const ringlet = new THREE.Mesh(ringletGeo, material);
    ringlet.position.set(x, y, z);
    ringlet.rotation.set(rx, ry, rz);
    ringlet.castShadow = true;
    ringlet.receiveShadow = false;
    hairGroup.add(ringlet);
  }
  addRinglet(-0.31, 0.3, 0.44, 0.72, -0.06, 0.08, highlightCurlMat);
  addRinglet(-0.14, 0.26, 0.51, 0.67, 0.02, -0.04, baseCurlMat);
  addRinglet(0.05, 0.25, 0.53, 0.65, 0.02, 0.04, highlightCurlMat);
  addRinglet(0.23, 0.27, 0.49, 0.69, 0.12, -0.08, baseCurlMat);

  hairGroup.position.set(0, 0.03, 0.03);
  hairGroup.scale.set(1.14, 1.12, 1.08);

  return hairGroup;
}

function attachLeoHair(avatar, options = {}) {
  if (!avatar || !avatar.userData || !avatar.userData.hairAnchor) {
    return;
  }

  const baseColor = normalizeHexColor(
    options.baseColor || avatar.userData.leoHairBaseColor || avatar.userData.hairColor || LEO_HAIR_COLOR,
    LEO_HAIR_COLOR
  );
  const highlightColor = normalizeHexColor(
    options.highlightColor || avatar.userData.leoHairHighlightColor || LEO_HAIR_HIGHLIGHT,
    LEO_HAIR_HIGHLIGHT
  );
  const hairYOffset = Number.isFinite(options.yOffset)
    ? options.yOffset
    : Number.isFinite(avatar.userData.leoHairYOffset)
      ? avatar.userData.leoHairYOffset
      : 0;

  const hairAnchor = avatar.userData.hairAnchor;
  hairAnchor.visible = true;
  while (hairAnchor.children.length) {
    const child = hairAnchor.children[0];
    if (!child) {
      continue;
    }
    hairAnchor.remove(child);
    disposeMeshResources(child);
  }
  avatar.userData.hairMesh = null;

  let leoHair = null;
  try {
    leoHair = createLeo3DHairMesh(baseColor, highlightColor);
  } catch (error) {
    console.error("Leo curly detail build failed, using fallback curly hair", error);
  }

  if (!leoHair) {
    leoHair = createHairMesh("curly", baseColor) || new THREE.Group();
  }
  if (leoHair && leoHair.scale) {
    leoHair.scale.set(leoHair.scale.x * 1.04, leoHair.scale.y * 1.05, leoHair.scale.z * 1.03);
    leoHair.position.set(0, 0.02 + hairYOffset, 0.02);
  }
  leoHair.traverse((node) => {
    if (!node.isMesh) {
      return;
    }
    node.frustumCulled = false;
    node.renderOrder = 9;
  });

  hairAnchor.position.set(0, 0, 0);
  hairAnchor.scale.set(1, 1, 1);
  hairAnchor.add(leoHair);

  avatar.userData.hairMesh = leoHair;
  avatar.userData.hairStyle = "leo3d";
  avatar.userData.hairColor = baseColor;
  avatar.userData.leoHairBaseColor = baseColor;
  avatar.userData.leoHairHighlightColor = highlightColor;
  avatar.userData.leoHairYOffset = hairYOffset;
}

function clearAvatarHairAnchor(avatar) {
  if (!avatar || !avatar.userData || !avatar.userData.hairAnchor) {
    return null;
  }
  const hairAnchor = avatar.userData.hairAnchor;
  hairAnchor.visible = true;
  while (hairAnchor.children.length) {
    const child = hairAnchor.children[0];
    if (!child) {
      continue;
    }
    hairAnchor.remove(child);
    disposeMeshResources(child);
  }
  avatar.userData.hairMesh = null;
  return hairAnchor;
}

function finalizeAvatarHairAttachment(avatar, hairMesh, hairStyleId, baseColor, highlightColor, yOffset = 0) {
  const hairAnchor = clearAvatarHairAnchor(avatar);
  if (!hairAnchor) {
    return;
  }

  const nextHair = hairMesh || new THREE.Group();
  nextHair.position.y += yOffset;
  nextHair.traverse((node) => {
    if (!node.isMesh) {
      return;
    }
    node.frustumCulled = false;
    node.renderOrder = 9;
  });

  hairAnchor.position.set(0, 0, 0);
  hairAnchor.scale.set(1, 1, 1);
  hairAnchor.add(nextHair);

  avatar.userData.hairMesh = nextHair;
  avatar.userData.hairStyle = hairStyleId;
  avatar.userData.hairColor = baseColor;
  avatar.userData.leoHairBaseColor = baseColor;
  avatar.userData.leoHairHighlightColor = highlightColor;
  avatar.userData.leoHairYOffset = yOffset;
}

function createNateShortCurlsHairMesh(baseColor, highlightColor) {
  const hair = createHairMesh("curly", baseColor) || new THREE.Group();
  hair.scale.set(hair.scale.x * 0.86, hair.scale.y * 0.78, hair.scale.z * 0.82);
  hair.position.set(0, 0.12, 0.02);

  const accentMat = new THREE.MeshStandardMaterial({
    color: highlightColor,
    roughness: 0.56,
    metalness: 0.03,
    map: getHairDetailTexture(),
    bumpMap: getHairDetailTexture(),
    bumpScale: 0.012,
  });
  const accentGeo = new THREE.SphereGeometry(0.105, 10, 8);
  const accents = [
    [-0.21, 0.54, 0.14],
    [-0.08, 0.58, 0.16],
    [0.06, 0.59, 0.16],
    [0.2, 0.54, 0.14],
  ];
  for (const [x, y, z] of accents) {
    const puff = new THREE.Mesh(accentGeo, accentMat);
    puff.position.set(x, y, z);
    puff.scale.set(1.05, 0.9, 1);
    puff.castShadow = true;
    puff.receiveShadow = false;
    hair.add(puff);
  }

  return hair;
}

function createNateWavyFringeHairMesh(baseColor, highlightColor) {
  const hair = createHairMesh("swoop", baseColor) || new THREE.Group();
  hair.scale.set(hair.scale.x * 0.95, hair.scale.y * 0.9, hair.scale.z * 0.9);
  hair.position.set(0, 0.09, 0.02);

  const waveMat = new THREE.MeshStandardMaterial({
    color: highlightColor,
    roughness: 0.54,
    metalness: 0.03,
    map: getHairDetailTexture(),
    bumpMap: getHairDetailTexture(),
    bumpScale: 0.011,
  });
  const waveGeo = new THREE.TorusGeometry(0.105, 0.03, 8, 12, Math.PI * 1.26);
  const waves = [
    [-0.22, 0.31, 0.49, 0.58, -0.12, 0.08],
    [-0.05, 0.28, 0.54, 0.55, 0.06, 0.02],
    [0.14, 0.31, 0.5, 0.62, 0.18, -0.06],
  ];
  for (const [x, y, z, rx, ry, rz] of waves) {
    const wave = new THREE.Mesh(waveGeo, waveMat);
    wave.position.set(x, y, z);
    wave.rotation.set(rx, ry, rz);
    wave.castShadow = true;
    wave.receiveShadow = false;
    hair.add(wave);
  }

  return hair;
}

function createNateTexturedTopHairMesh(baseColor, highlightColor) {
  const hair = createHairMesh("spikes", baseColor) || new THREE.Group();
  hair.scale.set(hair.scale.x * 0.92, hair.scale.y * 0.82, hair.scale.z * 0.9);
  hair.position.set(0, 0.11, 0.02);

  const topMat = new THREE.MeshStandardMaterial({
    color: highlightColor,
    roughness: 0.55,
    metalness: 0.03,
    map: getHairDetailTexture(),
    bumpMap: getHairDetailTexture(),
    bumpScale: 0.01,
  });
  const topGeo = new THREE.BoxGeometry(0.9, 0.12, 0.72);
  const topCap = new THREE.Mesh(topGeo, topMat);
  topCap.position.set(0, 0.54, 0.03);
  topCap.castShadow = true;
  topCap.receiveShadow = false;
  hair.add(topCap);

  return hair;
}

function addNatePhotoCurlsFrontFill(hairMesh, baseColor, highlightColor) {
  if (!hairMesh) {
    return;
  }

  const detailTexture = getHairDetailTexture();
  const baseMat = new THREE.MeshStandardMaterial({
    color: baseColor,
    roughness: 0.56,
    metalness: 0.03,
    map: detailTexture,
    bumpMap: detailTexture,
    bumpScale: 0.011,
  });
  const highlightMat = new THREE.MeshStandardMaterial({
    color: highlightColor,
    roughness: 0.53,
    metalness: 0.03,
    map: detailTexture,
    bumpMap: detailTexture,
    bumpScale: 0.01,
  });
  const curlGeo = new THREE.SphereGeometry(0.108, 10, 8);
  const frontFill = [
    [-0.14, 0.26, 0.58, 1.1, 0.8, 1.03, highlightMat],
    [0.02, 0.24, 0.61, 1.16, 0.78, 1.04, baseMat],
    [0.17, 0.26, 0.58, 1.08, 0.8, 1.03, highlightMat],
    [0.0, 0.3, 0.54, 1.04, 0.84, 1.0, baseMat],
    [-0.22, 0.3, 0.53, 1.04, 0.84, 0.98, baseMat],
    [0.24, 0.3, 0.53, 1.04, 0.84, 0.98, baseMat],
  ];
  for (let i = 0; i < frontFill.length; i += 1) {
    const [x, y, z, sx, sy, sz, mat] = frontFill[i];
    const curl = new THREE.Mesh(curlGeo, mat);
    curl.position.set(x, y, z);
    curl.scale.set(sx, sy, sz);
    curl.castShadow = true;
    curl.receiveShadow = false;
    hairMesh.add(curl);
  }

  // Thin under-fringe cap to hide any scalp gap at the hairline.
  const underFringe = new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 10), baseMat);
  underFringe.position.set(0, 0.29, 0.52);
  underFringe.scale.set(1.5, 0.48, 1.05);
  underFringe.castShadow = true;
  underFringe.receiveShadow = false;
  hairMesh.add(underFringe);

  // Hairline strip for tiny remaining front-center gaps.
  const hairlineStrip = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.07, 0.08), baseMat);
  hairlineStrip.position.set(0, 0.2, 0.64);
  hairlineStrip.castShadow = true;
  hairlineStrip.receiveShadow = false;
  hairMesh.add(hairlineStrip);

  // Micro-curls to blend strip edges into the fringe.
  const microCurlGeo = new THREE.SphereGeometry(0.05, 9, 7);
  const microLeft = new THREE.Mesh(microCurlGeo, highlightMat);
  microLeft.position.set(-0.1, 0.24, 0.63);
  microLeft.scale.set(1.2, 0.8, 1.08);
  microLeft.castShadow = true;
  microLeft.receiveShadow = false;
  hairMesh.add(microLeft);
  const microRight = new THREE.Mesh(microCurlGeo, highlightMat);
  microRight.position.set(0.11, 0.24, 0.63);
  microRight.scale.set(1.2, 0.8, 1.08);
  microRight.castShadow = true;
  microRight.receiveShadow = false;
  hairMesh.add(microRight);
}

function attachNateHairVariant(avatar, variant = {}) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const requestedBaseColor = normalizeHexColor(variant.baseColor || NATE_HAIR_COLOR, NATE_HAIR_COLOR);
  const requestedHighlightColor = normalizeHexColor(variant.highlightColor || NATE_HAIR_HIGHLIGHT, NATE_HAIR_HIGHLIGHT);
  const yOffset = Number.isFinite(variant.yOffset) ? variant.yOffset : NATE_HAIRLINE_Y_OFFSET;
  const style = typeof variant.style === "string" ? variant.style : "photo_curls";
  const baseColor = requestedBaseColor;
  const highlightColor = requestedHighlightColor;
  let hairMesh = null;

  if (style === "photo_curls") {
    hairMesh = createLeo3DHairMesh(baseColor, highlightColor);
    if (hairMesh) {
      hairMesh.scale.set(hairMesh.scale.x * 0.95, hairMesh.scale.y * 0.95, hairMesh.scale.z * 0.96);
      hairMesh.position.set(0, 0.05, 0.03);
    }
  } else if (style === "short_curls") {
    hairMesh = createNateShortCurlsHairMesh(baseColor, highlightColor);
  } else if (style === "wavy_fringe") {
    hairMesh = createNateWavyFringeHairMesh(baseColor, highlightColor);
  } else if (style === "textured_top") {
    hairMesh = createNateTexturedTopHairMesh(baseColor, highlightColor);
  } else {
    hairMesh = createHairMesh("curly", baseColor);
  }

  if (!hairMesh) {
    hairMesh = createHairMesh("curly", baseColor) || new THREE.Group();
  }

  finalizeAvatarHairAttachment(avatar, hairMesh, `nate_${style}`, baseColor, highlightColor, yOffset);
  avatar.userData.nateHairStyle = style;
}

function createZiggyHairMesh(baseHairColor = ZIGGY_HAIR_COLOR, highlightHairColor = ZIGGY_HAIR_HIGHLIGHT) {
  const hair = new THREE.Group();
  const baseColor = normalizeHexColor(baseHairColor, ZIGGY_HAIR_COLOR);
  const highlightColor = normalizeHexColor(highlightHairColor, ZIGGY_HAIR_HIGHLIGHT);
  const detailTexture = getHairDetailTexture();

  const baseMat = new THREE.MeshStandardMaterial({
    color: baseColor,
    roughness: 0.78,
    metalness: 0.01,
    map: detailTexture,
    bumpMap: detailTexture,
    bumpScale: 0.013,
  });
  const highlightMat = new THREE.MeshStandardMaterial({
    color: highlightColor,
    roughness: 0.74,
    metalness: 0.01,
    map: detailTexture,
    bumpMap: detailTexture,
    bumpScale: 0.01,
  });

  function addPart(geometry, material, x, y, z, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0) {
    const part = new THREE.Mesh(geometry, material);
    part.position.set(x, y, z);
    part.scale.set(sx, sy, sz);
    part.rotation.set(rx, ry, rz);
    part.castShadow = true;
    part.receiveShadow = false;
    hair.add(part);
    return part;
  }

  addPart(new THREE.SphereGeometry(0.56, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.82), baseMat, 0, 0.34, -0.04, 1.18, 0.92, 1.02);
  addPart(new THREE.SphereGeometry(0.34, 14, 10), highlightMat, 0.08, 0.54, -0.04, 1.18, 0.96, 1.02);
  addPart(new THREE.SphereGeometry(0.43, 14, 10), baseMat, 0.14, 0.18, 0.31, 1.18, 0.86, 0.9, -0.18, 0.2, -0.08);
  addPart(new THREE.SphereGeometry(0.26, 12, 10), highlightMat, 0.3, 0.2, 0.46, 0.92, 0.62, 0.68, -0.3, 0.24, -0.1);
  addPart(new THREE.SphereGeometry(0.22, 12, 10), baseMat, -0.4, 0.24, 0.12, 0.92, 0.86, 0.9, 0.06, -0.28, 0.14);
  addPart(new THREE.SphereGeometry(0.22, 12, 10), baseMat, 0.48, 0.22, 0.02, 0.86, 0.82, 0.86, 0.04, 0.22, -0.12);
  addPart(new THREE.BoxGeometry(0.96, 0.18, 0.4), baseMat, 0.02, 0.08, -0.12, 1, 1, 1, -0.08, 0, 0);

  const spikeGeo = new THREE.ConeGeometry(0.16, 0.56, 5);
  addPart(spikeGeo, baseMat, -0.54, 0.34, -0.2, 0.92, 1.02, 1.1, 0.42, -0.76, -0.92);
  addPart(spikeGeo, baseMat, -0.34, 0.54, -0.24, 0.78, 0.96, 1.06, 0.12, -0.34, -0.46);
  addPart(spikeGeo, highlightMat, 0.12, 0.72, -0.08, 0.7, 0.92, 0.92, -0.14, 0.08, 0.08);
  addPart(spikeGeo, baseMat, 0.38, 0.58, -0.18, 0.74, 0.94, 0.96, 0.08, 0.38, 0.34);
  addPart(spikeGeo, baseMat, 0.02, 0.1, 0.56, 0.54, 0.7, 0.58, -1.12, 0.04, 0.04);

  hair.position.set(0, 0.06, 0.02);
  return hair;
}

function attachZiggyHair(avatar, options = {}) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const baseColor = normalizeHexColor(
    options.baseColor || avatar.userData.ziggyHairBaseColor || ZIGGY_HAIR_COLOR,
    ZIGGY_HAIR_COLOR
  );
  const highlightColor = normalizeHexColor(
    options.highlightColor || avatar.userData.ziggyHairHighlightColor || ZIGGY_HAIR_HIGHLIGHT,
    ZIGGY_HAIR_HIGHLIGHT
  );
  const hairYOffset = Number.isFinite(options.yOffset)
    ? options.yOffset
    : Number.isFinite(avatar.userData.ziggyHairYOffset)
      ? avatar.userData.ziggyHairYOffset
      : 0;

  attachLedgerHair(avatar, {
    baseColor,
    highlightColor,
    yOffset: hairYOffset,
  });

  const hairMesh = avatar.userData.hairMesh;
  if (hairMesh && hairMesh.scale) {
    hairMesh.scale.set(hairMesh.scale.x * 0.98, hairMesh.scale.y, hairMesh.scale.z);
  }

  avatar.userData.hairStyle = "ziggy_hair";
  avatar.userData.ziggyHairBaseColor = baseColor;
  avatar.userData.ziggyHairHighlightColor = highlightColor;
  avatar.userData.ziggyHairYOffset = hairYOffset;
  avatar.userData.ziggyHairBuild = BUILD_ID;
}

function attachEshdogMarleyHair(avatar, options = {}) {
  if (!avatar || !avatar.userData) {
    return;
  }

  attachZiggyHair(avatar, {
    baseColor: options.baseColor || avatar.userData.ziggyHairBaseColor || ESHDOG_MARLEY_HAIR_COLOR,
    highlightColor: options.highlightColor || avatar.userData.ziggyHairHighlightColor || ESHDOG_MARLEY_HAIR_HIGHLIGHT,
    yOffset: Number.isFinite(options.yOffset)
      ? options.yOffset
      : Number.isFinite(avatar.userData.ziggyHairYOffset)
        ? avatar.userData.ziggyHairYOffset
        : 0,
  });

  const hairMesh = avatar.userData.hairMesh;
  if (hairMesh && hairMesh.scale) {
    hairMesh.scale.set(hairMesh.scale.x * 1.14, hairMesh.scale.y * 1.12, hairMesh.scale.z * 1.12);
  }

  avatar.userData.hairStyle = "eshdog_marley_hair";
}

function createEshdogMarleyBaseballCap() {
  const capGroup = new THREE.Group();
  capGroup.position.set(0, 0.18, 0.02);
  const capMaterial = new THREE.MeshStandardMaterial({
    color: ESHDOG_MARLEY_HAT_COLOR,
    roughness: 0.86,
    metalness: 0.01,
  });

  function addCapPiece(geometry, x, y, z, rotationX = 0, rotationY = 0, rotationZ = 0) {
    const piece = new THREE.Mesh(geometry, capMaterial);
    piece.position.set(x, y, z);
    piece.rotation.set(rotationX, rotationY, rotationZ);
    piece.castShadow = true;
    piece.receiveShadow = true;
    capGroup.add(piece);
    return piece;
  }

  const crown = addCapPiece(
    new THREE.SphereGeometry(0.78, 18, 14, 0, Math.PI * 2, 0, Math.PI * 0.62),
    0,
    0.28,
    0.04,
    0.06,
    0,
    0
  );
  crown.scale.set(1.06, 0.72, 0.98);

  addCapPiece(
    new THREE.BoxGeometry(0.86, 0.05, 0.36),
    0,
    0.04,
    0.62,
    -0.18,
    0,
    0
  );

  return capGroup;
}

function applyEshdogMarleyOutfit(avatar) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const torso = avatar.userData.torso || null;
  const head = avatar.userData.head || null;
  clearLeoSuitAndTie(avatar);
  if (avatar.userData.shirtMaterial && avatar.userData.shirtMaterial.color) {
    avatar.userData.shirtMaterial.color.set(ESHDOG_MARLEY_SKIN_TONE);
  }
  avatar.userData.shirtColor = ESHDOG_MARLEY_SKIN_TONE;
  if (avatar.userData.eshdogMarleyChestDetail && torso) {
    torso.remove(avatar.userData.eshdogMarleyChestDetail);
    disposeMeshResources(avatar.userData.eshdogMarleyChestDetail);
  }
  avatar.userData.eshdogMarleyChestDetail = null;
  if (avatar.userData.eshdogMarleyBackpack && torso) {
    torso.remove(avatar.userData.eshdogMarleyBackpack);
    disposeMeshResources(avatar.userData.eshdogMarleyBackpack);
  }
  avatar.userData.eshdogMarleyBackpack = null;
  if (avatar.userData.eshdogMarleyHat && head) {
    head.remove(avatar.userData.eshdogMarleyHat);
    disposeMeshResources(avatar.userData.eshdogMarleyHat);
  }
  avatar.userData.eshdogMarleyHat = null;

  if (torso) {
    const detailGroup = new THREE.Group();
    const detailColor = new THREE.Color(ESHDOG_MARLEY_SKIN_TONE).lerp(new THREE.Color("#000000"), 0.42);
    const detailMaterial = new THREE.MeshStandardMaterial({
      color: detailColor,
      roughness: 0.82,
      metalness: 0.01,
      transparent: true,
      opacity: 0.82,
    });

    function addDetail(width, height, x, y, rotationZ = 0) {
      const piece = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.04), detailMaterial);
      piece.position.set(x, y, 0.63);
      piece.rotation.z = rotationZ;
      piece.castShadow = false;
      piece.receiveShadow = false;
      detailGroup.add(piece);
    }

    addDetail(0.58, 0.14, -0.36, 0.48, -0.18);
    addDetail(0.58, 0.14, 0.36, 0.48, 0.18);
    addDetail(0.14, 1.14, 0, -0.02, 0);

    addDetail(0.46, 0.12, -0.29, 0.22, -0.16);
    addDetail(0.46, 0.12, 0.29, 0.22, 0.16);
    addDetail(0.4, 0.12, -0.24, -0.07, -0.12);
    addDetail(0.4, 0.12, 0.24, -0.07, 0.12);
    addDetail(0.34, 0.12, -0.2, -0.34, -0.08);
    addDetail(0.34, 0.12, 0.2, -0.34, 0.08);

    torso.add(detailGroup);
    avatar.userData.eshdogMarleyChestDetail = detailGroup;

    const backpackGroup = new THREE.Group();
    const backpackMaterial = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.78,
      metalness: 0.02,
    });
    const backpackDetailMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f1f1f,
      roughness: 0.8,
      metalness: 0.02,
    });
    const backpackAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0x2b2b2b,
      roughness: 0.76,
      metalness: 0.03,
    });

    function addBackpackPiece(
      width,
      height,
      depth,
      x,
      y,
      z,
      rotationX = 0,
      rotationY = 0,
      rotationZ = 0,
      material = backpackMaterial
    ) {
      const piece = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
      piece.position.set(x, y, z);
      piece.rotation.set(rotationX, rotationY, rotationZ);
      piece.castShadow = true;
      piece.receiveShadow = true;
      backpackGroup.add(piece);
    }

    function addBackpackFlatPiece(width, height, x, y, rotationZ = 0, material = backpackAccentMaterial) {
      const piece = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.02), material);
      piece.position.set(x, y, 0.612);
      piece.rotation.set(0, 0, rotationZ);
      piece.castShadow = false;
      piece.receiveShadow = false;
      backpackGroup.add(piece);
    }

    function addBackpackSwooshLogo() {
      const logoCanvas = document.createElement("canvas");
      logoCanvas.width = 320;
      logoCanvas.height = 160;
      const ctx = logoCanvas.getContext("2d");
      if (!ctx) {
        return;
      }

      ctx.clearRect(0, 0, logoCanvas.width, logoCanvas.height);
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.moveTo(8, 96);
      ctx.bezierCurveTo(16, 84, 34, 66, 64, 50);
      ctx.bezierCurveTo(122, 18, 210, 10, 296, 16);
      ctx.bezierCurveTo(310, 18, 318, 12, 320, 2);
      ctx.bezierCurveTo(304, 18, 266, 46, 204, 78);
      ctx.bezierCurveTo(128, 118, 62, 136, 18, 120);
      ctx.bezierCurveTo(6, 116, 2, 104, 8, 96);
      ctx.closePath();
      ctx.fill();

      const swooshTexture = new THREE.CanvasTexture(logoCanvas);
      swooshTexture.needsUpdate = true;

      const swooshGeometry = new THREE.PlaneGeometry(2.2, 0.5);
      const swooshMaterial = new THREE.MeshBasicMaterial({
        map: swooshTexture,
        transparent: true,
        side: THREE.DoubleSide,
      });
      const swooshMesh = new THREE.Mesh(swooshGeometry, swooshMaterial);
      swooshMesh.position.set(0.08, -0.06, -1.181);
      swooshMesh.rotation.y = Math.PI;
      swooshMesh.castShadow = false;
      swooshMesh.receiveShadow = false;
      backpackGroup.add(swooshMesh);
    }

    addBackpackPiece(1.56, 1.96, 0.58, 0, 0.04, -0.88);
    addBackpackPiece(1.18, 0.36, 0.5, 0, 0.86, -0.82, 0.1, 0, 0, backpackAccentMaterial);
    addBackpackPiece(1.18, 0.08, 0.5, 0, -0.82, -0.78, 0, 0, 0, backpackDetailMaterial);
    addBackpackPiece(1.24, 0.96, 0.14, 0, -0.24, -0.54, 0, 0, 0, backpackDetailMaterial);
    addBackpackPiece(1.06, 0.1, 0.1, 0, 0.2, -0.49, 0, 0, 0, backpackAccentMaterial);
    addBackpackPiece(0.12, 0.3, 0.12, 0, 0.34, -0.47, 0, 0, 0, backpackAccentMaterial);
    addBackpackPiece(1.02, 0.72, 0.16, 0, -0.38, -0.42, 0, 0, 0, backpackAccentMaterial);
    addBackpackPiece(0.92, 0.56, 0.14, 0, -0.42, -0.3, 0, 0, 0, backpackMaterial);
    addBackpackPiece(0.94, 0.08, 0.1, 0, -0.12, -0.22, 0, 0, 0, backpackDetailMaterial);
    addBackpackPiece(0.72, 0.06, 0.08, 0, 0.56, -0.38, 0, 0, 0, backpackDetailMaterial);
    addBackpackPiece(0.1, 0.26, 0.08, 0.34, -0.06, -0.18, 0, 0, 0, backpackAccentMaterial);
    addBackpackPiece(1.14, 0.12, 0.12, 0, -0.88, -0.5, 0, 0, 0, backpackAccentMaterial);
    addBackpackPiece(0.1, 0.64, 0.06, -0.52, -0.34, -0.33, 0, 0, 0, backpackDetailMaterial);
    addBackpackPiece(0.1, 0.64, 0.06, 0.52, -0.34, -0.33, 0, 0, 0, backpackDetailMaterial);
    addBackpackPiece(0.86, 0.06, 0.08, 0, -0.03, -0.32, 0, 0, 0, backpackDetailMaterial);
    addBackpackPiece(0.08, 1.4, 0.04, 0, 0.04, -0.28, 0, 0, 0, backpackAccentMaterial);
    addBackpackPiece(0.12, 0.18, 0.08, 0, 0.78, -0.26, 0, 0, 0, backpackAccentMaterial);

    // Flat, painted-on front straps for the blocky torso.
    addBackpackFlatPiece(0.18, 2.28, -0.8, -0.1, 0, backpackAccentMaterial);
    addBackpackFlatPiece(0.18, 2.28, 0.8, -0.1, 0, backpackAccentMaterial);
    addBackpackPiece(0.2, 0.1, 1.12, -0.74, 1.03, 0.02, 0, 0, 0, backpackAccentMaterial);
    addBackpackPiece(0.2, 0.1, 1.12, 0.74, 1.03, 0.02, 0, 0, 0, backpackAccentMaterial);

    // Top handle.
    addBackpackPiece(0.52, 0.12, 0.12, 0, 1.06, -0.72, 0.32, 0, 0, backpackAccentMaterial);
    torso.add(backpackGroup);
    avatar.userData.eshdogMarleyBackpack = backpackGroup;
  }

  avatar.userData.eshdogMarleyOutfitBuild = BUILD_ID;
}

function applyEshdogMarleyShorts(avatar) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const { leftLeg, rightLeg } = avatar.userData;
  if (!leftLeg || !rightLeg) {
    return;
  }

  if (avatar.userData.pantMaterial) {
    avatar.userData.pantMaterial.color.set(ESHDOG_MARLEY_SKIN_TONE);
  }
  avatar.userData.pantsColor = ESHDOG_MARLEY_SKIN_TONE;

  const existingShorts = avatar.userData.eshdogMarleyShorts || [];
  for (let i = 0; i < existingShorts.length; i += 1) {
    const shortsPiece = existingShorts[i];
    if (!shortsPiece) {
      continue;
    }
    if (shortsPiece.parent) {
      shortsPiece.parent.remove(shortsPiece);
    }
    disposeMeshResources(shortsPiece);
  }

  const existingFootBottoms = avatar.userData.eshdogMarleyFootBottoms || [];
  for (let i = 0; i < existingFootBottoms.length; i += 1) {
    const footBottomPiece = existingFootBottoms[i];
    if (!footBottomPiece) {
      continue;
    }
    if (footBottomPiece.parent) {
      footBottomPiece.parent.remove(footBottomPiece);
    }
    disposeMeshResources(footBottomPiece);
  }

  const existingShoeStripes = avatar.userData.eshdogMarleyShoeStripes || [];
  for (let i = 0; i < existingShoeStripes.length; i += 1) {
    const stripePiece = existingShoeStripes[i];
    if (!stripePiece) {
      continue;
    }
    if (stripePiece.parent) {
      stripePiece.parent.remove(stripePiece);
    }
    disposeMeshResources(stripePiece);
  }

  const shortsMaterial = new THREE.MeshStandardMaterial({
    color: ESHDOG_MARLEY_PANTS_COLOR,
    roughness: 0.74,
  });
  const footBottomMaterial = new THREE.MeshStandardMaterial({
    color: ESHDOG_MARLEY_FOOT_BOTTOM_COLOR,
    roughness: 0.72,
  });
  const shoeStripeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.66,
  });

  function buildShortsPiece(targetLeg) {
    const piece = new THREE.Mesh(new THREE.BoxGeometry(1.04, 1.28, 1.04), shortsMaterial);
    piece.position.set(0, 0.36, 0);
    piece.castShadow = true;
    piece.receiveShadow = true;
    targetLeg.add(piece);
    return piece;
  }

  function buildFootBottomPiece(targetLeg) {
    const piece = new THREE.Mesh(new THREE.BoxGeometry(1.01, 0.22, 1.01), footBottomMaterial);
    piece.position.set(0, -0.89, 0);
    piece.castShadow = true;
    piece.receiveShadow = true;
    targetLeg.add(piece);
    return piece;
  }

  function buildShoeStripePieces(targetLeg) {
    const stripes = [];
    const stripeLayout = [
      { x: 0, z: 0.44, width: 0.18, depth: 0.02 },
      { x: 0.44, z: 0, width: 0.02, depth: 0.18 },
      { x: -0.44, z: 0, width: 0.02, depth: 0.18 },
      { x: 0, z: -0.44, width: 0.18, depth: 0.02 },
    ];
    for (let i = 0; i < stripeLayout.length; i += 1) {
      const stripe = stripeLayout[i];
      const piece = new THREE.Mesh(new THREE.BoxGeometry(stripe.width, 0.22, stripe.depth), shoeStripeMaterial);
      piece.position.set(stripe.x, -0.89, stripe.z);
      piece.castShadow = false;
      piece.receiveShadow = true;
      targetLeg.add(piece);
      stripes.push(piece);
    }
    return stripes;
  }

  avatar.userData.eshdogMarleyShorts = [buildShortsPiece(leftLeg), buildShortsPiece(rightLeg)];
  avatar.userData.eshdogMarleyFootBottoms = [buildFootBottomPiece(leftLeg), buildFootBottomPiece(rightLeg)];
  avatar.userData.eshdogMarleyShoeStripes = [
    ...buildShoeStripePieces(leftLeg),
    ...buildShoeStripePieces(rightLeg),
  ];
  avatar.userData.eshdogMarleyShortsBuild = BUILD_ID;
}

function applyFletcherSkinSpots(avatar) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const existingSpots = avatar.userData.fletcherSkinSpots || [];
  for (let i = 0; i < existingSpots.length; i += 1) {
    const spot = existingSpots[i];
    if (!spot) {
      continue;
    }
    if (spot.parent) {
      spot.parent.remove(spot);
    }
    disposeMeshResources(spot);
  }

  const spotMaterial = new THREE.MeshStandardMaterial({
    color: FLETCHER_SPOT_COLOR,
    roughness: 0.82,
    metalness: 0.01,
    side: THREE.DoubleSide,
  });

  const spots = [];
  function addSpot(target, radius, x, y, z, rotY = 0, rotX = 0, scaleX = 1, scaleY = 1) {
    if (!target) {
      return;
    }
    const spot = new THREE.Mesh(new THREE.CircleGeometry(radius, 12), spotMaterial);
    spot.position.set(x, y, z);
    spot.rotation.set(rotX, rotY, 0);
    spot.scale.set(scaleX, scaleY, 1);
    spot.castShadow = false;
    spot.receiveShadow = false;
    target.add(spot);
    spots.push(spot);
  }

  const head = avatar.userData.head || null;
  const leftArm = avatar.userData.leftArm || null;
  const rightArm = avatar.userData.rightArm || null;

  addSpot(head, 0.08, -0.2, 0.26, 0.69, -0.06, 0.02, 1.02, 0.9);
  addSpot(head, 0.06, 0.16, 0.34, 0.67, 0.05, -0.01, 0.94, 0.88);
  addSpot(head, 0.048, -0.46, 0.1, 0.36, Math.PI * 0.38, 0.01, 1.0, 0.82);
  addSpot(head, 0.046, 0.46, -0.02, 0.34, -Math.PI * 0.38, 0.01, 0.96, 0.82);
  addSpot(head, 0.036, 0.08, -0.16, 0.68, 0.02, 0.02, 1.0, 0.86);

  addSpot(leftArm, 0.055, 0.0, 0.44, 0.51, 0, 0, 0.9, 0.84);
  addSpot(leftArm, 0.045, -0.5, -0.06, 0.08, Math.PI * 0.5, 0, 0.98, 0.76);
  addSpot(leftArm, 0.038, 0.05, -0.58, 0.5, 0, 0, 0.84, 0.76);

  addSpot(rightArm, 0.055, -0.02, 0.24, 0.51, 0, 0, 0.92, 0.84);
  addSpot(rightArm, 0.046, 0.5, -0.18, 0.08, -Math.PI * 0.5, 0, 0.98, 0.78);
  addSpot(rightArm, 0.036, -0.04, -0.6, 0.5, 0, 0, 0.84, 0.74);

  avatar.userData.fletcherSkinSpots = spots;
  avatar.userData.fletcherSkinSpotsBuild = BUILD_ID;
}

function createLedgerHairMesh(baseHairColor = LEDGER_HAIR_COLOR, highlightHairColor = LEDGER_HAIR_HIGHLIGHT) {
  const hair = createLeo3DHairMesh(baseHairColor, highlightHairColor);
  if (!hair) {
    return createHairMesh("curly", baseHairColor) || new THREE.Group();
  }

  const torusCurls = [];
  hair.traverse((node) => {
    if (node.isMesh && node.geometry && node.geometry.type === "TorusGeometry") {
      torusCurls.push(node);
    }
  });
  for (let i = 0; i < torusCurls.length; i += 1) {
    const curl = torusCurls[i];
    if (curl.parent) {
      curl.parent.remove(curl);
    }
    disposeMeshResources(curl);
  }

  // Keep Adonis shape, trim sides/top, but preserve scalp coverage.
  hair.scale.set(hair.scale.x * 0.89, hair.scale.y * 0.84, hair.scale.z * 0.95);
  hair.position.set(0, 0.035, 0.05);

  const detailTexture = getHairDetailTexture();
  const dropMat = new THREE.MeshStandardMaterial({
    color: baseHairColor,
    roughness: 0.57,
    metalness: 0.03,
    map: detailTexture,
    bumpMap: detailTexture,
    bumpScale: 0.011,
  });
  const dropHighlightMat = new THREE.MeshStandardMaterial({
    color: highlightHairColor,
    roughness: 0.54,
    metalness: 0.03,
    map: detailTexture,
    bumpMap: detailTexture,
    bumpScale: 0.01,
  });

  // Keep below-ring area smooth (no rectangular side pieces).
  const sideBlendGeo = new THREE.SphereGeometry(0.075, 10, 8);
  const leftSideBlend = new THREE.Mesh(sideBlendGeo, dropMat);
  leftSideBlend.position.set(-0.47, 0.17, 0.2);
  leftSideBlend.scale.set(1.1, 0.72, 0.86);
  leftSideBlend.castShadow = true;
  leftSideBlend.receiveShadow = false;
  hair.add(leftSideBlend);

  const rightSideBlend = new THREE.Mesh(sideBlendGeo, dropMat);
  rightSideBlend.position.set(0.47, 0.17, 0.2);
  rightSideBlend.scale.set(1.1, 0.72, 0.86);
  rightSideBlend.castShadow = true;
  rightSideBlend.receiveShadow = false;
  hair.add(rightSideBlend);

  const rearDrop = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.24, 4, 8), dropHighlightMat);
  rearDrop.position.set(0, 0.07, -0.22);
  rearDrop.castShadow = true;
  rearDrop.receiveShadow = false;
  hair.add(rearDrop);

  // Tiny front fill to hide any remaining hairline gap.
  const frontFill = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), dropMat);
  frontFill.position.set(0, 0.2, 0.6);
  frontFill.scale.set(1.35, 0.72, 1.02);
  frontFill.castShadow = true;
  frontFill.receiveShadow = false;
  frontFill.userData.ledgerRingLinePiece = true;
  hair.add(frontFill);

  // Extra upper-front filler closes tiny forehead gap above the lower curl/drop area.
  const frontFillUpper = new THREE.Mesh(new THREE.SphereGeometry(0.074, 12, 10), dropMat);
  frontFillUpper.position.set(0, 0.33, 0.55);
  frontFillUpper.scale.set(1.58, 0.76, 1.0);
  frontFillUpper.castShadow = true;
  frontFillUpper.receiveShadow = false;
  frontFillUpper.userData.ledgerRingLinePiece = true;
  hair.add(frontFillUpper);

  const frontUpperCap = new THREE.Mesh(new THREE.SphereGeometry(0.082, 12, 10), dropMat);
  frontUpperCap.position.set(0, 0.34, 0.54);
  frontUpperCap.scale.set(1.48, 0.72, 0.96);
  frontUpperCap.castShadow = true;
  frontUpperCap.receiveShadow = false;
  frontUpperCap.userData.ledgerRingLinePiece = true;
  hair.add(frontUpperCap);

  // Fill the two tiny bald spots above ring center (left/right).
  const frontGapLeft = new THREE.Mesh(new THREE.SphereGeometry(0.056, 10, 8), dropMat);
  frontGapLeft.position.set(-0.13, 0.24, 0.57);
  frontGapLeft.scale.set(1.22, 0.82, 0.92);
  frontGapLeft.castShadow = true;
  frontGapLeft.receiveShadow = false;
  frontGapLeft.userData.ledgerRingLinePiece = true;
  hair.add(frontGapLeft);

  const frontGapRight = new THREE.Mesh(new THREE.SphereGeometry(0.056, 10, 8), dropMat);
  frontGapRight.position.set(0.13, 0.24, 0.57);
  frontGapRight.scale.set(1.22, 0.82, 0.92);
  frontGapRight.castShadow = true;
  frontGapRight.receiveShadow = false;
  frontGapRight.userData.ledgerRingLinePiece = true;
  hair.add(frontGapRight);

  // Targeted lower-front cover for the bald spot, without blocking eyes.
  const frontLowerCap = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 10), dropMat);
  frontLowerCap.position.set(0, 0.16, 0.59);
  frontLowerCap.scale.set(1.72, 0.62, 0.94);
  frontLowerCap.castShadow = true;
  frontLowerCap.receiveShadow = false;
  frontLowerCap.userData.ledgerRingLinePiece = true;
  hair.add(frontLowerCap);

  return hair;
}

function attachLedgerHair(avatar, options = {}) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const baseColor = normalizeHexColor(
    options.baseColor || avatar.userData.ledgerHairBaseColor || LEDGER_HAIR_COLOR,
    LEDGER_HAIR_COLOR
  );
  const highlightColor = normalizeHexColor(
    options.highlightColor || avatar.userData.ledgerHairHighlightColor || LEDGER_HAIR_HIGHLIGHT,
    LEDGER_HAIR_HIGHLIGHT
  );
  const hairYOffset = Number.isFinite(options.yOffset)
    ? options.yOffset
    : Number.isFinite(avatar.userData.ledgerHairYOffset)
      ? avatar.userData.ledgerHairYOffset
      : 0;

  let ledgerHair = null;
  try {
    ledgerHair = createLedgerHairMesh(baseColor, highlightColor);
  } catch (error) {
    console.error("Ledger hair build failed, using fallback", error);
  }

  if (!ledgerHair) {
    try {
      ledgerHair = createLeo3DHairMesh(baseColor, highlightColor);
    } catch (error) {
      console.error("Ledger fallback Leo hair build failed", error);
    }
  }
  if (!ledgerHair) {
    ledgerHair = createHairMesh("curly", baseColor) || new THREE.Group();
  }

  finalizeAvatarHairAttachment(avatar, ledgerHair, "ledger_hair", baseColor, highlightColor, hairYOffset);
  avatar.userData.ledgerHairBaseColor = baseColor;
  avatar.userData.ledgerHairHighlightColor = highlightColor;
  avatar.userData.ledgerHairYOffset = hairYOffset;
  avatar.userData.ledgerHairBuild = BUILD_ID;
}

function attachHendrixHair(avatar, options = {}) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const baseColor = normalizeHexColor(
    options.baseColor || avatar.userData.hendrixHairBaseColor || HENDRIX_HAIR_COLOR,
    HENDRIX_HAIR_COLOR
  );
  const highlightColor = normalizeHexColor(
    options.highlightColor || avatar.userData.hendrixHairHighlightColor || HENDRIX_HAIR_HIGHLIGHT,
    HENDRIX_HAIR_HIGHLIGHT
  );
  const hairYOffset = Number.isFinite(options.yOffset)
    ? options.yOffset
    : Number.isFinite(avatar.userData.hendrixHairYOffset)
      ? avatar.userData.hendrixHairYOffset
      : 0;

  attachLedgerHair(avatar, {
    baseColor,
    highlightColor,
    yOffset: hairYOffset,
  });

  const hairMesh = avatar.userData.hairMesh;
  if (hairMesh && hairMesh.scale) {
    hairMesh.scale.set(hairMesh.scale.x * 1.08, hairMesh.scale.y * 1.1, hairMesh.scale.z * 1.08);
    hairMesh.position.y += 0.015;
  }

  avatar.userData.hairStyle = "hendrix_hair";
  avatar.userData.hendrixHairBaseColor = baseColor;
  avatar.userData.hendrixHairHighlightColor = highlightColor;
  avatar.userData.hendrixHairYOffset = hairYOffset;
  avatar.userData.hendrixHairBuild = BUILD_ID;
}

function stripLedgerRingPieces(hair) {
  if (!hair) {
    return hair;
  }
  const ringPieces = [];
  hair.traverse((node) => {
    if (!node || !node.isMesh) {
      return;
    }
    if (node.userData && node.userData.ledgerRingLinePiece) {
      ringPieces.push(node);
    }
  });
  for (let i = 0; i < ringPieces.length; i += 1) {
    const piece = ringPieces[i];
    if (piece.parent) {
      piece.parent.remove(piece);
    }
    disposeMeshResources(piece);
  }
  return hair;
}

function createCharlie2HairMesh(baseHairColor = CHARLIE_HAIR_COLOR, highlightHairColor = CHARLIE_HAIR_HIGHLIGHT) {
  const hair = createLedgerHairMesh(baseHairColor, highlightHairColor);
  return stripLedgerRingPieces(hair);
}

function attachCharlie2Hair(avatar, options = {}) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const baseColor = normalizeHexColor(
    options.baseColor || avatar.userData.charlie2HairBaseColor || CHARLIE_HAIR_COLOR,
    CHARLIE_HAIR_COLOR
  );
  const highlightColor = normalizeHexColor(
    options.highlightColor || avatar.userData.charlie2HairHighlightColor || CHARLIE_HAIR_HIGHLIGHT,
    CHARLIE_HAIR_HIGHLIGHT
  );
  const hairYOffset = Number.isFinite(options.yOffset)
    ? options.yOffset
    : Number.isFinite(avatar.userData.charlie2HairYOffset)
      ? avatar.userData.charlie2HairYOffset
      : 0;

  let hairMesh = null;
  try {
    hairMesh = createCharlie2HairMesh(baseColor, highlightColor);
  } catch (error) {
    console.error("Charlie 2 hair build failed, using fallback", error);
  }

  if (!hairMesh) {
    hairMesh = stripLedgerRingPieces(createLedgerHairMesh(baseColor, highlightColor));
  }
  if (!hairMesh) {
    hairMesh = createHairMesh("curly", baseColor) || new THREE.Group();
  }

  finalizeAvatarHairAttachment(avatar, hairMesh, "charlie2_hair", baseColor, highlightColor, hairYOffset);
  avatar.userData.charlie2HairBaseColor = baseColor;
  avatar.userData.charlie2HairHighlightColor = highlightColor;
  avatar.userData.charlie2HairYOffset = hairYOffset;
  avatar.userData.charlie2HairBuild = BUILD_ID;
}

function createOscarHairMesh(baseHairColor = OSCAR_HAIR_COLOR, highlightHairColor = OSCAR_HAIR_HIGHLIGHT) {
  const hair = createLeo3DHairMesh(baseHairColor, highlightHairColor);
  if (!hair) {
    return createHairMesh("curly", baseHairColor) || new THREE.Group();
  }

  const torusCurls = [];
  hair.traverse((node) => {
    if (node.isMesh && node.geometry && node.geometry.type === "TorusGeometry") {
      torusCurls.push(node);
    }
  });
  for (let i = 0; i < torusCurls.length; i += 1) {
    const curl = torusCurls[i];
    if (curl.parent) {
      curl.parent.remove(curl);
    }
    disposeMeshResources(curl);
  }

  // Middle ground between Adonis and Ledger: slightly fuller sides and top than Ledger.
  hair.scale.set(hair.scale.x * 0.95, hair.scale.y * 0.92, hair.scale.z * 0.97);
  hair.position.set(0, 0.034, 0.03);

  const detailTexture = getHairDetailTexture();
  const dropMat = new THREE.MeshStandardMaterial({
    color: baseHairColor,
    roughness: 0.56,
    metalness: 0.03,
    map: detailTexture,
    bumpMap: detailTexture,
    bumpScale: 0.011,
  });
  const dropHighlightMat = new THREE.MeshStandardMaterial({
    color: highlightHairColor,
    roughness: 0.53,
    metalness: 0.03,
    map: detailTexture,
    bumpMap: detailTexture,
    bumpScale: 0.01,
  });

  // Keep Ledger-style downward lower hair instead of ringlet curls.
  const dropGeo = new THREE.CapsuleGeometry(0.095, 0.29, 4, 8);
  const leftDrop = new THREE.Mesh(dropGeo, dropMat);
  leftDrop.position.set(-0.52, 0.1, 0.1);
  leftDrop.rotation.set(0, -0.08, 0.06);
  leftDrop.castShadow = true;
  leftDrop.receiveShadow = false;
  hair.add(leftDrop);

  const rightDrop = new THREE.Mesh(dropGeo, dropMat);
  rightDrop.position.set(0.52, 0.1, 0.1);
  rightDrop.rotation.set(0, 0.08, -0.06);
  rightDrop.castShadow = true;
  rightDrop.receiveShadow = false;
  hair.add(rightDrop);

  const rearDrop = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.25, 4, 8), dropHighlightMat);
  rearDrop.position.set(0, 0.075, -0.22);
  rearDrop.castShadow = true;
  rearDrop.receiveShadow = false;
  hair.add(rearDrop);

  // Tiny front fill to avoid scalp peeking.
  const frontFill = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), dropMat);
  frontFill.position.set(0, 0.2, 0.61);
  frontFill.scale.set(1.3, 0.72, 1.02);
  frontFill.castShadow = true;
  frontFill.receiveShadow = false;
  hair.add(frontFill);

  return hair;
}

function attachOscarHair(avatar, options = {}) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const baseColor = normalizeHexColor(
    options.baseColor || avatar.userData.oscarHairBaseColor || OSCAR_HAIR_COLOR,
    OSCAR_HAIR_COLOR
  );
  const highlightColor = normalizeHexColor(
    options.highlightColor || avatar.userData.oscarHairHighlightColor || OSCAR_HAIR_HIGHLIGHT,
    OSCAR_HAIR_HIGHLIGHT
  );
  const hairYOffset = Number.isFinite(options.yOffset)
    ? options.yOffset
    : Number.isFinite(avatar.userData.oscarHairYOffset)
      ? avatar.userData.oscarHairYOffset
      : 0;

  let oscarHair = null;
  try {
    oscarHair = createOscarHairMesh(baseColor, highlightColor);
  } catch (error) {
    console.error("Oscar hair build failed, using fallback", error);
  }

  if (!oscarHair) {
    try {
      oscarHair = createLedgerHairMesh(baseColor, highlightColor);
    } catch (error) {
      console.error("Oscar fallback ledger hair build failed", error);
    }
  }
  if (!oscarHair) {
    oscarHair = createLeo3DHairMesh(baseColor, highlightColor) || createHairMesh("curly", baseColor) || new THREE.Group();
  }

  finalizeAvatarHairAttachment(avatar, oscarHair, "oscar_hair", baseColor, highlightColor, hairYOffset);
  avatar.userData.oscarHairBaseColor = baseColor;
  avatar.userData.oscarHairHighlightColor = highlightColor;
  avatar.userData.oscarHairYOffset = hairYOffset;
}

function createChristianHairMesh(baseHairColor = CHRISTIAN_HAIR_COLOR, highlightHairColor = CHRISTIAN_HAIR_HIGHLIGHT) {
  const hair = createLedgerHairMesh(baseHairColor, highlightHairColor);
  if (!hair) {
    return createHairMesh("curly", baseHairColor) || new THREE.Group();
  }

  // Christian variant: keep Ledger ring line but push it back toward scalp.
  const ringLikeCurls = [];
  hair.traverse((node) => {
    if (!node.isMesh) {
      return;
    }
    if (node.userData && node.userData.ledgerRingLinePiece) {
      ringLikeCurls.push(node);
    }
  });
  for (let i = 0; i < ringLikeCurls.length; i += 1) {
    const curl = ringLikeCurls[i];
    curl.position.z -= 0.16;
    curl.position.y += 0.01;
    curl.scale.z *= 0.96;
  }

  return hair;
}

function attachChristianHair(avatar, options = {}) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const baseColor = normalizeHexColor(
    options.baseColor || avatar.userData.christianHairBaseColor || CHRISTIAN_HAIR_COLOR,
    CHRISTIAN_HAIR_COLOR
  );
  const highlightColor = normalizeHexColor(
    options.highlightColor || avatar.userData.christianHairHighlightColor || CHRISTIAN_HAIR_HIGHLIGHT,
    CHRISTIAN_HAIR_HIGHLIGHT
  );
  const hairYOffset = Number.isFinite(options.yOffset)
    ? options.yOffset
    : Number.isFinite(avatar.userData.christianHairYOffset)
      ? avatar.userData.christianHairYOffset
      : 0;

  let christianHair = null;
  try {
    christianHair = createChristianHairMesh(baseColor, highlightColor);
  } catch (error) {
    console.error("Christian hair build failed, using fallback", error);
  }

  if (!christianHair) {
    christianHair = createLeo3DHairMesh(baseColor, highlightColor) || createHairMesh("curly", baseColor) || new THREE.Group();
  }

  finalizeAvatarHairAttachment(avatar, christianHair, "christian_hair", baseColor, highlightColor, hairYOffset);
  avatar.userData.christianHairBaseColor = baseColor;
  avatar.userData.christianHairHighlightColor = highlightColor;
  avatar.userData.christianHairYOffset = hairYOffset;
  avatar.userData.christianHairBuild = BUILD_ID;
}

function createBeauHairMesh(baseHairColor = BEAU_HAIR_COLOR, highlightHairColor = BEAU_HAIR_HIGHLIGHT) {
  const hair = createLeo3DHairMesh(baseHairColor, highlightHairColor);
  if (!hair) {
    return createHairMesh("curly", baseHairColor) || new THREE.Group();
  }

  hair.scale.set(hair.scale.x * 1.01, hair.scale.y * 1.01, hair.scale.z * 1.03);
  hair.position.set(0, 0.02, 0.02);

  const detailTexture = getHairDetailTexture();
  const rootMat = new THREE.MeshStandardMaterial({
    color: BEAU_ROOT_COLOR,
    roughness: 0.58,
    metalness: 0.02,
    map: detailTexture,
    bumpMap: detailTexture,
    bumpScale: 0.011,
  });
  const backMat = new THREE.MeshStandardMaterial({
    color: baseHairColor,
    roughness: 0.56,
    metalness: 0.03,
    map: detailTexture,
    bumpMap: detailTexture,
    bumpScale: 0.012,
  });

  const rootCap = new THREE.Mesh(new THREE.SphereGeometry(0.46, 16, 12), rootMat);
  rootCap.position.set(0, 0.31, -0.06);
  rootCap.scale.set(1.16, 0.58, 0.98);
  rootCap.castShadow = true;
  rootCap.receiveShadow = false;
  hair.add(rootCap);

  const rootFront = new THREE.Mesh(new THREE.SphereGeometry(0.24, 14, 10), rootMat);
  rootFront.position.set(0, 0.31, 0.28);
  rootFront.scale.set(1.38, 0.52, 0.72);
  rootFront.castShadow = true;
  rootFront.receiveShadow = false;
  hair.add(rootFront);

  const rootLeft = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 10), rootMat);
  rootLeft.position.set(-0.38, 0.23, 0.06);
  rootLeft.scale.set(1.06, 0.64, 0.76);
  rootLeft.castShadow = true;
  rootLeft.receiveShadow = false;
  hair.add(rootLeft);

  const rootRight = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 10), rootMat);
  rootRight.position.set(0.38, 0.23, 0.06);
  rootRight.scale.set(1.06, 0.64, 0.76);
  rootRight.castShadow = true;
  rootRight.receiveShadow = false;
  hair.add(rootRight);

  const rootFrontLeft = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), rootMat);
  rootFrontLeft.position.set(-0.18, 0.26, 0.34);
  rootFrontLeft.scale.set(1.05, 0.52, 0.6);
  rootFrontLeft.castShadow = true;
  rootFrontLeft.receiveShadow = false;
  hair.add(rootFrontLeft);

  const rootFrontRight = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), rootMat);
  rootFrontRight.position.set(0.18, 0.26, 0.34);
  rootFrontRight.scale.set(1.05, 0.52, 0.6);
  rootFrontRight.castShadow = true;
  rootFrontRight.receiveShadow = false;
  hair.add(rootFrontRight);

  // Light blonde extra coverage to support the softer pale look.
  const backCover = new THREE.Mesh(new THREE.SphereGeometry(0.23, 14, 12), backMat);
  backCover.position.set(0, 0.16, -0.32);
  backCover.scale.set(1.1, 0.82, 0.98);
  backCover.castShadow = true;
  backCover.receiveShadow = false;
  hair.add(backCover);

  const backNape = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 10), backMat);
  backNape.position.set(0, 0.06, -0.26);
  backNape.scale.set(1.08, 0.55, 0.9);
  backNape.castShadow = true;
  backNape.receiveShadow = false;
  hair.add(backNape);

  return hair;
}

function attachBeauHair(avatar, options = {}) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const baseColor = normalizeHexColor(
    options.baseColor || avatar.userData.beauHairBaseColor || BEAU_HAIR_COLOR,
    BEAU_HAIR_COLOR
  );
  const highlightColor = normalizeHexColor(
    options.highlightColor || avatar.userData.beauHairHighlightColor || BEAU_HAIR_HIGHLIGHT,
    BEAU_HAIR_HIGHLIGHT
  );
  const hairYOffset = Number.isFinite(options.yOffset)
    ? options.yOffset
    : Number.isFinite(avatar.userData.beauHairYOffset)
      ? avatar.userData.beauHairYOffset
      : 0;

  let beauHair = null;
  try {
    beauHair = createBeauHairMesh(baseColor, highlightColor);
  } catch (error) {
    console.error("Beau hair build failed, using fallback", error);
  }

  if (!beauHair) {
    try {
      beauHair = createLeo3DHairMesh(baseColor, highlightColor);
    } catch (error) {
      console.error("Beau fallback Leo hair build failed", error);
    }
  }
  if (!beauHair) {
    beauHair = createHairMesh("curly", baseColor) || new THREE.Group();
  }

  finalizeAvatarHairAttachment(avatar, beauHair, "beau_hair", baseColor, highlightColor, hairYOffset);
  avatar.userData.beauHairBaseColor = baseColor;
  avatar.userData.beauHairHighlightColor = highlightColor;
  avatar.userData.beauHairYOffset = hairYOffset;
  avatar.userData.beauHairBuild = BUILD_ID;
}

function createAdonis2HairMesh(baseHairColor = ADONIS2_HAIR_COLOR, highlightHairColor = ADONIS2_HAIR_HIGHLIGHT) {
  const hair = new THREE.Group();
  const baseColor = normalizeHexColor(baseHairColor, ADONIS2_HAIR_COLOR);
  const detailTexture = getHairDetailTexture();
  const hairMat = new THREE.MeshStandardMaterial({
    color: baseColor,
    roughness: 0.97,
    metalness: 0.0,
    map: detailTexture,
    bumpMap: detailTexture,
    bumpScale: 0.017,
  });

  function addPart(geometry, x, y, z, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0) {
    const part = new THREE.Mesh(geometry, hairMat);
    part.position.set(x, y, z);
    part.scale.set(sx, sy, sz);
    part.rotation.set(rx, ry, rz);
    part.castShadow = true;
    part.receiveShadow = false;
    hair.add(part);
    return part;
  }

  // Thick rounded bread-roll body: wide and significantly taller than the previous flat cap.
  addPart(
    new THREE.SphereGeometry(0.84, 34, 24, 0, Math.PI * 2, 0, Math.PI * 0.86),
    0,
    0.36,
    0.02,
    1.1,
    1.62,
    1.04
  );

  // Extra crown body to enforce full rounded dome (no flat top).
  addPart(new THREE.SphereGeometry(0.46, 20, 16), 0, 0.73, -0.02, 1.12, 1.06, 1.02);

  // Puffy sides with thickness that taper back inward to scalp.
  addPart(new THREE.SphereGeometry(0.31, 18, 14), -0.62, 0.34, 0.03, 1.04, 1.02, 0.94);
  addPart(new THREE.SphereGeometry(0.31, 18, 14), 0.62, 0.34, 0.03, 1.04, 1.02, 0.94);
  addPart(new THREE.SphereGeometry(0.2, 14, 10), -0.51, 0.18, 0.01, 0.9, 0.74, 0.86);
  addPart(new THREE.SphereGeometry(0.2, 14, 10), 0.51, 0.18, 0.01, 0.9, 0.74, 0.86);

  // Front overlap lowered for clear upper-forehead coverage (smooth edge, no curl ring).
  addPart(new THREE.SphereGeometry(0.32, 18, 14), 0, 0.12, 0.5, 1.18, 0.8, 0.68, -0.1, 0, 0);
  addPart(new THREE.SphereGeometry(0.18, 14, 10), -0.24, 0.16, 0.45, 0.98, 0.74, 0.82);
  addPart(new THREE.SphereGeometry(0.18, 14, 10), 0.24, 0.16, 0.45, 0.98, 0.74, 0.82);

  // Back body fullness.
  addPart(new THREE.SphereGeometry(0.34, 18, 14), 0, 0.31, -0.37, 1.15, 0.98, 1.08);

  // Subtle top waviness (soft irregularity, no spikes).
  addPart(new THREE.SphereGeometry(0.11, 12, 9), -0.18, 0.76, -0.03, 1.02, 0.66, 0.86);
  addPart(new THREE.SphereGeometry(0.12, 12, 9), 0, 0.8, 0.02, 1.08, 0.64, 0.9);
  addPart(new THREE.SphereGeometry(0.11, 12, 9), 0.18, 0.76, -0.02, 1.02, 0.66, 0.86);

  // Sit directly on scalp with no floating gap.
  hair.position.set(0, -0.14, 0.02);
  return hair;
}

function attachAdonis2Hair(avatar, options = {}) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const baseColor = normalizeHexColor(
    options.baseColor || avatar.userData.adonis2HairBaseColor || ADONIS2_HAIR_COLOR,
    ADONIS2_HAIR_COLOR
  );
  const highlightColor = normalizeHexColor(
    options.highlightColor || avatar.userData.adonis2HairHighlightColor || ADONIS2_HAIR_HIGHLIGHT,
    ADONIS2_HAIR_HIGHLIGHT
  );
  const hairYOffset = Number.isFinite(options.yOffset)
    ? options.yOffset
    : Number.isFinite(avatar.userData.adonis2HairYOffset)
      ? avatar.userData.adonis2HairYOffset
      : 0;

  let adonis2Hair = null;
  try {
    adonis2Hair = createAdonis2HairMesh(baseColor, highlightColor);
  } catch (error) {
    console.error("Adonis 2 hair build failed, using fallback", error);
  }

  if (!adonis2Hair) {
    try {
      adonis2Hair = createLeo3DHairMesh(baseColor, highlightColor);
    } catch (error) {
      console.error("Adonis 2 fallback Leo hair build failed", error);
    }
  }
  if (!adonis2Hair) {
    adonis2Hair = createHairMesh("curly", baseColor) || new THREE.Group();
  }

  finalizeAvatarHairAttachment(avatar, adonis2Hair, "adonis2_hair", baseColor, highlightColor, hairYOffset);
  avatar.userData.adonis2HairBaseColor = baseColor;
  avatar.userData.adonis2HairHighlightColor = highlightColor;
  avatar.userData.adonis2HairYOffset = hairYOffset;
}

function addLeoSuitAndTie(avatar) {
  const torso = avatar && avatar.userData ? avatar.userData.torso : null;
  if (!torso) {
    return;
  }

  const suitColor = new THREE.Color(LEO_SUIT_COLOR);
  const tieColor = new THREE.Color(LEO_TIE_COLOR);

  if (avatar.userData.shirtMaterial) {
    avatar.userData.shirtMaterial.color.copy(suitColor);
    avatar.userData.shirtColor = LEO_SUIT_COLOR;
  }
  if (avatar.userData.pantMaterial) {
    avatar.userData.pantMaterial.color.copy(suitColor);
    avatar.userData.pantsColor = LEO_SUIT_COLOR;
  }
  const skinColor = new THREE.Color(LEO_SKIN_TONE);
  if (avatar.userData.leftArm && avatar.userData.leftArm.material && avatar.userData.leftArm.material.color) {
    avatar.userData.leftArm.material.color.copy(skinColor);
  }
  if (avatar.userData.rightArm && avatar.userData.rightArm.material && avatar.userData.rightArm.material.color) {
    avatar.userData.rightArm.material.color.copy(skinColor);
  }

  if (avatar.userData.leoSuitGroup) {
    torso.remove(avatar.userData.leoSuitGroup);
    disposeMeshResources(avatar.userData.leoSuitGroup);
    avatar.userData.leoSuitGroup = null;
  }
  if (avatar.userData.leoLeftSleeveGroup && avatar.userData.leftArm) {
    avatar.userData.leftArm.remove(avatar.userData.leoLeftSleeveGroup);
    disposeMeshResources(avatar.userData.leoLeftSleeveGroup);
    avatar.userData.leoLeftSleeveGroup = null;
  }
  if (avatar.userData.leoRightSleeveGroup && avatar.userData.rightArm) {
    avatar.userData.rightArm.remove(avatar.userData.leoRightSleeveGroup);
    disposeMeshResources(avatar.userData.leoRightSleeveGroup);
    avatar.userData.leoRightSleeveGroup = null;
  }

  const suitMat = new THREE.MeshStandardMaterial({ color: suitColor, roughness: 0.68, metalness: 0.05 });
  const shirtMat = new THREE.MeshStandardMaterial({ color: 0xfafcff, roughness: 0.82, metalness: 0.01 });
  const tieMat = new THREE.MeshStandardMaterial({ color: tieColor, roughness: 0.72, metalness: 0.03 });

  const suitGroup = new THREE.Group();

  const blazerBody = new THREE.Mesh(new THREE.BoxGeometry(2.12, 2.1, 1.22), suitMat);
  blazerBody.castShadow = true;
  blazerBody.receiveShadow = true;
  suitGroup.add(blazerBody);

  const shoulderLeft = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.28, 1.16), suitMat);
  shoulderLeft.position.set(-0.82, 0.84, 0);
  shoulderLeft.castShadow = true;
  shoulderLeft.receiveShadow = true;
  suitGroup.add(shoulderLeft);

  const shoulderRight = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.28, 1.16), suitMat);
  shoulderRight.position.set(0.82, 0.84, 0);
  shoulderRight.castShadow = true;
  shoulderRight.receiveShadow = true;
  suitGroup.add(shoulderRight);

  const shirtPanel = new THREE.Mesh(new THREE.BoxGeometry(0.78, 1.2, 0.06), shirtMat);
  shirtPanel.position.set(0, 0.13, 0.63);
  shirtPanel.castShadow = true;
  shirtPanel.receiveShadow = true;
  suitGroup.add(shirtPanel);

  const shirtCollarLeft = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.21, 0.05), shirtMat);
  shirtCollarLeft.position.set(-0.12, 0.57, 0.63);
  shirtCollarLeft.rotation.z = 0.42;
  shirtCollarLeft.castShadow = true;
  shirtCollarLeft.receiveShadow = true;
  suitGroup.add(shirtCollarLeft);

  const shirtCollarRight = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.21, 0.05), shirtMat);
  shirtCollarRight.position.set(0.12, 0.57, 0.63);
  shirtCollarRight.rotation.z = -0.42;
  shirtCollarRight.castShadow = true;
  shirtCollarRight.receiveShadow = true;
  suitGroup.add(shirtCollarRight);

  const tieKnot = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.19, 0.07), tieMat);
  tieKnot.position.set(0, 0.47, 0.64);
  tieKnot.castShadow = true;
  tieKnot.receiveShadow = true;
  suitGroup.add(tieKnot);

  const tieStrip = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.9, 0.06), tieMat);
  tieStrip.position.set(0, -0.08, 0.64);
  tieStrip.castShadow = true;
  tieStrip.receiveShadow = true;
  suitGroup.add(tieStrip);

  const leftLapel = new THREE.Mesh(new THREE.BoxGeometry(0.36, 1.02, 0.07), suitMat);
  leftLapel.position.set(-0.31, 0.12, 0.64);
  leftLapel.rotation.z = 0.22;
  leftLapel.castShadow = true;
  leftLapel.receiveShadow = true;
  suitGroup.add(leftLapel);

  const rightLapel = new THREE.Mesh(new THREE.BoxGeometry(0.36, 1.02, 0.07), suitMat);
  rightLapel.position.set(0.31, 0.12, 0.64);
  rightLapel.rotation.z = -0.22;
  rightLapel.castShadow = true;
  rightLapel.receiveShadow = true;
  suitGroup.add(rightLapel);

  torso.add(suitGroup);
  avatar.userData.leoSuitGroup = suitGroup;

  // Sleeve groups to ensure full blazer coverage while arms animate.
  const leftSleeveGroup = new THREE.Group();
  const leftSleeveOuter = new THREE.Mesh(new THREE.BoxGeometry(1.04, 1.46, 1.04), suitMat);
  leftSleeveOuter.position.y = 0.26;
  leftSleeveOuter.castShadow = true;
  leftSleeveOuter.receiveShadow = true;
  leftSleeveGroup.add(leftSleeveOuter);
  const leftShoulderCap = new THREE.Mesh(new THREE.BoxGeometry(1.14, 0.34, 1.1), suitMat);
  leftShoulderCap.position.set(0, 0.9, 0);
  leftShoulderCap.castShadow = true;
  leftShoulderCap.receiveShadow = true;
  leftSleeveGroup.add(leftShoulderCap);
  const leftCuff = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.12, 0.68), shirtMat);
  leftCuff.position.set(0, -0.43, 0);
  leftCuff.castShadow = true;
  leftCuff.receiveShadow = true;
  leftSleeveGroup.add(leftCuff);
  avatar.userData.leftArm.add(leftSleeveGroup);
  avatar.userData.leoLeftSleeveGroup = leftSleeveGroup;

  const rightSleeveGroup = new THREE.Group();
  const rightSleeveOuter = new THREE.Mesh(new THREE.BoxGeometry(1.04, 1.46, 1.04), suitMat);
  rightSleeveOuter.position.y = 0.26;
  rightSleeveOuter.castShadow = true;
  rightSleeveOuter.receiveShadow = true;
  rightSleeveGroup.add(rightSleeveOuter);
  const rightShoulderCap = new THREE.Mesh(new THREE.BoxGeometry(1.14, 0.34, 1.1), suitMat);
  rightShoulderCap.position.set(0, 0.9, 0);
  rightShoulderCap.castShadow = true;
  rightShoulderCap.receiveShadow = true;
  rightSleeveGroup.add(rightShoulderCap);
  const rightCuff = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.12, 0.68), shirtMat);
  rightCuff.position.set(0, -0.43, 0);
  rightCuff.castShadow = true;
  rightCuff.receiveShadow = true;
  rightSleeveGroup.add(rightCuff);
  avatar.userData.rightArm.add(rightSleeveGroup);
  avatar.userData.leoRightSleeveGroup = rightSleeveGroup;
}

function clearLeoSuitAndTie(avatar) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const torso = avatar.userData.torso || null;
  if (avatar.userData.leoSuitGroup && torso) {
    torso.remove(avatar.userData.leoSuitGroup);
    disposeMeshResources(avatar.userData.leoSuitGroup);
  }
  avatar.userData.leoSuitGroup = null;

  if (avatar.userData.leoLeftSleeveGroup && avatar.userData.leftArm) {
    avatar.userData.leftArm.remove(avatar.userData.leoLeftSleeveGroup);
    disposeMeshResources(avatar.userData.leoLeftSleeveGroup);
  }
  avatar.userData.leoLeftSleeveGroup = null;

  if (avatar.userData.leoRightSleeveGroup && avatar.userData.rightArm) {
    avatar.userData.rightArm.remove(avatar.userData.leoRightSleeveGroup);
    disposeMeshResources(avatar.userData.leoRightSleeveGroup);
  }
  avatar.userData.leoRightSleeveGroup = null;
}

function createTeletubbyFaceTexture(faceSkinColor = LEDGER2_FACE_SKIN) {
  const size = 256;
  const faceCanvas = document.createElement("canvas");
  faceCanvas.width = size;
  faceCanvas.height = size;
  const ctx = faceCanvas.getContext("2d");
  if (!ctx) {
    return createSolidTexture(faceSkinColor);
  }

  const safeSkin = normalizeHexColor(faceSkinColor, LEDGER2_FACE_SKIN);
  ctx.fillStyle = safeSkin;
  ctx.fillRect(0, 0, size, size);

  const shadeGradient = ctx.createRadialGradient(size * 0.5, size * 0.42, size * 0.22, size * 0.5, size * 0.5, size * 0.62);
  shadeGradient.addColorStop(0, "rgba(255, 255, 255, 0.16)");
  shadeGradient.addColorStop(1, "rgba(0, 0, 0, 0.08)");
  ctx.fillStyle = shadeGradient;
  ctx.beginPath();
  ctx.arc(size * 0.5, size * 0.5, size * 0.48, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#16120f";
  ctx.beginPath();
  ctx.ellipse(size * 0.38, size * 0.43, size * 0.058, size * 0.086, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(size * 0.62, size * 0.43, size * 0.058, size * 0.086, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#1a1511";
  ctx.lineWidth = 12;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(size * 0.5, size * 0.66, size * 0.13, 0.16 * Math.PI, 0.84 * Math.PI, false);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(faceCanvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  texture.needsUpdate = true;
  return texture;
}

function applyLedger2TeletubbyLook(avatar) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const userData = avatar.userData;
  const torso = userData.torso;
  const head = userData.head;
  const leftArm = userData.leftArm;
  const rightArm = userData.rightArm;
  const leftLeg = userData.leftLeg;
  const rightLeg = userData.rightLeg;

  if (!torso || !head || !leftArm || !rightArm || !leftLeg || !rightLeg) {
    return;
  }

  clearLeoSuitAndTie(avatar);

  if (userData.leoFace3DGroup) {
    head.remove(userData.leoFace3DGroup);
    disposeMeshResources(userData.leoFace3DGroup);
    userData.leoFace3DGroup = null;
  }

  const hairAnchor = clearAvatarHairAnchor(avatar);
  if (hairAnchor) {
    hairAnchor.visible = false;
  }
  userData.hairStyle = "none";
  userData.hairColor = LEDGER2_SUIT_COLOR;

  const suitColor = new THREE.Color(LEDGER2_SUIT_COLOR);
  const faceSkinColor = new THREE.Color(LEDGER2_FACE_SKIN);

  if (userData.shirtMaterial && userData.shirtMaterial.color) {
    userData.shirtMaterial.color.copy(suitColor);
    userData.shirtColor = LEDGER2_SUIT_COLOR;
  }
  if (userData.pantMaterial && userData.pantMaterial.color) {
    userData.pantMaterial.color.copy(suitColor);
    userData.pantsColor = LEDGER2_SUIT_COLOR;
  }
  const skinMaterials = userData.skinMaterials || [];
  skinMaterials.forEach((material) => {
    if (material && material.color) {
      material.color.copy(suitColor);
    }
  });
  if (userData.headMaterial && userData.headMaterial.color) {
    if (userData.headMaterial.map) {
      userData.headMaterial.map.dispose();
      userData.headMaterial.map = null;
    }
    userData.headMaterial.color.copy(suitColor);
    userData.headMaterial.needsUpdate = true;
  }
  userData.skinTone = LEDGER2_SUIT_COLOR;

  function replaceGeometry(mesh, geometry) {
    if (!mesh || !geometry) {
      return;
    }
    if (mesh.geometry) {
      mesh.geometry.dispose();
    }
    mesh.geometry = geometry;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  }

  replaceGeometry(torso, new THREE.SphereGeometry(1.08, 28, 22));
  replaceGeometry(head, new THREE.SphereGeometry(0.9, 28, 22));
  replaceGeometry(leftArm, new THREE.CapsuleGeometry(0.24, 1.16, 4, 12));
  replaceGeometry(rightArm, new THREE.CapsuleGeometry(0.24, 1.16, 4, 12));
  replaceGeometry(leftLeg, new THREE.CapsuleGeometry(0.3, 1.02, 4, 12));
  replaceGeometry(rightLeg, new THREE.CapsuleGeometry(0.3, 1.02, 4, 12));

  torso.scale.set(1, 1.16, 0.94);
  head.scale.set(0.98, 1.02, 0.98);
  leftArm.scale.set(1, 1, 1);
  rightArm.scale.set(1, 1, 1);
  leftLeg.scale.set(1, 1, 1);
  rightLeg.scale.set(1, 1, 1);

  torso.position.y = TORSO_BASE_Y - 0.1;
  head.position.y = HEAD_BASE_Y + 0.08;
  leftArm.position.set(-1.18, TORSO_BASE_Y - 0.05, 0.04);
  rightArm.position.set(1.18, TORSO_BASE_Y - 0.05, 0.04);
  leftLeg.position.set(-0.55, 0.95, 0.05);
  rightLeg.position.set(0.55, 0.95, 0.05);
  leftArm.rotation.set(0, 0, 0);
  rightArm.rotation.set(0, 0, 0);
  leftLeg.rotation.set(0, 0, 0);
  rightLeg.rotation.set(0, 0, 0);

  if (userData.faceMaterial) {
    if (userData.faceMaterial.map) {
      userData.faceMaterial.map.dispose();
    }
    userData.faceMaterial.map = createTeletubbyFaceTexture(LEDGER2_FACE_SKIN);
    userData.faceMaterial.color.set(0xffffff);
    userData.faceMaterial.transparent = false;
    userData.faceMaterial.opacity = 1;
    userData.faceMaterial.alphaTest = 0;
    userData.faceMaterial.depthWrite = true;
    userData.faceMaterial.side = THREE.FrontSide;
    userData.faceMaterial.polygonOffset = true;
    userData.faceMaterial.polygonOffsetFactor = -1;
    userData.faceMaterial.polygonOffsetUnits = -2;
    userData.faceMaterial.needsUpdate = true;
    userData.faceStyle = "ledger2_teletubby_face";
  }
  if (userData.faceMesh) {
    if (userData.faceMesh.geometry) {
      userData.faceMesh.geometry.dispose();
    }
    userData.faceMesh.geometry = new THREE.CircleGeometry(0.53, 48);
    userData.faceMesh.position.set(0, -0.03, 0.93);
    userData.faceMesh.renderOrder = 12;
    userData.faceMesh.visible = true;
  }

  if (userData.ledger2TorsoDetails) {
    torso.remove(userData.ledger2TorsoDetails);
    disposeMeshResources(userData.ledger2TorsoDetails);
    userData.ledger2TorsoDetails = null;
  }
  if (userData.ledger2HeadDetails) {
    head.remove(userData.ledger2HeadDetails);
    disposeMeshResources(userData.ledger2HeadDetails);
    userData.ledger2HeadDetails = null;
  }
  if (userData.ledger2LeftHandDetail && leftArm) {
    leftArm.remove(userData.ledger2LeftHandDetail);
    disposeMeshResources(userData.ledger2LeftHandDetail);
    userData.ledger2LeftHandDetail = null;
  }
  if (userData.ledger2RightHandDetail && rightArm) {
    rightArm.remove(userData.ledger2RightHandDetail);
    disposeMeshResources(userData.ledger2RightHandDetail);
    userData.ledger2RightHandDetail = null;
  }
  if (userData.ledger2LeftFootDetail && leftLeg) {
    leftLeg.remove(userData.ledger2LeftFootDetail);
    disposeMeshResources(userData.ledger2LeftFootDetail);
    userData.ledger2LeftFootDetail = null;
  }
  if (userData.ledger2RightFootDetail && rightLeg) {
    rightLeg.remove(userData.ledger2RightFootDetail);
    disposeMeshResources(userData.ledger2RightFootDetail);
    userData.ledger2RightFootDetail = null;
  }

  const torsoDetails = new THREE.Group();
  const screenFrameMat = new THREE.MeshStandardMaterial({
    color: 0x8f959e,
    roughness: 0.46,
    metalness: 0.16,
  });
  const screenMat = new THREE.MeshStandardMaterial({
    color: 0xa9afb7,
    roughness: 0.42,
    metalness: 0.04,
  });
  const bellyMat = new THREE.MeshStandardMaterial({
    color: suitColor.clone().lerp(new THREE.Color("#ffffff"), 0.08),
    roughness: 0.58,
    metalness: 0.02,
  });
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.82, 24, 18), bellyMat);
  belly.position.set(0, -0.16, 0.34);
  belly.scale.set(1, 0.82, 0.45);
  belly.castShadow = true;
  belly.receiveShadow = true;
  torsoDetails.add(belly);
  const bellyPanel = new THREE.Mesh(new THREE.SphereGeometry(0.67, 24, 18), screenMat);
  bellyPanel.position.set(0, -0.14, 0.63);
  bellyPanel.scale.set(1, 0.72, 0.25);
  bellyPanel.castShadow = true;
  bellyPanel.receiveShadow = true;
  torsoDetails.add(bellyPanel);

  const screenFrame = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.09, 36), screenFrameMat);
  screenFrame.rotation.x = Math.PI * 0.5;
  screenFrame.position.set(0, -0.14, 0.77);
  screenFrame.castShadow = true;
  screenFrame.receiveShadow = true;
  torsoDetails.add(screenFrame);
  const screenInner = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 0.052, 36), screenMat);
  screenInner.rotation.x = Math.PI * 0.5;
  screenInner.position.set(0, -0.14, 0.824);
  screenInner.castShadow = true;
  screenInner.receiveShadow = true;
  torsoDetails.add(screenInner);
  torso.add(torsoDetails);
  userData.ledger2TorsoDetails = torsoDetails;

  const headDetails = new THREE.Group();
  const antennaMat = new THREE.MeshStandardMaterial({
    color: suitColor.clone().lerp(new THREE.Color("#ffffff"), 0.08),
    roughness: 0.55,
    metalness: 0.04,
  });
  const antennaStem = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.5, 14), antennaMat);
  antennaStem.position.set(0, 0.9, 0.03);
  antennaStem.castShadow = true;
  antennaStem.receiveShadow = true;
  headDetails.add(antennaStem);
  const antennaLoop = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.05, 12, 24, Math.PI * 1.58), antennaMat);
  antennaLoop.position.set(0, 1.12, 0.03);
  antennaLoop.rotation.set(Math.PI * 0.5, 0, Math.PI * 0.52);
  antennaLoop.castShadow = true;
  antennaLoop.receiveShadow = true;
  headDetails.add(antennaLoop);
  head.add(headDetails);
  userData.ledger2HeadDetails = headDetails;

  const handMat = new THREE.MeshStandardMaterial({ color: faceSkinColor, roughness: 0.66, metalness: 0.02 });
  const footMat = new THREE.MeshStandardMaterial({
    color: suitColor.clone().lerp(new THREE.Color("#000000"), 0.18),
    roughness: 0.7,
    metalness: 0.02,
  });
  const leftHand = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 12), handMat);
  leftHand.position.set(0, -0.96, 0.05);
  leftHand.castShadow = true;
  leftHand.receiveShadow = true;
  leftArm.add(leftHand);
  userData.ledger2LeftHandDetail = leftHand;

  const rightHand = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 12), handMat);
  rightHand.position.set(0, -0.96, 0.05);
  rightHand.castShadow = true;
  rightHand.receiveShadow = true;
  rightArm.add(rightHand);
  userData.ledger2RightHandDetail = rightHand;

  const leftFoot = new THREE.Mesh(new THREE.SphereGeometry(0.34, 18, 14), footMat);
  leftFoot.position.set(0, -0.94, 0.24);
  leftFoot.scale.set(1.24, 0.72, 1.62);
  leftFoot.castShadow = true;
  leftFoot.receiveShadow = true;
  leftLeg.add(leftFoot);
  userData.ledger2LeftFootDetail = leftFoot;

  const rightFoot = new THREE.Mesh(new THREE.SphereGeometry(0.34, 18, 14), footMat);
  rightFoot.position.set(0, -0.94, 0.24);
  rightFoot.scale.set(1.24, 0.72, 1.62);
  rightFoot.castShadow = true;
  rightFoot.receiveShadow = true;
  rightLeg.add(rightFoot);
  userData.ledger2RightFootDetail = rightFoot;

  function forceOpaqueMaterial(material) {
    if (!material) {
      return;
    }
    material.transparent = false;
    material.opacity = 1;
    material.alphaTest = 0;
    material.depthWrite = true;
    if ("transmission" in material) {
      material.transmission = 0;
    }
    material.needsUpdate = true;
  }

  avatar.traverse((node) => {
    if (!node.isMesh || !node.material) {
      return;
    }
    if (Array.isArray(node.material)) {
      node.material.forEach((material) => forceOpaqueMaterial(material));
    } else {
      forceOpaqueMaterial(node.material);
    }
  });
}

function createVinceMonkeyFaceTexture() {
  const size = 512;
  const faceCanvas = document.createElement("canvas");
  faceCanvas.width = size;
  faceCanvas.height = size;
  const ctx = faceCanvas.getContext("2d");
  if (!ctx) {
    return createFaceTexture("grin");
  }

  ctx.clearRect(0, 0, size, size);

  ctx.fillStyle = "#101010";
  ctx.beginPath();
  ctx.ellipse(size * 0.39, size * 0.43, size * 0.035, size * 0.048, -0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(size * 0.56, size * 0.43, size * 0.035, size * 0.048, 0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(size * 0.475, size * 0.56, size * 0.03, size * 0.026, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#e7a0ac";
  ctx.beginPath();
  ctx.ellipse(size * 0.16, size * 0.635, size * 0.104, size * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(size * 0.81, size * 0.635, size * 0.104, size * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#4b2b20";
  ctx.lineWidth = 9;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(size * 0.3, size * 0.71);
  ctx.quadraticCurveTo(size * 0.48, size * 0.79, size * 0.65, size * 0.7);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(faceCanvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  texture.needsUpdate = true;
  return texture;
}

function createVinceHeadPatchTexture() {
  const width = 1024;
  const height = 512;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return createSolidTexture(VINCE_FUR_COLOR);
  }

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = VINCE_FUR_COLOR;
  ctx.fillRect(0, 0, width, height);

  const centerX = width * 0.5;
  const centerY = height * 0.54;
  const patchRadiusY = height * 0.43;
  const patchRadiusX = patchRadiusY * 0.7;

  ctx.fillStyle = VINCE_FACE_COLOR;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, patchRadiusX, patchRadiusY, 0, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  texture.needsUpdate = true;
  return texture;
}

function createVince2MonkeyFaceTexture() {
  const size = 256;
  const faceCanvas = document.createElement("canvas");
  faceCanvas.width = size;
  faceCanvas.height = size;
  const ctx = faceCanvas.getContext("2d");
  if (!ctx) {
    return createFaceTexture("smile");
  }

  ctx.clearRect(0, 0, size, size);

  ctx.fillStyle = "#f3e6b2";
  ctx.beginPath();
  ctx.moveTo(size * 0.18, size * 0.48);
  ctx.quadraticCurveTo(size * 0.18, size * 0.2, size * 0.42, size * 0.14);
  ctx.lineTo(size * 0.58, size * 0.14);
  ctx.quadraticCurveTo(size * 0.82, size * 0.2, size * 0.82, size * 0.48);
  ctx.quadraticCurveTo(size * 0.79, size * 0.73, size * 0.62, size * 0.86);
  ctx.lineTo(size * 0.38, size * 0.86);
  ctx.quadraticCurveTo(size * 0.21, size * 0.73, size * 0.18, size * 0.48);
  ctx.fill();

  ctx.fillStyle = "#0c0906";
  ctx.beginPath();
  ctx.ellipse(size * 0.37, size * 0.44, size * 0.06, size * 0.085, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(size * 0.63, size * 0.44, size * 0.06, size * 0.085, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(255,255,255,0.84)";
  ctx.beginPath();
  ctx.ellipse(size * 0.35, size * 0.41, size * 0.014, size * 0.022, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(size * 0.61, size * 0.41, size * 0.014, size * 0.022, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#4f311b";
  ctx.beginPath();
  ctx.ellipse(size * 0.475, size * 0.59, size * 0.012, size * 0.016, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(size * 0.525, size * 0.59, size * 0.012, size * 0.016, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#694127";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(size * 0.39, size * 0.68);
  ctx.quadraticCurveTo(size * 0.49, size * 0.76, size * 0.61, size * 0.67);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(faceCanvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  texture.needsUpdate = true;
  return texture;
}

function applyVinceMonkeyLook(avatar) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const userData = avatar.userData;
  const torso = userData.torso;
  const head = userData.head;
  const leftArm = userData.leftArm;
  const rightArm = userData.rightArm;
  const leftLeg = userData.leftLeg;
  const rightLeg = userData.rightLeg;

  if (!torso || !head || !leftArm || !rightArm || !leftLeg || !rightLeg) {
    return;
  }

  clearLeoSuitAndTie(avatar);

  if (userData.leoFace3DGroup) {
    head.remove(userData.leoFace3DGroup);
    disposeMeshResources(userData.leoFace3DGroup);
    userData.leoFace3DGroup = null;
  }
  if (userData.vinceHeadDetails) {
    head.remove(userData.vinceHeadDetails);
    disposeMeshResources(userData.vinceHeadDetails);
    userData.vinceHeadDetails = null;
  }
  if (userData.vinceTorsoDetails) {
    torso.remove(userData.vinceTorsoDetails);
    disposeMeshResources(userData.vinceTorsoDetails);
    userData.vinceTorsoDetails = null;
  }
  if (userData.vinceTail) {
    torso.remove(userData.vinceTail);
    disposeMeshResources(userData.vinceTail);
    userData.vinceTail = null;
  }
  if (Array.isArray(userData.vinceHeadCapMaterials)) {
    userData.vinceHeadCapMaterials.forEach((material) => {
      if (material) {
        material.dispose();
      }
    });
    userData.vinceHeadCapMaterials = null;
  }
  if (Array.isArray(userData.vinceLimbDetails)) {
    userData.vinceLimbDetails.forEach((mesh) => {
      if (mesh && mesh.parent) {
        mesh.parent.remove(mesh);
      }
      if (mesh) {
        disposeMeshResources(mesh);
      }
    });
    userData.vinceLimbDetails = null;
  } else if (userData.vinceLimbDetails) {
    if (userData.vinceLimbDetails.parent) {
      userData.vinceLimbDetails.parent.remove(userData.vinceLimbDetails);
    }
    disposeMeshResources(userData.vinceLimbDetails);
    userData.vinceLimbDetails = null;
  }

  const hairAnchor = clearAvatarHairAnchor(avatar);
  if (hairAnchor) {
    hairAnchor.visible = false;
  }
  userData.hairStyle = "none";
  userData.hairColor = VINCE_FUR_COLOR;

  const furColor = new THREE.Color(VINCE_FUR_COLOR);
  const muzzleColor = new THREE.Color(VINCE_FACE_COLOR);
  const bellyColor = new THREE.Color(VINCE_BELLY_COLOR);
  const innerEarColor = new THREE.Color(VINCE_INNER_EAR_COLOR);

  if (userData.shirtMaterial && userData.shirtMaterial.color) {
    userData.shirtMaterial.color.copy(furColor);
    userData.shirtColor = VINCE_FUR_COLOR;
  }
  if (userData.pantMaterial && userData.pantMaterial.color) {
    userData.pantMaterial.color.copy(furColor);
    userData.pantsColor = VINCE_FUR_COLOR;
  }
  const skinMaterials = userData.skinMaterials || [];
  skinMaterials.forEach((material) => {
    if (material && material.color) {
      material.color.copy(furColor);
    }
  });
  if (userData.headMaterial && userData.headMaterial.color) {
    if (Array.isArray(head.material)) {
      head.material = userData.headMaterial;
    }
    if (userData.headMaterial.map) {
      userData.headMaterial.map.dispose();
      userData.headMaterial.map = null;
    }
    userData.headMaterial.map = createVinceHeadPatchTexture();
    userData.headMaterial.color.set(0xffffff);
    userData.headMaterial.roughness = 0.88;
    userData.headMaterial.metalness = 0.01;
    userData.headMaterial.needsUpdate = true;
  }
  userData.skinTone = VINCE_FUR_COLOR;

  function replaceGeometry(mesh, geometry) {
    if (!mesh || !geometry) {
      return;
    }
    if (mesh.geometry) {
      mesh.geometry.dispose();
    }
    mesh.geometry = geometry;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  }

  replaceGeometry(torso, new THREE.BoxGeometry(2, 2, 1.2));
  replaceGeometry(head, new THREE.CylinderGeometry(0.72, 0.72, 1.28, 28, 1, false));
  head.geometry.rotateY(Math.PI);
  const headCapMaterialTop = new THREE.MeshStandardMaterial({
    color: furColor,
    roughness: 0.88,
    metalness: 0.01,
  });
  const headCapMaterialBottom = headCapMaterialTop.clone();
  head.material = [userData.headMaterial, headCapMaterialTop, headCapMaterialBottom];
  userData.vinceHeadCapMaterials = [headCapMaterialTop, headCapMaterialBottom];
  replaceGeometry(leftArm, new THREE.BoxGeometry(1, 2, 1));
  replaceGeometry(rightArm, new THREE.BoxGeometry(1, 2, 1));
  replaceGeometry(leftLeg, new THREE.BoxGeometry(1, 2, 1));
  replaceGeometry(rightLeg, new THREE.BoxGeometry(1, 2, 1));

  torso.scale.set(1, 1, 1);
  head.scale.set(1.12, 1.08, 1.12);
  torso.position.y = TORSO_BASE_Y;
  head.position.y = HEAD_BASE_Y;
  leftArm.position.set(-1.5, TORSO_BASE_Y, 0);
  rightArm.position.set(1.5, TORSO_BASE_Y, 0);
  leftLeg.position.set(-0.5, 1, 0);
  rightLeg.position.set(0.5, 1, 0);
  leftArm.rotation.set(0, 0, 0);
  rightArm.rotation.set(0, 0, 0);
  leftLeg.rotation.set(0, 0, 0);
  rightLeg.rotation.set(0, 0, 0);

  if (userData.faceMaterial) {
    if (userData.faceMaterial.map) {
      userData.faceMaterial.map.dispose();
      userData.faceMaterial.map = null;
    }
    userData.faceMaterial.map = createVinceMonkeyFaceTexture();
    userData.faceMaterial.color.set(0xffffff);
    userData.faceMaterial.transparent = true;
    userData.faceMaterial.opacity = 1;
    userData.faceMaterial.alphaTest = 0.02;
    userData.faceMaterial.depthWrite = false;
    userData.faceMaterial.side = THREE.DoubleSide;
    userData.faceMaterial.polygonOffset = true;
    userData.faceMaterial.polygonOffsetFactor = -3;
    userData.faceMaterial.polygonOffsetUnits = -5;
    userData.faceMaterial.needsUpdate = true;
    userData.faceStyle = "vince_monkey_face";
  }
  if (userData.faceMesh) {
    if (userData.faceMesh.geometry) {
      userData.faceMesh.geometry.dispose();
    }
    userData.faceMesh.geometry = createCurvedPlaneGeometry(1.16, 1.08, 26, 22, 0.145);
    userData.faceMesh.position.set(0, -0.005, 0.735);
    userData.faceMesh.renderOrder = 16;
    userData.faceMesh.visible = true;
  }

  const furMat = new THREE.MeshStandardMaterial({
    color: furColor,
    roughness: 0.86,
    metalness: 0.01,
  });
  const furHighlightMat = new THREE.MeshStandardMaterial({
    color: VINCE_FUR_HIGHLIGHT,
    roughness: 0.84,
    metalness: 0.01,
  });
  const muzzleMat = new THREE.MeshStandardMaterial({
    color: muzzleColor,
    roughness: 0.84,
    metalness: 0.01,
  });
  const bellyMat = new THREE.MeshStandardMaterial({
    color: bellyColor,
    roughness: 0.83,
    metalness: 0.01,
  });
  const innerEarMat = new THREE.MeshStandardMaterial({
    color: muzzleColor,
    roughness: 0.86,
    metalness: 0.01,
  });
  const headDetails = new THREE.Group();
  const leftEar = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.1, 20), furMat);
  leftEar.position.set(-0.78, 0.02, -0.06);
  leftEar.rotation.z = Math.PI * 0.5;
  headDetails.add(leftEar);
  const rightEar = leftEar.clone();
  rightEar.position.x = 0.78;
  headDetails.add(rightEar);

  const leftInnerEar = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.055, 18), innerEarMat);
  leftInnerEar.position.set(-0.8, 0.02, -0.005);
  leftInnerEar.rotation.z = Math.PI * 0.5;
  headDetails.add(leftInnerEar);
  const rightInnerEar = leftInnerEar.clone();
  rightInnerEar.position.x = 0.8;
  headDetails.add(rightInnerEar);

  headDetails.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = !(node.userData && node.userData.noShadow);
      node.receiveShadow = false;
    }
  });
  head.add(headDetails);
  userData.vinceHeadDetails = headDetails;

  const torsoDetails = new THREE.Group();
  const belly = new THREE.Mesh(new THREE.CircleGeometry(0.58, 40), bellyMat);
  belly.position.set(0, -0.14, 0.63);
  belly.scale.set(1.34, 1.78, 1);
  torsoDetails.add(belly);
  torsoDetails.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = false;
    }
  });
  torso.add(torsoDetails);
  userData.vinceTorsoDetails = torsoDetails;

  const limbDetails = [];
  function addLimbBlock(parent, geometry, material, x, y, z, sx = 1, sy = 1, sz = 1) {
    const block = new THREE.Mesh(geometry, material);
    block.position.set(x, y, z);
    block.scale.set(sx, sy, sz);
    block.castShadow = true;
    block.receiveShadow = false;
    parent.add(block);
    limbDetails.push(block);
    return block;
  }

  addLimbBlock(leftArm, new THREE.BoxGeometry(1.02, 0.48, 1.02), muzzleMat, 0, -0.76, 0, 1.0, 1.0, 1.0);
  addLimbBlock(rightArm, new THREE.BoxGeometry(1.02, 0.48, 1.02), muzzleMat, 0, -0.76, 0, 1.0, 1.0, 1.0);
  addLimbBlock(leftLeg, new THREE.BoxGeometry(1.02, 0.42, 1.02), muzzleMat, 0, -0.79, 0, 1.0, 1.0, 1.0);
  addLimbBlock(rightLeg, new THREE.BoxGeometry(1.02, 0.42, 1.02), muzzleMat, 0, -0.79, 0, 1.0, 1.0, 1.0);
  userData.vinceLimbDetails = limbDetails;

  const tailCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, -0.32, -0.62),
    new THREE.Vector3(0.14, -0.82, -0.88),
    new THREE.Vector3(-0.1, -1.48, -1.12),
    new THREE.Vector3(0.04, -2.04, -1.28),
    new THREE.Vector3(0.16, -2.28, -2.02),
    new THREE.Vector3(-0.14, -2.32, -3.84),
    new THREE.Vector3(0.08, -2.3, -5.96),
    new THREE.Vector3(-0.04, -2.28, -8.18),
  ]);
  const tail = new THREE.Mesh(new THREE.TubeGeometry(tailCurve, 42, 0.072, 8, false), furHighlightMat);
  tail.castShadow = true;
  tail.receiveShadow = false;
  torso.add(tail);
  userData.vinceTail = tail;
}

function applyVince2MonkeyLook(avatar) {
  if (!avatar || !avatar.userData) {
    return;
  }

  const userData = avatar.userData;
  const torso = userData.torso;
  const head = userData.head;
  const leftArm = userData.leftArm;
  const rightArm = userData.rightArm;
  const leftLeg = userData.leftLeg;
  const rightLeg = userData.rightLeg;

  if (!torso || !head || !leftArm || !rightArm || !leftLeg || !rightLeg) {
    return;
  }

  clearLeoSuitAndTie(avatar);

  if (userData.leoFace3DGroup) {
    head.remove(userData.leoFace3DGroup);
    disposeMeshResources(userData.leoFace3DGroup);
    userData.leoFace3DGroup = null;
  }
  if (userData.vince2HeadDetails) {
    head.remove(userData.vince2HeadDetails);
    disposeMeshResources(userData.vince2HeadDetails);
    userData.vince2HeadDetails = null;
  }
  if (userData.vince2TorsoDetails) {
    torso.remove(userData.vince2TorsoDetails);
    disposeMeshResources(userData.vince2TorsoDetails);
    userData.vince2TorsoDetails = null;
  }
  if (userData.vince2Tail) {
    torso.remove(userData.vince2Tail);
    disposeMeshResources(userData.vince2Tail);
    userData.vince2Tail = null;
  }

  const hairAnchor = clearAvatarHairAnchor(avatar);
  if (hairAnchor) {
    hairAnchor.visible = false;
  }
  userData.hairStyle = "none";
  userData.hairColor = VINCE_2_FUR_COLOR;

  const furColor = new THREE.Color(VINCE_2_FUR_COLOR);
  const faceColor = new THREE.Color(VINCE_2_FACE_COLOR);
  const innerEarColor = new THREE.Color(VINCE_2_INNER_EAR_COLOR);

  if (userData.shirtMaterial && userData.shirtMaterial.color) {
    userData.shirtMaterial.color.copy(furColor);
    userData.shirtColor = VINCE_2_FUR_COLOR;
  }
  if (userData.pantMaterial && userData.pantMaterial.color) {
    userData.pantMaterial.color.copy(furColor);
    userData.pantsColor = VINCE_2_FUR_COLOR;
  }
  const skinMaterials = userData.skinMaterials || [];
  skinMaterials.forEach((material) => {
    if (material && material.color) {
      material.color.copy(furColor);
    }
  });
  if (userData.headMaterial && userData.headMaterial.color) {
    if (userData.headMaterial.map) {
      userData.headMaterial.map.dispose();
      userData.headMaterial.map = null;
    }
    userData.headMaterial.color.copy(furColor);
    userData.headMaterial.needsUpdate = true;
  }
  userData.skinTone = VINCE_2_FUR_COLOR;

  function replaceGeometry(mesh, geometry) {
    if (mesh.geometry) {
      mesh.geometry.dispose();
    }
    mesh.geometry = geometry;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  }

  replaceGeometry(torso, new THREE.BoxGeometry(1.66, 1.58, 3.02));
  replaceGeometry(head, new THREE.SphereGeometry(0.78, 10, 8));
  replaceGeometry(leftArm, new THREE.BoxGeometry(0.48, 1.86, 0.56));
  replaceGeometry(rightArm, new THREE.BoxGeometry(0.48, 1.86, 0.56));
  replaceGeometry(leftLeg, new THREE.BoxGeometry(0.5, 1.92, 0.58));
  replaceGeometry(rightLeg, new THREE.BoxGeometry(0.5, 1.92, 0.58));

  torso.scale.set(1, 1.04, 1);
  torso.position.set(0, 2.34, -0.06);
  torso.rotation.set(-0.12, 0, 0);
  head.scale.set(0.96, 1.04, 0.9);
  head.position.set(0, 3.44, 1.46);
  head.rotation.set(-0.04, 0, 0);
  leftArm.position.set(-0.54, 1.08, 0.94);
  rightArm.position.set(0.54, 1.08, 0.94);
  leftLeg.position.set(-0.54, 1.08, -0.96);
  rightLeg.position.set(0.54, 1.08, -0.96);
  leftArm.rotation.set(0.04, 0, 0);
  rightArm.rotation.set(0.04, 0, 0);
  leftLeg.rotation.set(-0.02, 0, 0);
  rightLeg.rotation.set(-0.02, 0, 0);

  if (userData.faceMaterial) {
    if (userData.faceMaterial.map) {
      userData.faceMaterial.map.dispose();
    }
    userData.faceMaterial.map = createVince2MonkeyFaceTexture();
    userData.faceMaterial.color.set(0xffffff);
    userData.faceMaterial.transparent = true;
    userData.faceMaterial.opacity = 1;
    userData.faceMaterial.alphaTest = 0.02;
    userData.faceMaterial.depthWrite = true;
    userData.faceMaterial.side = THREE.DoubleSide;
    userData.faceMaterial.polygonOffset = true;
    userData.faceMaterial.polygonOffsetFactor = -1;
    userData.faceMaterial.polygonOffsetUnits = -2;
    userData.faceMaterial.needsUpdate = true;
    userData.faceStyle = "vince_2_monkey_face";
  }
  if (userData.faceMesh) {
    if (userData.faceMesh.geometry) {
      userData.faceMesh.geometry.dispose();
    }
    userData.faceMesh.geometry = new THREE.PlaneGeometry(1.0, 0.88);
    userData.faceMesh.position.set(0, -0.02, 0.68);
    userData.faceMesh.renderOrder = 12;
    userData.faceMesh.visible = true;
  }

  const furMat = new THREE.MeshStandardMaterial({
    color: furColor,
    roughness: 0.84,
    metalness: 0.01,
  });
  const furHighlightMat = new THREE.MeshStandardMaterial({
    color: VINCE_2_FUR_HIGHLIGHT,
    roughness: 0.8,
    metalness: 0.01,
  });
  const faceMat = new THREE.MeshStandardMaterial({
    color: faceColor,
    roughness: 0.82,
    metalness: 0.01,
  });
  const innerEarMat = new THREE.MeshStandardMaterial({
    color: innerEarColor,
    roughness: 0.84,
    metalness: 0.01,
  });

  const headDetails = new THREE.Group();
  const leftEar = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.1, 16), furMat);
  leftEar.position.set(-0.62, 0.02, -0.02);
  leftEar.rotation.z = Math.PI * 0.5;
  headDetails.add(leftEar);
  const rightEar = leftEar.clone();
  rightEar.position.x = 0.62;
  headDetails.add(rightEar);

  const leftInnerEar = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.06, 14), innerEarMat);
  leftInnerEar.position.set(-0.66, 0.02, 0.04);
  leftInnerEar.rotation.z = Math.PI * 0.5;
  headDetails.add(leftInnerEar);
  const rightInnerEar = leftInnerEar.clone();
  rightInnerEar.position.x = 0.66;
  headDetails.add(rightInnerEar);

  headDetails.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = false;
    }
  });
  head.add(headDetails);
  userData.vince2HeadDetails = headDetails;

  const torsoDetails = new THREE.Group();
  const chestPatch = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.84, 1.2), faceMat);
  chestPatch.position.set(0, -0.1, 1.08);
  chestPatch.rotation.x = 0.1;
  torsoDetails.add(chestPatch);
  const lowerBellyPatch = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.52, 1.0), faceMat);
  lowerBellyPatch.position.set(0, -0.5, 0.76);
  lowerBellyPatch.rotation.x = 0.12;
  torsoDetails.add(lowerBellyPatch);
  torsoDetails.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = false;
    }
  });
  torso.add(torsoDetails);
  userData.vince2TorsoDetails = torsoDetails;

  const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 2.8, 14), furHighlightMat);
  tail.position.set(0, 1.35, -1.34);
  tail.rotation.x = -0.08;
  tail.castShadow = true;
  tail.receiveShadow = false;
  torso.add(tail);
  userData.vince2Tail = tail;
}

function addLeo3DFaceFeatures(avatar) {
  const head = avatar && avatar.userData ? avatar.userData.head : null;
  if (!head) {
    return;
  }

  const existing = avatar.userData.leoFace3DGroup;
  if (existing) {
    head.remove(existing);
    disposeMeshResources(existing);
    avatar.userData.leoFace3DGroup = null;
  }

  if (avatar.userData.faceMesh) {
    avatar.userData.faceMesh.visible = false;
    avatar.userData.faceMesh.position.set(0, 0, 0.58);
  }
  if (avatar.userData.faceMaterial) {
    if (avatar.userData.faceMaterial.map) {
      avatar.userData.faceMaterial.map.dispose();
      avatar.userData.faceMaterial.map = null;
    }
    avatar.userData.faceMaterial.opacity = 0;
    avatar.userData.faceMaterial.needsUpdate = true;
  }

  const faceGroup = new THREE.Group();
  const rawFaceExpression = typeof avatar.userData.leoFaceExpression === "string" ? avatar.userData.leoFaceExpression : DEFAULT_LEO_FACE;
  const faceExpression = FACE_OPTIONS.includes(rawFaceExpression) ? rawFaceExpression : DEFAULT_LEO_FACE;
  const smilePercent = clampInt(avatar.userData.leoSmilePercent, 1, 100, DEFAULT_LEO_SMILE);
  const expressionBonus =
    faceExpression === "neutral" ? -22 : faceExpression === "grin" ? 18 : faceExpression === "wink" ? 8 : 0;
  const smileBlend = clamp((smilePercent + expressionBonus) / 100, 0, 1);

  const skinBlendMat = new THREE.MeshStandardMaterial({ color: 0xe5bc9e, roughness: 0.79, metalness: 0.02 });
  const skinContourMat = new THREE.MeshStandardMaterial({ color: 0xdbb08f, roughness: 0.8, metalness: 0.02 });
  const earInnerMat = new THREE.MeshStandardMaterial({ color: 0xd7aa8b, roughness: 0.81, metalness: 0.01 });
  const eyeWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf4f5f8, roughness: 0.34, metalness: 0.02 });
  const irisMat = new THREE.MeshStandardMaterial({ color: LEO_EYE_COLOR, roughness: 0.36, metalness: 0.03 });
  const pupilMat = new THREE.MeshStandardMaterial({ color: 0x0f1012, roughness: 0.43, metalness: 0.02 });
  const browMat = new THREE.MeshStandardMaterial({ color: 0x5d3e24, roughness: 0.72, metalness: 0.02 });
  const noseMat = new THREE.MeshStandardMaterial({ color: 0xe6ba9d, roughness: 0.74, metalness: 0.02 });
  const lipMat = new THREE.MeshStandardMaterial({ color: 0xc98278, roughness: 0.69, metalness: 0.02 });
  const smileMat = new THREE.MeshStandardMaterial({ color: 0xa56959, roughness: 0.81, metalness: 0.01 });

  // Smooth narrow-oval face shell (reduces "bean" look).
  const faceShell = new THREE.Mesh(
    new THREE.SphereGeometry(0.54, 34, 26, 0, Math.PI * 2, Math.PI * 0.17, Math.PI * 0.66),
    skinBlendMat
  );
  faceShell.position.set(0, -0.012, 0.43);
  faceShell.scale.set(0.93, 1.24, 0.42);
  faceGroup.add(faceShell);

  // Soft lower-face/jaw contour in one clean form.
  const lowerFace = new THREE.Mesh(new THREE.CapsuleGeometry(0.175, 0.19, 4, 12), skinContourMat);
  lowerFace.position.set(0, -0.225, 0.52);
  lowerFace.scale.set(1.0, 1.16, 0.34);
  faceGroup.add(lowerFace);

  const chinTip = new THREE.Mesh(new THREE.SphereGeometry(0.084, 16, 12), skinContourMat);
  chinTip.position.set(0, -0.333, 0.575);
  chinTip.scale.set(0.88, 1.2, 0.34);
  faceGroup.add(chinTip);

  const cheekRoundness = 0.68 + smileBlend * 0.16;
  const cheekLeft = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 10), skinBlendMat);
  cheekLeft.position.set(-0.173, -0.082, 0.642);
  cheekLeft.scale.set(1.08, cheekRoundness, 0.15);
  faceGroup.add(cheekLeft);
  const cheekRight = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 10), skinBlendMat);
  cheekRight.position.set(0.173, -0.082, 0.642);
  cheekRight.scale.set(1.08, cheekRoundness, 0.15);
  faceGroup.add(cheekRight);

  function addEye(sign) {
    const isWinkEye = faceExpression === "wink" && sign > 0;
    const eyeX = 0.165 * sign;
    let eyeOpen = 0.82 - smileBlend * 0.14;
    if (faceExpression === "neutral") {
      eyeOpen += 0.1;
    } else if (faceExpression === "grin") {
      eyeOpen -= 0.11;
    }
    if (isWinkEye) {
      eyeOpen = 0.15;
    }
    eyeOpen = clamp(eyeOpen, 0.14, 0.94);

    // Slightly larger than realistic for Roblox readability.
    const eyeWhite = new THREE.Mesh(new THREE.SphereGeometry(0.068, 16, 12), eyeWhiteMat);
    eyeWhite.position.set(eyeX, 0.056, 0.672);
    eyeWhite.scale.set(1.5, eyeOpen, 0.17);
    eyeWhite.rotation.z = sign * -0.06;
    faceGroup.add(eyeWhite);

    if (!isWinkEye) {
      const iris = new THREE.Mesh(new THREE.SphereGeometry(0.029, 14, 12), irisMat);
      iris.position.set(eyeX, 0.055, 0.69);
      iris.scale.set(1, 1, 0.1);
      faceGroup.add(iris);

      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.0125, 12, 10), pupilMat);
      pupil.position.set(eyeX, 0.055, 0.695);
      pupil.scale.set(1, 1, 0.08);
      faceGroup.add(pupil);
    }

    const browLift = faceExpression === "neutral" ? 0.012 : faceExpression === "grin" ? -0.012 : 0;
    const browMain = new THREE.Mesh(new THREE.CapsuleGeometry(0.0098, 0.11, 3, 8), browMat);
    browMain.position.set(eyeX - sign * 0.004, 0.159 + browLift, 0.664);
    browMain.rotation.x = Math.PI * 0.5;
    browMain.rotation.z = sign * (0.07 - smileBlend * 0.03);
    faceGroup.add(browMain);

    const browTail = new THREE.Mesh(new THREE.CapsuleGeometry(0.0078, 0.041, 3, 8), browMat);
    browTail.position.set(eyeX + sign * 0.074, 0.163 + browLift, 0.662);
    browTail.rotation.x = Math.PI * 0.5;
    browTail.rotation.z = sign * (0.2 - smileBlend * 0.06);
    faceGroup.add(browTail);
  }

  addEye(-1);
  addEye(1);

  // Simplified straight nose with rounded tip.
  const noseBridge = new THREE.Mesh(new THREE.CapsuleGeometry(0.0068, 0.047, 3, 8), noseMat);
  noseBridge.position.set(0, -0.036, 0.674);
  noseBridge.rotation.x = Math.PI * 0.5;
  faceGroup.add(noseBridge);

  const noseTip = new THREE.Mesh(new THREE.SphereGeometry(0.015, 12, 10), noseMat);
  noseTip.position.set(0, -0.088, 0.686);
  noseTip.scale.set(1.02, 0.84, 0.26);
  faceGroup.add(noseTip);

  // Soft smile lips.
  const mouthWidthScale = 0.9 + smileBlend * 0.24;
  const cornerLift = -0.008 + smileBlend * 0.032;
  const upperLip = new THREE.Mesh(new THREE.TorusGeometry(0.052, 0.0036, 8, 18, Math.PI * 0.71), lipMat);
  upperLip.position.set(0, -0.199 + cornerLift * 0.42, 0.679);
  upperLip.rotation.z = Math.PI * (1.07 + smileBlend * 0.07);
  upperLip.rotation.x = 0.04;
  upperLip.scale.set(mouthWidthScale, 1, 1);
  faceGroup.add(upperLip);

  const lowerLip = new THREE.Mesh(new THREE.TorusGeometry(0.034, 0.0032, 8, 16, Math.PI * 0.65), lipMat);
  lowerLip.position.set(0, -0.208 + cornerLift * 0.4, 0.681);
  lowerLip.rotation.z = Math.PI * 0.11;
  lowerLip.rotation.x = -0.03;
  lowerLip.scale.set(0.9 + smileBlend * 0.2, 1, 1);
  faceGroup.add(lowerLip);

  const smileLeft = new THREE.Mesh(new THREE.TorusGeometry(0.013, 0.002, 8, 12, Math.PI * 0.54), smileMat);
  smileLeft.position.set(-0.094, -0.186 + cornerLift, 0.675);
  smileLeft.rotation.z = Math.PI * (1.15 + smileBlend * 0.2);
  smileLeft.rotation.y = -0.16;
  faceGroup.add(smileLeft);

  const smileRight = new THREE.Mesh(new THREE.TorusGeometry(0.013, 0.002, 8, 12, Math.PI * 0.54), smileMat);
  smileRight.position.set(0.094, -0.186 + cornerLift, 0.675);
  smileRight.rotation.z = Math.PI * (-0.15 - smileBlend * 0.2);
  smileRight.rotation.y = 0.16;
  faceGroup.add(smileRight);

  // Medium ears, slightly sticking out.
  function addEar(sign) {
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.092, 16, 12), skinBlendMat);
    ear.position.set(0.71 * sign, 0.035, 0.03);
    ear.scale.set(0.5, 0.88, 0.34);
    ear.rotation.y = sign * 0.22;
    faceGroup.add(ear);

    const inner = new THREE.Mesh(new THREE.SphereGeometry(0.052, 12, 10), earInnerMat);
    inner.position.set(0.742 * sign, 0.03, 0.06);
    inner.scale.set(0.35, 0.6, 0.22);
    inner.rotation.y = sign * 0.25;
    faceGroup.add(inner);
  }

  addEar(-1);
  addEar(1);

  // Keep the face in its natural position on the head.
  faceGroup.position.set(0, 0, 0);
  faceGroup.scale.set(1, 1, 1);

  faceGroup.traverse((node) => {
    if (!node.isMesh) {
      return;
    }
    node.castShadow = false;
    node.receiveShadow = false;
    node.renderOrder = 12;
    if (node.material) {
      node.material.polygonOffset = true;
      node.material.polygonOffsetFactor = -1;
      node.material.polygonOffsetUnits = -1;
      node.material.needsUpdate = true;
    }
  });

  head.add(faceGroup);
  avatar.userData.leoFace3DGroup = faceGroup;
}

let hairDetailTexture = null;
let variantGlowTexture = null;
let variantSparkleTexture = null;

function createHairDetailTexture() {
  const size = 128;
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = size;
  textureCanvas.height = size;
  const ctx = textureCanvas.getContext("2d");
  if (!ctx) {
    return createSolidTexture("#ffffff");
  }

  ctx.fillStyle = "#f0f0f0";
  ctx.fillRect(0, 0, size, size);

  for (let x = 0; x < size; x += 8) {
    const alpha = 0.06 + (x % 16 === 0 ? 0.05 : 0);
    ctx.fillStyle = `rgba(0,0,0,${alpha})`;
    ctx.fillRect(x, 0, 3, size);
  }

  for (let i = 0; i < 80; i += 1) {
    const y = Math.floor(Math.random() * size);
    const alpha = 0.04 + Math.random() * 0.06;
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.fillRect(0, y, size, 1);
  }

  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  return texture;
}

function getHairDetailTexture() {
  if (!hairDetailTexture) {
    hairDetailTexture = createHairDetailTexture();
  }
  return hairDetailTexture;
}

function createVariantGlowTexture() {
  const size = 128;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = size;
  canvasEl.height = size;
  const ctx = canvasEl.getContext("2d");
  if (!ctx) {
    return createSolidTexture("#ffffff");
  }

  const gradient = ctx.createRadialGradient(size * 0.5, size * 0.5, size * 0.08, size * 0.5, size * 0.5, size * 0.5);
  gradient.addColorStop(0, "rgba(255,255,255,0.95)");
  gradient.addColorStop(0.28, "rgba(255,255,255,0.52)");
  gradient.addColorStop(0.64, "rgba(255,255,255,0.12)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvasEl);
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  return texture;
}

function getVariantGlowTexture() {
  if (!variantGlowTexture) {
    variantGlowTexture = createVariantGlowTexture();
  }
  return variantGlowTexture;
}

function createVariantSparkleTexture() {
  const size = 96;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = size;
  canvasEl.height = size;
  const ctx = canvasEl.getContext("2d");
  if (!ctx) {
    return createSolidTexture("#ffffff");
  }

  const center = size * 0.5;
  const inner = size * 0.1;
  const outer = size * 0.48;
  const glow = ctx.createRadialGradient(center, center, inner, center, center, outer);
  glow.addColorStop(0, "rgba(255,255,255,1)");
  glow.addColorStop(0.3, "rgba(255,255,255,0.86)");
  glow.addColorStop(0.7, "rgba(255,255,255,0.18)");
  glow.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(center, center, outer, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "rgba(255,255,255,0.92)";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(center, size * 0.16);
  ctx.lineTo(center, size * 0.84);
  ctx.moveTo(size * 0.16, center);
  ctx.lineTo(size * 0.84, center);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvasEl);
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  return texture;
}

function getVariantSparkleTexture() {
  if (!variantSparkleTexture) {
    variantSparkleTexture = createVariantSparkleTexture();
  }
  return variantSparkleTexture;
}

function formatCountdownClock(totalSeconds) {
  const safeSeconds = Math.max(0, Math.ceil(Number(totalSeconds) || 0));
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function createSpawnTimerPanelTexture(timerStates) {
  const width = 1024;
  const height = 312;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = width;
  canvasEl.height = height;
  const ctx = canvasEl.getContext("2d");
  if (!ctx) {
    return { texture: createSolidTexture("#0f1020"), aspect: width / height };
  }

  const radius = 34;
  ctx.fillStyle = "rgba(7, 15, 30, 0.76)";
  ctx.strokeStyle = "rgba(220, 235, 255, 0.38)";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(radius, 18);
  ctx.lineTo(width - radius, 18);
  ctx.quadraticCurveTo(width - 18, 18, width - 18, radius);
  ctx.lineTo(width - 18, height - radius);
  ctx.quadraticCurveTo(width - 18, height - 18, width - radius, height - 18);
  ctx.lineTo(radius, height - 18);
  ctx.quadraticCurveTo(18, height - 18, 18, height - radius);
  ctx.lineTo(18, radius);
  ctx.quadraticCurveTo(18, 18, radius, 18);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.06)";
  ctx.fillRect(36, 42, width - 72, 96);
  ctx.fillRect(36, 168, width - 72, 96);

  const mythicTimer = timerStates.mythic || { remainingSeconds: getGuaranteedSpawnTimerDurationSeconds("mythic") };
  const legendaryTimer = timerStates.legendary || { remainingSeconds: getGuaranteedSpawnTimerDurationSeconds("legendary") };
  const lines = [
    {
      text: `${SPAWN_TIMER_UI_TEXT.mythicPrefix}: ${formatCountdownClock(mythicTimer.remainingSeconds)}`,
      color: GUARANTEED_SPAWN_TIMER_CONFIG.mythic.color,
      glowColor: GUARANTEED_SPAWN_TIMER_CONFIG.mythic.glowColor,
      y: 112,
    },
    {
      text: `${SPAWN_TIMER_UI_TEXT.legendaryPrefix}: ${formatCountdownClock(legendaryTimer.remainingSeconds)}`,
      color: GUARANTEED_SPAWN_TIMER_CONFIG.legendary.color,
      glowColor: GUARANTEED_SPAWN_TIMER_CONFIG.legendary.glowColor,
      y: 238,
    },
  ];

  ctx.font = '700 56px "Sora", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    ctx.shadowBlur = 24;
    ctx.shadowColor = line.glowColor;
    ctx.fillStyle = line.color;
    ctx.fillText(line.text, width * 0.5, line.y);
  }
  ctx.shadowBlur = 0;

  const texture = new THREE.CanvasTexture(canvasEl);
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
  return {
    texture,
    aspect: width / height,
  };
}

function initializeGuaranteedSpawnTimers() {
  for (let i = 0; i < GUARANTEED_SPAWN_TIMER_ORDER.length; i += 1) {
    const timerId = GUARANTEED_SPAWN_TIMER_ORDER[i];
    const config = GUARANTEED_SPAWN_TIMER_CONFIG[timerId];
    if (!config) {
      continue;
    }
    guaranteedSpawnTimers[timerId] = {
      id: timerId,
      remainingSeconds: getGuaranteedSpawnTimerDurationSeconds(timerId),
    };
  }
}

function ensureSpawnTimerPanel() {
  if (spawnTimerPanelSprite || !mapRoot || !mapRoot.userData || !mapRoot.userData.spawnCaveUiAnchor) {
    return;
  }

  const anchor = mapRoot.userData.spawnCaveUiAnchor;
  const panelData = createSpawnTimerPanelTexture(guaranteedSpawnTimers);
  spawnTimerTexture = panelData.texture;
  const material = new THREE.SpriteMaterial({
    map: panelData.texture,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    toneMapped: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.position.set(SPAWN_TIMER_WORLD_OFFSET.x, SPAWN_TIMER_WORLD_OFFSET.y, SPAWN_TIMER_WORLD_OFFSET.z);
  sprite.scale.set(SPAWN_TIMER_PANEL_SCALE * panelData.aspect, SPAWN_TIMER_PANEL_SCALE, 1);
  sprite.renderOrder = 6;
  anchor.add(sprite);
  spawnTimerPanelSprite = sprite;
  spawnTimerPanelKey = "";
}

function updateSpawnTimerDisplay(force = false) {
  ensureSpawnTimerPanel();
  if (!spawnTimerPanelSprite || !spawnTimerPanelSprite.material) {
    return;
  }

  const mythicTimer = guaranteedSpawnTimers.mythic || { remainingSeconds: getGuaranteedSpawnTimerDurationSeconds("mythic") };
  const legendaryTimer = guaranteedSpawnTimers.legendary || { remainingSeconds: getGuaranteedSpawnTimerDurationSeconds("legendary") };
  const nextKey = `${formatCountdownClock(mythicTimer.remainingSeconds)}|${formatCountdownClock(legendaryTimer.remainingSeconds)}`;
  if (!force && nextKey === spawnTimerPanelKey) {
    return;
  }

  const panelData = createSpawnTimerPanelTexture(guaranteedSpawnTimers);
  const previousTexture = spawnTimerPanelSprite.material.map || spawnTimerTexture || null;
  spawnTimerTexture = panelData.texture;
  if (previousTexture) {
    previousTexture.dispose();
  }
  spawnTimerPanelSprite.material.map = panelData.texture;
  spawnTimerPanelSprite.material.needsUpdate = true;
  spawnTimerPanelSprite.scale.set(SPAWN_TIMER_PANEL_SCALE * panelData.aspect, SPAWN_TIMER_PANEL_SCALE, 1);
  spawnTimerPanelKey = nextKey;
}

function showSpawnNotification(text, tone = "default", duration = SPAWN_NOTIFICATION_DURATION) {
  if (!spawnNotificationEl) {
    return;
  }
  const safeText = typeof text === "string" ? text.trim() : "";
  if (!safeText) {
    spawnNotificationEl.textContent = "";
    spawnNotificationEl.classList.add("hidden");
    spawnNotificationEl.classList.remove("spawn-notification-legendary", "spawn-notification-mythic");
    spawnNotificationTimer = 0;
    spawnNotificationTone = "default";
    return;
  }
  spawnNotificationEl.textContent = safeText;
  spawnNotificationEl.classList.remove("hidden");
  spawnNotificationEl.classList.toggle("spawn-notification-legendary", tone === "legendary");
  spawnNotificationEl.classList.toggle("spawn-notification-mythic", tone === "mythic");
  spawnNotificationTimer = Math.max(0, Number(duration) || 0);
  spawnNotificationTone = tone;
}

function updateSpawnNotification(dt) {
  if (!(spawnNotificationTimer > 0)) {
    return;
  }
  spawnNotificationTimer = Math.max(0, spawnNotificationTimer - Math.max(0, Number(dt) || 0));
  if (spawnNotificationTimer > 0 || !spawnNotificationEl) {
    return;
  }
  spawnNotificationTone = "default";
  spawnNotificationEl.textContent = "";
  spawnNotificationEl.classList.add("hidden");
  spawnNotificationEl.classList.remove("spawn-notification-legendary", "spawn-notification-mythic");
}

function isSocketIoReady() {
  return typeof window.io === "function";
}

function isMultiplayerStreetAuthorityEnabled() {
  return multiplayerConnected && (multiplayerStreetAuthority || Boolean(multiplayerSocket));
}

function syncMultiplayerServerTime(serverTimeMs) {
  const safeServerTimeMs = Number(serverTimeMs);
  if (!Number.isFinite(safeServerTimeMs) || safeServerTimeMs <= 0) {
    return;
  }
  const nextOffset = safeServerTimeMs - Date.now();
  if (!Number.isFinite(multiplayerServerTimeOffsetMs)) {
    multiplayerServerTimeOffsetMs = nextOffset;
    return;
  }
  multiplayerServerTimeOffsetMs += (nextOffset - multiplayerServerTimeOffsetMs) * 0.25;
}

function getEstimatedMultiplayerServerTimeMs() {
  return Date.now() + multiplayerServerTimeOffsetMs;
}

function clearPendingNetworkPurchase(characterId = "") {
  if (!characterId || multiplayerPendingPurchaseCharacterId === characterId) {
    multiplayerPendingPurchaseCharacterId = "";
    multiplayerPendingPurchaseNpcId = 0;
  }
}

function createRemotePlayerAvatar(username) {
  const avatar = createBlockyAvatar();
  avatar.position.set(SPAWN_X, STREET_PATH_SURFACE_Y, SPAWN_Z);
  avatar.userData.isRemotePlayer = true;
  avatar.userData.nameTagSprite && (avatar.userData.nameTagSprite.renderOrder = 7);
  applyNameTagToAvatar(avatar, username, 1.15, 6.2);
  avatar.visible = true;
  return avatar;
}

function removeRemotePlayer(socketId) {
  const state = remotePlayers.get(socketId);
  if (!state) {
    return;
  }
  scene.remove(state.avatar);
  remotePlayers.delete(socketId);
}

function clearRemotePlayers() {
  for (const socketId of Array.from(remotePlayers.keys())) {
    removeRemotePlayer(socketId);
  }
}

function ensureRemotePlayerState(playerData) {
  if (!playerData || typeof playerData !== "object") {
    return null;
  }
  const socketId = typeof playerData.socketId === "string" ? playerData.socketId : "";
  const selfSocketId =
    (typeof multiplayerSelfSocketId === "string" && multiplayerSelfSocketId) ||
    (multiplayerSocket && typeof multiplayerSocket.id === "string" ? multiplayerSocket.id : "");
  if (!socketId || (selfSocketId && socketId === selfSocketId)) {
    return null;
  }

  const username = sanitizeNameTag(playerData.username || DEFAULT_NAMETAG);
  let state = remotePlayers.get(socketId);
  let wasCreated = false;
  if (!state) {
    const avatar = createRemotePlayerAvatar(username);
    state = {
      socketId,
      avatar,
      username,
      rebirthCount: 0,
      baseIndex: -1,
      hasFletcherOnBase: false,
      hasEshdogMarleyOnBase: false,
      targetPosition: new THREE.Vector3(),
      targetRotationY: 0,
    };
    wasCreated = true;
    remotePlayers.set(socketId, state);
    scene.add(avatar);
  } else if (state.username !== username) {
    state.username = username;
    applyNameTagToAvatar(state.avatar, username, 1.15, 6.2);
  }

  if (state.avatar && state.avatar.parent !== scene) {
    scene.add(state.avatar);
  }
  if (state.avatar) {
    state.avatar.visible = true;
  }

  const position = sanitizePositionPayload(playerData.position);
  state.rebirthCount = clampInt(playerData.rebirthCount, 0, 999, 0);
  state.baseIndex = Number.isInteger(playerData.baseIndex) ? playerData.baseIndex : -1;
  state.hasFletcherOnBase = Boolean(playerData.hasFletcherOnBase);
  state.hasEshdogMarleyOnBase = Boolean(playerData.hasEshdogMarleyOnBase);
  state.targetPosition.set(position.x, position.y, position.z);
  state.targetRotationY = position.rotationY;

  if (wasCreated || !Number.isFinite(state.avatar.position.x) || !Number.isFinite(state.avatar.position.z)) {
    state.avatar.position.copy(state.targetPosition);
    state.avatar.rotation.y = state.targetRotationY;
  }

  return state;
}

function reconcileRemotePlayers(playerList) {
  const seenIds = new Set();
  const safePlayerList = Array.isArray(playerList) ? playerList : [];
  for (let i = 0; i < safePlayerList.length; i += 1) {
    const state = ensureRemotePlayerState(safePlayerList[i]);
    if (state) {
      seenIds.add(state.socketId);
    }
  }

  for (const socketId of Array.from(remotePlayers.keys())) {
    if (!seenIds.has(socketId)) {
      removeRemotePlayer(socketId);
    }
  }
}

function updateRemotePlayers() {
  for (const state of remotePlayers.values()) {
    if (!state || !state.avatar) {
      continue;
    }
    state.avatar.position.lerp(state.targetPosition, MULTIPLAYER_REMOTE_PLAYER_LERP);
    state.avatar.rotation.y = lerpAngle(
      state.avatar.rotation.y,
      state.targetRotationY,
      MULTIPLAYER_REMOTE_ROTATION_LERP
    );
  }
}

function sanitizePositionPayload(rawPosition) {
  const safe = rawPosition && typeof rawPosition === "object" ? rawPosition : {};
  return {
    x: Number.isFinite(Number(safe.x)) ? Number(safe.x) : 0,
    y: Number.isFinite(Number(safe.y)) ? Number(safe.y) : 0,
    z: Number.isFinite(Number(safe.z)) ? Number(safe.z) : 0,
    rotationY: Number.isFinite(Number(safe.rotationY)) ? Number(safe.rotationY) : 0,
  };
}

function isNetworkStreetCharacter(student) {
  return Boolean(student && student.avatar && student.avatar.userData && student.avatar.userData.networkCharacterId);
}

function getNetworkStreetCharacterById(characterId) {
  if (!characterId) {
    return null;
  }
  const mappedNpcId = networkStreetCharacters.get(characterId);
  if (mappedNpcId) {
    return getStudentNpcById(mappedNpcId);
  }
  for (let i = 0; i < studentNpcs.length; i += 1) {
    const student = studentNpcs[i];
    if (!student || !student.avatar || !student.avatar.userData) {
      continue;
    }
    if (student.avatar.userData.networkCharacterId === characterId) {
      networkStreetCharacters.set(characterId, student.id);
      return student;
    }
  }
  return null;
}

function removeStudentNpcFromScene(student) {
  if (!student) {
    return;
  }
  const index = studentNpcs.indexOf(student);
  if (index >= 0) {
    studentNpcs.splice(index, 1);
  }
  if (student.avatar) {
    scene.remove(student.avatar);
  }
}

function clearNetworkStreetMetadata(student) {
  if (!student || !student.avatar || !student.avatar.userData) {
    return;
  }
  const characterId = student.avatar.userData.networkCharacterId;
  if (characterId) {
    networkStreetCharacters.delete(characterId);
  }
  delete student.avatar.userData.networkCharacterId;
  delete student.avatar.userData.networkSpawnedAtMs;
  delete student.avatar.userData.networkStartX;
  delete student.avatar.userData.networkStartZ;
  delete student.avatar.userData.networkEndZ;
  delete student.avatar.userData.networkSpeed;
  delete student.avatar.userData.networkExpiresAtMs;
}

function removeNetworkStreetCharacter(characterId) {
  if (!characterId) {
    return;
  }
  const student = getNetworkStreetCharacterById(characterId);
  clearPendingNetworkPurchase(characterId);
  networkStreetCharacters.delete(characterId);
  if (!student) {
    return;
  }
  removeStudentNpcFromScene(student);
}

function clearAllNetworkStreetCharacters() {
  for (const characterId of Array.from(networkStreetCharacters.keys())) {
    removeNetworkStreetCharacter(characterId);
  }
}

function clearLocalForSaleStreetNpcs() {
  for (let i = studentNpcs.length - 1; i >= 0; i -= 1) {
    const student = studentNpcs[i];
    if (!student || !student.avatar || !student.avatar.userData) {
      continue;
    }
    if (student.purchaseState !== "forSale" || !student.avatar.userData.isStreetWalker) {
      continue;
    }
    removeStudentNpcFromScene(student);
  }
}

function setMultiplayerStreetAuthority(active) {
  const nextActive = Boolean(active);
  if (multiplayerStreetAuthority === nextActive) {
    if (nextActive) {
      clearLocalForSaleStreetNpcs();
    }
    return;
  }
  multiplayerStreetAuthority = nextActive;
  if (nextActive) {
    clearLocalForSaleStreetNpcs();
    return;
  }
  clearAllNetworkStreetCharacters();
  for (let i = 0; i < GUARANTEED_SPAWN_TIMER_ORDER.length; i += 1) {
    resetGuaranteedSpawnTimer(GUARANTEED_SPAWN_TIMER_ORDER[i]);
  }
  updateSpawnTimerDisplay(true);
}

function applyServerTimerSnapshot(timerSnapshot) {
  if (!timerSnapshot || typeof timerSnapshot !== "object") {
    return;
  }
  for (let i = 0; i < GUARANTEED_SPAWN_TIMER_ORDER.length; i += 1) {
    const timerId = GUARANTEED_SPAWN_TIMER_ORDER[i];
    const timerData = timerSnapshot[timerId];
    if (!timerData) {
      continue;
    }
    guaranteedSpawnTimers[timerId] = {
      id: timerId,
      remainingSeconds: Math.max(0, Number(timerData.remainingSeconds) || 0),
    };
  }
  updateSpawnTimerDisplay(true);
}

function syncNetworkStreetCharacterMotion(student) {
  if (!isNetworkStreetCharacter(student)) {
    return;
  }
  const avatar = student.avatar;
  const startX = Number(avatar.userData.networkStartX);
  const startZ = Number(avatar.userData.networkStartZ);
  const endZ = Number(avatar.userData.networkEndZ);
  const speed = Math.max(0, Number(avatar.userData.networkSpeed) || 0);
  const spawnedAtMs = Number(avatar.userData.networkSpawnedAtMs);
  if (!Number.isFinite(startX) || !Number.isFinite(startZ) || !Number.isFinite(endZ) || !Number.isFinite(spawnedAtMs)) {
    return;
  }
  const elapsedSeconds = Math.max(0, (getEstimatedMultiplayerServerTimeMs() - spawnedAtMs) / 1000);
  const nextZ = Math.min(endZ, startZ + speed * elapsedSeconds);
  avatar.position.x = startX;
  avatar.position.z = nextZ;
  student.direction = 1;
  student.minZ = startZ;
  student.maxZ = endZ;
  student.speed = speed;
}

function hydrateNetworkStreetCharacter(characterData) {
  if (!characterData || typeof characterData !== "object" || typeof characterData.id !== "string") {
    return null;
  }

  let student = getNetworkStreetCharacterById(characterData.id);
  if (!student) {
    student =
      createNpcForName(characterData.name, { variantId: characterData.variantId || "" }) ||
      createNpcForRarity(characterData.rarity, { variantId: characterData.variantId || "" });
    if (!student || !student.avatar) {
      return null;
    }
    studentNpcs.push(student);
    scene.add(student.avatar);
  }

  student.direction = 1;
  student.minZ = Number.isFinite(Number(characterData.startZ)) ? Number(characterData.startZ) : NPC_STREAM_START_Z;
  student.maxZ = Number.isFinite(Number(characterData.endZ)) ? Number(characterData.endZ) : NPC_STREAM_END_Z;
  student.speed = Number.isFinite(Number(characterData.speed)) ? Number(characterData.speed) : LEO_PATROL_SPEED;
  student.purchaseState = "forSale";
  student.assignedBaseIndex = -1;
  student.assignedPadIndex = -1;
  student.incomeAccumulator = 0;
  student.incomePayoutCarry = 0;
  student.pendingMoney = 0;
  if (!student.assignedPadWorld || !student.assignedPadWorld.set) {
    student.assignedPadWorld = new THREE.Vector3();
  }
  if (!student.assignedPadStandWorld || !student.assignedPadStandWorld.set) {
    student.assignedPadStandWorld = new THREE.Vector3();
  }
  if (!student.assignedPadWalkWorld || !student.assignedPadWalkWorld.set) {
    student.assignedPadWalkWorld = new THREE.Vector3();
  }
  student.assignedPadWorld.set(0, 0, 0);
  student.assignedPadStandWorld.set(0, 0, 0);
  student.assignedPadWalkWorld.set(0, 0, 0);
  student.assignedPadFacingYaw = Math.PI;
  student.avatar.userData.isStreetWalker = true;
  student.avatar.userData.isPurchasedNpc = false;
  student.avatar.userData.purchaseState = "forSale";
  student.avatar.userData.networkCharacterId = characterData.id;
  student.avatar.userData.networkSpawnedAtMs = Number(characterData.spawnedAtMs) || Date.now();
  student.avatar.userData.networkStartX = Number(characterData.startX) || NPC_STREAM_LANE_X;
  student.avatar.userData.networkStartZ = Number(characterData.startZ) || NPC_STREAM_START_Z;
  student.avatar.userData.networkEndZ = Number(characterData.endZ) || NPC_STREAM_END_Z;
  student.avatar.userData.networkSpeed = Number(characterData.speed) || LEO_PATROL_SPEED;
  student.avatar.userData.networkExpiresAtMs = Number(characterData.expiresAtMs) || 0;
  networkStreetCharacters.set(characterData.id, student.id);
  syncNetworkStreetCharacterMotion(student);
  updateNpcInfoTag(student);
  return student;
}

function reconcileNetworkStreetCharacters(characters) {
  clearLocalForSaleStreetNpcs();
  const safeCharacters = Array.isArray(characters) ? characters : [];
  const seenIds = new Set();
  for (let i = 0; i < safeCharacters.length; i += 1) {
    const character = safeCharacters[i];
    if (!character || typeof character.id !== "string") {
      continue;
    }
    seenIds.add(character.id);
    hydrateNetworkStreetCharacter(character);
  }
  for (const characterId of Array.from(networkStreetCharacters.keys())) {
    if (!seenIds.has(characterId)) {
      removeNetworkStreetCharacter(characterId);
    }
  }
}

function finalizeStreetNpcPurchase(student) {
  const activeSlot = getActiveSaveSlot();
  if (!activeSlot || !student || !student.avatar || !student.avatar.userData) {
    return false;
  }

  const freePad = getFreeIncomePadForActiveSlot();
  if (!freePad) {
    showTemporaryInteractionPrompt("You base is full.", "error", 1.4);
    return false;
  }

  const cost = clampInt(student.avatar.userData.npcCost, 0, MAX_CURRENCY_VALUE, 0);
  if (activeSlot.money < cost) {
    showTemporaryInteractionPrompt("Not enough money", "error", 1.4);
    return false;
  }

  activeSlot.money = clampInt(activeSlot.money - cost, 0, MAX_CURRENCY_VALUE, activeSlot.money);
  clearNetworkStreetMetadata(student);
  student.purchaseState = "walkingToPad";
  student.assignedBaseIndex = freePad.basePad.index;
  student.assignedPadIndex = freePad.padIndex;
  applyNpcAssignedPadTargets(student, freePad.basePad, freePad.padIndex, freePad.padWorld);
  student.incomeAccumulator = 0;
  student.incomePayoutCarry = 0;
  student.pendingMoney = 0;
  student.speed = NPC_BUY_WALK_TO_PAD_SPEED;
  student.avatar.userData.isStreetWalker = false;
  student.avatar.userData.isPurchasedNpc = true;
  student.avatar.userData.purchaseState = "walkingToPad";
  grantIndexCollectedEntry(
    activeSlot,
    student.avatar.userData.npcBaseName || student.avatar.userData.npcDisplayName || "",
    student.avatar.userData.npcVariantId
  );
  updateNpcInfoTag(student);
  if (Array.isArray(freePad.basePad.incomePadOccupants) && freePad.padIndex >= 0 && freePad.padIndex < freePad.basePad.incomePadOccupants.length) {
    freePad.basePad.incomePadOccupants[freePad.padIndex] = student.id;
  }
  saveSaveSlotsToStorage();
  renderSaveSlotsUi();
  syncMultiplayerProfile();
  return true;
}

function spawnAdminBroadcastStreetNpc(npcName, variantId) {
  const safeNpcName = typeof npcName === "string" ? npcName.trim() : "";
  if (!safeNpcName || !ADMIN_GRANTABLE_CHARACTER_NAMES.includes(safeNpcName)) {
    return false;
  }
  const safeVariantId = normalizeNpcVariantId(variantId);
  const npc = createNpcForName(safeNpcName, { variantId: safeVariantId });
  if (!npc || !npc.avatar || !npc.avatar.userData) {
    return false;
  }

  if (!placeNpcOnStreetStream(npc, 0)) {
    return false;
  }
  npc.avatar.position.z = Math.min(NPC_STREAM_END_Z - 1, npc.avatar.position.z + 22);
  npc.minZ = npc.avatar.position.z - 1;
  npc.maxZ = NPC_STREAM_END_Z;
  npc.direction = 1;
  npc.speed = LEO_PATROL_SPEED;
  clearNetworkStreetMetadata(npc);
  npc.avatar.userData.streamSpawnRarity = getNpcRarityForName(safeNpcName);
  npc.avatar.userData.isGuaranteedSpawn = false;
  updateNpcInfoTag(npc);
  studentNpcs.push(npc);
  scene.add(npc.avatar);

  const variant = getNpcVariantDefinition(safeVariantId);
  const spawnedLabel = safeVariantId === VARIANT_NORMAL ? safeNpcName : `${variant.label} ${safeNpcName}`;
  showTemporaryInteractionPrompt(`${spawnedLabel} spawned on the street!`, "default", 2.2);
  return true;
}

function handleAdminClassmateGrant(payload = {}) {
  const safePayload = payload && typeof payload === "object" ? payload : {};
  const npcName = typeof safePayload.npcName === "string" ? safePayload.npcName.trim() : "";
  if (!npcName) {
    return;
  }
  const variantId = normalizeNpcVariantId(safePayload.variantId);
  spawnAdminBroadcastStreetNpc(npcName, variantId);
}

function handleNetworkStreetCharacterPurchased(payload) {
  const safePayload = payload && typeof payload === "object" ? payload : {};
  const characterId = typeof safePayload.characterId === "string" ? safePayload.characterId : "";
  if (!characterId) {
    return;
  }

  const student = getNetworkStreetCharacterById(characterId);
  const isLocalBuyer = Boolean(multiplayerSocket && safePayload.buyerSocketId === multiplayerSocket.id);
  clearPendingNetworkPurchase(characterId);

  if (isLocalBuyer) {
    const purchaseTarget = student || hydrateNetworkStreetCharacter(safePayload.character);
    if (!purchaseTarget || !finalizeStreetNpcPurchase(purchaseTarget)) {
      if (purchaseTarget) {
        removeStudentNpcFromScene(purchaseTarget);
      }
    }
    return;
  }

  removeNetworkStreetCharacter(characterId);
}

function handleNetworkStreetCharacterPurchaseDenied(payload) {
  const safePayload = payload && typeof payload === "object" ? payload : {};
  const characterId = typeof safePayload.characterId === "string" ? safePayload.characterId : "";
  if (!characterId) {
    return;
  }
  if (multiplayerPendingPurchaseCharacterId === characterId) {
    clearPendingNetworkPurchase(characterId);
    showTemporaryInteractionPrompt("Someone else bought that one.", "error", 1.6);
  }
}

function buildSocketProfileRegistrationPayload() {
  const activeSlot = getActiveSaveSlot();
  const avatarConfig = getCurrentAvatarConfig();
  const basePassives = getActiveBasePassiveFlags();
  return {
    username: activeSlot ? activeSlot.username || activeSlot.name || avatarConfig.username : avatarConfig.username,
    rebirthCount: activeSlot ? getSlotRebirthCount(activeSlot) : 0,
    baseIndex: basePassives.baseIndex,
    hasFletcherOnBase: basePassives.hasFletcherOnBase,
    hasEshdogMarleyOnBase: basePassives.hasEshdogMarleyOnBase,
    position: {
      x: player.position.x,
      y: player.position.y,
      z: player.position.z,
      rotationY: player.rotation.y,
    },
  };
}

function emitProfileRegistrationToSocket(socket) {
  if (!socket) {
    return;
  }
  socket.emit("player:register", buildSocketProfileRegistrationPayload());
}

function attachAdminBroadcastSocketListeners(socket) {
  if (!socket || socket.__adminBroadcastListenersAttached) {
    return;
  }
  socket.__adminBroadcastListenersAttached = true;
  socket.on("admin:grantClassmate", (payload = {}) => {
    handleAdminClassmateGrant(payload);
  });
}

function syncMultiplayerProfile() {
  if (!multiplayerSocket || !multiplayerConnected) {
    return;
  }
  emitProfileRegistrationToSocket(multiplayerSocket);
}

function updateMultiplayerPositionSync(dt) {
  if (!multiplayerSocket || !multiplayerConnected || !running || activeSaveSlotIndex < 0 || isMenuOpen()) {
    multiplayerMovementSendAccumulator = 0;
    return;
  }
  multiplayerMovementSendAccumulator += Math.max(0, Number(dt) || 0);
  if (multiplayerMovementSendAccumulator < MULTIPLAYER_POSITION_SEND_INTERVAL) {
    return;
  }
  multiplayerMovementSendAccumulator = 0;
  const basePassives = getActiveBasePassiveFlags();
  multiplayerSocket.emit("player:move", {
    x: player.position.x,
    y: player.position.y,
    z: player.position.z,
    rotationY: player.rotation.y,
    baseIndex: basePassives.baseIndex,
    hasFletcherOnBase: basePassives.hasFletcherOnBase,
    hasEshdogMarleyOnBase: basePassives.hasEshdogMarleyOnBase,
  });
}

function connectMultiplayer() {
  if (!MULTIPLAYER_ENABLED) {
    multiplayerConnected = false;
    multiplayerStreetAuthority = false;
    multiplayerSelfSocketId = "";
    return;
  }
  if (!isSocketIoReady() || !SOCKET_URL || multiplayerSocket) {
    return;
  }

  multiplayerSocket = window.io(SOCKET_URL, {
    transports: ["websocket", "polling"],
  });
  attachAdminBroadcastSocketListeners(multiplayerSocket);

  multiplayerSocket.on("connect", () => {
    multiplayerConnected = true;
    multiplayerSelfSocketId = typeof multiplayerSocket.id === "string" ? multiplayerSocket.id : "";
    multiplayerMovementSendAccumulator = 0;
    setMultiplayerStreetAuthority(true);
    syncMultiplayerProfile();
  });

  multiplayerSocket.on("disconnect", () => {
    multiplayerConnected = false;
    multiplayerSelfSocketId = "";
    clearPendingNetworkPurchase();
    clearRemotePlayers();
    setMultiplayerStreetAuthority(false);
  });

  multiplayerSocket.on("world:state", (payload = {}) => {
    syncMultiplayerServerTime(payload.serverTimeMs);
    multiplayerSelfSocketId =
      typeof payload.selfSocketId === "string" && payload.selfSocketId
        ? payload.selfSocketId
        : multiplayerSelfSocketId;
    setMultiplayerStreetAuthority(true);
    reconcileRemotePlayers(payload.players);
    reconcileNetworkStreetCharacters(payload.streetCharacters);
    applyServerTimerSnapshot(payload.timers);
  });

  multiplayerSocket.on("players:list", (players) => {
    reconcileRemotePlayers(players);
  });

  multiplayerSocket.on("player:joined", (playerData) => {
    ensureRemotePlayerState(playerData);
  });

  multiplayerSocket.on("player:left", (payload = {}) => {
    removeRemotePlayer(payload.socketId);
  });

  multiplayerSocket.on("player:moved", (payload = {}) => {
    const existingState =
      payload && typeof payload.socketId === "string" ? remotePlayers.get(payload.socketId) : null;
    const state = ensureRemotePlayerState({
      socketId: payload.socketId,
      username:
        (payload && typeof payload.username === "string" && payload.username.trim()) ||
        (existingState ? existingState.username : DEFAULT_NAMETAG),
      rebirthCount:
        payload && Number.isFinite(Number(payload.rebirthCount))
          ? Number(payload.rebirthCount)
          : existingState
            ? existingState.rebirthCount
            : 0,
      baseIndex:
        payload && Number.isInteger(payload.baseIndex)
          ? payload.baseIndex
          : existingState
            ? existingState.baseIndex
            : -1,
      hasFletcherOnBase:
        payload && typeof payload.hasFletcherOnBase !== "undefined"
          ? Boolean(payload.hasFletcherOnBase)
          : existingState
            ? existingState.hasFletcherOnBase
            : false,
      hasEshdogMarleyOnBase:
        payload && typeof payload.hasEshdogMarleyOnBase !== "undefined"
          ? Boolean(payload.hasEshdogMarleyOnBase)
          : existingState
            ? existingState.hasEshdogMarleyOnBase
            : false,
      position: payload.position,
    });
    if (!state) {
      return;
    }
    const position = sanitizePositionPayload(payload.position);
    state.targetPosition.set(position.x, position.y, position.z);
    state.targetRotationY = position.rotationY;
  });

  multiplayerSocket.on("spawnTimers:update", (payload = {}) => {
    syncMultiplayerServerTime(payload.serverTimeMs);
    if (payload.timers) {
      applyServerTimerSnapshot(payload.timers);
    }
  });

  multiplayerSocket.on("streetCharacter:spawned", (payload = {}) => {
    syncMultiplayerServerTime(payload.serverTimeMs);
    setMultiplayerStreetAuthority(true);
    if (payload.character) {
      hydrateNetworkStreetCharacter(payload.character);
    }
  });

  multiplayerSocket.on("streetCharacter:despawned", (payload = {}) => {
    removeNetworkStreetCharacter(payload.characterId);
  });

  multiplayerSocket.on("streetCharacter:purchased", (payload = {}) => {
    handleNetworkStreetCharacterPurchased(payload);
  });

  multiplayerSocket.on("streetCharacter:purchaseDenied", (payload = {}) => {
    handleNetworkStreetCharacterPurchaseDenied(payload);
  });

  multiplayerSocket.on("chat:message", (payload = {}) => {
    showChatMessage(payload.type || "pull", payload.text || "");
  });
}

function sanitizeNameTag(value) {
  const cleaned = String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 20);
  return cleaned || DEFAULT_NAMETAG;
}

function isCustomUsername(value) {
  return sanitizeNameTag(value).toLowerCase() !== DEFAULT_NAMETAG.toLowerCase();
}

function readLegacyArchivedSaveSlots() {
  try {
    const raw = window.localStorage.getItem(LEGACY_SAVE_SLOTS_ARCHIVE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Failed to read legacy save slot archive.", error);
    return [];
  }
}

function archiveLegacySaveSlots(slots) {
  try {
    window.localStorage.setItem(LEGACY_SAVE_SLOTS_ARCHIVE_KEY, JSON.stringify(slots));
  } catch (error) {
    console.warn("Failed to archive legacy save slots.", error);
  }
}

function isUsernameTakenLocally(username, currentUsername = "") {
  const safeUsername = sanitizeNameTag(username);
  if (!isCustomUsername(safeUsername)) {
    return false;
  }
  const safeCurrentUsername = sanitizeNameTag(currentUsername);
  if (safeUsername.toLowerCase() === safeCurrentUsername.toLowerCase()) {
    return false;
  }

  const existingNames = new Set();
  const collectName = (value) => {
    if (!isCustomUsername(value)) {
      return;
    }
    existingNames.add(sanitizeNameTag(value).toLowerCase());
  };

  if (Array.isArray(saveSlots)) {
    for (const slot of saveSlots) {
      if (!slot || !slot.used) {
        continue;
      }
      collectName(slot.username || slot.name || (slot.avatar && (slot.avatar.username || slot.avatar.nametag)));
    }
  }

  const archivedSlots = readLegacyArchivedSaveSlots();
  for (const slot of archivedSlots) {
    if (!slot || typeof slot !== "object" || !slot.used) {
      continue;
    }
    collectName(slot.username || slot.name || (slot.avatar && (slot.avatar.username || slot.avatar.nametag)));
  }

  return existingNames.has(safeUsername.toLowerCase());
}

function normalizeNpcRarity(value) {
  const safe = String(value || "")
    .trim()
    .toLowerCase();
  if (safe === "common") {
    return RARITY_COMMON;
  }
  if (safe === "uncommon") {
    return RARITY_UNCOMMON;
  }
  if (safe === "rare") {
    return RARITY_RARE;
  }
  if (safe === "epic") {
    return RARITY_EPIC;
  }
  if (safe === "legendary") {
    return RARITY_LEGENDARY;
  }
  if (safe === "mythic") {
    return RARITY_MYTHIC;
  }
  if (safe === "secret") {
    return RARITY_SECRET;
  }
  return "";
}

function normalizeNpcVariantId(value) {
  const safe = String(value || "")
    .trim()
    .toLowerCase();
  if (safe === VARIANT_NORMAL) {
    return VARIANT_NORMAL;
  }
  if (safe === VARIANT_SHINY) {
    return VARIANT_SHINY;
  }
  if (safe === VARIANT_GOLDEN) {
    return VARIANT_GOLDEN;
  }
  if (safe === VARIANT_DIAMOND) {
    return VARIANT_DIAMOND;
  }
  if (safe === VARIANT_RAINBOW) {
    return VARIANT_RAINBOW;
  }
  return VARIANT_NORMAL;
}

function getNpcRarityForName(name) {
  const safeName = typeof name === "string" ? name.trim() : "";
  return NPC_RARITY_BY_NAME[safeName] || "";
}

function getNpcVariantDefinition(variantId) {
  return NPC_VARIANT_DEFINITIONS[normalizeNpcVariantId(variantId)] || NPC_VARIANT_DEFINITIONS[VARIANT_NORMAL];
}

function getBaseEconomyForNpcRarity(rarity) {
  return RARITY_ECONOMY_BY_TIER[normalizeNpcRarity(rarity)] || RARITY_ECONOMY_BY_TIER[RARITY_COMMON];
}

function getBaseEconomyForNpcName(name, fallbackRarity = "") {
  const safeName = typeof name === "string" ? name.trim() : "";
  return NPC_BASE_ECONOMY_BY_NAME[safeName] || getBaseEconomyForNpcRarity(fallbackRarity || getNpcRarityForName(safeName));
}

function getVariantAdjustedEconomy(baseName, baseRarity, variantId) {
  const baseEconomy = getBaseEconomyForNpcName(baseName, baseRarity);
  const variant = getNpcVariantDefinition(variantId);
  return {
    baseCost: clampInt(baseEconomy.cost, 0, MAX_CURRENCY_VALUE, 0),
    baseMoneyPerSecond: clampInt(baseEconomy.moneyPerSecond, 0, MAX_CURRENCY_VALUE, 0),
    cost: clampInt(baseEconomy.cost * variant.costMultiplier, 0, MAX_CURRENCY_VALUE, baseEconomy.cost),
    moneyPerSecond: clampInt(
      baseEconomy.moneyPerSecond * variant.moneyMultiplier,
      0,
      MAX_CURRENCY_VALUE,
      baseEconomy.moneyPerSecond
    ),
  };
}

function isIndexTrackedCharacterName(name) {
  const safeName = typeof name === "string" ? name.trim() : "";
  return INDEX_TRACKED_CHARACTER_NAMES.includes(safeName);
}

function buildIndexCollectedKey(npcName, variantId) {
  const safeNpcName = typeof npcName === "string" ? npcName.trim() : "";
  if (!isIndexTrackedCharacterName(safeNpcName)) {
    return "";
  }
  const variant = getNpcVariantDefinition(variantId);
  return `${safeNpcName}_${variant.label}`;
}

function normalizeIndexCollectedKey(value) {
  const safeValue = typeof value === "string" ? value.trim().toLowerCase() : "";
  if (!safeValue) {
    return "";
  }
  for (let characterIndex = 0; characterIndex < INDEX_TRACKED_CHARACTER_NAMES.length; characterIndex += 1) {
    const npcName = INDEX_TRACKED_CHARACTER_NAMES[characterIndex];
    for (let variantIndex = 0; variantIndex < INDEX_COMPLETION_VARIANT_IDS.length; variantIndex += 1) {
      const key = buildIndexCollectedKey(npcName, INDEX_COMPLETION_VARIANT_IDS[variantIndex]);
      if (safeValue === key.toLowerCase()) {
        return key;
      }
    }
  }
  return "";
}

function getIndexCollectedKeySortValue(key) {
  const safeKey = normalizeIndexCollectedKey(key);
  if (!safeKey) {
    return Number.MAX_SAFE_INTEGER;
  }
  for (let characterIndex = 0; characterIndex < INDEX_TRACKED_CHARACTER_NAMES.length; characterIndex += 1) {
    const npcName = INDEX_TRACKED_CHARACTER_NAMES[characterIndex];
    for (let variantIndex = 0; variantIndex < INDEX_COMPLETION_VARIANT_IDS.length; variantIndex += 1) {
      if (safeKey === buildIndexCollectedKey(npcName, INDEX_COMPLETION_VARIANT_IDS[variantIndex])) {
        return characterIndex * INDEX_COMPLETION_VARIANT_IDS.length + variantIndex;
      }
    }
  }
  return Number.MAX_SAFE_INTEGER;
}

function sanitizeIndexCollected(rawEntries) {
  if (!Array.isArray(rawEntries)) {
    return [];
  }
  const safeEntries = [];
  const seenEntries = new Set();
  for (let i = 0; i < rawEntries.length; i += 1) {
    const safeKey = normalizeIndexCollectedKey(rawEntries[i]);
    if (!safeKey || seenEntries.has(safeKey)) {
      continue;
    }
    seenEntries.add(safeKey);
    safeEntries.push(safeKey);
  }
  safeEntries.sort((a, b) => getIndexCollectedKeySortValue(a) - getIndexCollectedKeySortValue(b));
  return safeEntries;
}

function getSlotIndexCollected(slot) {
  if (!slot) {
    return [];
  }
  return sanitizeIndexCollected(slot.indexCollected);
}

function grantIndexCollectedEntry(slot, npcName, variantId) {
  if (!slot) {
    return false;
  }
  const entryKey = buildIndexCollectedKey(npcName, variantId);
  if (!entryKey) {
    return false;
  }
  const safeEntries = getSlotIndexCollected(slot);
  if (safeEntries.includes(entryKey)) {
    slot.indexCollected = safeEntries;
    return false;
  }
  safeEntries.push(entryKey);
  safeEntries.sort((a, b) => getIndexCollectedKeySortValue(a) - getIndexCollectedKeySortValue(b));
  slot.indexCollected = safeEntries;
  return true;
}

function getSlotIndexCollectedCount(slot) {
  return getSlotIndexCollected(slot).length;
}

function getSlotIndexCompletionCountForCharacter(slot, npcName) {
  const safeNpcName = typeof npcName === "string" ? npcName.trim() : "";
  if (!isIndexTrackedCharacterName(safeNpcName)) {
    return 0;
  }
  const collectedEntries = new Set(getSlotIndexCollected(slot));
  let completionCount = 0;
  for (let i = 0; i < INDEX_COMPLETION_VARIANT_IDS.length; i += 1) {
    if (collectedEntries.has(buildIndexCollectedKey(safeNpcName, INDEX_COMPLETION_VARIANT_IDS[i]))) {
      completionCount += 1;
    }
  }
  return completionCount;
}

function getSlotCompletedIndexCharacterCount(slot) {
  let completedCount = 0;
  for (let i = 0; i < INDEX_TRACKED_CHARACTER_NAMES.length; i += 1) {
    if (getSlotIndexCompletionCountForCharacter(slot, INDEX_TRACKED_CHARACTER_NAMES[i]) >= INDEX_COMPLETION_VARIANT_IDS.length) {
      completedCount += 1;
    }
  }
  return completedCount;
}

function getSlotIndexBonusMultiplier(slot) {
  const completedCharacterCount = getSlotCompletedIndexCharacterCount(slot);
  let bonus = completedCharacterCount * INDEX_CHARACTER_COMPLETION_BONUS;
  if (getSlotIndexCollectedCount(slot) >= INDEX_TOTAL_COMBINATIONS) {
    bonus += INDEX_FULL_COMPLETION_BONUS;
  }
  return Number(bonus.toFixed(4));
}

function getSlotCashMultiplier(slot) {
  return Number((getSlotRebirthMultiplier(slot) + getSlotIndexBonusMultiplier(slot)).toFixed(4));
}

function getIndexUiSignature(slot) {
  if (!slot) {
    return "no-slot";
  }
  const collectedEntries = getSlotIndexCollected(slot);
  return `${collectedEntries.join("|")}__${getSlotIndexBonusMultiplier(slot).toFixed(4)}`;
}

function getNpcVariantRollWeight(variantId, slot = getActiveSaveSlot()) {
  const variant = getNpcVariantDefinition(variantId);
  let weight = Math.max(0, Number(variant.chance) || 0);
  if (variant.id === VARIANT_RAINBOW) {
    weight *= getRainbowVariantWeightMultiplier(slot);
  }
  return weight;
}

function rollNpcVariantByWeights() {
  let totalWeight = 0;
  for (let i = 0; i < NPC_VARIANT_ROLL_ORDER.length; i += 1) {
    totalWeight += getNpcVariantRollWeight(NPC_VARIANT_ROLL_ORDER[i]);
  }
  if (totalWeight <= 0) {
    return VARIANT_NORMAL;
  }
  const roll = Math.random() * totalWeight;
  let cumulative = 0;
  for (let i = 0; i < NPC_VARIANT_ROLL_ORDER.length; i += 1) {
    const variantId = NPC_VARIANT_ROLL_ORDER[i];
    const variant = getNpcVariantDefinition(variantId);
    cumulative += getNpcVariantRollWeight(variant.id);
    if (roll < cumulative) {
      return variant.id;
    }
  }
  return VARIANT_NORMAL;
}

function createNpcDisplayName(name, rarity) {
  const safeName = typeof name === "string" && name.trim() ? name.trim() : LEO_NAME;
  const safeRarity = normalizeNpcRarity(rarity || getNpcRarityForName(safeName));
  return safeRarity ? `${safeName} [${safeRarity}]` : safeName;
}

function ensureNpcVariantMaterialBindings(avatar) {
  if (!avatar || !avatar.userData) {
    return [];
  }
  if (Array.isArray(avatar.userData.npcVariantMaterialBindings) && avatar.userData.npcVariantMaterialBindings.length) {
    return avatar.userData.npcVariantMaterialBindings;
  }

  const seenMaterials = new Set();
  const bindings = [];
  const faceMesh = avatar.userData.faceMesh || null;
  avatar.traverse((node) => {
    if (!node.isMesh || node === faceMesh) {
      return;
    }
    const materialList = Array.isArray(node.material) ? node.material : [node.material];
    for (let i = 0; i < materialList.length; i += 1) {
      const material = materialList[i];
      if (!material || seenMaterials.has(material) || !material.color) {
        continue;
      }
      seenMaterials.add(material);
      bindings.push({
        material,
        baseColor: material.color.clone(),
        baseEmissive: material.emissive ? material.emissive.clone() : null,
        baseEmissiveIntensity: Number.isFinite(material.emissiveIntensity) ? material.emissiveIntensity : 0,
      });
    }
  });

  avatar.userData.npcVariantMaterialBindings = bindings;
  return bindings;
}

function restoreNpcVariantMaterialBindings(avatar) {
  const bindings = ensureNpcVariantMaterialBindings(avatar);
  for (let i = 0; i < bindings.length; i += 1) {
    const binding = bindings[i];
    if (!binding || !binding.material) {
      continue;
    }
    if (binding.material.color && binding.baseColor) {
      binding.material.color.copy(binding.baseColor);
    }
    if (binding.material.emissive) {
      if (binding.baseEmissive) {
        binding.material.emissive.copy(binding.baseEmissive);
      } else {
        binding.material.emissive.set(0x000000);
      }
      binding.material.emissiveIntensity = binding.baseEmissiveIntensity;
    }
    binding.material.needsUpdate = true;
  }
}

function disposeNpcVariantEffects(avatar) {
  if (!avatar || !avatar.userData || !avatar.userData.npcVariantEffectGroup) {
    return;
  }
  const effectGroup = avatar.userData.npcVariantEffectGroup;
  effectGroup.traverse((node) => {
    if (node.material) {
      node.material.dispose();
    }
  });
  avatar.remove(effectGroup);
  avatar.userData.npcVariantEffectGroup = null;
  avatar.userData.npcVariantAuraSprite = null;
  avatar.userData.npcVariantSparkles = [];
}

function buildNpcVariantEffects(avatar, variantId) {
  disposeNpcVariantEffects(avatar);
  const variant = getNpcVariantDefinition(variantId);
  if (!avatar || !avatar.userData || variant.id === VARIANT_NORMAL) {
    return;
  }

  const effectGroup = new THREE.Group();
  effectGroup.name = "NpcVariantEffects";

  const auraMaterial = new THREE.SpriteMaterial({
    map: getVariantGlowTexture(),
    color: variant.glowColor,
    transparent: true,
    opacity: variant.glowOpacity,
    depthWrite: false,
    toneMapped: false,
    blending: THREE.AdditiveBlending,
  });
  const auraSprite = new THREE.Sprite(auraMaterial);
  auraSprite.position.set(0, 3.1, 0.15);
  auraSprite.scale.set(4.8, 6.1, 1);
  auraSprite.renderOrder = 5;
  effectGroup.add(auraSprite);

  const sparkleSprites = [];
  for (let i = 0; i < variant.sparkleCount; i += 1) {
    const sparkleMaterial = new THREE.SpriteMaterial({
      map: getVariantSparkleTexture(),
      color: variant.glowColor,
      transparent: true,
      opacity: variant.sparkleOpacity,
      depthWrite: false,
      toneMapped: false,
      blending: THREE.AdditiveBlending,
    });
    const sparkleSprite = new THREE.Sprite(sparkleMaterial);
    sparkleSprite.renderOrder = 6;
    sparkleSprite.userData.variantPhase = Math.random() * Math.PI * 2;
    sparkleSprite.userData.variantOrbitX = 0.6 + Math.random() * 0.9;
    sparkleSprite.userData.variantOrbitY = 0.24 + Math.random() * 0.32;
    sparkleSprite.userData.variantBaseY = 3 + i * 0.38 + Math.random() * 0.24;
    sparkleSprite.userData.variantSpeed = 0.58 + Math.random() * 0.46;
    sparkleSprite.userData.variantForward = 0.48 + Math.random() * 0.22;
    sparkleSprite.scale.setScalar(variant.sparkleScale);
    effectGroup.add(sparkleSprite);
    sparkleSprites.push(sparkleSprite);
  }

  avatar.add(effectGroup);
  avatar.userData.npcVariantEffectGroup = effectGroup;
  avatar.userData.npcVariantAuraSprite = auraSprite;
  avatar.userData.npcVariantSparkles = sparkleSprites;
}

function applyNpcVariantMaterialStyle(avatar, variantId, animationTime = 0) {
  if (!avatar || !avatar.userData) {
    return;
  }
  const variant = getNpcVariantDefinition(variantId);
  restoreNpcVariantMaterialBindings(avatar);
  if (variant.id === VARIANT_NORMAL) {
    return;
  }

  const tintColor =
    variant.id === VARIANT_RAINBOW
      ? tmpVariantColorA.setHSL((animationTime * 0.08) % 1, 0.82, 0.64)
      : tmpVariantColorA.set(variant.tintColor);
  const emissiveColor =
    variant.id === VARIANT_RAINBOW ? tmpVariantColorB.copy(tintColor) : tmpVariantColorB.set(variant.emissiveColor);

  const bindings = ensureNpcVariantMaterialBindings(avatar);
  for (let i = 0; i < bindings.length; i += 1) {
    const binding = bindings[i];
    if (!binding || !binding.material || !binding.material.color) {
      continue;
    }
    binding.material.color.lerp(tintColor, variant.tintStrength);
    if (binding.material.emissive) {
      binding.material.emissive.copy(emissiveColor);
      binding.material.emissiveIntensity = variant.emissiveIntensity;
    }
    binding.material.needsUpdate = true;
  }
}

function applyNpcVariantEconomy(student, variantId) {
  if (!student || !student.avatar || !student.avatar.userData) {
    return;
  }
  const avatar = student.avatar;
  const variant = getNpcVariantDefinition(variantId);
  const baseName = String(avatar.userData.npcBaseName || avatar.userData.npcDisplayName || "").trim();
  const rarity = normalizeNpcRarity(avatar.userData.npcRarity || getNpcRarityForName(avatar.userData.npcBaseName));
  const economy = getVariantAdjustedEconomy(baseName, rarity, variant.id);
  avatar.userData.npcVariantId = variant.id;
  avatar.userData.npcVariantName = variant.label;
  avatar.userData.npcBaseCost = economy.baseCost;
  avatar.userData.npcBaseIncomePerSecond = economy.baseMoneyPerSecond;
  avatar.userData.npcCost = economy.cost;
  avatar.userData.npcIncomePerSecond = economy.moneyPerSecond;
}

function applyNpcVariantToStudent(student, requestedVariantId = "", options = {}) {
  if (!student || !student.avatar || !student.avatar.userData) {
    return VARIANT_NORMAL;
  }

  const avatar = student.avatar;
  const variantId = requestedVariantId ? normalizeNpcVariantId(requestedVariantId) : rollNpcVariantByWeights();
  const nextAnimationTime =
    options && options.preserveAnimationTime && Number.isFinite(avatar.userData.npcVariantAnimationTime)
      ? avatar.userData.npcVariantAnimationTime
      : Math.random() * Math.PI * 2;

  avatar.userData.npcVariantAnimationTime = nextAnimationTime;
  applyNpcVariantEconomy(student, variantId);
  buildNpcVariantEffects(avatar, variantId);
  applyNpcVariantMaterialStyle(avatar, variantId, nextAnimationTime);
  updateNpcInfoTag(student);
  return variantId;
}

function updateNpcVariantEffects(student, dt) {
  if (!student || !student.avatar || !student.avatar.userData) {
    return;
  }
  const avatar = student.avatar;
  const variant = getNpcVariantDefinition(avatar.userData.npcVariantId);
  if (variant.id === VARIANT_NORMAL) {
    return;
  }

  const nextAnimationTime = (Number(avatar.userData.npcVariantAnimationTime) || 0) + Math.max(0, Number(dt) || 0);
  avatar.userData.npcVariantAnimationTime = nextAnimationTime;

  applyNpcVariantMaterialStyle(avatar, variant.id, nextAnimationTime);

  const auraSprite = avatar.userData.npcVariantAuraSprite;
  if (auraSprite && auraSprite.material) {
    const auraColor =
      variant.id === VARIANT_RAINBOW
        ? tmpVariantColorC.setHSL((nextAnimationTime * 0.08 + 0.12) % 1, 0.82, 0.66)
        : tmpVariantColorC.set(variant.glowColor);
    auraSprite.material.color.copy(auraColor);
    auraSprite.material.opacity = variant.glowOpacity * (0.82 + Math.sin(nextAnimationTime * 1.4) * 0.08);
  }

  const sparkleSprites = Array.isArray(avatar.userData.npcVariantSparkles) ? avatar.userData.npcVariantSparkles : [];
  for (let i = 0; i < sparkleSprites.length; i += 1) {
    const sparkle = sparkleSprites[i];
    if (!sparkle || !sparkle.material) {
      continue;
    }
    const phase = Number(sparkle.userData.variantPhase) || 0;
    const orbitSpeed = Number(sparkle.userData.variantSpeed) || 1;
    const orbitAngle = nextAnimationTime * orbitSpeed + phase;
    const orbitX = Number(sparkle.userData.variantOrbitX) || 0.7;
    const orbitY = Number(sparkle.userData.variantOrbitY) || 0.28;
    const baseY = Number(sparkle.userData.variantBaseY) || 3.2;
    const forward = Number(sparkle.userData.variantForward) || 0.55;
    sparkle.position.set(
      Math.cos(orbitAngle) * orbitX,
      baseY + Math.sin(orbitAngle * 1.6) * orbitY,
      forward + Math.sin(orbitAngle * 0.9) * 0.14
    );
    const pulse = 0.66 + (Math.sin(orbitAngle * 2.2) * 0.5 + 0.5) * 0.52;
    sparkle.scale.setScalar(variant.sparkleScale * pulse);
    sparkle.material.opacity = variant.sparkleOpacity * (0.48 + pulse * 0.36);
    if (variant.id === VARIANT_RAINBOW) {
      sparkle.material.color.setHSL((nextAnimationTime * 0.1 + i * 0.14) % 1, 0.88, 0.72);
    } else {
      sparkle.material.color.set(variant.glowColor);
    }
  }
}

function rollNpcRarityByWeights() {
  let totalWeight = 0;
  for (let i = 0; i < NPC_RARITY_SPAWN_WEIGHTS.length; i += 1) {
    totalWeight += Math.max(0, Number(NPC_RARITY_SPAWN_WEIGHTS[i].chance) || 0);
  }
  if (totalWeight <= 0) {
    return RARITY_COMMON;
  }
  const roll = Math.random() * totalWeight;
  let cumulative = 0;
  for (let i = 0; i < NPC_RARITY_SPAWN_WEIGHTS.length; i += 1) {
    const entry = NPC_RARITY_SPAWN_WEIGHTS[i];
    cumulative += Math.max(0, Number(entry.chance) || 0);
    if (roll < cumulative) {
      return entry.rarity;
    }
  }
  return RARITY_COMMON;
}

function createNpcForRarity(rarity, options = {}) {
  const safeRarity = normalizeNpcRarity(rarity) || RARITY_COMMON;
  let npc = null;
  if (safeRarity === RARITY_COMMON) {
    npc = createLeo3DNpcSafe();
  } else if (safeRarity === RARITY_UNCOMMON) {
    npc = createZiggyNpcSafe();
  } else if (safeRarity === RARITY_RARE) {
    npc =
      Math.random() < 0.5
      ? createNateNpcSafe({
          name: NATE_NAME,
          rarity: RARITY_RARE,
          variantId: NATE_HAIR_VARIANTS[0] ? NATE_HAIR_VARIANTS[0].id : "",
        })
      : createHendrixNpcSafe();
  } else if (safeRarity === RARITY_EPIC) {
    npc = Math.random() < 0.5 ? createLedgerNpcSafe() : createCharlieNpcSafe();
  } else if (safeRarity === RARITY_LEGENDARY) {
    npc = Math.random() < 0.5 ? createOscarNpcSafe() : createBeauNpcSafe();
  } else if (safeRarity === RARITY_MYTHIC) {
    npc = Math.random() < 0.5 ? createChristianNpcSafe() : createVinceNpcSafe();
  } else if (safeRarity === RARITY_SECRET) {
    npc = Math.random() < 0.5 ? createFletcherNpcSafe() : createEshdogMarleyNpcSafe();
  } else {
    npc = createLeo3DNpcSafe();
  }
  if (npc) {
    applyNpcVariantToStudent(npc, options.variantId || "");
  }
  return npc;
}

function createNpcForName(name, options = {}) {
  const safeName = typeof name === "string" ? name.trim() : "";
  if (!safeName) {
    return null;
  }
  let npc = null;
  if (safeName === LEO_NAME) {
    npc = createLeo3DNpcSafe();
  } else if (safeName === FLETCHER_NAME) {
    npc = createFletcherNpcSafe();
  } else if (safeName === ESHDOG_MARLEY_NAME) {
    npc = createEshdogMarleyNpcSafe();
  } else if (safeName === ZIGGY_NAME) {
    npc = createZiggyNpcSafe();
  } else if (safeName === VINCE_NAME) {
    npc = createVinceNpcSafe();
  } else if (safeName === HENDRIX_NAME) {
    npc = createHendrixNpcSafe();
  } else if (safeName === BEAU_NAME) {
    npc = createBeauNpcSafe();
  } else if (safeName === CHARLIE_NAME) {
    npc = createCharlieNpcSafe();
  } else if (safeName === CHARLIE_2_NAME) {
    return null;
  } else if (safeName === ADONIS_NAME) {
    npc = createAdonisNpcSafe();
  } else if (safeName === NATE_NAME) {
    npc = createNateNpcSafe({
      name: NATE_NAME,
      rarity: RARITY_RARE,
      variantId: NATE_HAIR_VARIANTS[0] ? NATE_HAIR_VARIANTS[0].id : "",
    });
  } else if (safeName === LEDGER_NAME) {
    npc = createLedgerNpcSafe();
  } else if (safeName === OSCAR_NAME) {
    npc = createOscarNpcSafe();
  } else if (safeName === CHRISTIAN_NAME) {
    npc = createChristianNpcSafe();
  } else {
    const rarity = getNpcRarityForName(safeName);
    return rarity ? createNpcForRarity(rarity, options) : null;
  }
  if (npc) {
    applyNpcVariantToStudent(npc, options.variantId || "");
  }
  return npc;
}

function countStreetWalkerNpcs() {
  let count = 0;
  for (let i = 0; i < studentNpcs.length; i += 1) {
    const npc = studentNpcs[i];
    if (npc && npc.avatar && npc.avatar.userData && npc.avatar.userData.isStreetWalker) {
      count += 1;
    }
  }
  return count;
}

function getStreetStreamSpawnZ(initialOffsetZ = 0) {
  const spawnOffsetZ = Math.max(0, Number(initialOffsetZ) || 0);
  const desiredSpawnZ = NPC_STREAM_START_Z - spawnOffsetZ;
  let nearestToStartZ = Number.POSITIVE_INFINITY;

  for (let i = 0; i < studentNpcs.length; i += 1) {
    const npc = studentNpcs[i];
    if (!npc || !npc.avatar || !npc.avatar.userData || !npc.avatar.userData.isStreetWalker) {
      continue;
    }
    nearestToStartZ = Math.min(nearestToStartZ, npc.avatar.position.z);
  }

  if (!Number.isFinite(nearestToStartZ)) {
    return desiredSpawnZ;
  }

  const distanceFromStart = nearestToStartZ - desiredSpawnZ;
  if (distanceFromStart >= NPC_STREAM_MIN_GAP_Z) {
    return desiredSpawnZ;
  }

  return null;
}

function placeNpcOnStreetStream(npc, initialOffsetZ = 0) {
  if (!npc || !npc.avatar || !npc.avatar.userData) {
    return false;
  }
  const spawnZ = getStreetStreamSpawnZ(initialOffsetZ);
  if (!Number.isFinite(spawnZ)) {
    return false;
  }
  npc.direction = 1;
  npc.minZ = NPC_STREAM_START_Z;
  npc.maxZ = NPC_STREAM_END_Z;
  npc.speed = LEO_PATROL_SPEED;
  npc.purchaseState = "forSale";
  npc.assignedBaseIndex = -1;
  npc.assignedPadIndex = -1;
  if (npc.assignedPadWorld && npc.assignedPadWorld.set) {
    npc.assignedPadWorld.set(0, 0, 0);
  }
  if (npc.assignedPadStandWorld && npc.assignedPadStandWorld.set) {
    npc.assignedPadStandWorld.set(0, 0, 0);
  }
  if (npc.assignedPadWalkWorld && npc.assignedPadWalkWorld.set) {
    npc.assignedPadWalkWorld.set(0, 0, 0);
  }
  npc.assignedPadFacingYaw = Math.PI;
  npc.incomeAccumulator = 0;
  npc.incomePayoutCarry = 0;
  npc.pendingMoney = 0;
  npc.avatar.userData.isGuaranteedSpawn = false;
  npc.avatar.position.x = NPC_STREAM_LANE_X + (Math.random() * 2 - 1) * NPC_STREAM_X_JITTER;
  npc.avatar.position.y = STREET_PATH_SURFACE_Y;
  npc.avatar.position.z = spawnZ;
  npc.avatar.userData.isStreetWalker = true;
  npc.avatar.userData.isPurchasedNpc = false;
  npc.avatar.userData.purchaseState = "forSale";
  npc.avatar.userData.npcInfoKey = "";
  return true;
}

function spawnWeightedStreetNpc(initialOffsetZ = 0, forcedRarity = "", options = {}) {
  if (!NPC_STREAM_ENABLED || NPC_SPAWNING_PAUSED) {
    return null;
  }
  const rarity = normalizeNpcRarity(forcedRarity) || rollNpcRarityByWeights();
  const npc = createNpcForRarity(rarity, { variantId: options.variantId || "" });
  if (!placeNpcOnStreetStream(npc, initialOffsetZ)) {
    return null;
  }
  npc.avatar.userData.streamSpawnRarity = rarity;
  npc.avatar.userData.isGuaranteedSpawn = Boolean(options.guaranteed);
  studentNpcs.push(npc);
  scene.add(npc.avatar);
  return npc;
}

function seedInitialStreetNpcs() {
  if (!NPC_STREAM_ENABLED || NPC_SPAWNING_PAUSED) {
    return;
  }
  spawnWeightedStreetNpc(0, RARITY_COMMON);
  npcStreamSpawnTimer = 0;
}

function updateStreetNpcSpawner(dt = 0) {
  if (!NPC_STREAM_ENABLED || NPC_SPAWNING_PAUSED || isMultiplayerStreetAuthorityEnabled()) {
    return;
  }
  if (dt > 0) {
    npcStreamSpawnTimer = Math.max(0, npcStreamSpawnTimer - dt);
  }

  let guard = 0;
  while (countStreetWalkerNpcs() < NPC_STREAM_TARGET_COUNT && npcStreamSpawnTimer <= 0 && guard < 24) {
    const spawned = spawnWeightedStreetNpc(0);
    if (!spawned) {
      npcStreamSpawnTimer = 0.12;
      break;
    }
    npcStreamSpawnTimer = NPC_STREAM_SPAWN_INTERVAL;
    guard += 1;
  }
}

function resetGuaranteedSpawnTimer(timerId) {
  const config = GUARANTEED_SPAWN_TIMER_CONFIG[timerId];
  const timerState = guaranteedSpawnTimers[timerId];
  if (!config || !timerState) {
    return;
  }
  timerState.remainingSeconds = getGuaranteedSpawnTimerDurationSeconds(timerId);
}

function syncGuaranteedSpawnTimersToRewardProfile() {
  for (let i = 0; i < GUARANTEED_SPAWN_TIMER_ORDER.length; i += 1) {
    const timerId = GUARANTEED_SPAWN_TIMER_ORDER[i];
    const nextDuration = getGuaranteedSpawnTimerDurationSeconds(timerId);
    if (!guaranteedSpawnTimers[timerId]) {
      guaranteedSpawnTimers[timerId] = {
        id: timerId,
        remainingSeconds: nextDuration,
      };
      continue;
    }
    guaranteedSpawnTimers[timerId].remainingSeconds = Math.min(
      guaranteedSpawnTimers[timerId].remainingSeconds,
      nextDuration
    );
  }
  updateSpawnTimerDisplay(true);
}

function triggerGuaranteedSpawn(timerId) {
  const config = GUARANTEED_SPAWN_TIMER_CONFIG[timerId];
  if (!config || !NPC_STREAM_ENABLED || NPC_SPAWNING_PAUSED) {
    return false;
  }
  const spawnedNpc = spawnWeightedStreetNpc(config.spawnOffsetZ, config.rarity, {
    guaranteed: true,
  });
  if (!spawnedNpc) {
    return false;
  }

  const tone = config.rarity === RARITY_MYTHIC ? "mythic" : "legendary";
  showSpawnNotification(config.message, tone, SPAWN_NOTIFICATION_DURATION);
  resetGuaranteedSpawnTimer(timerId);
  updateSpawnTimerDisplay(true);
  return true;
}

function updateGuaranteedSpawnTimers(dt = 0) {
  if (isMultiplayerStreetAuthorityEnabled()) {
    updateSpawnTimerDisplay(false);
    return;
  }
  if (NPC_SPAWNING_PAUSED) {
    updateSpawnTimerDisplay(false);
    return;
  }
  const safeDt = Math.max(0, Number(dt) || 0);
  if (safeDt <= 0) {
    updateSpawnTimerDisplay(false);
    return;
  }

  for (let i = 0; i < GUARANTEED_SPAWN_TIMER_ORDER.length; i += 1) {
    const timerId = GUARANTEED_SPAWN_TIMER_ORDER[i];
    const timerState = guaranteedSpawnTimers[timerId];
    const config = GUARANTEED_SPAWN_TIMER_CONFIG[timerId];
    if (!timerState || !config) {
      continue;
    }
    timerState.remainingSeconds = Math.max(0, timerState.remainingSeconds - safeDt);
    if (timerState.remainingSeconds > 0) {
      continue;
    }
    if (!triggerGuaranteedSpawn(timerId)) {
      timerState.remainingSeconds = 0;
    }
  }

  updateSpawnTimerDisplay(false);
}

function createNameTagTexture(label) {
  const safeLabel = sanitizeNameTag(label);
  const width = 512;
  const height = 128;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = width;
  canvasEl.height = height;
  const ctx = canvasEl.getContext("2d");
  if (!ctx) {
    return {
      texture: createSolidTexture("#10244a"),
      aspect: 2,
      label: safeLabel,
    };
  }

  ctx.clearRect(0, 0, width, height);
  ctx.font = "700 56px Sora, sans-serif";
  const textWidth = ctx.measureText(safeLabel).width;
  const bubbleWidth = Math.max(180, Math.min(320, textWidth + 84));
  const bubbleX = (width - bubbleWidth) * 0.5;
  const bubbleY = 16;
  const bubbleHeight = 96;
  const radius = 24;

  ctx.beginPath();
  ctx.moveTo(bubbleX + radius, bubbleY);
  ctx.lineTo(bubbleX + bubbleWidth - radius, bubbleY);
  ctx.quadraticCurveTo(bubbleX + bubbleWidth, bubbleY, bubbleX + bubbleWidth, bubbleY + radius);
  ctx.lineTo(bubbleX + bubbleWidth, bubbleY + bubbleHeight - radius);
  ctx.quadraticCurveTo(bubbleX + bubbleWidth, bubbleY + bubbleHeight, bubbleX + bubbleWidth - radius, bubbleY + bubbleHeight);
  ctx.lineTo(bubbleX + radius, bubbleY + bubbleHeight);
  ctx.quadraticCurveTo(bubbleX, bubbleY + bubbleHeight, bubbleX, bubbleY + bubbleHeight - radius);
  ctx.lineTo(bubbleX, bubbleY + radius);
  ctx.quadraticCurveTo(bubbleX, bubbleY, bubbleX + radius, bubbleY);
  ctx.closePath();
  ctx.fillStyle = "rgba(10, 20, 50, 0.54)";
  ctx.fill();
  ctx.strokeStyle = "rgba(172, 229, 255, 0.88)";
  ctx.lineWidth = 6;
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#f5faff";
  ctx.fillText(safeLabel, width * 0.5, height * 0.54);

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }

  return {
    texture,
    aspect: bubbleWidth / bubbleHeight,
    label: safeLabel,
  };
}

function applyNameTagToAvatar(avatar, nameValue, scaleY = 1.15, positionY = 6.2) {
  if (!avatar || !avatar.userData || !avatar.userData.nameTagSprite || !avatar.userData.nameTagSprite.material) {
    return;
  }
  const sprite = avatar.userData.nameTagSprite;
  const nameTagData = createNameTagTexture(nameValue);
  if (sprite.material.map) {
    sprite.material.map.dispose();
  }
  sprite.material.map = nameTagData.texture;
  sprite.material.needsUpdate = true;
  sprite.scale.set(scaleY * nameTagData.aspect, scaleY, 1);
  sprite.position.set(0, positionY, 0);
  sprite.visible = true;
  avatar.userData.nameTag = nameTagData.label;
}

function createPadMoneyTagTexture(amount = 0) {
  const safeAmount = clampInt(amount, 0, MAX_CURRENCY_VALUE, 0);
  const safeLabel = `${safeAmount.toLocaleString("en-US")}$ money`;
  const width = 512;
  const height = 132;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = width;
  canvasEl.height = height;
  const ctx = canvasEl.getContext("2d");
  if (!ctx) {
    return {
      texture: createSolidTexture("#0f2c19"),
      aspect: 2.6,
      label: safeLabel,
    };
  }

  ctx.clearRect(0, 0, width, height);
  ctx.font = "700 50px Sora, sans-serif";
  const textWidth = ctx.measureText(safeLabel).width;
  const bubbleWidth = Math.max(220, Math.min(420, textWidth + 86));
  const bubbleX = (width - bubbleWidth) * 0.5;
  const bubbleY = 14;
  const bubbleHeight = 104;
  const radius = 24;

  ctx.beginPath();
  ctx.moveTo(bubbleX + radius, bubbleY);
  ctx.lineTo(bubbleX + bubbleWidth - radius, bubbleY);
  ctx.quadraticCurveTo(bubbleX + bubbleWidth, bubbleY, bubbleX + bubbleWidth, bubbleY + radius);
  ctx.lineTo(bubbleX + bubbleWidth, bubbleY + bubbleHeight - radius);
  ctx.quadraticCurveTo(
    bubbleX + bubbleWidth,
    bubbleY + bubbleHeight,
    bubbleX + bubbleWidth - radius,
    bubbleY + bubbleHeight
  );
  ctx.lineTo(bubbleX + radius, bubbleY + bubbleHeight);
  ctx.quadraticCurveTo(bubbleX, bubbleY + bubbleHeight, bubbleX, bubbleY + bubbleHeight - radius);
  ctx.lineTo(bubbleX, bubbleY + radius);
  ctx.quadraticCurveTo(bubbleX, bubbleY, bubbleX + radius, bubbleY);
  ctx.closePath();
  ctx.fillStyle = "rgba(9, 37, 15, 0.78)";
  ctx.fill();
  ctx.strokeStyle = "rgba(128, 255, 173, 0.95)";
  ctx.lineWidth = 6;
  ctx.stroke();

  ctx.fillStyle = "#d6ffd8";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "700 48px Sora, sans-serif";
  ctx.fillText(safeLabel, width * 0.5, height * 0.55);

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }

  return {
    texture,
    aspect: bubbleWidth / bubbleHeight,
    label: safeLabel,
  };
}

function getNpcRarityTextColor(rarity) {
  const safeRarity = normalizeNpcRarity(rarity) || RARITY_COMMON;
  if (safeRarity === RARITY_COMMON) {
    return "#8b5a2b";
  }
  if (safeRarity === RARITY_UNCOMMON) {
    return "#43d65c";
  }
  if (safeRarity === RARITY_RARE) {
    return "#4aa8ff";
  }
  if (safeRarity === RARITY_EPIC) {
    return "#b45cff";
  }
  if (safeRarity === RARITY_LEGENDARY) {
    return "#ffd84f";
  }
  if (safeRarity === RARITY_MYTHIC) {
    return "#ff4d4d";
  }
  if (safeRarity === RARITY_SECRET) {
    return "#b8bcc4";
  }
  return "#d8f4ff";
}

function createNpcInfoTagTexture(name, rarity, cost, incomePerSecond = 0, variantLabel = "") {
  const safeName = typeof name === "string" && name.trim() ? name.trim() : LEO_NAME;
  const safeRarity = normalizeNpcRarity(rarity) || RARITY_COMMON;
  const safeCost = clampInt(cost, 0, MAX_CURRENCY_VALUE, 0);
  const safeIncome = clampInt(incomePerSecond, 0, MAX_CURRENCY_VALUE, 0);
  const safeVariantLabel =
    typeof variantLabel === "string" && variantLabel.trim() && variantLabel.trim().toLowerCase() !== VARIANT_NORMAL
      ? variantLabel.trim()
      : "";
  const incomeLine = `$${safeIncome.toLocaleString("en-US")}/sec`;
  const costLine = `$${safeCost.toLocaleString("en-US")}`;
  const width = 512;
  const height = safeVariantLabel ? 286 : 236;
  const canvasEl = document.createElement("canvas");
  canvasEl.width = width;
  canvasEl.height = height;
  const ctx = canvasEl.getContext("2d");
  if (!ctx) {
    return {
      texture: createSolidTexture("#10244a"),
      aspect: 2.5,
      label: safeName,
    };
  }

  ctx.clearRect(0, 0, width, height);
  const bubbleX = 62;
  const bubbleY = 12;
  const bubbleWidth = width - bubbleX * 2;
  const bubbleHeight = height - bubbleY * 2;
  const radius = 28;

  ctx.beginPath();
  ctx.moveTo(bubbleX + radius, bubbleY);
  ctx.lineTo(bubbleX + bubbleWidth - radius, bubbleY);
  ctx.quadraticCurveTo(bubbleX + bubbleWidth, bubbleY, bubbleX + bubbleWidth, bubbleY + radius);
  ctx.lineTo(bubbleX + bubbleWidth, bubbleY + bubbleHeight - radius);
  ctx.quadraticCurveTo(bubbleX + bubbleWidth, bubbleY + bubbleHeight, bubbleX + bubbleWidth - radius, bubbleY + bubbleHeight);
  ctx.lineTo(bubbleX + radius, bubbleY + bubbleHeight);
  ctx.quadraticCurveTo(bubbleX, bubbleY + bubbleHeight, bubbleX, bubbleY + bubbleHeight - radius);
  ctx.lineTo(bubbleX, bubbleY + radius);
  ctx.quadraticCurveTo(bubbleX, bubbleY, bubbleX + radius, bubbleY);
  ctx.closePath();
  ctx.fillStyle = "rgba(6, 14, 36, 0.7)";
  ctx.fill();
  ctx.strokeStyle = "rgba(167, 230, 255, 0.92)";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#d8f4ff";
  let nameY = bubbleY + bubbleHeight * 0.84;
  let rarityY = bubbleY + bubbleHeight * 0.66;
  let costY = bubbleY + bubbleHeight * 0.44;
  let incomeY = bubbleY + bubbleHeight * 0.22;

  if (safeVariantLabel) {
    ctx.font = "800 34px Sora, sans-serif";
    ctx.fillStyle = "#f7f2ff";
    ctx.fillText(safeVariantLabel, width * 0.5, bubbleY + bubbleHeight * 0.16);
    incomeY = bubbleY + bubbleHeight * 0.34;
    costY = bubbleY + bubbleHeight * 0.52;
    rarityY = bubbleY + bubbleHeight * 0.7;
    nameY = bubbleY + bubbleHeight * 0.87;
  }

  ctx.fillStyle = "#d8f4ff";
  ctx.font = "700 38px Sora, sans-serif";
  ctx.fillText(incomeLine, width * 0.5, incomeY);

  ctx.fillStyle = "#f9fbff";
  ctx.font = "700 40px Sora, sans-serif";
  ctx.fillText(costLine, width * 0.5, costY);

  ctx.font = "700 35px Sora, sans-serif";
  ctx.fillStyle = getNpcRarityTextColor(safeRarity);
  ctx.fillText(safeRarity, width * 0.5, rarityY);

  ctx.font = "700 42px Sora, sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(safeName, width * 0.5, nameY);

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }

  return {
    texture,
    aspect: bubbleWidth / bubbleHeight,
    label: safeName,
  };
}

function updateNpcInfoTag(student) {
  if (!student || !student.avatar || !student.avatar.userData) {
    return;
  }
  const sprite = student.avatar.userData.nameTagSprite;
  if (!sprite || !sprite.material) {
    return;
  }

  const baseName = String(student.avatar.userData.npcBaseName || student.avatar.userData.npcDisplayName || LEO_NAME);
  const rarity = normalizeNpcRarity(student.avatar.userData.npcRarity) || RARITY_COMMON;
  const cost = clampInt(student.avatar.userData.npcCost, 0, MAX_CURRENCY_VALUE, 0);
  const income = clampInt(student.avatar.userData.npcIncomePerSecond, 0, MAX_CURRENCY_VALUE, 0);
  const variantLabel =
    normalizeNpcVariantId(student.avatar.userData.npcVariantId) !== VARIANT_NORMAL
      ? String(student.avatar.userData.npcVariantName || "").trim()
      : "";
  const infoKey = `${baseName}|${rarity}|${cost}|${income}|${variantLabel}`;
  if (student.avatar.userData.npcInfoKey === infoKey) {
    return;
  }

  try {
    const infoData = createNpcInfoTagTexture(baseName, rarity, cost, income, variantLabel);
    if (sprite.material.map) {
      sprite.material.map.dispose();
    }
    sprite.material.map = infoData.texture;
    sprite.material.needsUpdate = true;
    sprite.scale.set(NPC_INFO_TAG_SCALE * infoData.aspect, NPC_INFO_TAG_SCALE, 1);
    sprite.position.set(0, NPC_INFO_TAG_Y, 0);
    student.avatar.userData.npcInfoKey = infoKey;
  } catch (error) {
    console.error("NPC info tag update failed", error);
  }
}

function createHairMesh(hairStyle, hairColor) {
  if (hairStyle === "none") {
    return null;
  }

  const hairMaterial = new THREE.MeshStandardMaterial({
    color: hairColor,
    roughness: 0.67,
    metalness: 0.02,
    map: getHairDetailTexture(),
    bumpMap: getHairDetailTexture(),
    bumpScale: 0.015,
  });
  hairMaterial.side = THREE.DoubleSide;

  const hairGroup = new THREE.Group();
  function addPart(geometry, x, y, z, rx = 0, ry = 0, rz = 0) {
    const part = new THREE.Mesh(geometry, hairMaterial);
    part.position.set(x, y, z);
    part.rotation.set(rx, ry, rz);
    part.castShadow = true;
    part.receiveShadow = false;
    hairGroup.add(part);
    return part;
  }

  if (hairStyle === "curly") {
    addPart(new THREE.SphereGeometry(0.86, 30, 24, 0, Math.PI * 2, 0, Math.PI * 0.62), 0, 0.34, -0.04);
    addPart(new THREE.BoxGeometry(1.36, 0.68, 0.56), 0, -0.02, -0.3);
    addPart(new THREE.BoxGeometry(0.28, 0.52, 0.4), -0.62, -0.08, 0.02);
    addPart(new THREE.BoxGeometry(0.28, 0.52, 0.4), 0.62, -0.08, 0.02);

    const curlGeo = new THREE.TorusGeometry(0.12, 0.043, 10, 16, Math.PI * 1.45);
    const curls = [
      [-0.34, 0.27, 0.42, 0.62, 0.08, 0.18],
      [-0.18, 0.24, 0.45, 0.58, -0.2, -0.12],
      [0.01, 0.23, 0.46, 0.52, 0.12, 0.06],
      [0.18, 0.25, 0.44, 0.64, 0.24, -0.04],
      [0.34, 0.28, 0.41, 0.6, -0.08, 0.14],
      [-0.46, 0.26, 0.35, 0.54, 0.42, 0.36],
      [0.46, 0.26, 0.35, 0.54, -0.42, -0.36],
      [-0.1, 0.43, 0.28, 0.36, 0.22, 0.28],
      [0.16, 0.45, 0.25, 0.34, -0.2, -0.22],
    ];
    for (const c of curls) {
      addPart(curlGeo, c[0], c[1], c[2], c[3], c[4], c[5]);
    }

    hairGroup.scale.set(1.06, 1.08, 1.04);
  } else if (hairStyle === "swoop") {
    addPart(new THREE.SphereGeometry(0.84, 30, 24, 0, Math.PI * 2, 0, Math.PI * 0.56), 0, 0.27, -0.02);
    addPart(new THREE.BoxGeometry(1.36, 0.74, 0.54), 0, -0.03, -0.35);
    addPart(new THREE.BoxGeometry(0.26, 0.52, 0.38), -0.62, -0.08, 0.02);
    addPart(new THREE.BoxGeometry(0.26, 0.52, 0.38), 0.62, -0.08, 0.02);
    addPart(new THREE.BoxGeometry(1.18, 0.24, 0.2), 0, 0.04, 0.5, -0.06, 0, 0);
    addPart(new THREE.BoxGeometry(0.86, 0.24, 0.24), 0.24, 0.4, 0.34, -0.1, 0.52, -0.08);
    addPart(new THREE.BoxGeometry(0.42, 0.14, 0.2), 0.37, 0.25, 0.5, -0.09, 0.4, -0.04);
    addPart(new THREE.BoxGeometry(0.28, 0.11, 0.16), 0.08, 0.31, 0.44, -0.09, 0.15, -0.02);
    hairGroup.scale.set(1.06, 1.06, 1.06);
  } else if (hairStyle === "mohawk") {
    addPart(new THREE.BoxGeometry(0.48, 0.86, 1.12), 0, 0.38, -0.05);
    addPart(new THREE.CylinderGeometry(0.24, 0.24, 0.28, 18), 0, 0.82, 0.36, Math.PI * 0.5, 0, 0);
    addPart(new THREE.CylinderGeometry(0.24, 0.24, 0.28, 18), 0, 0.82, -0.02, Math.PI * 0.5, 0, 0);
    addPart(new THREE.CylinderGeometry(0.24, 0.24, 0.28, 18), 0, 0.82, -0.4, Math.PI * 0.5, 0, 0);
    addPart(new THREE.BoxGeometry(0.26, 0.26, 0.2), 0, 0.73, 0.51, -0.2, 0, 0);
    addPart(new THREE.BoxGeometry(0.26, 0.26, 0.2), 0, 0.73, -0.53, 0.2, 0, 0);
    hairGroup.scale.set(1.05, 1.05, 1.04);
  } else if (hairStyle === "spikes") {
    addPart(new THREE.SphereGeometry(0.71, 26, 22, 0, Math.PI * 2, 0, Math.PI * 0.44), 0, 0.16, -0.01);
    addPart(new THREE.BoxGeometry(1.08, 0.36, 0.28), 0, -0.05, -0.04);
    const spikeGeometry = new THREE.ConeGeometry(0.16, 0.58, 10);
    const spikeSetup = [
      [0, 0.74, 0.02, -0.03, 0, 0],
      [-0.24, 0.67, 0.02, -0.22, -0.44, 0],
      [0.24, 0.67, 0.02, -0.22, 0.44, 0],
      [-0.12, 0.65, 0.2, -0.34, -0.2, 0],
      [0.12, 0.65, 0.2, -0.34, 0.2, 0],
      [-0.31, 0.57, 0.06, -0.26, -0.74, 0],
      [0.31, 0.57, 0.06, -0.26, 0.74, 0],
      [0, 0.61, 0.28, -0.44, 0, 0],
    ];
    for (const s of spikeSetup) {
      addPart(spikeGeometry, s[0], s[1], s[2], s[3], s[4], s[5]);
    }
  } else {
    addPart(new THREE.SphereGeometry(0.74, 30, 24, 0, Math.PI * 2, 0, Math.PI * 0.3), 0, 0.28, 0);
    addPart(new THREE.CylinderGeometry(0.74, 0.74, 0.09, 30, 1, true), 0, 0.19, 0);
    addPart(new THREE.BoxGeometry(1.06, 0.08, 0.12), 0, 0.22, 0.51, -0.02, 0, 0);
    addPart(new THREE.BoxGeometry(0.18, 0.08, 0.12), -0.44, 0.2, 0.49, -0.02, 0, 0);
    addPart(new THREE.BoxGeometry(0.18, 0.08, 0.12), 0.44, 0.2, 0.49, -0.02, 0, 0);
    hairGroup.scale.set(1.02, 1.02, 1.02);
  }

  return hairGroup;
}

function disposeMeshResources(root) {
  root.traverse((node) => {
    if (!node.isMesh) {
      return;
    }

    if (node.geometry) {
      node.geometry.dispose();
    }
    if (node.material) {
      if (Array.isArray(node.material)) {
        node.material.forEach((material) => material.dispose());
      } else {
        node.material.dispose();
      }
    }
  });
}

function createBlockyAvatar() {
  const avatar = new THREE.Group();
  const skinMaterial = new THREE.MeshStandardMaterial({ color: DEFAULT_SKIN_TONE, roughness: 0.78 });
  const shirtMaterial = new THREE.MeshStandardMaterial({ color: DEFAULT_SHIRT_COLOR, roughness: 0.72 });
  const pantMaterial = new THREE.MeshStandardMaterial({ color: DEFAULT_PANTS_COLOR, roughness: 0.75 });

  const torso = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 1.2), shirtMaterial);
  torso.position.y = TORSO_BASE_Y;

  const headMaterial = skinMaterial.clone();
  headMaterial.side = THREE.DoubleSide;
  headMaterial.transparent = false;
  headMaterial.opacity = 1;
  const head = new THREE.Mesh(createRoundedHeadGeometry(0.72, 1.3, 0.22, 30, 8), headMaterial);
  head.position.y = HEAD_BASE_Y;
  const faceMaterial = new THREE.MeshBasicMaterial({
    map: createFaceTexture(DEFAULT_FACE),
    transparent: true,
    side: THREE.DoubleSide,
  });
  const faceMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.92, 0.92), faceMaterial);
  faceMesh.position.set(0, 0, 0.76);
  head.add(faceMesh);

  const hairAnchor = new THREE.Group();
  head.add(hairAnchor);
  let initialHairMesh = null;
  try {
    initialHairMesh = createHairMesh(DEFAULT_HAIR_STYLE, DEFAULT_HAIR_COLOR);
  } catch (error) {
    console.error("Hair build failed", error);
  }
  if (initialHairMesh) {
    hairAnchor.add(initialHairMesh);
  }

  let nameTagSprite = null;
  try {
    const nameTagData = createNameTagTexture(DEFAULT_NAMETAG);
    const nameTagMaterial = new THREE.SpriteMaterial({
      map: nameTagData.texture,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      toneMapped: false,
    });
    nameTagSprite = new THREE.Sprite(nameTagMaterial);
    nameTagSprite.scale.set(1.15 * nameTagData.aspect, 1.15, 1);
    nameTagSprite.position.set(0, 6.2, 0);
    nameTagSprite.renderOrder = 6;
    avatar.add(nameTagSprite);
  } catch (error) {
    console.error("Nametag build failed", error);
  }

  const leftArm = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), skinMaterial);
  leftArm.position.set(-1.5, TORSO_BASE_Y, 0);

  const rightArm = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), skinMaterial);
  rightArm.position.set(1.5, TORSO_BASE_Y, 0);

  const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), pantMaterial);
  leftLeg.position.set(-0.5, 1, 0);

  const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), pantMaterial);
  rightLeg.position.set(0.5, 1, 0);

  [torso, head, leftArm, rightArm, leftLeg, rightLeg].forEach((mesh) => {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    avatar.add(mesh);
  });
  head.castShadow = false;
  head.receiveShadow = false;

  avatar.userData.leftArm = leftArm;
  avatar.userData.rightArm = rightArm;
  avatar.userData.leftLeg = leftLeg;
  avatar.userData.rightLeg = rightLeg;
  avatar.userData.torso = torso;
  avatar.userData.head = head;
  avatar.userData.skinMaterials = [skinMaterial];
  avatar.userData.headMaterial = headMaterial;
  avatar.userData.faceMesh = faceMesh;
  avatar.userData.skinTone = DEFAULT_SKIN_TONE;
  avatar.userData.shirtMaterial = shirtMaterial;
  avatar.userData.pantMaterial = pantMaterial;
  avatar.userData.faceMaterial = faceMaterial;
  avatar.userData.faceStyle = DEFAULT_FACE;
  avatar.userData.hairAnchor = hairAnchor;
  avatar.userData.hairMesh = initialHairMesh;
  avatar.userData.hairStyle = DEFAULT_HAIR_STYLE;
  avatar.userData.hairColor = DEFAULT_HAIR_COLOR;
  avatar.userData.nameTagSprite = nameTagSprite;
  avatar.userData.nameTag = DEFAULT_NAMETAG;
  return avatar;
}

function createLeoStudentNpc(options = {}) {
  const avatar = createBlockyAvatar();
  const variant = options.variant || "detailedPortrait";
  const useLeoHair = options.useLeoHair !== false;
  const laneX = Number.isFinite(options.laneX) ? options.laneX : 0;
  const startZ = Number.isFinite(options.startZ) ? options.startZ : -176;
  const patrolMinZ = Number.isFinite(options.minZ) ? options.minZ : -186;
  const patrolMaxZ = Number.isFinite(options.maxZ) ? options.maxZ : 186;
  const direction = options.direction === -1 ? -1 : 1;
  const npcBaseName = typeof options.name === "string" && options.name.trim() ? options.name.trim() : LEO_NAME;
  const npcRarity = normalizeNpcRarity(options.rarity || getNpcRarityForName(npcBaseName));
  const npcEconomy = getBaseEconomyForNpcName(npcBaseName, npcRarity);
  const npcName = createNpcDisplayName(npcBaseName, npcRarity);

  avatar.position.set(laneX, STREET_PATH_SURFACE_Y, startZ);
  avatar.scale.setScalar(LEO_SCALE);

  const skinMaterials = avatar.userData.skinMaterials || [];
  skinMaterials.forEach((material) => material.color.set(LEO_SKIN_TONE));
  avatar.userData.skinTone = LEO_SKIN_TONE;
  if (avatar.userData.headMaterial) {
    if (avatar.userData.headMaterial.map) {
      avatar.userData.headMaterial.map.dispose();
      avatar.userData.headMaterial.map = null;
    }
    avatar.userData.headMaterial.color.set(LEO_SKIN_TONE);
    avatar.userData.headMaterial.needsUpdate = true;
  }

  if (avatar.userData.shirtMaterial) {
    avatar.userData.shirtMaterial.color.set(LEO_SHIRT_COLOR);
  }
  avatar.userData.shirtColor = LEO_SHIRT_COLOR;
  if (avatar.userData.pantMaterial) {
    avatar.userData.pantMaterial.color.set(LEO_PANTS_COLOR);
  }
  avatar.userData.pantsColor = LEO_PANTS_COLOR;

  if (avatar.userData.hairMesh && avatar.userData.hairAnchor) {
    avatar.userData.hairAnchor.remove(avatar.userData.hairMesh);
    disposeMeshResources(avatar.userData.hairMesh);
  }
  avatar.userData.hairMesh = null;
  avatar.userData.hairStyle = useLeoHair ? "leo3d" : "none";
  avatar.userData.hairColor = LEO_HAIR_COLOR;
  if (avatar.userData.hairAnchor) {
    try {
      if (useLeoHair) {
        attachLeoHair(avatar, {
          baseColor: LEO_HAIR_COLOR,
          highlightColor: LEO_HAIR_HIGHLIGHT,
          yOffset: 0,
        });
      }
    } catch (error) {
      console.error("Leo hair build failed", error);
    }
  }

  if (avatar.userData.faceMaterial) {
    if (avatar.userData.faceMaterial.map) {
      avatar.userData.faceMaterial.map.dispose();
    }
    if (variant === "pixelPortrait") {
      avatar.userData.faceMaterial.map = createLeoPixelPortraitTexture();
      avatar.userData.faceStyle = "leo_photo_pixel";
    } else if (variant === "nonPhotoDetailed") {
      avatar.userData.faceMaterial.map = createLeo2DFaceTexture(
        FACE_OPTIONS.includes(leoFaceExpression) ? leoFaceExpression : DEFAULT_LEO_FACE,
        clampInt(leoSmilePercent, 1, 100, DEFAULT_LEO_SMILE)
      );
      avatar.userData.faceStyle = "leo_2d_face";
    } else {
      avatar.userData.faceMaterial.map = createLeoPortraitTexture();
      avatar.userData.faceStyle = "leo_photo_detailed";
    }
    avatar.userData.faceMaterial.transparent = true;
    avatar.userData.faceMaterial.needsUpdate = true;
  }

  if (avatar.userData.faceMesh) {
    if (variant === "nonPhotoDetailed") {
      if (avatar.userData.faceMesh.geometry) {
        avatar.userData.faceMesh.geometry.dispose();
      }
      avatar.userData.faceMesh.geometry = new THREE.CircleGeometry(0.49, 44);
      avatar.userData.faceMesh.position.set(0, 0, 0.761);
      avatar.userData.faceMesh.visible = true;
    } else {
      if (avatar.userData.faceMesh.geometry) {
        avatar.userData.faceMesh.geometry.dispose();
      }
      avatar.userData.faceMesh.geometry = new THREE.CircleGeometry(0.48, 36);
      avatar.userData.faceMesh.position.set(0, 0, 0.76);
      avatar.userData.faceMesh.visible = true;
    }
  }

  if (avatar.userData.nameTagSprite && avatar.userData.nameTagSprite.material) {
    try {
      const nameTagData = createNpcInfoTagTexture(npcBaseName, npcRarity, npcEconomy.cost, npcEconomy.moneyPerSecond, "");
      if (avatar.userData.nameTagSprite.material.map) {
        avatar.userData.nameTagSprite.material.map.dispose();
      }
      avatar.userData.nameTagSprite.material.map = nameTagData.texture;
      avatar.userData.nameTagSprite.material.needsUpdate = true;
      avatar.userData.nameTagSprite.scale.set(NPC_INFO_TAG_SCALE * nameTagData.aspect, NPC_INFO_TAG_SCALE, 1);
      avatar.userData.nameTagSprite.position.set(0, NPC_INFO_TAG_Y, 0);
      avatar.userData.nameTag = nameTagData.label;
    } catch (error) {
      console.error("Leo nametag build failed", error);
    }
  }
  avatar.userData.npcBaseName = npcBaseName;
  avatar.userData.npcRarity = npcRarity;
  avatar.userData.npcBaseCost = npcEconomy.cost;
  avatar.userData.npcBaseIncomePerSecond = npcEconomy.moneyPerSecond;
  avatar.userData.npcVariantId = VARIANT_NORMAL;
  avatar.userData.npcVariantName = getNpcVariantDefinition(VARIANT_NORMAL).label;
  avatar.userData.npcCost = npcEconomy.cost;
  avatar.userData.npcIncomePerSecond = npcEconomy.moneyPerSecond;
  avatar.userData.npcDisplayName = npcName;
  avatar.userData.isPurchasedNpc = false;
  avatar.userData.purchaseState = "forSale";
  avatar.userData.npcInfoKey = "";

  if (variant === "nonPhotoDetailed") {
    avatar.userData.isLeo3D = true;
    avatar.userData.leoFaceExpression = FACE_OPTIONS.includes(leoFaceExpression) ? leoFaceExpression : DEFAULT_LEO_FACE;
    avatar.userData.leoSmilePercent = clampInt(leoSmilePercent, 1, 100, DEFAULT_LEO_SMILE);
    addLeoSuitAndTie(avatar);
    applyLeo2DFaceToAvatar(avatar);
    if (useLeoHair) {
      // Re-attach after head feature build so Leo 3D always keeps visible hair.
      try {
        attachLeoHair(avatar, {
          baseColor: LEO_HAIR_COLOR,
          highlightColor: LEO_HAIR_HIGHLIGHT,
          yOffset: 0,
        });
      } catch (error) {
        console.error("Leo 3D hair attach failed", error);
      }
    }
  }

  applyObjectVibrancy(avatar);

  return {
    id: npcRuntimeIdCounter++,
    avatar,
    direction,
    minZ: patrolMinZ,
    maxZ: patrolMaxZ,
    speed: LEO_PATROL_SPEED,
    walkCycle: Math.random() * Math.PI * 2,
    idleCycle: 0,
    purchaseState: "forSale",
    assignedBaseIndex: -1,
    assignedPadIndex: -1,
    assignedPadWorld: new THREE.Vector3(),
    assignedPadStandWorld: new THREE.Vector3(),
    assignedPadWalkWorld: new THREE.Vector3(),
    assignedPadFacingYaw: Math.PI,
    incomeAccumulator: 0,
    incomePayoutCarry: 0,
    pendingMoney: 0,
  };
}

function createLeo3DNpcSafe() {
  const leoConfig = {
    variant: "nonPhotoDetailed",
    name: LEO_NAME,
    rarity: RARITY_COMMON,
    laneX: LEO_DEFAULT_LANE_X,
    startZ: LEO_DEFAULT_START_Z,
    minZ: LEO_DEFAULT_MIN_Z,
    maxZ: LEO_DEFAULT_MAX_Z,
    direction: 1,
    useLeoHair: true,
  };

  try {
    return createLeoStudentNpc(leoConfig);
  } catch (error) {
    console.error("Leo NPC bootstrap failed (primary build)", error);
  }

  try {
    return createLeoStudentNpc(leoConfig);
  } catch (fallbackError) {
    console.error("Leo NPC bootstrap failed (fallback build)", fallbackError);
  }

  return null;
}

function createEshdogMarleyNpcSafe() {
  return createPreviewClassmateNpcSafe({
    name: ESHDOG_MARLEY_NAME,
    rarity: RARITY_SECRET,
    laneX: LEO_DEFAULT_LANE_X,
    startZ: LEO_DEFAULT_START_Z,
    skinTone: ESHDOG_MARLEY_SKIN_TONE,
    applyHair(avatar) {
      attachEshdogMarleyHair(avatar, {
        baseColor: ESHDOG_MARLEY_HAIR_COLOR,
        highlightColor: ESHDOG_MARLEY_HAIR_HIGHLIGHT,
        yOffset: 0,
      });
    },
    applyLook(avatar) {
      applyEshdogMarleyOutfit(avatar);
      applyEshdogMarleyShorts(avatar);
    },
    flagKey: "isEshdogMarleyNpc",
  });
}

function createPausedBaldLeoNpcSafe() {
  return createPreviewClassmateNpcSafe({
    name: FLETCHER_NAME,
    rarity: RARITY_SECRET,
    laneX: LEO_DEFAULT_LANE_X,
    startZ: LEO_DEFAULT_START_Z,
    skinTone: PAUSED_BALD_LEO_SKIN_TONE,
    applyHair(avatar) {
      attachLedgerHair(avatar, {
        baseColor: FLETCHER_HAIR_COLOR,
        highlightColor: FLETCHER_HAIR_HIGHLIGHT,
        yOffset: 0,
      });

      const hairMesh = avatar && avatar.userData ? avatar.userData.hairMesh : null;
      if (hairMesh && hairMesh.scale) {
        hairMesh.scale.set(hairMesh.scale.x * 1.01, hairMesh.scale.y * 1.02, hairMesh.scale.z * 1.02);
      }
      if (hairMesh) {
        hairMesh.traverse((node) => {
          if (!node || !node.isMesh || !node.position) {
            return;
          }
          if (Math.abs(node.position.x) > 0.34) {
            node.position.x *= 0.8;
            if (node.scale) {
              node.scale.x *= 0.88;
            }
          }
        });

        let mulletMaterial = null;
        hairMesh.traverse((node) => {
          if (!mulletMaterial && node && node.isMesh && node.material) {
            mulletMaterial = node.material;
          }
        });

        if (mulletMaterial) {
          const backMain = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.42, 4, 8), mulletMaterial);
          backMain.position.set(0, -0.1, -0.34);
          backMain.rotation.x = 0.05;
          backMain.scale.set(1.0, 1.24, 0.82);
          backMain.castShadow = true;
          backMain.receiveShadow = false;
          hairMesh.add(backMain);

          const backLeft = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.24, 4, 8), mulletMaterial);
          backLeft.position.set(-0.18, -0.06, -0.29);
          backLeft.rotation.x = 0.08;
          backLeft.rotation.z = -0.08;
          backLeft.scale.set(0.92, 1.12, 0.82);
          backLeft.castShadow = true;
          backLeft.receiveShadow = false;
          hairMesh.add(backLeft);

          const backRight = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.24, 4, 8), mulletMaterial);
          backRight.position.set(0.18, -0.06, -0.29);
          backRight.rotation.x = 0.08;
          backRight.rotation.z = 0.08;
          backRight.scale.set(0.92, 1.12, 0.82);
          backRight.castShadow = true;
          backRight.receiveShadow = false;
          hairMesh.add(backRight);
        }
      }
    },
    applyLook(avatar) {
      applyFletcherSkinSpots(avatar);
    },
    flagKey: "isPausedBaldLeoNpc",
  });
}

function createFletcherNpcSafe() {
  return createPausedBaldLeoNpcSafe();
}

function applyNpcSkinTone(avatar, skinTone) {
  if (!avatar || !avatar.userData) {
    return;
  }
  const skinMaterials = avatar.userData.skinMaterials || [];
  skinMaterials.forEach((material) => material.color.set(skinTone));
  avatar.userData.skinTone = skinTone;
  if (avatar.userData.headMaterial) {
    if (avatar.userData.headMaterial.map) {
      avatar.userData.headMaterial.map.dispose();
      avatar.userData.headMaterial.map = null;
    }
    avatar.userData.headMaterial.color.set(skinTone);
    avatar.userData.headMaterial.needsUpdate = true;
  }
}

function resetNpcIdentityFlags(avatar) {
  if (!avatar || !avatar.userData) {
    return;
  }
  avatar.userData.isLeo3D = false;
  avatar.userData.isAdonisNpc = false;
  avatar.userData.isNateNpc = false;
  avatar.userData.isLedgerNpc = false;
  avatar.userData.isLedger2Npc = false;
  avatar.userData.isOscarNpc = false;
  avatar.userData.isChristianNpc = false;
  avatar.userData.isBeauNpc = false;
  avatar.userData.isAdonis2Npc = false;
  avatar.userData.isEshdogMarleyNpc = false;
  avatar.userData.isZiggyNpc = false;
  avatar.userData.isVinceNpc = false;
  avatar.userData.isVince2Npc = false;
  avatar.userData.isHendrixNpc = false;
  avatar.userData.isCharlieNpc = false;
  avatar.userData.isCharlie2Npc = false;
}

function createPreviewClassmateNpcSafe(options = {}) {
  const npcConfig = {
    variant: "nonPhotoDetailed",
    name: typeof options.name === "string" && options.name.trim() ? options.name.trim() : LEO_NAME,
    rarity: normalizeNpcRarity(options.rarity) || getNpcRarityForName(options.name) || RARITY_COMMON,
    laneX: Number.isFinite(options.laneX) ? options.laneX : 0,
    startZ: Number.isFinite(options.startZ) ? options.startZ : -128,
    minZ: LEO_DEFAULT_MIN_Z,
    maxZ: LEO_DEFAULT_MAX_Z,
    direction: 1,
    useLeoHair: false,
  };

  function applyPreviewLook(npc) {
    if (!npc || !npc.avatar || !npc.avatar.userData) {
      return npc;
    }
    const avatar = npc.avatar;
    resetNpcIdentityFlags(avatar);
    applyNpcSkinTone(avatar, options.skinTone || LEO_SKIN_TONE);
    avatar.scale.setScalar(LEO_SCALE * (Number.isFinite(options.scaleMultiplier) ? options.scaleMultiplier : 1));
    if (typeof options.applyHair === "function") {
      options.applyHair(avatar);
    }
    if (typeof options.applyLook === "function") {
      options.applyLook(avatar, npc);
    }
    if (typeof options.flagKey === "string" && options.flagKey) {
      avatar.userData[options.flagKey] = true;
    }
    return npc;
  }

  try {
    return applyPreviewLook(createLeoStudentNpc(npcConfig));
  } catch (error) {
    console.error(`${npcConfig.name} NPC bootstrap failed (primary build)`, error);
  }

  try {
    return applyPreviewLook(createLeoStudentNpc(npcConfig));
  } catch (fallbackError) {
    console.error(`${npcConfig.name} NPC bootstrap failed (fallback build)`, fallbackError);
  }

  return null;
}

function createZiggyNpcSafe() {
  return createPreviewClassmateNpcSafe({
    name: ZIGGY_NAME,
    rarity: RARITY_UNCOMMON,
    laneX: ZIGGY_LANE_X,
    startZ: ZIGGY_START_Z,
    skinTone: ZIGGY_SKIN_TONE,
    applyHair(avatar) {
      attachZiggyHair(avatar, {
        baseColor: ZIGGY_HAIR_COLOR,
        highlightColor: ZIGGY_HAIR_HIGHLIGHT,
        yOffset: 0,
      });
    },
    flagKey: "isZiggyNpc",
  });
}

function createVinceNpcSafe() {
  return createPreviewClassmateNpcSafe({
    name: VINCE_NAME,
    rarity: RARITY_MYTHIC,
    laneX: VINCE_LANE_X,
    startZ: VINCE_START_Z,
    skinTone: VINCE_FUR_COLOR,
    scaleMultiplier: VINCE_SCALE_MULTIPLIER,
    applyLook(avatar) {
      applyVinceMonkeyLook(avatar);
    },
    flagKey: "isVinceNpc",
  });
}

function createVince2NpcSafe() {
  return createPreviewClassmateNpcSafe({
    name: VINCE_2_NAME,
    rarity: RARITY_EPIC,
    laneX: VINCE_2_LANE_X,
    startZ: VINCE_2_START_Z,
    skinTone: VINCE_2_FUR_COLOR,
    scaleMultiplier: VINCE_2_SCALE_MULTIPLIER,
    applyLook(avatar) {
      applyVince2MonkeyLook(avatar);
    },
    flagKey: "isVince2Npc",
  });
}

function createHendrixNpcSafe() {
  return createPreviewClassmateNpcSafe({
    name: HENDRIX_NAME,
    rarity: RARITY_RARE,
    laneX: HENDRIX_LANE_X,
    startZ: HENDRIX_START_Z,
    skinTone: HENDRIX_SKIN_TONE,
    applyHair(avatar) {
      attachHendrixHair(avatar, {
        baseColor: HENDRIX_HAIR_COLOR,
        highlightColor: HENDRIX_HAIR_HIGHLIGHT,
        yOffset: 0,
      });
    },
    flagKey: "isHendrixNpc",
  });
}

function createCharlieNpcSafe() {
  return createPreviewClassmateNpcSafe({
    name: CHARLIE_NAME,
    rarity: RARITY_EPIC,
    laneX: CHARLIE_LANE_X,
    startZ: CHARLIE_START_Z,
    skinTone: CHARLIE_SKIN_TONE,
    applyHair(avatar) {
      attachLedgerHair(avatar, {
        baseColor: CHARLIE_HAIR_COLOR,
        highlightColor: CHARLIE_HAIR_HIGHLIGHT,
        yOffset: 0,
      });
    },
    flagKey: "isCharlieNpc",
  });
}

function createCharlie2NpcSafe() {
  return createPreviewClassmateNpcSafe({
    name: CHARLIE_2_NAME,
    rarity: RARITY_LEGENDARY,
    laneX: CHARLIE_2_LANE_X,
    startZ: CHARLIE_2_START_Z,
    skinTone: CHARLIE_SKIN_TONE,
    applyHair(avatar) {
      attachCharlie2Hair(avatar, {
        baseColor: CHARLIE_HAIR_COLOR,
        highlightColor: CHARLIE_HAIR_HIGHLIGHT,
        yOffset: 0,
      });
    },
    flagKey: "isCharlie2Npc",
  });
}

function createAdonisNpcSafe() {
  const adonisConfig = {
    variant: "nonPhotoDetailed",
    name: ADONIS_NAME,
    rarity: RARITY_UNCOMMON,
    laneX: ADONIS_LANE_X,
    startZ: ADONIS_START_Z,
    minZ: LEO_DEFAULT_MIN_Z,
    maxZ: LEO_DEFAULT_MAX_Z,
    direction: 1,
  };

  function applyAdonisLook(npc) {
    if (!npc || !npc.avatar || !npc.avatar.userData) {
      return npc;
    }

    const avatar = npc.avatar;
    avatar.userData.isLeo3D = false;
    avatar.userData.isAdonisNpc = true;
    avatar.userData.isNateNpc = false;
    avatar.userData.isLedgerNpc = false;
    avatar.userData.isOscarNpc = false;
    avatar.userData.isChristianNpc = false;
    avatar.userData.isBeauNpc = false;
    avatar.userData.isAdonis2Npc = false;

    const skinMaterials = avatar.userData.skinMaterials || [];
    skinMaterials.forEach((material) => material.color.set(ADONIS_SKIN_TONE));
    avatar.userData.skinTone = ADONIS_SKIN_TONE;
    if (avatar.userData.headMaterial) {
      if (avatar.userData.headMaterial.map) {
        avatar.userData.headMaterial.map.dispose();
        avatar.userData.headMaterial.map = null;
      }
      avatar.userData.headMaterial.color.set(ADONIS_SKIN_TONE);
      avatar.userData.headMaterial.needsUpdate = true;
    }

    attachLeoHair(avatar, {
      baseColor: ADONIS_HAIR_COLOR,
      highlightColor: ADONIS_HAIR_HIGHLIGHT,
      yOffset: 0,
    });
    avatar.scale.setScalar(LEO_SCALE * ADONIS_SCALE_MULTIPLIER);
    return npc;
  }

  try {
    return applyAdonisLook(createLeoStudentNpc(adonisConfig));
  } catch (error) {
    console.error("Adonis NPC bootstrap failed (primary build)", error);
  }

  try {
    return applyAdonisLook(
      createLeoStudentNpc({
        ...adonisConfig,
        useLeoHair: false,
      })
    );
  } catch (fallbackError) {
    console.error("Adonis NPC bootstrap failed (fallback build)", fallbackError);
  }

  return null;
}

function createAdonis2NpcSafe() {
  const adonis2Config = {
    variant: "nonPhotoDetailed",
    name: ADONIS2_NAME,
    laneX: ADONIS2_LANE_X,
    startZ: ADONIS2_START_Z,
    minZ: LEO_DEFAULT_MIN_Z,
    maxZ: LEO_DEFAULT_MAX_Z,
    direction: 1,
  };

  function applyAdonis2Look(npc) {
    if (!npc || !npc.avatar || !npc.avatar.userData) {
      return npc;
    }

    const avatar = npc.avatar;
    avatar.userData.isLeo3D = false;
    avatar.userData.isAdonisNpc = false;
    avatar.userData.isNateNpc = false;
    avatar.userData.isLedgerNpc = false;
    avatar.userData.isOscarNpc = false;
    avatar.userData.isChristianNpc = false;
    avatar.userData.isBeauNpc = false;
    avatar.userData.isAdonis2Npc = true;

    const skinMaterials = avatar.userData.skinMaterials || [];
    skinMaterials.forEach((material) => material.color.set(ADONIS_SKIN_TONE));
    avatar.userData.skinTone = ADONIS_SKIN_TONE;
    if (avatar.userData.headMaterial) {
      if (avatar.userData.headMaterial.map) {
        avatar.userData.headMaterial.map.dispose();
        avatar.userData.headMaterial.map = null;
      }
      avatar.userData.headMaterial.color.set(ADONIS_SKIN_TONE);
      avatar.userData.headMaterial.needsUpdate = true;
    }

    attachAdonis2Hair(avatar, {
      baseColor: ADONIS2_HAIR_COLOR,
      highlightColor: ADONIS2_HAIR_HIGHLIGHT,
      yOffset: 0,
    });

    return npc;
  }

  try {
    return applyAdonis2Look(createLeoStudentNpc(adonis2Config));
  } catch (error) {
    console.error("Adonis 2 NPC bootstrap failed (primary build)", error);
  }

  try {
    return applyAdonis2Look(
      createLeoStudentNpc({
        ...adonis2Config,
        useLeoHair: false,
      })
    );
  } catch (fallbackError) {
    console.error("Adonis 2 NPC bootstrap failed (fallback build)", fallbackError);
  }

  return null;
}

function createNateNpcSafe(options = {}) {
  const requestedVariantId = options && typeof options.variantId === "string" ? options.variantId : "";
  const variant = NATE_HAIR_VARIANTS.find((entry) => entry.id === requestedVariantId) || NATE_HAIR_VARIANTS[0];
  const nateConfig = {
    variant: "nonPhotoDetailed",
    name: typeof options.name === "string" && options.name.trim() ? options.name.trim() : NATE_NAME,
    rarity: normalizeNpcRarity(options.rarity) || RARITY_RARE,
    laneX: Number.isFinite(options.laneX) ? options.laneX : NATE_LANE_X,
    startZ: Number.isFinite(options.startZ) ? options.startZ : NATE_START_Z,
    minZ: LEO_DEFAULT_MIN_Z,
    maxZ: LEO_DEFAULT_MAX_Z,
    direction: 1,
  };

  function applyNateLook(npc) {
    if (!npc || !npc.avatar || !npc.avatar.userData) {
      return npc;
    }

    const avatar = npc.avatar;
    avatar.userData.isLeo3D = false;
    avatar.userData.isAdonisNpc = false;
    avatar.userData.isNateNpc = true;
    avatar.userData.isLedgerNpc = false;
    avatar.userData.isOscarNpc = false;
    avatar.userData.isChristianNpc = false;
    avatar.userData.isBeauNpc = false;
    avatar.userData.isAdonis2Npc = false;
    avatar.userData.nateVariantId = variant.id;

    const skinMaterials = avatar.userData.skinMaterials || [];
    skinMaterials.forEach((material) => material.color.set(NATE_SKIN_TONE));
    avatar.userData.skinTone = NATE_SKIN_TONE;
    if (avatar.userData.headMaterial) {
      if (avatar.userData.headMaterial.map) {
        avatar.userData.headMaterial.map.dispose();
        avatar.userData.headMaterial.map = null;
      }
      avatar.userData.headMaterial.color.set(NATE_SKIN_TONE);
      avatar.userData.headMaterial.needsUpdate = true;
    }

    attachNateHairVariant(avatar, variant);

    return npc;
  }

  try {
    return applyNateLook(createLeoStudentNpc(nateConfig));
  } catch (error) {
    console.error("Nate NPC bootstrap failed (primary build)", error);
  }

  try {
    return applyNateLook(
      createLeoStudentNpc({
        ...nateConfig,
        useLeoHair: false,
      })
    );
  } catch (fallbackError) {
    console.error("Nate NPC bootstrap failed (fallback build)", fallbackError);
  }

  return null;
}

function createLedgerNpcSafe() {
  const ledgerConfig = {
    variant: "nonPhotoDetailed",
    name: LEDGER_NAME,
    rarity: RARITY_EPIC,
    laneX: LEDGER_LANE_X,
    startZ: LEDGER_START_Z,
    minZ: LEO_DEFAULT_MIN_Z,
    maxZ: LEO_DEFAULT_MAX_Z,
    direction: 1,
  };

  function applyLedgerLook(npc) {
    if (!npc || !npc.avatar || !npc.avatar.userData) {
      return npc;
    }

    const avatar = npc.avatar;
    avatar.userData.isLeo3D = false;
    avatar.userData.isAdonisNpc = false;
    avatar.userData.isNateNpc = false;
    avatar.userData.isLedgerNpc = true;
    avatar.userData.isOscarNpc = false;
    avatar.userData.isChristianNpc = false;
    avatar.userData.isBeauNpc = false;
    avatar.userData.isAdonis2Npc = false;
    avatar.userData.isLedger2Npc = false;
    avatar.scale.setScalar(LEO_SCALE * LEDGER_SCALE_MULTIPLIER);

    attachLedgerHair(avatar, {
      baseColor: LEDGER_HAIR_COLOR,
      highlightColor: LEDGER_HAIR_HIGHLIGHT,
      yOffset: 0,
    });

    return npc;
  }

  try {
    return applyLedgerLook(createLeoStudentNpc(ledgerConfig));
  } catch (error) {
    console.error("Ledger NPC bootstrap failed (primary build)", error);
  }

  try {
    return applyLedgerLook(
      createLeoStudentNpc({
        ...ledgerConfig,
        useLeoHair: false,
      })
    );
  } catch (fallbackError) {
    console.error("Ledger NPC bootstrap failed (fallback build)", fallbackError);
  }

  return null;
}

function createLedger2NpcSafe() {
  const ledger2Config = {
    variant: "nonPhotoDetailed",
    name: LEDGER2_NAME,
    laneX: LEDGER2_LANE_X,
    startZ: LEDGER2_START_Z,
    minZ: LEO_DEFAULT_MIN_Z,
    maxZ: LEO_DEFAULT_MAX_Z,
    direction: 1,
  };

  function applyLedger2Look(npc) {
    if (!npc || !npc.avatar || !npc.avatar.userData) {
      return npc;
    }

    const avatar = npc.avatar;
    avatar.userData.isLeo3D = false;
    avatar.userData.isAdonisNpc = false;
    avatar.userData.isNateNpc = false;
    avatar.userData.isLedgerNpc = false;
    avatar.userData.isLedger2Npc = true;
    avatar.userData.isOscarNpc = false;
    avatar.userData.isChristianNpc = false;
    avatar.userData.isBeauNpc = false;
    avatar.userData.isAdonis2Npc = false;
    avatar.scale.setScalar(LEO_SCALE * LEDGER2_SCALE_MULTIPLIER);
    applyLedger2TeletubbyLook(avatar);
    return npc;
  }

  try {
    return applyLedger2Look(createLeoStudentNpc(ledger2Config));
  } catch (error) {
    console.error("Ledger 2 NPC bootstrap failed (primary build)", error);
  }

  try {
    return applyLedger2Look(
      createLeoStudentNpc({
        ...ledger2Config,
        useLeoHair: false,
      })
    );
  } catch (fallbackError) {
    console.error("Ledger 2 NPC bootstrap failed (fallback build)", fallbackError);
  }

  return null;
}

function createOscarNpcSafe() {
  const oscarConfig = {
    variant: "nonPhotoDetailed",
    name: OSCAR_NAME,
    rarity: RARITY_LEGENDARY,
    laneX: OSCAR_LANE_X,
    startZ: OSCAR_START_Z,
    minZ: LEO_DEFAULT_MIN_Z,
    maxZ: LEO_DEFAULT_MAX_Z,
    direction: 1,
  };

  function applyOscarLook(npc) {
    if (!npc || !npc.avatar || !npc.avatar.userData) {
      return npc;
    }

    const avatar = npc.avatar;
    avatar.userData.isLeo3D = false;
    avatar.userData.isAdonisNpc = false;
    avatar.userData.isNateNpc = false;
    avatar.userData.isLedgerNpc = false;
    avatar.userData.isOscarNpc = true;
    avatar.userData.isChristianNpc = false;
    avatar.userData.isBeauNpc = false;
    avatar.userData.isAdonis2Npc = false;
    avatar.scale.setScalar(LEO_SCALE * OSCAR_SCALE_MULTIPLIER);

    const skinMaterials = avatar.userData.skinMaterials || [];
    skinMaterials.forEach((material) => material.color.set(OSCAR_SKIN_TONE));
    avatar.userData.skinTone = OSCAR_SKIN_TONE;
    if (avatar.userData.headMaterial) {
      if (avatar.userData.headMaterial.map) {
        avatar.userData.headMaterial.map.dispose();
        avatar.userData.headMaterial.map = null;
      }
      avatar.userData.headMaterial.color.set(OSCAR_SKIN_TONE);
      avatar.userData.headMaterial.needsUpdate = true;
    }

    attachOscarHair(avatar, {
      baseColor: OSCAR_HAIR_COLOR,
      highlightColor: OSCAR_HAIR_HIGHLIGHT,
      yOffset: 0.02,
    });

    return npc;
  }

  try {
    return applyOscarLook(createLeoStudentNpc(oscarConfig));
  } catch (error) {
    console.error("Oscar NPC bootstrap failed (primary build)", error);
  }

  try {
    return applyOscarLook(
      createLeoStudentNpc({
        ...oscarConfig,
        useLeoHair: false,
      })
    );
  } catch (fallbackError) {
    console.error("Oscar NPC bootstrap failed (fallback build)", fallbackError);
  }

  return null;
}

function createChristianNpcSafe() {
  const christianConfig = {
    variant: "nonPhotoDetailed",
    name: CHRISTIAN_NAME,
    rarity: RARITY_MYTHIC,
    laneX: CHRISTIAN_LANE_X,
    startZ: CHRISTIAN_START_Z,
    minZ: LEO_DEFAULT_MIN_Z,
    maxZ: LEO_DEFAULT_MAX_Z,
    direction: 1,
  };

  function applyChristianLook(npc) {
    if (!npc || !npc.avatar || !npc.avatar.userData) {
      return npc;
    }

    const avatar = npc.avatar;
    avatar.userData.isLeo3D = false;
    avatar.userData.isAdonisNpc = false;
    avatar.userData.isNateNpc = false;
    avatar.userData.isLedgerNpc = false;
    avatar.userData.isOscarNpc = false;
    avatar.userData.isChristianNpc = true;
    avatar.userData.isBeauNpc = false;
    avatar.userData.isAdonis2Npc = false;

    const skinMaterials = avatar.userData.skinMaterials || [];
    skinMaterials.forEach((material) => material.color.set(ADONIS_SKIN_TONE));
    avatar.userData.skinTone = ADONIS_SKIN_TONE;
    if (avatar.userData.headMaterial) {
      if (avatar.userData.headMaterial.map) {
        avatar.userData.headMaterial.map.dispose();
        avatar.userData.headMaterial.map = null;
      }
      avatar.userData.headMaterial.color.set(ADONIS_SKIN_TONE);
      avatar.userData.headMaterial.needsUpdate = true;
    }

    attachChristianHair(avatar, {
      baseColor: CHRISTIAN_HAIR_COLOR,
      highlightColor: CHRISTIAN_HAIR_HIGHLIGHT,
      yOffset: 0,
    });

    return npc;
  }

  try {
    return applyChristianLook(createLeoStudentNpc(christianConfig));
  } catch (error) {
    console.error("Christian NPC bootstrap failed (primary build)", error);
  }

  try {
    return applyChristianLook(
      createLeoStudentNpc({
        ...christianConfig,
        useLeoHair: false,
      })
    );
  } catch (fallbackError) {
    console.error("Christian NPC bootstrap failed (fallback build)", fallbackError);
  }

  return null;
}

function createBeauNpcSafe() {
  const beauConfig = {
    variant: "nonPhotoDetailed",
    name: BEAU_NAME,
    rarity: RARITY_LEGENDARY,
    laneX: BEAU_LANE_X,
    startZ: BEAU_START_Z,
    minZ: LEO_DEFAULT_MIN_Z,
    maxZ: LEO_DEFAULT_MAX_Z,
    direction: 1,
    useLeoHair: false,
  };

  function applyBeauLook(npc) {
    if (!npc || !npc.avatar || !npc.avatar.userData) {
      return npc;
    }

    const avatar = npc.avatar;
    avatar.userData.isLeo3D = false;
    avatar.userData.isAdonisNpc = false;
    avatar.userData.isNateNpc = false;
    avatar.userData.isLedgerNpc = false;
    avatar.userData.isOscarNpc = false;
    avatar.userData.isChristianNpc = false;
    avatar.userData.isBeauNpc = true;
    avatar.userData.isAdonis2Npc = false;
    avatar.scale.setScalar(LEO_SCALE * BEAU_SCALE_MULTIPLIER);
    attachBeauHair(avatar, {
      baseColor: BEAU_HAIR_COLOR,
      highlightColor: BEAU_HAIR_HIGHLIGHT,
      yOffset: 0,
    });

    return npc;
  }

  try {
    return applyBeauLook(createLeoStudentNpc(beauConfig));
  } catch (error) {
    console.error("Beau NPC bootstrap failed (primary build)", error);
  }

  try {
    return applyBeauLook(createLeoStudentNpc(beauConfig));
  } catch (fallbackError) {
    console.error("Beau NPC bootstrap failed (fallback build)", fallbackError);
  }

  return null;
}

function ensureAdonisNpcExists(dt = 0) {
  if (dt > 0) {
    adonisRespawnCooldown = Math.max(0, adonisRespawnCooldown - dt);
  }

  const hasAdonis = studentNpcs.some(
    (npc) => npc && npc.avatar && npc.avatar.userData && npc.avatar.userData.isAdonisNpc
  );
  if (hasAdonis || adonisRespawnCooldown > 0) {
    return;
  }

  const npc = createAdonisNpcSafe();
  if (!npc || !npc.avatar) {
    adonisRespawnCooldown = 3;
    return;
  }

  studentNpcs.push(npc);
  scene.add(npc.avatar);
}

function ensureAdonis2NpcExists(dt = 0) {
  if (dt > 0) {
    adonis2RespawnCooldown = Math.max(0, adonis2RespawnCooldown - dt);
  }

  const hasAdonis2 = studentNpcs.some(
    (npc) => npc && npc.avatar && npc.avatar.userData && npc.avatar.userData.isAdonis2Npc
  );
  if (hasAdonis2 || adonis2RespawnCooldown > 0) {
    return;
  }

  const npc = createAdonis2NpcSafe();
  if (!npc || !npc.avatar) {
    adonis2RespawnCooldown = 3;
    return;
  }

  studentNpcs.push(npc);
  scene.add(npc.avatar);
}

function ensureNateNpcExists(dt = 0) {
  if (dt > 0) {
    nateRespawnCooldown = Math.max(0, nateRespawnCooldown - dt);
  }

  const allowedVariantIds = new Set(NATE_HAIR_VARIANTS.map((variant) => variant.id));
  for (let i = studentNpcs.length - 1; i >= 0; i -= 1) {
    const npc = studentNpcs[i];
    if (!npc || !npc.avatar || !npc.avatar.userData || !npc.avatar.userData.isNateNpc) {
      continue;
    }
    if (allowedVariantIds.has(npc.avatar.userData.nateVariantId)) {
      continue;
    }
    scene.remove(npc.avatar);
    studentNpcs.splice(i, 1);
  }

  if (nateRespawnCooldown > 0) {
    return;
  }

  for (let i = 0; i < NATE_HAIR_VARIANTS.length; i += 1) {
    const variant = NATE_HAIR_VARIANTS[i];
    const hasVariant = studentNpcs.some(
      (npc) =>
        npc &&
        npc.avatar &&
        npc.avatar.userData &&
        npc.avatar.userData.isNateNpc &&
        npc.avatar.userData.nateVariantId === variant.id
    );
    if (hasVariant) {
      continue;
    }

    const npc = createNateNpcSafe({
      name: NATE_NAME,
      variantId: variant.id,
      laneX: NATE_LANE_X + (Number.isFinite(variant.laneOffset) ? variant.laneOffset : 0),
      startZ: NATE_START_Z,
    });
    if (!npc || !npc.avatar) {
      nateRespawnCooldown = 3;
      continue;
    }

    studentNpcs.push(npc);
    scene.add(npc.avatar);
  }
}

function ensureLedgerNpcExists(dt = 0) {
  if (dt > 0) {
    ledgerRespawnCooldown = Math.max(0, ledgerRespawnCooldown - dt);
  }

  const hasLedger = studentNpcs.some(
    (npc) => npc && npc.avatar && npc.avatar.userData && npc.avatar.userData.isLedgerNpc
  );
  if (hasLedger || ledgerRespawnCooldown > 0) {
    return;
  }

  const npc = createLedgerNpcSafe();
  if (!npc || !npc.avatar) {
    ledgerRespawnCooldown = 3;
    return;
  }

  studentNpcs.push(npc);
  scene.add(npc.avatar);
}

function ensureLedger2NpcExists(dt = 0) {
  if (!LEDGER2_ENABLED) {
    for (let i = studentNpcs.length - 1; i >= 0; i -= 1) {
      const npc = studentNpcs[i];
      if (!npc || !npc.avatar || !npc.avatar.userData || !npc.avatar.userData.isLedger2Npc) {
        continue;
      }
      scene.remove(npc.avatar);
      studentNpcs.splice(i, 1);
    }
    return;
  }

  if (dt > 0) {
    ledger2RespawnCooldown = Math.max(0, ledger2RespawnCooldown - dt);
  }

  const hasLedger2 = studentNpcs.some(
    (npc) => npc && npc.avatar && npc.avatar.userData && npc.avatar.userData.isLedger2Npc
  );
  if (hasLedger2 || ledger2RespawnCooldown > 0) {
    return;
  }

  const npc = createLedger2NpcSafe();
  if (!npc || !npc.avatar) {
    ledger2RespawnCooldown = 3;
    return;
  }

  studentNpcs.push(npc);
  scene.add(npc.avatar);
}

function ensureOscarNpcExists(dt = 0) {
  if (dt > 0) {
    oscarRespawnCooldown = Math.max(0, oscarRespawnCooldown - dt);
  }

  const hasOscar = studentNpcs.some(
    (npc) => npc && npc.avatar && npc.avatar.userData && npc.avatar.userData.isOscarNpc
  );
  if (hasOscar || oscarRespawnCooldown > 0) {
    return;
  }

  const npc = createOscarNpcSafe();
  if (!npc || !npc.avatar) {
    oscarRespawnCooldown = 3;
    return;
  }

  studentNpcs.push(npc);
  scene.add(npc.avatar);
}

function ensureChristianNpcExists(dt = 0) {
  if (dt > 0) {
    christianRespawnCooldown = Math.max(0, christianRespawnCooldown - dt);
  }

  const hasChristian = studentNpcs.some(
    (npc) => npc && npc.avatar && npc.avatar.userData && npc.avatar.userData.isChristianNpc
  );
  if (hasChristian || christianRespawnCooldown > 0) {
    return;
  }

  const npc = createChristianNpcSafe();
  if (!npc || !npc.avatar) {
    christianRespawnCooldown = 3;
    return;
  }

  studentNpcs.push(npc);
  scene.add(npc.avatar);
}

function ensureRosterNpcExists(npcName, factory) {
  const safeNpcName = typeof npcName === "string" ? npcName.trim() : "";
  if (!safeNpcName || typeof factory !== "function") {
    return;
  }
  const hasNpc = studentNpcs.some((npc) => {
    if (!npc || !npc.avatar || !npc.avatar.userData) {
      return false;
    }
    const baseName = String(npc.avatar.userData.npcBaseName || npc.avatar.userData.npcDisplayName || "").trim();
    return baseName === safeNpcName && npc.purchaseState === "forSale";
  });
  if (hasNpc) {
    return;
  }
  const npc = factory();
  if (!npc || !npc.avatar) {
    return;
  }
  studentNpcs.push(npc);
  scene.add(npc.avatar);
}

function ensurePausedStreetNpcExists(npcName, factory, options = {}) {
  const safeNpcName = typeof npcName === "string" ? npcName.trim() : "";
  const shouldWalk = options.walking === true;
  if (!safeNpcName || typeof factory !== "function") {
    return;
  }
  const existingNpc = studentNpcs.find((npc) => {
    if (!npc || !npc.avatar || !npc.avatar.userData) {
      return false;
    }
    if (npc.purchaseState !== "forSale" || !npc.avatar.userData.isStreetWalker) {
      return false;
    }
    const baseName = String(npc.avatar.userData.npcBaseName || npc.avatar.userData.npcDisplayName || "").trim();
    return baseName === safeNpcName;
  });
  if (existingNpc) {
    if (shouldWalk && existingNpc.purchaseState === "forSale" && existingNpc.avatar.userData.isStreetWalker) {
      existingNpc.speed = LEO_PATROL_SPEED;
      existingNpc.direction = 1;
      existingNpc.maxZ = NPC_STREAM_END_Z;
      existingNpc.avatar.position.y = STREET_PATH_SURFACE_Y;
    }
    return;
  }

  const npc = factory();
  if (!npc || !npc.avatar) {
    return;
  }
  if (!placeNpcOnStreetStream(npc, options.spawnOffsetZ || 0)) {
    return;
  }

  const forwardOffsetZ = Number.isFinite(options.forwardOffsetZ) ? options.forwardOffsetZ : 8;
  npc.avatar.position.z = Math.min(NPC_STREAM_END_Z - 1, npc.avatar.position.z + forwardOffsetZ);
  npc.speed = shouldWalk ? LEO_PATROL_SPEED : 0;
  npc.minZ = npc.avatar.position.z;
  npc.maxZ = NPC_STREAM_END_Z;
  npc.direction = 1;
  npc.avatar.userData.isStreetWalker = true;
  npc.avatar.userData.isPurchasedNpc = false;
  npc.avatar.userData.purchaseState = "forSale";

  studentNpcs.push(npc);
  scene.add(npc.avatar);
}

function ensureLeoNpcExists(dt = 0) {
  if (dt > 0) {
    leoRespawnCooldown = Math.max(0, leoRespawnCooldown - dt);
  }

  const hasLeo = studentNpcs.some(
    (npc) => npc && npc.avatar && npc.avatar.userData && npc.avatar.userData.isLeo3D
  );
  if (hasLeo || leoRespawnCooldown > 0) {
    return;
  }

  const npc = createLeo3DNpcSafe();
  if (!npc || !npc.avatar) {
    leoRespawnCooldown = 3;
    return;
  }

  studentNpcs.push(npc);
  scene.add(npc.avatar);
  applyLeoStateToNpc(npc, true);
}

function updateStudentNpcs(dt) {
  if (!leoReferenceFaceLoaded) {
    ensureLeoReferenceFaceImage();
  }

  for (let i = studentNpcs.length - 1; i >= 0; i -= 1) {
    const npc = studentNpcs[i];
    if (!npc || !npc.avatar || !npc.avatar.userData) {
      continue;
    }
    if (!NPC_SHOWCASE_MODE || NPC_STREAM_ENABLED) {
      continue;
    }
    const npcBaseName = String(npc.avatar.userData.npcBaseName || npc.avatar.userData.npcDisplayName || "").trim();
    const keepPreviewNpc =
      npcBaseName === LEO_NAME ||
      npcBaseName === ZIGGY_NAME ||
      npcBaseName === VINCE_NAME ||
      npcBaseName === HENDRIX_NAME ||
      npcBaseName === BEAU_NAME ||
      npcBaseName === CHARLIE_NAME;
    if (npc.purchaseState !== "forSale" || keepPreviewNpc) {
      continue;
    }
    scene.remove(npc.avatar);
    studentNpcs.splice(i, 1);
  }

  if (NPC_STREAM_ENABLED) {
    if (NPC_SPAWNING_PAUSED) {
      for (let i = studentNpcs.length - 1; i >= 0; i -= 1) {
        const npc = studentNpcs[i];
        if (!npc || !npc.avatar || !npc.avatar.userData) {
          continue;
        }
        const baseName = String(npc.avatar.userData.npcBaseName || npc.avatar.userData.npcDisplayName || "").trim();
        if (npc.purchaseState !== "forSale" || !npc.avatar.userData.isStreetWalker || baseName === ESHDOG_MARLEY_NAME) {
          continue;
        }
        removeStudentNpcFromScene(npc);
      }
      ensurePausedStreetNpcExists(ESHDOG_MARLEY_NAME, createEshdogMarleyNpcSafe, {
        forwardOffsetZ: 8,
        walking: false,
      });
    } else {
      for (let i = 0; i < studentNpcs.length; i += 1) {
        const npc = studentNpcs[i];
        if (!npc || !npc.avatar || !npc.avatar.userData) {
          continue;
        }
        if (npc.purchaseState !== "forSale" || !npc.avatar.userData.isStreetWalker) {
          continue;
        }
        if (!Number.isFinite(npc.speed) || npc.speed <= 0) {
          npc.speed = LEO_PATROL_SPEED;
          npc.direction = 1;
          npc.maxZ = NPC_STREAM_END_Z;
        }
      }
      updateStreetNpcSpawner(dt);
    }
  } else {
    ensureRosterNpcExists(ZIGGY_NAME, createZiggyNpcSafe);
    ensureRosterNpcExists(VINCE_NAME, createVinceNpcSafe);
    ensureRosterNpcExists(HENDRIX_NAME, createHendrixNpcSafe);
    ensureRosterNpcExists(BEAU_NAME, createBeauNpcSafe);
    ensureRosterNpcExists(CHARLIE_NAME, createCharlieNpcSafe);
  }

  for (let index = 0; index < studentNpcs.length; index += 1) {
    const student = studentNpcs[index];
    const avatar = student.avatar;
    if (!avatar || !avatar.userData) {
      continue;
    }
    const isLeoNpc = Boolean(avatar.userData.isLeo3D);

    if (avatar.userData.isAdonis2Npc) {
      const anchor = avatar.userData.hairAnchor;
      const hasHair = !!(avatar.userData.hairMesh && anchor && anchor.children.length > 0);
      if (!hasHair) {
        try {
          attachAdonis2Hair(avatar, {
            baseColor: avatar.userData.adonis2HairBaseColor || ADONIS2_HAIR_COLOR,
            highlightColor: avatar.userData.adonis2HairHighlightColor || ADONIS2_HAIR_HIGHLIGHT,
            yOffset: Number.isFinite(avatar.userData.adonis2HairYOffset) ? avatar.userData.adonis2HairYOffset : 0,
          });
        } catch (error) {
          console.error("Adonis 2 hair recovery failed", error);
        }
      }
    } else if (avatar.userData.isOscarNpc) {
      const anchor = avatar.userData.hairAnchor;
      const hasHair = !!(avatar.userData.hairMesh && anchor && anchor.children.length > 0);
      if (!hasHair) {
        try {
          attachOscarHair(avatar, {
            baseColor: avatar.userData.oscarHairBaseColor || OSCAR_HAIR_COLOR,
            highlightColor: avatar.userData.oscarHairHighlightColor || OSCAR_HAIR_HIGHLIGHT,
            yOffset: Number.isFinite(avatar.userData.oscarHairYOffset) ? avatar.userData.oscarHairYOffset : 0.02,
          });
        } catch (error) {
          console.error("Oscar hair recovery failed", error);
        }
      }
    } else if (avatar.userData.isChristianNpc) {
      const anchor = avatar.userData.hairAnchor;
      const hasHair = !!(avatar.userData.hairMesh && anchor && anchor.children.length > 0);
      const needsHairRefresh = avatar.userData.christianHairBuild !== BUILD_ID;
      if (!hasHair || needsHairRefresh) {
        try {
          attachChristianHair(avatar, {
            baseColor: avatar.userData.christianHairBaseColor || CHRISTIAN_HAIR_COLOR,
            highlightColor: avatar.userData.christianHairHighlightColor || CHRISTIAN_HAIR_HIGHLIGHT,
            yOffset: Number.isFinite(avatar.userData.christianHairYOffset) ? avatar.userData.christianHairYOffset : 0,
          });
        } catch (error) {
          console.error("Christian hair recovery failed", error);
        }
      }
    } else if (avatar.userData.isEshdogMarleyNpc) {
      const anchor = avatar.userData.hairAnchor;
      const hasHair = !!(avatar.userData.hairMesh && anchor && anchor.children.length > 0);
      const needsHairRefresh = avatar.userData.ziggyHairBuild !== BUILD_ID;
      const needsOutfitRefresh = avatar.userData.eshdogMarleyOutfitBuild !== BUILD_ID;
      const shortsPieces = Array.isArray(avatar.userData.eshdogMarleyShorts) ? avatar.userData.eshdogMarleyShorts : [];
      const hasShorts = shortsPieces.length >= 2 && shortsPieces.every((piece) => piece && piece.parent);
      const needsShortsRefresh = avatar.userData.eshdogMarleyShortsBuild !== BUILD_ID;
      if (!hasHair || needsHairRefresh) {
        try {
          attachEshdogMarleyHair(avatar, {
            baseColor: avatar.userData.ziggyHairBaseColor || ESHDOG_MARLEY_HAIR_COLOR,
            highlightColor: avatar.userData.ziggyHairHighlightColor || ESHDOG_MARLEY_HAIR_HIGHLIGHT,
            yOffset: Number.isFinite(avatar.userData.ziggyHairYOffset) ? avatar.userData.ziggyHairYOffset : 0,
          });
        } catch (error) {
          console.error("Eshdog Marley hair recovery failed", error);
        }
      }
      if (needsOutfitRefresh) {
        try {
          applyEshdogMarleyOutfit(avatar);
        } catch (error) {
          console.error("Eshdog Marley outfit recovery failed", error);
        }
      }
      if (!hasShorts || needsShortsRefresh) {
        try {
          applyEshdogMarleyShorts(avatar);
        } catch (error) {
          console.error("Eshdog Marley shorts recovery failed", error);
        }
      }
    } else if (avatar.userData.isZiggyNpc) {
      const anchor = avatar.userData.hairAnchor;
      const hasHair = !!(avatar.userData.hairMesh && anchor && anchor.children.length > 0);
      const needsHairRefresh = avatar.userData.ziggyHairBuild !== BUILD_ID;
      if (!hasHair || needsHairRefresh) {
        try {
          attachZiggyHair(avatar, {
            baseColor: avatar.userData.ziggyHairBaseColor || ZIGGY_HAIR_COLOR,
            highlightColor: avatar.userData.ziggyHairHighlightColor || ZIGGY_HAIR_HIGHLIGHT,
            yOffset: Number.isFinite(avatar.userData.ziggyHairYOffset) ? avatar.userData.ziggyHairYOffset : 0,
          });
        } catch (error) {
          console.error("Ziggy hair recovery failed", error);
        }
      }
    } else if (avatar.userData.isHendrixNpc) {
      const anchor = avatar.userData.hairAnchor;
      const hasHair = !!(avatar.userData.hairMesh && anchor && anchor.children.length > 0);
      const needsHairRefresh = avatar.userData.hendrixHairBuild !== BUILD_ID;
      if (!hasHair || needsHairRefresh) {
        try {
          attachHendrixHair(avatar, {
            baseColor: avatar.userData.hendrixHairBaseColor || HENDRIX_HAIR_COLOR,
            highlightColor: avatar.userData.hendrixHairHighlightColor || HENDRIX_HAIR_HIGHLIGHT,
            yOffset: Number.isFinite(avatar.userData.hendrixHairYOffset) ? avatar.userData.hendrixHairYOffset : 0,
          });
        } catch (error) {
          console.error("Hendrix hair recovery failed", error);
        }
      }
    } else if (avatar.userData.isCharlieNpc) {
      const anchor = avatar.userData.hairAnchor;
      const hasHair = !!(avatar.userData.hairMesh && anchor && anchor.children.length > 0);
      const needsHairRefresh = avatar.userData.ledgerHairBuild !== BUILD_ID;
      if (!hasHair || needsHairRefresh) {
        try {
          attachLedgerHair(avatar, {
            baseColor: avatar.userData.ledgerHairBaseColor || CHARLIE_HAIR_COLOR,
            highlightColor: avatar.userData.ledgerHairHighlightColor || CHARLIE_HAIR_HIGHLIGHT,
            yOffset: Number.isFinite(avatar.userData.ledgerHairYOffset) ? avatar.userData.ledgerHairYOffset : 0,
          });
        } catch (error) {
          console.error("Charlie hair recovery failed", error);
        }
      }
    } else if (avatar.userData.isBeauNpc) {
      const anchor = avatar.userData.hairAnchor;
      const hasHair = !!(avatar.userData.hairMesh && anchor && anchor.children.length > 0);
      const needsHairRefresh = avatar.userData.beauHairBuild !== BUILD_ID;
      if (!hasHair || needsHairRefresh) {
        try {
          attachBeauHair(avatar, {
            baseColor: avatar.userData.beauHairBaseColor || BEAU_HAIR_COLOR,
            highlightColor: avatar.userData.beauHairHighlightColor || BEAU_HAIR_HIGHLIGHT,
            yOffset: Number.isFinite(avatar.userData.beauHairYOffset) ? avatar.userData.beauHairYOffset : 0,
          });
        } catch (error) {
          console.error("Beau hair recovery failed", error);
        }
      }
    } else if (avatar.userData.isLedgerNpc) {
      const anchor = avatar.userData.hairAnchor;
      const hasHair = !!(avatar.userData.hairMesh && anchor && anchor.children.length > 0);
      const needsHairRefresh = avatar.userData.ledgerHairBuild !== BUILD_ID;
      if (!hasHair || needsHairRefresh) {
        try {
          attachLedgerHair(avatar, {
            baseColor: avatar.userData.ledgerHairBaseColor || LEDGER_HAIR_COLOR,
            highlightColor: avatar.userData.ledgerHairHighlightColor || LEDGER_HAIR_HIGHLIGHT,
            yOffset: 0,
          });
        } catch (error) {
          console.error("Ledger hair recovery failed", error);
        }
      }
    } else if (avatar.userData.isNateNpc) {
      const anchor = avatar.userData.hairAnchor;
      const hasHair = !!(avatar.userData.hairMesh && anchor && anchor.children.length > 0);
      if (!hasHair) {
        try {
          const nateVariant = NATE_HAIR_VARIANTS.find((entry) => entry.id === avatar.userData.nateVariantId) || NATE_HAIR_VARIANTS[0];
          attachNateHairVariant(avatar, nateVariant);
        } catch (error) {
          console.error("Nate hair recovery failed", error);
        }
      }
    } else if (avatar.userData.hairStyle === "leo3d") {
      const anchor = avatar.userData.hairAnchor;
      const hasHair = !!(avatar.userData.hairMesh && anchor && anchor.children.length > 0);
      if (!hasHair) {
        try {
          attachLeoHair(avatar, {
            baseColor: avatar.userData.leoHairBaseColor || avatar.userData.hairColor || LEO_HAIR_COLOR,
            highlightColor: avatar.userData.leoHairHighlightColor || LEO_HAIR_HIGHLIGHT,
            yOffset: Number.isFinite(avatar.userData.leoHairYOffset) ? avatar.userData.leoHairYOffset : 0,
          });
        } catch (error) {
          console.error("Leo hair recovery failed", error);
        }
      }
    }

    updateNpcVariantEffects(student, dt);
    updateNpcInfoTag(student);

    let moveStepX = 0;
    let moveStepZ = 0;
    let forcedYaw = null;
    const purchaseState = typeof student.purchaseState === "string" ? student.purchaseState : "forSale";

    if (NPC_SHOWCASE_MODE && purchaseState === "forSale") {
      const lineCenter = (studentNpcs.length - 1) * 0.5;
      avatar.position.x = SPAWN_X + (index - lineCenter) * NPC_SHOWCASE_SPACING_X;
      avatar.position.y = STREET_PATH_SURFACE_Y;
      avatar.position.z = SPAWN_Z + NPC_SHOWCASE_BEHIND_SPAWN_OFFSET_Z;
      student.speed = 0;
      student.direction = -1;
      student.minZ = avatar.position.z;
      student.maxZ = avatar.position.z;
      forcedYaw = Math.PI;
    } else if (purchaseState === "walkingToPad") {
      refreshNpcAssignedPadTargets(student);
      const secondFloorWalkTarget =
        isSecondFloorIncomePadIndex(student.assignedPadIndex) &&
        student.assignedPadWalkWorld &&
        Number.isFinite(student.assignedPadWalkWorld.x) &&
        Number.isFinite(student.assignedPadWalkWorld.z)
          ? student.assignedPadWalkWorld
          : null;
      const targetPad =
        secondFloorWalkTarget ||
        getNpcAssignedBaseEntryWorld(student) ||
        (student.assignedPadStandWorld &&
        Number.isFinite(student.assignedPadStandWorld.x) &&
        Number.isFinite(student.assignedPadStandWorld.z)
          ? student.assignedPadStandWorld
          : student.assignedPadWorld);
      if (targetPad && Number.isFinite(targetPad.x) && Number.isFinite(targetPad.z)) {
        const toX = targetPad.x - avatar.position.x;
        const toZ = targetPad.z - avatar.position.z;
        const distanceToPad = Math.hypot(toX, toZ);
        const walkReachDistance = secondFloorWalkTarget ? SECOND_FLOOR_BASE_ENTRY_TELEPORT_DISTANCE : LEO_PAD_REACH_DISTANCE;
        if (distanceToPad <= walkReachDistance) {
          const standTarget =
            student.assignedPadStandWorld &&
            Number.isFinite(student.assignedPadStandWorld.x) &&
            Number.isFinite(student.assignedPadStandWorld.z)
              ? student.assignedPadStandWorld
              : student.assignedPadWorld;
          if (standTarget && Number.isFinite(standTarget.x) && Number.isFinite(standTarget.z)) {
            avatar.position.x = standTarget.x;
            avatar.position.z = standTarget.z;
            if (Number.isFinite(standTarget.y)) {
              avatar.position.y = standTarget.y;
            }
          } else {
            avatar.position.x = targetPad.x;
            avatar.position.z = targetPad.z;
            if (Number.isFinite(targetPad.y)) {
              avatar.position.y = targetPad.y;
            }
          }
          student.speed = 0;
          student.purchaseState = "generating";
          avatar.userData.purchaseState = "generating";
          forcedYaw = Number.isFinite(student.assignedPadFacingYaw) ? student.assignedPadFacingYaw : null;
        } else {
          const moveDistance = Math.min(distanceToPad, NPC_BUY_WALK_TO_PAD_SPEED * dt);
          moveStepX = (toX / distanceToPad) * moveDistance;
          moveStepZ = (toZ / distanceToPad) * moveDistance;
          avatar.position.x += moveStepX;
          avatar.position.z += moveStepZ;
          student.speed = NPC_BUY_WALK_TO_PAD_SPEED;
          student.direction = moveStepZ >= 0 ? 1 : -1;
        }
      } else {
        student.purchaseState = "forSale";
        avatar.userData.purchaseState = "forSale";
        avatar.userData.isStreetWalker = true;
        if (student.assignedPadWorld && student.assignedPadWorld.set) {
          student.assignedPadWorld.set(0, 0, 0);
        }
        if (student.assignedPadStandWorld && student.assignedPadStandWorld.set) {
          student.assignedPadStandWorld.set(0, 0, 0);
        }
        if (student.assignedPadWalkWorld && student.assignedPadWalkWorld.set) {
          student.assignedPadWalkWorld.set(0, 0, 0);
        }
        student.assignedPadFacingYaw = Math.PI;
      }
    } else if (purchaseState === "generating") {
      refreshNpcAssignedPadTargets(student);
      const targetPad =
        student.assignedPadStandWorld &&
        Number.isFinite(student.assignedPadStandWorld.x) &&
        Number.isFinite(student.assignedPadStandWorld.z)
          ? student.assignedPadStandWorld
          : student.assignedPadWorld;
      if (targetPad && Number.isFinite(targetPad.x) && Number.isFinite(targetPad.z)) {
        avatar.position.x = targetPad.x;
        avatar.position.z = targetPad.z;
        if (Number.isFinite(targetPad.y)) {
          avatar.position.y = targetPad.y;
        }
      }
      student.speed = 0;
      forcedYaw = Number.isFinite(student.assignedPadFacingYaw) ? student.assignedPadFacingYaw : Math.PI;
    } else if (NPC_STREAM_ENABLED && avatar.userData.isStreetWalker) {
      avatar.position.y = STREET_PATH_SURFACE_Y;
      if (isNetworkStreetCharacter(student)) {
        syncNetworkStreetCharacterMotion(student);
      } else {
        student.direction = 1;
        moveStepZ = Math.max(0, student.speed) * dt;
        avatar.position.z += moveStepZ;
        if (avatar.position.z >= student.maxZ) {
          scene.remove(avatar);
          studentNpcs.splice(index, 1);
          index -= 1;
          continue;
        }
      }
    } else if (isLeoNpc && leoState === LEO_STATE_WALK_TO_PAD) {
      const padPosition = getAssignedPadWorldPosition(leoTargetPadPosition);
      if (padPosition) {
        const toX = padPosition.x - avatar.position.x;
        const toZ = padPosition.z - avatar.position.z;
        const distanceToPad = Math.hypot(toX, toZ);
        if (distanceToPad <= LEO_PAD_REACH_DISTANCE) {
          avatar.position.x = padPosition.x;
          avatar.position.z = padPosition.z;
          student.speed = 0;
          setLeoState(LEO_STATE_GENERATING, true);
        } else {
          const moveDistance = Math.min(distanceToPad, LEO_WALK_TO_PAD_SPEED * dt);
          moveStepX = (toX / distanceToPad) * moveDistance;
          moveStepZ = (toZ / distanceToPad) * moveDistance;
          avatar.position.x += moveStepX;
          avatar.position.z += moveStepZ;
          student.speed = LEO_WALK_TO_PAD_SPEED;
          student.direction = moveStepZ >= 0 ? 1 : -1;
        }
      } else {
        student.speed = 0;
      }
    } else if (isLeoNpc && leoState === LEO_STATE_GENERATING) {
      const padPosition = getAssignedPadWorldPosition(leoTargetPadPosition);
      if (padPosition) {
        avatar.position.x = padPosition.x;
        avatar.position.z = padPosition.z;
      }
      student.speed = 0;
    } else {
      moveStepZ = student.direction * student.speed * dt;
      avatar.position.z += moveStepZ;
      if (avatar.position.z >= student.maxZ) {
        avatar.position.z = student.maxZ;
        student.direction = -1;
      } else if (avatar.position.z <= student.minZ) {
        avatar.position.z = student.minZ;
        student.direction = 1;
      }
    }

    const movementDistance = Math.hypot(moveStepX, moveStepZ);
    const planarSpeed = dt > 0 ? movementDistance / dt : 0;
    const moving = planarSpeed > 0.02;
    const moveBlend = Math.min(1, planarSpeed / WALK_SPEED);
    if (moving) {
      student.walkCycle += dt * (4.1 + moveBlend * 4.9);
    }
    student.idleCycle += dt * 2.4;

    let targetLeftArmX = 0;
    let targetRightArmX = 0;
    let targetLeftLegX = 0;
    let targetRightLegX = 0;
    let targetTorsoY = TORSO_BASE_Y;
    let targetHeadY = HEAD_BASE_Y;
    let targetTorsoTilt = 0;

    if (moving) {
      const swing = Math.sin(student.walkCycle) * 0.55 * moveBlend;
      const bob = Math.sin(student.walkCycle * 2) * 0.04 * moveBlend;
      targetLeftArmX = swing;
      targetRightArmX = -swing;
      targetLeftLegX = -swing;
      targetRightLegX = swing;
      targetTorsoY = TORSO_BASE_Y + bob;
      targetHeadY = HEAD_BASE_Y + bob * 0.35;
      targetTorsoTilt = Math.cos(student.walkCycle) * 0.018 * moveBlend;
    } else {
      const breathe = Math.sin(student.idleCycle) * 0.03;
      targetLeftArmX = 0.05 + breathe;
      targetRightArmX = -0.05 - breathe;
      targetTorsoY = TORSO_BASE_Y + breathe * 0.4;
      targetHeadY = HEAD_BASE_Y + breathe * 0.25;
    }

    const animLerp = Math.min(1, dt * 10);
    avatar.userData.leftArm.rotation.x += (targetLeftArmX - avatar.userData.leftArm.rotation.x) * animLerp;
    avatar.userData.rightArm.rotation.x += (targetRightArmX - avatar.userData.rightArm.rotation.x) * animLerp;
    avatar.userData.leftLeg.rotation.x += (targetLeftLegX - avatar.userData.leftLeg.rotation.x) * animLerp;
    avatar.userData.rightLeg.rotation.x += (targetRightLegX - avatar.userData.rightLeg.rotation.x) * animLerp;
    avatar.userData.torso.position.y += (targetTorsoY - avatar.userData.torso.position.y) * animLerp;
    avatar.userData.head.position.y += (targetHeadY - avatar.userData.head.position.y) * animLerp;
    avatar.userData.torso.rotation.x += (targetTorsoTilt - avatar.userData.torso.rotation.x) * animLerp;

    let desiredYaw = forcedYaw !== null ? forcedYaw : student.direction > 0 ? 0 : Math.PI;
    if (moving && forcedYaw === null) {
      desiredYaw = Math.atan2(moveStepX, moveStepZ);
    }
    if (forcedYaw !== null) {
      avatar.rotation.y = desiredYaw;
    } else {
      avatar.rotation.y = lerpAngle(avatar.rotation.y, desiredYaw, Math.min(1, dt * 14));
    }
  }
}

function updateLeoPurchaseAndIncome(dt) {
  if (NPC_SHOWCASE_MODE) {
    leoBuyHoldTimer = 0;
    setInteractionPrompt("");
    return;
  }

  if (!running || isMenuOpen()) {
    leoBuyHoldTimer = 0;
    setInteractionPrompt("");
    return;
  }

  const activeSlot = getActiveSaveSlot();
  if (!activeSlot) {
    leoBuyHoldTimer = 0;
    setInteractionPrompt("");
    return;
  }
  ensureSlotBaseAssignment(activeSlot, activeSaveSlotIndex);

  if (leoState === LEO_STATE_GENERATING) {
    setInteractionPrompt("");
    leoIncomeAccumulator += dt;
    let generatedDollars = 0;
    while (leoIncomeAccumulator >= 1) {
      leoIncomeAccumulator -= 1;
      generatedDollars += PAD_INCOME_PER_SECOND;
    }
    if (generatedDollars > 0) {
      activeSlot.money = clampInt(activeSlot.money + generatedDollars, 0, MAX_CURRENCY_VALUE, activeSlot.money);
      saveSaveSlotsToStorage();
      renderSaveSlotsUi();
    }
    return;
  }

  if (leoState === LEO_STATE_WALK_TO_PAD) {
    leoBuyHoldTimer = 0;
    setInteractionPrompt("");
    return;
  }

  const leoNpc = getLeoNpc();
  if (!leoNpc || !leoNpc.avatar) {
    leoBuyHoldTimer = 0;
    setInteractionPrompt("");
    return;
  }

  const dx = leoNpc.avatar.position.x - player.position.x;
  const dz = leoNpc.avatar.position.z - player.position.z;
  const distance = Math.hypot(dx, dz);
  if (distance > LEO_INTERACTION_DISTANCE) {
    leoBuyHoldTimer = 0;
    setInteractionPrompt("");
    return;
  }

  if (activeSlot.money < LEO_COST) {
    leoBuyHoldTimer = 0;
    setInteractionPrompt(`buy ($${LEO_COST})`);
    return;
  }

  if (keyState.e) {
    leoBuyHoldTimer = Math.min(LEO_HOLD_TO_BUY_SECONDS, leoBuyHoldTimer + dt);
  } else {
    leoBuyHoldTimer = 0;
  }

  const holdPercent = clampInt((leoBuyHoldTimer / LEO_HOLD_TO_BUY_SECONDS) * 100, 0, 100, 0);
  setInteractionPrompt(holdPercent > 0 ? `Buy Leo (E) ${holdPercent}%` : "Buy Leo (E)");

  if (leoBuyHoldTimer >= LEO_HOLD_TO_BUY_SECONDS) {
    activeSlot.money = clampInt(activeSlot.money - LEO_COST, 0, MAX_CURRENCY_VALUE, activeSlot.money);
    setLeoState(LEO_STATE_WALK_TO_PAD, false);
    grantIndexCollectedEntry(activeSlot, LEO_NAME, VARIANT_NORMAL);
    saveSaveSlotsToStorage();
    renderSaveSlotsUi();
    leoBuyHoldTimer = 0;
    setInteractionPrompt("");
  }
}

function isPlayerOnIncomePad(baseIndex, padIndex) {
  if (!Number.isInteger(baseIndex) || !Number.isInteger(padIndex)) {
    return false;
  }
  const basePad = streetBasePads[baseIndex];
  if (!basePad || !Array.isArray(basePad.incomePads)) {
    return false;
  }
  if (padIndex < 0 || padIndex >= basePad.incomePads.length) {
    return false;
  }

  const padMesh = basePad.incomePads[padIndex];
  if (!padMesh || !padMesh.isMesh || !padMesh.geometry) {
    return false;
  }
  if (!padMesh.geometry.boundingBox) {
    padMesh.geometry.computeBoundingBox();
  }
  const bounds = padMesh.geometry.boundingBox;
  if (!bounds) {
    return false;
  }

  padMesh.updateWorldMatrix(true, false);
  tmpPadCollectLocal.copy(player.position);
  padMesh.worldToLocal(tmpPadCollectLocal);

  const horizontalMargin = PLAYER_COLLIDER_RADIUS * 0.4;
  const withinX = tmpPadCollectLocal.x >= bounds.min.x - horizontalMargin && tmpPadCollectLocal.x <= bounds.max.x + horizontalMargin;
  const withinZ = tmpPadCollectLocal.z >= bounds.min.z - horizontalMargin && tmpPadCollectLocal.z <= bounds.max.z + horizontalMargin;
  const withinY = tmpPadCollectLocal.y >= bounds.min.y - 0.5 && tmpPadCollectLocal.y <= bounds.max.y + PLAYER_STEP_HEIGHT + 0.75;
  return withinX && withinZ && withinY;
}

function updateNpcBuyingAndIncome(dt) {
  const activeSlot = getActiveSaveSlot();
  if (!activeSlot) {
    closeAdonisShop();
    npcBuyHoldTimer = 0;
    npcBuyTargetId = 0;
    npcSellHoldTimer = 0;
    npcSellTargetId = 0;
    setInteractionPrompt("");
    return;
  }

  ensureSlotBaseAssignment(activeSlot, activeSaveSlotIndex);
  const cashMultiplier = getSlotCashMultiplier(activeSlot);

  for (const student of studentNpcs) {
    if (!student || student.purchaseState !== "generating" || !student.avatar || !student.avatar.userData) {
      continue;
    }
    const incomePerSecond = clampInt(student.avatar.userData.npcIncomePerSecond, 0, MAX_CURRENCY_VALUE, 0);
    if (incomePerSecond <= 0) {
      continue;
    }
    student.incomeAccumulator = Math.max(0, (student.incomeAccumulator || 0) + dt);
    while (student.incomeAccumulator >= 1) {
      student.incomeAccumulator -= 1;
      const exactPayout = incomePerSecond * cashMultiplier + (student.incomePayoutCarry || 0);
      const wholePayout = Math.floor(exactPayout);
      student.incomePayoutCarry = Math.max(0, exactPayout - wholePayout);
      if (wholePayout > 0) {
        student.pendingMoney = (student.pendingMoney || 0) + wholePayout;
      }
    }
    updateNpcInfoTag(student);
  }

  collectNearbyIncomeFromPads();

  if (!running || isMenuOpen() || isRebirthOverlayOpen()) {
    npcBuyHoldTimer = 0;
    npcBuyTargetId = 0;
    npcSellHoldTimer = 0;
    npcSellTargetId = 0;
    if (isSellConfirmOpen()) {
      closeSellConfirmModal();
    }
    setInteractionPrompt("");
    return;
  }

  if (isSellConfirmOpen()) {
    npcBuyHoldTimer = 0;
    npcBuyTargetId = 0;
    npcSellHoldTimer = 0;
    npcSellTargetId = 0;
    setInteractionPrompt("");
    return;
  }

  if (updateAdonisShopInteraction()) {
    return;
  }

  const sellTarget = getNearestSellableNpcForActiveSlot();
  if (sellTarget && sellTarget.avatar && sellTarget.avatar.userData) {
    if (npcSellTargetId !== sellTarget.id) {
      npcSellTargetId = sellTarget.id;
      npcSellHoldTimer = 0;
    }
    if (keyState.f) {
      npcSellHoldTimer = Math.min(NPC_SELL_HOLD_SECONDS, npcSellHoldTimer + dt);
    } else {
      npcSellHoldTimer = 0;
    }

    const holdPercent = clampInt((npcSellHoldTimer / NPC_SELL_HOLD_SECONDS) * 100, 0, 100, 0);
    setInteractionPrompt(holdPercent > 0 ? `Sell Classmate (F) ${holdPercent}%` : "Sell Classmate (F)");

    if (npcSellHoldTimer >= NPC_SELL_HOLD_SECONDS) {
      openSellConfirmModal(sellTarget);
      npcSellHoldTimer = 0;
      npcSellTargetId = 0;
      setInteractionPrompt("");
    }
    return;
  }

  npcSellHoldTimer = 0;
  npcSellTargetId = 0;

  const targetNpc = getNearestBuyableStreetNpc();
  if (!targetNpc || !targetNpc.avatar || !targetNpc.avatar.userData) {
    npcBuyHoldTimer = 0;
    npcBuyTargetId = 0;
    setInteractionPrompt("");
    return;
  }

  const cost = clampInt(targetNpc.avatar.userData.npcCost, 0, MAX_CURRENCY_VALUE, 0);
  const displayName = String(targetNpc.avatar.userData.npcBaseName || targetNpc.avatar.userData.npcDisplayName || "Student");

  if (isMultiplayerStreetAuthorityEnabled() && multiplayerPendingPurchaseCharacterId) {
    setInteractionPrompt(`Buying ${displayName}...`);
    return;
  }

  if (activeSlot.money < cost) {
    npcBuyHoldTimer = 0;
    npcBuyTargetId = targetNpc.id;
    setInteractionPrompt(`Buy ${displayName} (E)`);
    return;
  }

  if (npcBuyTargetId !== targetNpc.id) {
    npcBuyHoldTimer = 0;
    npcBuyTargetId = targetNpc.id;
  }

  if (keyState.e) {
    npcBuyHoldTimer = Math.min(NPC_BUY_HOLD_SECONDS, npcBuyHoldTimer + dt);
  } else {
    npcBuyHoldTimer = 0;
  }

  const holdPercent = clampInt((npcBuyHoldTimer / NPC_BUY_HOLD_SECONDS) * 100, 0, 100, 0);
  setInteractionPrompt(holdPercent > 0 ? `Buy ${displayName} (E) ${holdPercent}%` : `Buy ${displayName} (E)`);

  if (npcBuyHoldTimer < NPC_BUY_HOLD_SECONDS) {
    return;
  }

  const freePad = getFreeIncomePadForActiveSlot();
  if (!freePad) {
    npcBuyHoldTimer = 0;
    showTemporaryInteractionPrompt("You base is full.", "error", 1.4);
    return;
  }

  npcBuyHoldTimer = 0;
  npcBuyTargetId = 0;
  setInteractionPrompt("");

  if (isMultiplayerStreetAuthorityEnabled() && isNetworkStreetCharacter(targetNpc) && multiplayerSocket && multiplayerConnected) {
    const networkCharacterId = targetNpc.avatar.userData.networkCharacterId;
    if (networkCharacterId) {
      multiplayerPendingPurchaseCharacterId = networkCharacterId;
      multiplayerPendingPurchaseNpcId = targetNpc.id;
      multiplayerSocket.emit("streetCharacter:buyAttempt", {
        characterId: networkCharacterId,
      });
      return;
    }
  }

  finalizeStreetNpcPurchase(targetNpc);
}

function setAvatarSkinTone(colorHex) {
  player.userData.skinTone = colorHex;
  const skinMaterials = player.userData.skinMaterials || [];
  skinMaterials.forEach((material) => material.color.set(colorHex));

  const headMaterial = player.userData.headMaterial;
  if (!headMaterial) {
    return;
  }
  if (headMaterial.map) {
    headMaterial.map.dispose();
    headMaterial.map = null;
  }
  headMaterial.color.set(colorHex);
  headMaterial.needsUpdate = true;
  if (!suspendAvatarPreviewSync) {
    syncAvatarPreview2D();
  }
}

function setAvatarFace(faceStyle) {
  const faceMaterial = player.userData.faceMaterial;
  if (!faceMaterial) {
    return;
  }

  if (faceMaterial.map) {
    faceMaterial.map.dispose();
  }
  faceMaterial.map = createFaceTexture(faceStyle);
  faceMaterial.needsUpdate = true;
  player.userData.faceStyle = faceStyle;
  if (!suspendAvatarPreviewSync) {
    syncAvatarPreview2D();
  }
}

function setAvatarHairStyle(hairStyle) {
  const hairAnchor = player.userData.hairAnchor;
  if (!hairAnchor) {
    return;
  }

  if (player.userData.hairMesh) {
    hairAnchor.remove(player.userData.hairMesh);
    disposeMeshResources(player.userData.hairMesh);
    player.userData.hairMesh = null;
  }

  let nextHairMesh = null;
  try {
    nextHairMesh = createHairMesh(hairStyle, player.userData.hairColor || DEFAULT_HAIR_COLOR);
  } catch (error) {
    console.error("Hair style update failed", error);
  }
  if (nextHairMesh) {
    hairAnchor.add(nextHairMesh);
  }

  player.userData.hairMesh = nextHairMesh;
  player.userData.hairStyle = hairStyle;

  const headMaterial = player.userData.headMaterial;
  if (headMaterial) {
    if (headMaterial.map) {
      headMaterial.map.dispose();
      headMaterial.map = null;
    }
    headMaterial.color.set(player.userData.skinTone || DEFAULT_SKIN_TONE);
    headMaterial.needsUpdate = true;
  }
  if (!suspendAvatarPreviewSync) {
    syncAvatarPreview2D();
  }
}

function setAvatarHairColor(colorHex) {
  player.userData.hairColor = colorHex;
  if (!player.userData.hairMesh) {
    if (!suspendAvatarPreviewSync) {
      syncAvatarPreview2D();
    }
    return;
  }

  player.userData.hairMesh.traverse((node) => {
    if (!node.isMesh || !node.material || !node.material.color) {
      return;
    }
    node.material.color.set(colorHex);
  });
  if (!suspendAvatarPreviewSync) {
    syncAvatarPreview2D();
  }
}

function setAvatarShirtColor(colorHex) {
  player.userData.shirtColor = colorHex;
  if (player.userData.shirtMaterial) {
    player.userData.shirtMaterial.color.set(colorHex);
  }
  if (!suspendAvatarPreviewSync) {
    syncAvatarPreview2D();
  }
}

function setAvatarPantsColor(colorHex) {
  player.userData.pantsColor = colorHex;
  if (player.userData.pantMaterial) {
    player.userData.pantMaterial.color.set(colorHex);
  }
  if (!suspendAvatarPreviewSync) {
    syncAvatarPreview2D();
  }
}

function setAvatarNameTag(nameValue) {
  if (!player || !player.userData || !player.userData.nameTagSprite) {
    return;
  }

  try {
    applyNameTagToAvatar(player, nameValue, 1.15, 6.2);
    if (!suspendAvatarPreviewSync) {
      syncAvatarPreview2D();
    }
  } catch (error) {
    console.error("Nametag update failed", error);
  }
}

function getLeo3DAvatars() {
  const avatars = [];
  for (const npc of studentNpcs) {
    if (!npc || !npc.avatar || !npc.avatar.userData || !npc.avatar.userData.isLeo3D) {
      continue;
    }
    avatars.push(npc.avatar);
  }
  return avatars;
}

function setLeoFaceExpression(faceStyle, updateControl = true) {
  const safeFaceStyle = FACE_OPTIONS.includes(faceStyle) ? faceStyle : DEFAULT_LEO_FACE;
  leoFaceExpression = safeFaceStyle;

  const leoAvatars = getLeo3DAvatars();
  leoAvatars.forEach((avatar) => {
    avatar.userData.leoFaceExpression = safeFaceStyle;
    applyLeo2DFaceToAvatar(avatar);
  });

  if (updateControl && leoFaceSelectEl) {
    leoFaceSelectEl.value = safeFaceStyle;
  }
}

function setLeoSmilePercent(value, updateControl = true) {
  const safeSmile = clampInt(value, 1, 100, DEFAULT_LEO_SMILE);
  leoSmilePercent = safeSmile;

  const leoAvatars = getLeo3DAvatars();
  leoAvatars.forEach((avatar) => {
    avatar.userData.leoSmilePercent = safeSmile;
    applyLeo2DFaceToAvatar(avatar);
  });

  if (updateControl && leoSmileRangeEl) {
    leoSmileRangeEl.value = String(safeSmile);
  }
  if (leoSmileValueEl) {
    leoSmileValueEl.textContent = String(safeSmile);
  }
}

function randomFrom(options) {
  return options[Math.floor(Math.random() * options.length)];
}

function randomizeAvatar() {
  const skinTone = randomFrom(SKIN_TONE_OPTIONS);
  const faceStyle = randomFrom(FACE_OPTIONS);
  const hairStyle = randomFrom(HAIR_STYLE_OPTIONS);
  const hairColor = randomFrom(HAIR_COLOR_OPTIONS);
  const shirtColor = randomFrom(SHIRT_COLOR_OPTIONS);
  const pantsColor = randomFrom(PANTS_COLOR_OPTIONS);

  setAvatarSkinTone(skinTone);
  setAvatarFace(faceStyle);
  setAvatarHairStyle(hairStyle);
  setAvatarHairColor(hairColor);
  setAvatarShirtColor(shirtColor);
  setAvatarPantsColor(pantsColor);

  if (skinToneSelectEl) {
    skinToneSelectEl.value = skinTone;
  }
  if (faceSelectEl) {
    faceSelectEl.value = faceStyle;
  }
  if (hairStyleSelectEl) {
    hairStyleSelectEl.value = hairStyle;
  }
  if (hairColorInputEl) {
    hairColorInputEl.value = hairColor;
  }
  if (shirtColorInputEl) {
    shirtColorInputEl.value = shirtColor;
  }
  if (pantsColorInputEl) {
    pantsColorInputEl.value = pantsColor;
  }
}

function initCustomizerControls() {
  if (skinToneSelectEl) {
    skinToneSelectEl.value = DEFAULT_SKIN_TONE;
    skinToneSelectEl.addEventListener("input", (event) => {
      setAvatarSkinTone(event.target.value);
    });
  }

  if (faceSelectEl) {
    faceSelectEl.value = DEFAULT_FACE;
    faceSelectEl.addEventListener("change", (event) => {
      setAvatarFace(event.target.value);
    });
  }

  if (leoFaceSelectEl) {
    leoFaceSelectEl.value = DEFAULT_LEO_FACE;
    leoFaceSelectEl.addEventListener("change", (event) => {
      setLeoFaceExpression(event.target.value, false);
    });
  }

  if (leoSmileRangeEl) {
    leoSmileRangeEl.value = String(DEFAULT_LEO_SMILE);
    leoSmileRangeEl.addEventListener("input", (event) => {
      setLeoSmilePercent(event.target.value, false);
    });
    leoSmileRangeEl.addEventListener("change", (event) => {
      setLeoSmilePercent(event.target.value, false);
    });
  }
  if (leoSmileValueEl) {
    leoSmileValueEl.textContent = String(DEFAULT_LEO_SMILE);
  }

  if (hairStyleSelectEl) {
    hairStyleSelectEl.value = DEFAULT_HAIR_STYLE;
    hairStyleSelectEl.addEventListener("change", (event) => {
      setAvatarHairStyle(event.target.value);
    });
  }

  if (hairColorInputEl) {
    hairColorInputEl.value = DEFAULT_HAIR_COLOR;
    hairColorInputEl.addEventListener("input", (event) => {
      setAvatarHairColor(event.target.value);
    });
  }

  if (shirtColorInputEl) {
    shirtColorInputEl.value = DEFAULT_SHIRT_COLOR;
    shirtColorInputEl.addEventListener("input", (event) => {
      setAvatarShirtColor(event.target.value);
    });
  }

  if (pantsColorInputEl) {
    pantsColorInputEl.value = DEFAULT_PANTS_COLOR;
    pantsColorInputEl.addEventListener("input", (event) => {
      setAvatarPantsColor(event.target.value);
    });
  }

  if (nametagInputEl) {
    nametagInputEl.value = DEFAULT_NAMETAG;
    nametagInputEl.addEventListener("input", (event) => {
      setAvatarNameTag(event.target.value);
    });
    nametagInputEl.addEventListener("change", (event) => {
      const safeName = sanitizeNameTag(event.target.value);
      event.target.value = safeName;
      setAvatarNameTag(safeName);
    });
  }

  if (randomizeAvatarBtnEl) {
    randomizeAvatarBtnEl.addEventListener("click", () => {
      randomizeAvatar();
    });
  }

  setAvatarSkinTone(DEFAULT_SKIN_TONE);
  setAvatarFace(DEFAULT_FACE);
  setAvatarHairStyle(DEFAULT_HAIR_STYLE);
  setAvatarHairColor(DEFAULT_HAIR_COLOR);
  setAvatarShirtColor(DEFAULT_SHIRT_COLOR);
  setAvatarPantsColor(DEFAULT_PANTS_COLOR);
  setAvatarNameTag(DEFAULT_NAMETAG);
  setLeoFaceExpression(DEFAULT_LEO_FACE);
  setLeoSmilePercent(DEFAULT_LEO_SMILE);
}

function moveToward(current, target, delta) {
  if (Math.abs(target - current) <= delta) {
    return target;
  }
  return current + Math.sign(target - current) * delta;
}

function lerpAngle(from, to, alpha) {
  const diff = ((to - from + Math.PI) % (Math.PI * 2)) - Math.PI;
  return from + diff * alpha;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function smoothstep01(value) {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
}

function isMenuOpen() {
  return Boolean(menuScreenEl && !menuScreenEl.classList.contains("hidden"));
}

function clampInt(value, min, max, fallback) {
  const numberValue = Number(value);
  if (!Number.isFinite(numberValue)) {
    return fallback;
  }
  return Math.max(min, Math.min(max, Math.round(numberValue)));
}

function clampCurrencyValue(value, fallback = 0) {
  return clampInt(value, 0, MAX_CURRENCY_VALUE, fallback);
}

function getActiveSaveSlot() {
  if (activeSaveSlotIndex < 0 || activeSaveSlotIndex >= saveSlots.length) {
    return null;
  }
  return saveSlots[activeSaveSlotIndex] || null;
}

function renderInteractionPrompt(text, tone = "default") {
  if (!interactionPromptEl) {
    return;
  }
  const hasText = typeof text === "string" && text.trim().length > 0;
  interactionPromptEl.textContent = hasText ? text : "";
  interactionPromptEl.classList.toggle("hidden", !hasText);
  interactionPromptEl.classList.toggle("prompt-error", hasText && tone === "error");
}

function refreshInteractionPrompt() {
  const hasOverride = interactionPromptOverrideTimer > 0 && interactionPromptOverrideText.trim().length > 0;
  renderInteractionPrompt(
    hasOverride ? interactionPromptOverrideText : interactionPromptText,
    hasOverride ? interactionPromptOverrideTone : interactionPromptTone
  );
}

function setInteractionPrompt(text, tone = "default") {
  interactionPromptText = typeof text === "string" ? text : "";
  interactionPromptTone = tone === "error" ? "error" : "default";
  refreshInteractionPrompt();
}

function showTemporaryInteractionPrompt(text, tone = "default", duration = 1.2) {
  interactionPromptOverrideText = typeof text === "string" ? text : "";
  interactionPromptOverrideTone = tone === "error" ? "error" : "default";
  interactionPromptOverrideTimer = Math.max(0, Number.isFinite(duration) ? duration : 0);
  refreshInteractionPrompt();
}

function updateInteractionPromptOverride(dt) {
  if (!(interactionPromptOverrideTimer > 0)) {
    return;
  }
  interactionPromptOverrideTimer = Math.max(0, interactionPromptOverrideTimer - Math.max(0, dt));
  if (interactionPromptOverrideTimer === 0) {
    interactionPromptOverrideText = "";
    interactionPromptOverrideTone = "default";
  }
  refreshInteractionPrompt();
}

function getStudentNpcById(npcId) {
  if (!Number.isInteger(npcId) || npcId <= 0) {
    return null;
  }
  for (const student of studentNpcs) {
    if (student && student.id === npcId) {
      return student;
    }
  }
  return null;
}

function isSellConfirmOpen() {
  return Boolean(sellConfirmOverlayEl && !sellConfirmOverlayEl.classList.contains("hidden") && sellConfirmNpcId > 0);
}

function isRebirthOverlayOpen() {
  return Boolean(rebirthOverlayEl && !rebirthOverlayEl.classList.contains("hidden"));
}

function isAdonisShopOpen() {
  return Boolean(adonisShopOverlayEl && !adonisShopOverlayEl.classList.contains("hidden"));
}

function isOfflineIncomePopupOpen() {
  return Boolean(offlineIncomeOverlayEl && !offlineIncomeOverlayEl.classList.contains("hidden"));
}

function isIndexOverlayOpen() {
  return Boolean(indexOverlayEl && !indexOverlayEl.classList.contains("hidden"));
}

function isBlockingGameplayOverlayOpen() {
  return (
    isSellConfirmOpen() ||
    isRebirthOverlayOpen() ||
    isAdonisShopOpen() ||
    isIndexOverlayOpen() ||
    isOfflineIncomePopupOpen() ||
    isUsernameRequiredOverlayOpen() ||
    isSecondaryTabBlocked()
  );
}

function closeOfflineIncomePopup() {
  if (offlineIncomeOverlayEl) {
    offlineIncomeOverlayEl.classList.add("hidden");
  }
}

function formatOfflineDuration(totalSeconds) {
  const safeSeconds = clampInt(totalSeconds, 0, OFFLINE_INCOME_MAX_SECONDS, 0);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;
  const parts = [];
  if (hours > 0) {
    parts.push(`${hours} hour${hours === 1 ? "" : "s"}`);
  }
  if (minutes > 0) {
    parts.push(`${minutes} minute${minutes === 1 ? "" : "s"}`);
  }
  if (!parts.length) {
    parts.push(`${Math.max(1, seconds)} second${seconds === 1 ? "" : "s"}`);
  }
  return parts.length > 1 ? `${parts[0]} and ${parts[1]}` : parts[0];
}

function showOfflineIncomePopup(offlineSeconds, offlineEarnings) {
  if (!offlineIncomeOverlayEl || !offlineIncomeTextEl) {
    return;
  }
  const safeSeconds = clampInt(offlineSeconds, 0, OFFLINE_INCOME_MAX_SECONDS, 0);
  const safeEarnings = clampCurrencyValue(offlineEarnings, 0);
  if (safeSeconds <= 0 || safeEarnings <= 0) {
    closeOfflineIncomePopup();
    return;
  }
  if (offlineIncomeTitleEl) {
    offlineIncomeTitleEl.textContent = "Offline Income";
  }
  offlineIncomeTextEl.textContent = `You were away for ${formatOfflineDuration(safeSeconds)} and earned $${safeEarnings.toLocaleString("en-US")}!`;
  offlineIncomeOverlayEl.classList.remove("hidden");
}

function updateAdonisShopMessageDisplay() {
  if (!adonisShopMessageEl) {
    return;
  }
  const hasText = typeof adonisShopMessageText === "string" && adonisShopMessageText.trim().length > 0;
  adonisShopMessageEl.textContent = hasText ? adonisShopMessageText : "";
  adonisShopMessageEl.classList.toggle("hidden", !hasText);
  adonisShopMessageEl.classList.toggle("is-success", hasText && adonisShopMessageTone === "success");
  adonisShopMessageEl.classList.toggle("is-error", hasText && adonisShopMessageTone === "error");
  adonisShopMessageEl.classList.toggle("is-info", hasText && adonisShopMessageTone === "info");
}

function setAdonisShopMessage(text, tone = "info", duration = 2.6) {
  adonisShopMessageText = typeof text === "string" ? text.trim() : "";
  adonisShopMessageTone = tone === "success" || tone === "error" ? tone : "info";
  adonisShopMessageTimer = adonisShopMessageText ? Math.max(0, Number(duration) || 0) : 0;
  updateAdonisShopMessageDisplay();
}

function closeIndexOverlay() {
  if (indexOverlayEl) {
    indexOverlayEl.classList.add("hidden");
  }
  indexUiSignature = "";
}

function renderIndexOverlay() {
  const activeSlot = getActiveSaveSlot();
  if (!activeSlot) {
    if (indexProgressTextEl) {
      indexProgressTextEl.textContent = `0/${INDEX_TOTAL_COMBINATIONS} collected`;
    }
    if (indexBonusTextEl) {
      indexBonusTextEl.textContent = "Permanent bonus: +0.00x";
    }
    if (indexGridEl) {
      indexGridEl.replaceChildren();
    }
    indexUiSignature = getIndexUiSignature(activeSlot);
    return;
  }

  const collectedEntries = getSlotIndexCollected(activeSlot);
  const collectedEntrySet = new Set(collectedEntries);
  const totalCollected = collectedEntries.length;
  const totalBonus = getSlotIndexBonusMultiplier(activeSlot);

  if (indexProgressTextEl) {
    indexProgressTextEl.textContent = `${totalCollected}/${INDEX_TOTAL_COMBINATIONS} collected`;
  }
  if (indexBonusTextEl) {
    indexBonusTextEl.textContent = `Permanent bonus: +${totalBonus.toFixed(2)}x`;
  }
  if (!indexGridEl) {
    indexUiSignature = getIndexUiSignature(activeSlot);
    return;
  }

  indexGridEl.replaceChildren();

  for (let characterIndex = 0; characterIndex < INDEX_TRACKED_CHARACTER_NAMES.length; characterIndex += 1) {
    const npcName = INDEX_TRACKED_CHARACTER_NAMES[characterIndex];
    const npcRarity = getNpcRarityForName(npcName);
    const rarityColor = getNpcRarityTextColor(npcRarity);
    const completionCount = getSlotIndexCompletionCountForCharacter(activeSlot, npcName);
    const completionPercent = Math.round((completionCount / INDEX_COMPLETION_VARIANT_IDS.length) * 100);

    const rowEl = document.createElement("section");
    rowEl.className = "index-row";

    const rowHeaderEl = document.createElement("div");
    rowHeaderEl.className = "index-row-header";

    const rowNameEl = document.createElement("div");
    rowNameEl.className = "index-row-name";
    rowNameEl.textContent = npcName;
    rowNameEl.style.color = rarityColor;

    const rowProgressEl = document.createElement("div");
    rowProgressEl.className = "index-row-progress";
    rowProgressEl.textContent = `${npcName}: ${completionCount}/${INDEX_COMPLETION_VARIANT_IDS.length} (${completionPercent}%)`;

    rowHeaderEl.append(rowNameEl, rowProgressEl);

    const rowCellsEl = document.createElement("div");
    rowCellsEl.className = "index-row-cells";

    for (let variantIndex = 0; variantIndex < INDEX_COMPLETION_VARIANT_IDS.length; variantIndex += 1) {
      const variantId = INDEX_COMPLETION_VARIANT_IDS[variantIndex];
      const variant = getNpcVariantDefinition(variantId);
      const entryKey = buildIndexCollectedKey(npcName, variantId);
      const isCollected = collectedEntrySet.has(entryKey);

      const cellEl = document.createElement("article");
      cellEl.className = `index-cell ${isCollected ? "is-collected" : "is-locked"}`;
      cellEl.style.setProperty("--index-accent", rarityColor);

      const nameEl = document.createElement("div");
      nameEl.className = "index-cell-name";
      nameEl.textContent = npcName;

      const variantEl = document.createElement("div");
      variantEl.className = "index-cell-variant";
      variantEl.textContent = variant.label;

      const stateEl = document.createElement("div");
      stateEl.className = "index-cell-state";
      stateEl.textContent = isCollected ? "Collected" : "Locked";

      cellEl.append(nameEl, variantEl, stateEl);

      if (!isCollected) {
        const lockEl = document.createElement("span");
        lockEl.className = "index-lock-icon";
        lockEl.setAttribute("aria-hidden", "true");
        lockEl.textContent = "🔒";
        cellEl.appendChild(lockEl);
      }

      rowCellsEl.appendChild(cellEl);
    }

    rowEl.append(rowHeaderEl, rowCellsEl);
    indexGridEl.appendChild(rowEl);
  }

  indexUiSignature = getIndexUiSignature(activeSlot);
}

function openIndexOverlay() {
  if (!indexOverlayEl || !running || isMenuOpen() || !getActiveSaveSlot()) {
    return;
  }
  closeSellConfirmModal();
  closeRebirthOverlay();
  closeAdonisShop();
  clearInputState();
  setInteractionPrompt("");
  renderIndexOverlay();
  indexOverlayEl.classList.remove("hidden");
}

function updateIndexUi() {
  const shouldShowDock = Boolean(running && !isMenuOpen() && !isSecondaryTabBlocked() && getActiveSaveSlot());
  if (indexDockEl) {
    indexDockEl.classList.toggle("hidden", !shouldShowDock);
  }
  if (!shouldShowDock) {
    closeIndexOverlay();
    return;
  }
  if (!isIndexOverlayOpen()) {
    return;
  }
  const activeSlot = getActiveSaveSlot();
  const nextSignature = getIndexUiSignature(activeSlot);
  if (nextSignature !== indexUiSignature) {
    renderIndexOverlay();
  }
}

function updateAdonisShopMessage(dt) {
  if (!(adonisShopMessageTimer > 0)) {
    return;
  }
  adonisShopMessageTimer = Math.max(0, adonisShopMessageTimer - Math.max(0, Number(dt) || 0));
  if (adonisShopMessageTimer === 0) {
    adonisShopMessageText = "";
    adonisShopMessageTone = "default";
    updateAdonisShopMessageDisplay();
  }
}

function closeAdonisShop() {
  if (adonisShopOverlayEl) {
    adonisShopOverlayEl.classList.add("hidden");
  }
  setAdonisShopMessage("", "info", 0);
}

function renderAdonisShopUi() {
  if (adonisShopTitleEl) {
    adonisShopTitleEl.textContent = ADONIS_SHOP_UI_TEXT.title;
  }
  if (adonisShopSubtitleEl) {
    adonisShopSubtitleEl.textContent = ADONIS_SHOP_UI_TEXT.subtitle;
  }
  if (!adonisShopListEl) {
    updateAdonisShopMessageDisplay();
    return;
  }

  const slot = getActiveSaveSlot();
  adonisShopListEl.innerHTML = "";

  for (let i = 0; i < ADONIS_SHOP_ITEM_ORDER.length; i += 1) {
    const itemId = ADONIS_SHOP_ITEM_ORDER[i];
    const itemConfig = getAdonisShopItemConfig(itemId);
    if (!itemConfig) {
      continue;
    }

    const unlockedForSale = isAdonisShopItemUnlockedForSlot(slot, itemId);
    const ownsItem = slotOwnsAdonisShopItem(slot, itemId);
    const requiredRebirthCount = getAdonisShopRequiredRebirthCount(itemId);
    const itemCardEl = document.createElement("article");
    itemCardEl.className = `adonis-shop-item${ownsItem ? " owned" : ""}${!unlockedForSale ? " locked" : ""}`;

    const nameEl = document.createElement("h3");
    nameEl.className = "adonis-shop-item-title";
    nameEl.textContent = itemConfig.name;
    itemCardEl.appendChild(nameEl);

    const priceEl = document.createElement("p");
    priceEl.className = "adonis-shop-item-price";
    priceEl.textContent = `$${itemConfig.price.toLocaleString("en-US")}`;
    itemCardEl.appendChild(priceEl);

    const descriptionEl = document.createElement("p");
    descriptionEl.className = "adonis-shop-item-description";
    descriptionEl.textContent = unlockedForSale
      ? itemConfig.description
      : `${itemConfig.description} Unlocks after ${getRebirthStageTitleByCount(requiredRebirthCount)}.`;
    itemCardEl.appendChild(descriptionEl);

    const buyButtonEl = document.createElement("button");
    buyButtonEl.type = "button";
    buyButtonEl.className = "adonis-shop-buy-btn";
    buyButtonEl.textContent = ownsItem
      ? "Owned"
      : unlockedForSale
        ? itemConfig.buttonText
        : `Locked (${requiredRebirthCount})`;
    buyButtonEl.disabled = ownsItem || !unlockedForSale;
    buyButtonEl.addEventListener("click", () => {
      purchaseAdonisShopItem(itemId);
    });
    itemCardEl.appendChild(buyButtonEl);

    adonisShopListEl.appendChild(itemCardEl);
  }

  updateAdonisShopMessageDisplay();
}

function purchaseAdonisShopItem(itemId) {
  const activeSlot = getActiveSaveSlot();
  const itemConfig = getAdonisShopItemConfig(itemId);
  if (!activeSlot || !itemConfig) {
    return;
  }

  activeSlot.shopUnlocks = sanitizeAdonisShopUnlocks(activeSlot.shopUnlocks);
  if (!isAdonisShopItemUnlockedForSlot(activeSlot, itemId)) {
    const requiredRebirthCount = getAdonisShopRequiredRebirthCount(itemId);
    setAdonisShopMessage(
      `${ADONIS_SHOP_UI_TEXT.lockedPrefix}${getRebirthStageTitleByCount(requiredRebirthCount)}`,
      "error"
    );
    renderAdonisShopUi();
    return;
  }
  if (slotOwnsAdonisShopItem(activeSlot, itemId)) {
    setAdonisShopMessage(ADONIS_SHOP_UI_TEXT.alreadyOwned, "error");
    renderAdonisShopUi();
    return;
  }

  if (activeSlot.money < itemConfig.price) {
    setAdonisShopMessage(ADONIS_SHOP_UI_TEXT.notEnoughMoney, "error");
    renderAdonisShopUi();
    return;
  }

  activeSlot.money = clampInt(activeSlot.money - itemConfig.price, 0, MAX_CURRENCY_VALUE, activeSlot.money);
  activeSlot.shopUnlocks[itemId] = true;
  saveSaveSlotsToStorage();
  renderSaveSlotsUi();
  renderAdonisShopUi();
  setAdonisShopMessage(`${ADONIS_SHOP_UI_TEXT.purchasedPrefix}${itemConfig.name}!`, "success");
}

function openAdonisShop() {
  if (!adonisShopOverlayEl || !running || isMenuOpen() || !getActiveSaveSlot()) {
    return;
  }
  closeSellConfirmModal();
  closeRebirthOverlay();
  clearInputState();
  setInteractionPrompt("");
  setAdonisShopMessage("", "info", 0);
  renderAdonisShopUi();
  adonisShopOverlayEl.classList.remove("hidden");
}

function createAdonisShopkeeper() {
  const shopAnchor = mapRoot && mapRoot.userData ? mapRoot.userData.adonisShopAnchor : null;
  if (!shopAnchor) {
    return null;
  }
  if (adonisShopkeeper && adonisShopkeeper.parent) {
    adonisShopkeeper.parent.remove(adonisShopkeeper);
  }

  const adonisNpc = createAdonisNpcSafe();
  if (!adonisNpc || !adonisNpc.avatar) {
    return null;
  }

  const avatar = adonisNpc.avatar;
  avatar.scale.setScalar(ADONIS_SHOPKEEPER_AVATAR_SCALE);
  shopAnchor.getWorldPosition(tmpPlacementCenter);
  avatar.position.copy(tmpPlacementCenter);
  const placementMetrics = getAvatarLocalPlacementMetrics(avatar);
  if (placementMetrics) {
    avatar.position.y = tmpPlacementCenter.y - placementMetrics.localBottomY * avatar.scale.y;
  }
  avatar.rotation.y = Math.atan2(NPC_STREAM_LANE_X - tmpPlacementCenter.x, 0);
  avatar.userData.isShopkeeper = true;
  avatar.userData.isStreetWalker = false;
  avatar.userData.isPurchasedNpc = false;
  avatar.userData.purchaseState = "shopkeeper";
  avatar.userData.npcInfoKey = "";
  if (avatar.userData.nameTagSprite) {
    avatar.userData.nameTagSprite.visible = false;
  }
  scene.add(avatar);
  adonisShopkeeper = avatar;
  return avatar;
}

function ensureAdonisShopkeeperExists() {
  if (adonisShopkeeper && adonisShopkeeper.parent) {
    return adonisShopkeeper;
  }
  return createAdonisShopkeeper();
}

function updateAdonisShopInteraction() {
  if (isAdonisShopOpen()) {
    npcBuyHoldTimer = 0;
    npcBuyTargetId = 0;
    npcSellHoldTimer = 0;
    npcSellTargetId = 0;
    setInteractionPrompt("");
    if (!keyState.e) {
      adonisShopInteractHeld = false;
    }
    return true;
  }

  const activeSlot = getActiveSaveSlot();
  const shopkeeper = ensureAdonisShopkeeperExists();
  if (!running || !activeSlot || !shopkeeper) {
    if (!keyState.e) {
      adonisShopInteractHeld = false;
    }
    return false;
  }

  shopkeeper.getWorldPosition(tmpPlacementCenter);
  const distance = Math.hypot(player.position.x - tmpPlacementCenter.x, player.position.z - tmpPlacementCenter.z);
  if (distance > ADONIS_SHOP_INTERACT_DISTANCE) {
    if (!keyState.e) {
      adonisShopInteractHeld = false;
    }
    return false;
  }

  npcBuyHoldTimer = 0;
  npcBuyTargetId = 0;
  npcSellHoldTimer = 0;
  npcSellTargetId = 0;
  setInteractionPrompt(ADONIS_SHOP_PROMPT_TEXT);

  if (keyState.e) {
    if (!adonisShopInteractHeld) {
      adonisShopInteractHeld = true;
      openAdonisShop();
    }
  } else {
    adonisShopInteractHeld = false;
  }
  return true;
}

function getSlotRebirthCount(slot) {
  if (!slot) {
    return 0;
  }
  return clampInt(slot.rebirthCount, 0, REBIRTH_STAGE_CONFIG.length, 0);
}

function getRebirthStageConfigForCount(rebirthCount) {
  const safeRebirthCount = clampInt(rebirthCount, 0, REBIRTH_STAGE_CONFIG.length, 0);
  return REBIRTH_STAGE_CONFIG[safeRebirthCount] || null;
}

function getRebirthMultiplierForCount(rebirthCount) {
  const safeRebirthCount = clampInt(rebirthCount, 0, REBIRTH_STAGE_CONFIG.length, 0);
  if (safeRebirthCount <= 0) {
    return 1;
  }
  const completedStage = REBIRTH_STAGE_CONFIG[safeRebirthCount - 1];
  return completedStage ? Number(completedStage.nextMultiplier.toFixed(4)) : 1;
}

function getCompletedRebirthStages(slot) {
  const completedCount = getSlotRebirthCount(slot);
  if (completedCount <= 0) {
    return [];
  }
  return REBIRTH_STAGE_CONFIG.slice(0, completedCount);
}

function getRebirthRewardProfile(slot) {
  const completedStages = getCompletedRebirthStages(slot);
  let unlockedIncomePadCount = BASE_UNLOCKED_INCOME_PAD_SLOTS;
  let legendaryTimerDurationSeconds = GUARANTEED_SPAWN_TIMER_CONFIG.legendary.durationSeconds;
  let mythicTimerDurationSeconds = GUARANTEED_SPAWN_TIMER_CONFIG.mythic.durationSeconds;
  let rainbowWeightMultiplier = 1;
  const unlockedShopItemIds = new Set();

  for (let i = 0; i < completedStages.length; i += 1) {
    const stage = completedStages[i];
    unlockedIncomePadCount += clampInt(stage.padSlotBonus, 0, 999, 0);
    legendaryTimerDurationSeconds = clampInt(
      stage.legendaryTimerDurationSeconds,
      1,
      999999,
      legendaryTimerDurationSeconds
    );
    mythicTimerDurationSeconds = clampInt(
      stage.mythicTimerDurationSeconds,
      1,
      999999,
      mythicTimerDurationSeconds
    );
    rainbowWeightMultiplier = Math.max(1, Number(stage.rainbowWeightMultiplier) || 1);
    if (typeof stage.unlockedShopItemId === "string" && stage.unlockedShopItemId) {
      unlockedShopItemIds.add(stage.unlockedShopItemId);
    }
  }

  return {
    unlockedIncomePadCount,
    legendaryTimerDurationSeconds,
    mythicTimerDurationSeconds,
    rainbowWeightMultiplier,
    unlockedShopItemIds,
  };
}

function getGuaranteedSpawnTimerDurationSeconds(timerId, slot = getActiveSaveSlot()) {
  const config = GUARANTEED_SPAWN_TIMER_CONFIG[timerId];
  if (!config) {
    return 0;
  }
  const rewardProfile = getRebirthRewardProfile(slot);
  if (timerId === "legendary") {
    return rewardProfile.legendaryTimerDurationSeconds;
  }
  if (timerId === "mythic") {
    return rewardProfile.mythicTimerDurationSeconds;
  }
  return config.durationSeconds;
}

function getRainbowVariantWeightMultiplier(slot = getActiveSaveSlot()) {
  return getRebirthRewardProfile(slot).rainbowWeightMultiplier;
}

function getAdonisShopRequiredRebirthCount(itemId) {
  const itemConfig = getAdonisShopItemConfig(itemId);
  return itemConfig ? clampInt(itemConfig.requiredRebirthCount, 0, REBIRTH_STAGE_CONFIG.length, 0) : 0;
}

function getRebirthStageTitleByCount(rebirthCount) {
  const stage = REBIRTH_STAGE_CONFIG[clampInt(rebirthCount, 1, REBIRTH_STAGE_CONFIG.length, 1) - 1];
  return stage && typeof stage.title === "string" ? stage.title : "Rebirth";
}

function isAdonisShopItemUnlockedForSlot(slot, itemId) {
  const requiredRebirthCount = getAdonisShopRequiredRebirthCount(itemId);
  return getSlotRebirthCount(slot) >= requiredRebirthCount;
}

function getSaveSlotForBaseIndex(baseIndex) {
  if (!Number.isInteger(baseIndex) || baseIndex < 0 || !Array.isArray(saveSlots)) {
    return null;
  }
  for (let i = 0; i < saveSlots.length; i += 1) {
    const slot = saveSlots[i];
    if (!slot || !slot.used) {
      continue;
    }
    if (ensureSlotBaseAssignment(slot, i) === baseIndex) {
      return slot;
    }
  }
  return null;
}

function getOwnedNpcCountMapForBase(baseIndex, options = {}) {
  const counts = new Map();
  if (!Number.isInteger(baseIndex) || baseIndex < 0) {
    return counts;
  }
  const requireGenerating = options.requireGenerating === true;
  for (const student of studentNpcs) {
    if (!student || !student.avatar || !student.avatar.userData) {
      continue;
    }
    if (requireGenerating ? student.purchaseState !== "generating" : student.purchaseState === "forSale") {
      continue;
    }
    if (student.assignedBaseIndex !== baseIndex) {
      continue;
    }
    const npcBaseName = String(student.avatar.userData.npcBaseName || student.avatar.userData.npcDisplayName || "").trim();
    if (!npcBaseName) {
      continue;
    }
    counts.set(npcBaseName, (counts.get(npcBaseName) || 0) + 1);
  }
  return counts;
}

function getRebirthRequirementEntries(stage, suffix) {
  if (!stage || (suffix !== "A" && suffix !== "B")) {
    return [];
  }

  const groupKey = suffix === "A" ? "requiredNpcAGroupNames" : "requiredNpcBGroupNames";
  const nameKey = suffix === "A" ? "requiredNpcAName" : "requiredNpcBName";
  const countKey = suffix === "A" ? "requiredNpcACount" : "requiredNpcBCount";
  const groupNames = Array.isArray(stage[groupKey])
    ? stage[groupKey].map((name) => String(name || "").trim()).filter(Boolean)
    : [];
  if (groupNames.length) {
    return groupNames;
  }

  const singleName = String(stage[nameKey] || "").trim();
  const requiredCount = clampInt(stage[countKey], 0, 99, 0);
  if (!singleName || requiredCount <= 0) {
    return [];
  }
  return new Array(requiredCount).fill(singleName);
}

function formatRebirthRequirementLabel(entries) {
  if (!Array.isArray(entries) || !entries.length) {
    return "";
  }
  return Array.from(new Set(entries.map((entry) => String(entry || "").trim()).filter(Boolean))).join(" + ");
}

function getOwnedNpcRequirementProgressForBase(baseIndex, entries) {
  if (!Array.isArray(entries) || !entries.length) {
    return 0;
  }
  const ownedCounts = getOwnedNpcCountMapForBase(baseIndex);
  let owned = 0;
  for (let i = 0; i < entries.length; i += 1) {
    const safeName = String(entries[i] || "").trim();
    const availableCount = ownedCounts.get(safeName) || 0;
    if (availableCount <= 0) {
      continue;
    }
    owned += 1;
    ownedCounts.set(safeName, availableCount - 1);
  }
  return owned;
}

function doesBaseHaveGeneratingNpc(baseIndex, npcName) {
  if (!Number.isInteger(baseIndex) || baseIndex < 0) {
    return false;
  }
  const safeNpcName = String(npcName || "").trim();
  if (!safeNpcName) {
    return false;
  }
  return (getOwnedNpcCountMapForBase(baseIndex, { requireGenerating: true }).get(safeNpcName) || 0) > 0;
}

function getSecondFloorPadBonusForRebirthCount(rebirthCount) {
  const safeRebirthCount = clampInt(rebirthCount, 0, SECOND_FLOOR_PAD_BONUS_BY_REBIRTH_COUNT.length - 1, 0);
  return clampInt(SECOND_FLOOR_PAD_BONUS_BY_REBIRTH_COUNT[safeRebirthCount], 0, SECOND_FLOOR_TOTAL_PAD_SLOTS, 0);
}

function isSecondFloorUnlockedForSlot(slot) {
  return Boolean(slot && slot.secondFloorUnlocked) || getSlotRebirthCount(slot) >= SECOND_FLOOR_UNLOCK_REBIRTH_COUNT;
}

function getUnlockedSecondFloorPadCountForSlot(slot) {
  if (!isSecondFloorUnlockedForSlot(slot)) {
    return 0;
  }
  return getSecondFloorPadBonusForRebirthCount(getSlotRebirthCount(slot));
}

function setBaseSecondFloorUnlocked(basePad, unlocked) {
  if (!basePad || !basePad.base || !basePad.base.userData) {
    return false;
  }

  const secondFloorGroup = basePad.base.userData.secondFloorGroup || null;
  const collidableMeshes = Array.isArray(basePad.base.userData.secondFloorCollidableMeshes)
    ? basePad.base.userData.secondFloorCollidableMeshes
    : [];
  const nextUnlocked = Boolean(unlocked);
  let changed = false;

  if (secondFloorGroup && secondFloorGroup.visible !== nextUnlocked) {
    secondFloorGroup.visible = nextUnlocked;
    changed = true;
  }

  for (let i = 0; i < collidableMeshes.length; i += 1) {
    const mesh = collidableMeshes[i];
    if (!mesh || !mesh.userData) {
      continue;
    }
    const nextExcluded = !nextUnlocked;
    if (mesh.userData.excludeWorldCollider !== nextExcluded) {
      mesh.userData.excludeWorldCollider = nextExcluded;
      changed = true;
    }
  }

  return changed;
}

function syncBaseSecondFloorAvailability(rebuildColliders = false) {
  for (let baseIndex = 0; baseIndex < streetBasePads.length; baseIndex += 1) {
    const basePad = streetBasePads[baseIndex];
    const slot = getSaveSlotForBaseIndex(baseIndex);
    setBaseSecondFloorUnlocked(basePad, isSecondFloorUnlockedForSlot(slot));
  }
  if (rebuildColliders) {
    buildWorldColliders(mapRoot);
  }
}

function getUnlockedIncomePadCountForSlot(slot, basePad = null) {
  const availablePadCount = Array.isArray(basePad && basePad.incomePadWorlds)
    ? basePad.incomePadWorlds.length
    : Array.isArray(basePad && basePad.incomePads)
      ? basePad.incomePads.length
      : BASE_UNLOCKED_INCOME_PAD_SLOTS;
  const rewardProfile = getRebirthRewardProfile(slot);
  let unlockedIncomePadCount = rewardProfile.unlockedIncomePadCount;
  unlockedIncomePadCount += getUnlockedSecondFloorPadCountForSlot(slot);
  return clampInt(
    unlockedIncomePadCount,
    0,
    availablePadCount,
    Math.min(BASE_UNLOCKED_INCOME_PAD_SLOTS, availablePadCount)
  );
}

function getUnlockedIncomePadCountForBase(baseIndex) {
  const basePad = streetBasePads[baseIndex] || null;
  const slot = getSaveSlotForBaseIndex(baseIndex);
  return getUnlockedIncomePadCountForSlot(slot, basePad);
}

function refreshIncomePadAvailabilityVisuals() {
  for (let baseIndex = 0; baseIndex < streetBasePads.length; baseIndex += 1) {
    const basePad = streetBasePads[baseIndex];
    if (!basePad || !Array.isArray(basePad.incomePads)) {
      continue;
    }
    const slot = getSaveSlotForBaseIndex(baseIndex);
    setBaseSecondFloorUnlocked(basePad, isSecondFloorUnlockedForSlot(slot));
    const unlockedPadCount = getUnlockedIncomePadCountForBase(baseIndex);
    for (let padIndex = 0; padIndex < basePad.incomePads.length; padIndex += 1) {
      const padMesh = basePad.incomePads[padIndex];
      if (padMesh) {
        padMesh.visible = padIndex < unlockedPadCount;
      }
      if (Array.isArray(basePad.incomePadLabels) && basePad.incomePadLabels[padIndex]) {
        basePad.incomePadLabels[padIndex].visible = padIndex < unlockedPadCount && basePad.incomePadLabels[padIndex].visible;
      }
    }
  }
}

function getSlotRebirthMultiplier(slot) {
  if (!slot) {
    return 1;
  }
  const rawMultiplier = Number(slot.rebirthMultiplier);
  if (Number.isFinite(rawMultiplier) && rawMultiplier >= 1) {
    return rawMultiplier;
  }
  return getRebirthMultiplierForCount(getSlotRebirthCount(slot));
}

function getNextRebirthMultiplier(slot) {
  const activeStage = getRebirthStageConfigForCount(getSlotRebirthCount(slot));
  if (!activeStage) {
    return getSlotRebirthMultiplier(slot);
  }
  return Number(activeStage.nextMultiplier.toFixed(4));
}

function formatRebirthMultiplier(multiplier) {
  const safeMultiplier = Number.isFinite(multiplier) && multiplier >= 1 ? multiplier : 1;
  return `x${safeMultiplier.toFixed(2)}`;
}

function triggerRebirthFlash() {
  if (!rebirthFlashEl) {
    return;
  }
  rebirthFlashEl.classList.remove("active");
  void rebirthFlashEl.offsetWidth;
  rebirthFlashEl.classList.add("active");
  window.setTimeout(() => {
    if (rebirthFlashEl) {
      rebirthFlashEl.classList.remove("active");
    }
  }, REBIRTH_FLASH_DURATION_MS);
}

function closeRebirthOverlay() {
  if (rebirthOverlayEl) {
    rebirthOverlayEl.classList.add("hidden");
  }
}

function openRebirthOverlay() {
  if (!rebirthOverlayEl || !running || isMenuOpen() || !getActiveSaveSlot()) {
    return;
  }
  closeSellConfirmModal();
  clearInputState();
  setInteractionPrompt("");
  rebirthOverlayEl.classList.remove("hidden");
}

function closeSellConfirmModal() {
  sellConfirmNpcId = 0;
  if (sellConfirmOverlayEl) {
    sellConfirmOverlayEl.classList.add("hidden");
  }
}

function openSellConfirmModal(student) {
  if (!student || !student.avatar || !student.avatar.userData) {
    return;
  }
  const displayName = String(student.avatar.userData.npcBaseName || student.avatar.userData.npcDisplayName || "Classmate");
  const cost = clampInt(student.avatar.userData.npcCost, 0, MAX_CURRENCY_VALUE, 0);
  const refund = Math.floor(cost * 0.5);

  sellConfirmNpcId = student.id;
  Object.keys(keyState).forEach((key) => {
    keyState[key] = false;
  });
  if (sellConfirmTitleEl) {
    sellConfirmTitleEl.textContent = "Sell Classmate";
  }
  if (sellConfirmTextEl) {
    sellConfirmTextEl.textContent = `Are you sure you want to sell ${displayName}? (Refund: $${refund.toLocaleString("en-US")})`;
  }
  if (sellConfirmOverlayEl) {
    sellConfirmOverlayEl.classList.remove("hidden");
  }
}

function moveSoldNpcToStreamStart(student) {
  if (!student || !student.avatar || !student.avatar.userData) {
    return;
  }
  student.direction = 1;
  student.minZ = NPC_STREAM_START_Z;
  student.maxZ = NPC_STREAM_END_Z;
  student.speed = LEO_PATROL_SPEED;
  student.purchaseState = "forSale";
  student.assignedBaseIndex = -1;
  student.assignedPadIndex = -1;
  student.incomeAccumulator = 0;
  student.incomePayoutCarry = 0;
  student.pendingMoney = 0;
  if (!student.assignedPadWorld || !student.assignedPadWorld.set) {
    student.assignedPadWorld = new THREE.Vector3();
  }
  if (!student.assignedPadStandWorld || !student.assignedPadStandWorld.set) {
    student.assignedPadStandWorld = new THREE.Vector3();
  }
  if (!student.assignedPadWalkWorld || !student.assignedPadWalkWorld.set) {
    student.assignedPadWalkWorld = new THREE.Vector3();
  }
  student.assignedPadWorld.set(0, 0, 0);
  student.assignedPadStandWorld.set(0, 0, 0);
  student.assignedPadWalkWorld.set(0, 0, 0);
  student.assignedPadFacingYaw = PAD_DISPLAY_FACING_YAW;

  student.avatar.position.x = NPC_STREAM_LANE_X + (Math.random() * 2 - 1) * NPC_STREAM_X_JITTER;
  student.avatar.position.z = NPC_STREAM_START_Z;
  student.avatar.position.y = STREET_PATH_SURFACE_Y;
  student.avatar.userData.isStreetWalker = true;
  student.avatar.userData.isPurchasedNpc = false;
  student.avatar.userData.purchaseState = "forSale";
  student.avatar.userData.npcInfoKey = "";
  updateNpcInfoTag(student);
}

function removeSoldNpcFromWorld(student) {
  if (!student || !student.avatar || !student.avatar.userData) {
    return;
  }
  clearNetworkStreetMetadata(student);
  student.purchaseState = "removed";
  student.assignedBaseIndex = -1;
  student.assignedPadIndex = -1;
  student.incomeAccumulator = 0;
  student.incomePayoutCarry = 0;
  student.pendingMoney = 0;
  student.avatar.userData.isStreetWalker = false;
  student.avatar.userData.isPurchasedNpc = false;
  student.avatar.userData.purchaseState = "removed";
  if (student.avatar.parent) {
    student.avatar.parent.remove(student.avatar);
  }
  const studentIndex = studentNpcs.indexOf(student);
  if (studentIndex >= 0) {
    studentNpcs.splice(studentIndex, 1);
  }
}

function getOwnedNpcCountForActiveSlot(targetNpcName) {
  const activeBaseIndex = getActivePlayerBaseIndex();
  const safeTargetNpcName = String(targetNpcName || "").trim();
  if (activeBaseIndex < 0 || !safeTargetNpcName) {
    return 0;
  }
  return getOwnedNpcCountMapForBase(activeBaseIndex).get(safeTargetNpcName) || 0;
}

function getActiveRebirthStatus() {
  const activeSlot = getActiveSaveSlot();
  const rebirthCount = getSlotRebirthCount(activeSlot);
  const activeStage = getRebirthStageConfigForCount(rebirthCount);
  const currentMultiplier = getSlotRebirthMultiplier(activeSlot);
  const nextMultiplier = getNextRebirthMultiplier(activeSlot);
  const moneyAmount = activeSlot ? clampInt(activeSlot.money, 0, MAX_CURRENCY_VALUE, 0) : 0;
  const activeBaseIndex = activeSlot ? ensureSlotBaseAssignment(activeSlot, activeSaveSlotIndex) : -1;
  const npcAEntries = activeStage ? getRebirthRequirementEntries(activeStage, "A") : [];
  const npcBEntries = activeStage ? getRebirthRequirementEntries(activeStage, "B") : [];
  const npcAName = formatRebirthRequirementLabel(npcAEntries);
  const npcACountRequired = npcAEntries.length;
  const npcBName = formatRebirthRequirementLabel(npcBEntries);
  const npcBCountRequired = npcBEntries.length;
  const hasFirstRequirement = npcACountRequired > 0;
  const hasSecondRequirement = npcBCountRequired > 0;
  const npcACountOwned = activeBaseIndex >= 0 && hasFirstRequirement ? getOwnedNpcRequirementProgressForBase(activeBaseIndex, npcAEntries) : 0;
  const npcBCountOwned = activeBaseIndex >= 0 && hasSecondRequirement ? getOwnedNpcRequirementProgressForBase(activeBaseIndex, npcBEntries) : 0;
  const requiredMoney = activeStage ? activeStage.requiredMoney : 0;
  const hasMoney = Boolean(activeStage) && moneyAmount >= requiredMoney;
  const hasNpcA = Boolean(activeStage) && (!hasFirstRequirement || npcACountOwned >= npcACountRequired);
  const hasNpcB = Boolean(activeStage) && (!hasSecondRequirement || npcBCountOwned >= npcBCountRequired);

  return {
    activeSlot,
    stage: activeStage,
    rebirthCount,
    currentMultiplier,
    nextMultiplier,
    moneyAmount,
    requiredMoney,
    npcAEntries,
    npcAName,
    npcACountRequired,
    npcACountOwned,
    npcBEntries,
    npcBName,
    npcBCountRequired,
    npcBCountOwned,
    hasFirstRequirement,
    hasSecondRequirement,
    hasMoney,
    hasNpcA,
    hasNpcB,
    isMaxRebirth: !activeStage,
    canRebirth: Boolean(activeSlot && activeStage && hasMoney && hasNpcA && hasNpcB),
  };
}

function resetOwnedClassmatesForBase(baseIndex) {
  if (!Number.isInteger(baseIndex) || baseIndex < 0) {
    return;
  }
  for (let i = studentNpcs.length - 1; i >= 0; i -= 1) {
    const student = studentNpcs[i];
    if (!student || student.purchaseState === "forSale") {
      continue;
    }
    if (student.assignedBaseIndex !== baseIndex) {
      continue;
    }
    removeSoldNpcFromWorld(student);
  }
  rebuildIncomePadOccupancy();
}

function performActiveSlotRebirth() {
  const rebirthStatus = getActiveRebirthStatus();
  if (!rebirthStatus.canRebirth || !rebirthStatus.activeSlot) {
    return;
  }

  const activeSlot = rebirthStatus.activeSlot;
  const activeBaseIndex = ensureSlotBaseAssignment(activeSlot, activeSaveSlotIndex);
  const unlocksSecondFloor =
    rebirthStatus.rebirthCount < SECOND_FLOOR_UNLOCK_REBIRTH_COUNT &&
    rebirthStatus.rebirthCount + 1 >= SECOND_FLOOR_UNLOCK_REBIRTH_COUNT;
  resetOwnedClassmatesForBase(activeBaseIndex);
  activeSlot.money = STARTING_MONEY;
  activeSlot.rebirthCount = rebirthStatus.rebirthCount + 1;
  activeSlot.rebirthMultiplier = rebirthStatus.nextMultiplier;
  if (unlocksSecondFloor) {
    activeSlot.secondFloorUnlocked = true;
  }
  activeSlot.leoPurchased = false;
  activeSlot.leoGenerating = false;
  activeSlot.ownedClassmates = [];
  applyLeoStateFromActiveSlot();

  leoBuyHoldTimer = 0;
  npcBuyHoldTimer = 0;
  npcBuyTargetId = 0;
  npcSellHoldTimer = 0;
  npcSellTargetId = 0;
  closeSellConfirmModal();
  closeRebirthOverlay();
  setInteractionPrompt("");

  refreshIncomePadAvailabilityVisuals();
  syncGuaranteedSpawnTimersToRewardProfile();
  triggerRebirthFlash();
  saveSaveSlotsToStorage();
  renderSaveSlotsUi();
  renderAdonisShopUi();
  updateIncomePadMoneyLabels();
  updateRebirthUi();
  syncMultiplayerProfile();
  start();
  if (unlocksSecondFloor) {
    showSpawnNotification(SECOND_FLOOR_UNLOCK_NOTIFICATION_TEXT);
  }
}

function confirmSellSelectedClassmate() {
  const activeSlot = getActiveSaveSlot();
  if (!activeSlot) {
    closeSellConfirmModal();
    return;
  }

  const student = getStudentNpcById(sellConfirmNpcId);
  if (!student || !student.avatar || !student.avatar.userData) {
    closeSellConfirmModal();
    return;
  }

  const baseIndex = getActivePlayerBaseIndex();
  if (baseIndex < 0 || student.assignedBaseIndex !== baseIndex) {
    closeSellConfirmModal();
    return;
  }

  const sellCost = clampInt(student.avatar.userData.npcCost, 0, MAX_CURRENCY_VALUE, 0);
  const sellRefund = Math.floor(sellCost * 0.5);
  activeSlot.money = clampInt(activeSlot.money + sellRefund, 0, MAX_CURRENCY_VALUE, activeSlot.money);

  if (Number.isInteger(student.assignedBaseIndex) && Number.isInteger(student.assignedPadIndex)) {
    const basePad = streetBasePads[student.assignedBaseIndex];
    if (
      basePad &&
      Array.isArray(basePad.incomePadOccupants) &&
      student.assignedPadIndex >= 0 &&
      student.assignedPadIndex < basePad.incomePadOccupants.length
    ) {
      basePad.incomePadOccupants[student.assignedPadIndex] = null;
    }
  }

  removeSoldNpcFromWorld(student);
  rebuildIncomePadOccupancy();
  refreshIncomePadAvailabilityVisuals();
  updateIncomePadMoneyLabels();
  npcSellHoldTimer = 0;
  npcSellTargetId = 0;
  closeSellConfirmModal();
  saveSaveSlotsToStorage();
  renderSaveSlotsUi();
  syncMultiplayerProfile();
}

function getNearestSellableNpcForActiveSlot() {
  const ownerBaseIndex = getActivePlayerBaseIndex();
  if (ownerBaseIndex < 0) {
    return null;
  }

  let nearestNpc = null;
  let nearestDistance = Number.POSITIVE_INFINITY;
  for (const student of studentNpcs) {
    if (!student || !student.avatar || !student.avatar.userData) {
      continue;
    }
    if (student.purchaseState !== "generating") {
      continue;
    }
    if (student.assignedBaseIndex !== ownerBaseIndex) {
      continue;
    }
    const dx = student.avatar.position.x - player.position.x;
    const dy = student.avatar.position.y - player.position.y;
    const dz = student.avatar.position.z - player.position.z;
    const distance = Math.hypot(dx, dy, dz);
    if (distance > NPC_SELL_INTERACTION_DISTANCE || distance >= nearestDistance) {
      continue;
    }
    nearestNpc = student;
    nearestDistance = distance;
  }
  return nearestNpc;
}

function resolveBaseIndexForSlot(slotIndex, requestedIndex) {
  if (!streetBasePads.length) {
    return -1;
  }
  if (Number.isInteger(requestedIndex) && requestedIndex >= 0 && requestedIndex < streetBasePads.length) {
    return requestedIndex;
  }
  const safeSlotIndex = Number.isInteger(slotIndex) ? slotIndex : 0;
  return ((safeSlotIndex % streetBasePads.length) + streetBasePads.length) % streetBasePads.length;
}

function ensureSlotBaseAssignment(slot, slotIndex) {
  if (!slot) {
    return -1;
  }
  const resolvedIndex = resolveBaseIndexForSlot(slotIndex, slot.baseIndex);
  if (resolvedIndex >= 0) {
    slot.baseIndex = resolvedIndex;
  }
  return resolvedIndex;
}

function updateBaseSignLabels() {
  if (!streetBasePads.length) {
    return;
  }

  const activeSlot = getActiveSaveSlot();
  const activeBaseIndex = activeSlot ? ensureSlotBaseAssignment(activeSlot, activeSaveSlotIndex) : -1;
  const activeName = activeSlot
    ? sanitizeNameTag(activeSlot.name || (activeSlot.avatar && activeSlot.avatar.nametag) || DEFAULT_NAMETAG)
    : "";

  for (const basePad of streetBasePads) {
    if (!basePad || !basePad.base || !basePad.base.userData || typeof basePad.base.userData.setSignLabel !== "function") {
      continue;
    }
    const label = basePad.index === activeBaseIndex && activeName ? activeName : "Base";
    basePad.base.userData.setSignLabel(label);
  }
}

function getAssignedBasePadForActiveSlot() {
  const slot = getActiveSaveSlot();
  if (!slot) {
    return null;
  }
  const baseIndex = ensureSlotBaseAssignment(slot, activeSaveSlotIndex);
  if (baseIndex < 0) {
    return null;
  }
  return streetBasePads[baseIndex] || null;
}

function getAssignedPadWorldPosition(targetVector) {
  const basePad = getAssignedBasePadForActiveSlot();
  if (!basePad || !basePad.padWorld) {
    return null;
  }
  targetVector.copy(basePad.padWorld);
  return targetVector;
}

function getNpcAssignedBaseEntryWorld(student) {
  if (!student || !Number.isInteger(student.assignedBaseIndex)) {
    return null;
  }
  const basePad = streetBasePads[student.assignedBaseIndex];
  if (!basePad || !basePad.padWorld) {
    return null;
  }
  return basePad.padWorld;
}

function isSecondFloorIncomePadIndex(padIndex) {
  return Number.isInteger(padIndex) && padIndex >= BASE_UNLOCKED_INCOME_PAD_SLOTS;
}

function getBasePadSideSign(basePad, padIndex) {
  if (!basePad || !Number.isInteger(padIndex)) {
    return 0;
  }
  const padMesh = Array.isArray(basePad.incomePads) ? basePad.incomePads[padIndex] : null;
  const padLocalX = padMesh && padMesh.position ? padMesh.position.x : 0;
  if (padLocalX < -0.001) {
    return -1;
  }
  if (padLocalX > 0.001) {
    return 1;
  }
  return 0;
}

function getOppositeIncomePadIndex(basePad, padIndex) {
  if (!basePad || !Array.isArray(basePad.incomePads) || !Number.isInteger(padIndex)) {
    return -1;
  }
  if (padIndex < 0 || padIndex >= basePad.incomePads.length) {
    return -1;
  }

  const sourcePad = basePad.incomePads[padIndex];
  const sourceX = sourcePad && sourcePad.position ? sourcePad.position.x : 0;
  const sourceZ = sourcePad && sourcePad.position ? sourcePad.position.z : 0;

  let bestIndex = -1;
  let bestScore = Number.POSITIVE_INFINITY;
  for (let i = 0; i < basePad.incomePads.length; i += 1) {
    if (i === padIndex) {
      continue;
    }
    const candidate = basePad.incomePads[i];
    if (!candidate || !candidate.position) {
      continue;
    }
    const candidateX = candidate.position.x;
    const candidateZ = candidate.position.z;
    if (Math.sign(candidateX) === Math.sign(sourceX) && Math.abs(candidateX) > 0.001 && Math.abs(sourceX) > 0.001) {
      continue;
    }
    const rowAlignment = Math.abs(candidateZ - sourceZ);
    const sideMirror = Math.abs(Math.abs(candidateX) - Math.abs(sourceX));
    const score = rowAlignment * 100 + sideMirror;
    if (score < bestScore) {
      bestScore = score;
      bestIndex = i;
    }
  }

  if (bestIndex >= 0) {
    return bestIndex;
  }

  const fallbackPairIndex = padIndex % 2 === 0 ? padIndex + 1 : padIndex - 1;
  if (fallbackPairIndex >= 0 && fallbackPairIndex < basePad.incomePads.length) {
    return fallbackPairIndex;
  }
  return -1;
}

function getBasePadFacingYaw(basePad, padIndex, padCenterWorld = null) {
  if (!basePad || !Number.isInteger(padIndex)) {
    return PAD_DISPLAY_FACING_YAW;
  }

  const oppositePadIndex = getOppositeIncomePadIndex(basePad, padIndex);
  const sourcePadCenter =
    padCenterWorld && Number.isFinite(padCenterWorld.x) && Number.isFinite(padCenterWorld.z)
      ? padCenterWorld
      : Array.isArray(basePad.incomePadWorlds)
        ? basePad.incomePadWorlds[padIndex]
        : null;
  const targetPadCenter =
    oppositePadIndex >= 0 && Array.isArray(basePad.incomePadWorlds) ? basePad.incomePadWorlds[oppositePadIndex] : null;

  if (
    sourcePadCenter &&
    targetPadCenter &&
    Number.isFinite(sourcePadCenter.x) &&
    Number.isFinite(sourcePadCenter.z) &&
    Number.isFinite(targetPadCenter.x) &&
    Number.isFinite(targetPadCenter.z)
  ) {
    tmpPlacementFacing.copy(targetPadCenter).sub(sourcePadCenter);
    tmpPlacementFacing.y = 0;
    if (tmpPlacementFacing.lengthSq() > 1e-8) {
      return Math.atan2(tmpPlacementFacing.x, tmpPlacementFacing.z);
    }
  }

  return PAD_DISPLAY_FACING_YAW;
}

function getAvatarLocalPlacementMetrics(avatar) {
  if (!avatar || !avatar.isObject3D) {
    return null;
  }

  avatar.updateMatrixWorld(true);
  tmpAvatarInvWorld.copy(avatar.matrixWorld).invert();

  let hasBounds = false;
  avatar.traverse((node) => {
    if (!node.isMesh || !node.geometry || !node.geometry.attributes || !node.geometry.attributes.position) {
      return;
    }
    if (!node.geometry.boundingBox) {
      node.geometry.computeBoundingBox();
    }
    if (!node.geometry.boundingBox) {
      return;
    }
    tmpAvatarNodeBounds.copy(node.geometry.boundingBox).applyMatrix4(node.matrixWorld).applyMatrix4(tmpAvatarInvWorld);
    if (!hasBounds) {
      tmpAvatarLocalBounds.copy(tmpAvatarNodeBounds);
      hasBounds = true;
    } else {
      tmpAvatarLocalBounds.union(tmpAvatarNodeBounds);
    }
  });

  if (!hasBounds) {
    return null;
  }

  tmpAvatarLocalBounds.getCenter(tmpAvatarLocalCenter);
  return {
    localCenterX: tmpAvatarLocalCenter.x,
    localCenterZ: tmpAvatarLocalCenter.z,
    localBottomY: tmpAvatarLocalBounds.min.y,
  };
}

function applyNpcAssignedPadTargets(student, basePad, padIndex, padWorld) {
  if (!student || !padWorld || !Number.isInteger(padIndex)) {
    return;
  }
  if (!student.assignedPadWorld || !student.assignedPadWorld.copy) {
    student.assignedPadWorld = new THREE.Vector3();
  }
  if (!student.assignedPadStandWorld || !student.assignedPadStandWorld.copy) {
    student.assignedPadStandWorld = new THREE.Vector3();
  }
  if (!student.assignedPadWalkWorld || !student.assignedPadWalkWorld.copy) {
    student.assignedPadWalkWorld = new THREE.Vector3();
  }

  let padTopY = Number.isFinite(padWorld.y) ? padWorld.y : 0;
  let padHalfX = 0;
  let padHalfY = 0;
  let padHalfZ = 0;
  const padMesh = basePad && Array.isArray(basePad.incomePads) ? basePad.incomePads[padIndex] : null;
  if (padMesh && padMesh.isMesh && padMesh.geometry) {
    padMesh.updateWorldMatrix(true, false);
    if (!padMesh.geometry.boundingBox) {
      padMesh.geometry.computeBoundingBox();
    }
    if (padMesh.geometry.boundingBox) {
      tmpPadBounds.copy(padMesh.geometry.boundingBox).applyMatrix4(padMesh.matrixWorld);
      tmpPadBounds.getCenter(tmpPlacementCenter);
      padTopY = tmpPadBounds.max.y;
      padHalfX = (tmpPadBounds.max.x - tmpPadBounds.min.x) * 0.5;
      padHalfY = (tmpPadBounds.max.y - tmpPadBounds.min.y) * 0.5;
      padHalfZ = (tmpPadBounds.max.z - tmpPadBounds.min.z) * 0.5;
    } else {
      tmpPlacementCenter.copy(padWorld);
    }
  } else {
    tmpPlacementCenter.copy(padWorld);
  }

  student.assignedPadWorld.copy(tmpPlacementCenter);
  student.assignedPadFacingYaw = getBasePadFacingYaw(basePad, padIndex, tmpPlacementCenter);

  const avatar = student.avatar;
  tmpPadDisplayAnchor.copy(tmpPlacementCenter);
  const padSideSign = getBasePadSideSign(basePad, padIndex);
  if (basePad && basePad.base && padSideSign !== 0 && (padHalfX > 0 || padHalfY > 0 || padHalfZ > 0)) {
    basePad.base.getWorldQuaternion(tmpPadBaseQuat);
    // Push each classmate outward from the center lane without changing facing:
    // left-side pads move farther left, right-side pads move farther right.
    tmpPadRightDir.set(1, 0, 0).applyQuaternion(tmpPadBaseQuat).setY(0);
    if (tmpPadRightDir.lengthSq() > 1e-8) {
      tmpPadRightDir.normalize();
      tmpPadRightDir.multiplyScalar(padSideSign);
      const projectedHalfWidth =
        Math.abs(tmpPadRightDir.x) * padHalfX +
        Math.abs(tmpPadRightDir.y) * padHalfY +
        Math.abs(tmpPadRightDir.z) * padHalfZ;
      tmpPadDisplayAnchor.addScaledVector(tmpPadRightDir, projectedHalfWidth * PAD_OFFSET_FACTOR);
    }
  }

  student.assignedPadStandWorld.copy(tmpPadDisplayAnchor);
  student.assignedPadStandWorld.y = padTopY + PAD_STAND_CLEARANCE_Y;

  if (avatar && avatar.isObject3D) {
    const metrics = getAvatarLocalPlacementMetrics(avatar);
    if (metrics) {
      const scaleX = Number.isFinite(avatar.scale.x) ? avatar.scale.x : 1;
      const scaleY = Number.isFinite(avatar.scale.y) ? avatar.scale.y : 1;
      const scaleZ = Number.isFinite(avatar.scale.z) ? avatar.scale.z : 1;

      tmpFacingQuat.setFromAxisAngle(upVector, student.assignedPadFacingYaw);
      tmpModelCenterOffsetWorld.set(metrics.localCenterX * scaleX, 0, metrics.localCenterZ * scaleZ).applyQuaternion(tmpFacingQuat);

      student.assignedPadStandWorld.x = tmpPadDisplayAnchor.x - tmpModelCenterOffsetWorld.x;
      student.assignedPadStandWorld.z = tmpPadDisplayAnchor.z - tmpModelCenterOffsetWorld.z;
      student.assignedPadStandWorld.y = padTopY + PAD_STAND_CLEARANCE_Y - metrics.localBottomY * scaleY;
    }
  }

  if (
    isSecondFloorIncomePadIndex(padIndex) &&
    basePad &&
    basePad.padWorld &&
    Number.isFinite(basePad.padWorld.x) &&
    Number.isFinite(basePad.padWorld.z)
  ) {
    student.assignedPadWalkWorld.copy(basePad.padWorld);
  } else {
    student.assignedPadWalkWorld.set(0, 0, 0);
  }
}

function refreshNpcAssignedPadTargets(student) {
  if (!student || !Number.isInteger(student.assignedBaseIndex) || !Number.isInteger(student.assignedPadIndex)) {
    return false;
  }
  const basePad = streetBasePads[student.assignedBaseIndex];
  if (!basePad || !Array.isArray(basePad.incomePadWorlds)) {
    return false;
  }
  const padWorld = basePad.incomePadWorlds[student.assignedPadIndex];
  if (!padWorld) {
    return false;
  }
  applyNpcAssignedPadTargets(student, basePad, student.assignedPadIndex, padWorld);
  return true;
}

function setIncomePadMoneyLabel(basePad, padIndex, amount, visible) {
  if (!basePad || !Array.isArray(basePad.incomePadLabels)) {
    return;
  }
  if (!Array.isArray(basePad.incomePadLabelKeys) || basePad.incomePadLabelKeys.length !== basePad.incomePadLabels.length) {
    basePad.incomePadLabelKeys = new Array(basePad.incomePadLabels.length).fill("");
  }

  const labelSprite = basePad.incomePadLabels[padIndex];
  if (!labelSprite || !labelSprite.material) {
    return;
  }

  const safeAmount = clampInt(amount, 0, MAX_CURRENCY_VALUE, 0);
  const shouldShow = Boolean(visible);
  const nextKey = `${shouldShow ? 1 : 0}|${safeAmount}`;
  if (basePad.incomePadLabelKeys[padIndex] === nextKey) {
    labelSprite.visible = shouldShow;
    return;
  }

  const labelData = createPadMoneyTagTexture(safeAmount);
  if (labelSprite.material.map) {
    labelSprite.material.map.dispose();
  }
  labelSprite.material.map = labelData.texture;
  labelSprite.material.needsUpdate = true;
  labelSprite.scale.set(PAD_MONEY_TAG_SCALE * labelData.aspect, PAD_MONEY_TAG_SCALE, 1);
  labelSprite.visible = shouldShow;
  basePad.incomePadLabelKeys[padIndex] = nextKey;
}

function updateIncomePadMoneyLabels() {
  if (!streetBasePads.length) {
    return;
  }

  const occupiedPadKeys = new Set();
  const pendingMoneyByPadKey = new Map();

  for (const student of studentNpcs) {
    if (!student || student.purchaseState === "forSale") {
      continue;
    }
    if (!Number.isInteger(student.assignedBaseIndex) || !Number.isInteger(student.assignedPadIndex)) {
      continue;
    }
    const key = `${student.assignedBaseIndex}:${student.assignedPadIndex}`;
    occupiedPadKeys.add(key);

    if (student.purchaseState !== "generating") {
      continue;
    }
    const pending = clampInt(student.pendingMoney, 0, MAX_CURRENCY_VALUE, 0);
    if (pending <= 0) {
      continue;
    }
    pendingMoneyByPadKey.set(key, (pendingMoneyByPadKey.get(key) || 0) + pending);
  }

  for (const basePad of streetBasePads) {
    if (!basePad || !Array.isArray(basePad.incomePadLabels)) {
      continue;
    }
    for (let i = 0; i < basePad.incomePadLabels.length; i += 1) {
      const key = `${basePad.index}:${i}`;
      const pending = pendingMoneyByPadKey.get(key) || 0;
      setIncomePadMoneyLabel(basePad, i, pending, occupiedPadKeys.has(key));
    }
  }
}

function rebuildIncomePadOccupancy() {
  for (const basePad of streetBasePads) {
    if (!basePad || !Array.isArray(basePad.incomePadWorlds)) {
      continue;
    }
    if (!Array.isArray(basePad.incomePadOccupants) || basePad.incomePadOccupants.length !== basePad.incomePadWorlds.length) {
      basePad.incomePadOccupants = new Array(basePad.incomePadWorlds.length).fill(null);
    } else {
      basePad.incomePadOccupants.fill(null);
    }
  }

  for (const student of studentNpcs) {
    if (!student || student.purchaseState === "forSale") {
      continue;
    }
    if (!Number.isInteger(student.assignedBaseIndex) || !Number.isInteger(student.assignedPadIndex)) {
      continue;
    }
    const basePad = streetBasePads[student.assignedBaseIndex];
    if (!basePad || !Array.isArray(basePad.incomePadOccupants)) {
      continue;
    }
    if (student.assignedPadIndex < 0 || student.assignedPadIndex >= basePad.incomePadOccupants.length) {
      continue;
    }
    basePad.incomePadOccupants[student.assignedPadIndex] = student.id;
  }
}

function getAvailableNpcForSavedClassmate(npcName, variantId = VARIANT_NORMAL) {
  const safeNpcName = typeof npcName === "string" ? npcName.trim() : "";
  const safeVariantId = normalizeNpcVariantId(variantId);
  if (!safeNpcName) {
    return null;
  }

  for (const student of studentNpcs) {
    if (!student || student.purchaseState !== "forSale" || !student.avatar || !student.avatar.userData) {
      continue;
    }
    const baseName = String(student.avatar.userData.npcBaseName || student.avatar.userData.npcDisplayName || "").trim();
    const studentVariantId = normalizeNpcVariantId(student.avatar.userData.npcVariantId);
    if (baseName === safeNpcName && studentVariantId === safeVariantId) {
      return student;
    }
  }

  const npc = createNpcForName(safeNpcName, { variantId: safeVariantId });
  if (!npc || !npc.avatar) {
    return null;
  }
  placeNpcOnStreetStream(npc, 0);
  studentNpcs.push(npc);
  scene.add(npc.avatar);
  return npc;
}

function restoreOwnedClassmatesFromSaveSlots() {
  if (!Array.isArray(saveSlots) || !streetBasePads.length) {
    return;
  }

  for (const student of studentNpcs) {
    if (!student || student.purchaseState === "forSale") {
      continue;
    }
    moveSoldNpcToStreamStart(student);
  }

  rebuildIncomePadOccupancy();

  for (let slotIndex = 0; slotIndex < saveSlots.length; slotIndex += 1) {
    const slot = saveSlots[slotIndex];
    if (!slot || !slot.used || !Array.isArray(slot.ownedClassmates) || !slot.ownedClassmates.length) {
      continue;
    }

    const baseIndex = ensureSlotBaseAssignment(slot, slotIndex);
    const basePad = streetBasePads[baseIndex];
    if (!basePad || !Array.isArray(basePad.incomePadWorlds) || !basePad.incomePadWorlds.length) {
      continue;
    }
    const unlockedPadCount = getUnlockedIncomePadCountForSlot(slot, basePad);

    const takenPads = new Set();
    for (let i = 0; i < slot.ownedClassmates.length; i += 1) {
      const entry = slot.ownedClassmates[i];
      if (!entry) {
        continue;
      }

      let padIndex = clampInt(entry.padIndex, 0, Math.max(0, unlockedPadCount - 1), 0);
      if (takenPads.has(padIndex)) {
        padIndex = -1;
        for (let candidateIndex = 0; candidateIndex < unlockedPadCount; candidateIndex += 1) {
          if (!takenPads.has(candidateIndex)) {
            padIndex = candidateIndex;
            break;
          }
        }
      }
      if (padIndex < 0 || padIndex >= unlockedPadCount || padIndex >= basePad.incomePadWorlds.length) {
        continue;
      }

      const npc = getAvailableNpcForSavedClassmate(entry.npcName, entry.variantId);
      const padWorld = basePad.incomePadWorlds[padIndex];
      if (!npc || !padWorld) {
        continue;
      }

      takenPads.add(padIndex);
      npc.purchaseState = "generating";
      npc.assignedBaseIndex = baseIndex;
      npc.assignedPadIndex = padIndex;
      applyNpcAssignedPadTargets(npc, basePad, padIndex, padWorld);
      npc.incomeAccumulator = 0;
      npc.incomePayoutCarry = 0;
      npc.pendingMoney = clampInt(entry.pendingMoney, 0, MAX_CURRENCY_VALUE, 0);
      npc.speed = 0;
      npc.avatar.userData.isStreetWalker = false;
      npc.avatar.userData.isPurchasedNpc = true;
      npc.avatar.userData.purchaseState = "generating";
      npc.avatar.position.copy(npc.assignedPadStandWorld);
      npc.avatar.rotation.y = Number.isFinite(npc.assignedPadFacingYaw) ? npc.assignedPadFacingYaw : Math.PI;
      updateNpcInfoTag(npc);
    }
  }

  rebuildIncomePadOccupancy();
  refreshIncomePadAvailabilityVisuals();
  updateIncomePadMoneyLabels();
}

function getFreeIncomePadForActiveSlot() {
  const basePad = getAssignedBasePadForActiveSlot();
  if (!basePad || !Array.isArray(basePad.incomePadWorlds) || basePad.incomePadWorlds.length === 0) {
    return null;
  }

  rebuildIncomePadOccupancy();
  const activeSlot = getActiveSaveSlot();
  const unlockedPadCount = getUnlockedIncomePadCountForSlot(activeSlot, basePad);

  let chosenIndex = -1;
  let chosenDistance = -1;

  for (let i = 0; i < unlockedPadCount; i += 1) {
    if (basePad.incomePadOccupants[i] !== null && typeof basePad.incomePadOccupants[i] !== "undefined") {
      continue;
    }
    const padWorld = basePad.incomePadWorlds[i];
    if (!padWorld) {
      continue;
    }
    const score = basePad.padWorld ? padWorld.distanceToSquared(basePad.padWorld) : 0;
    if (score > chosenDistance) {
      chosenDistance = score;
      chosenIndex = i;
    }
  }

  if (chosenIndex >= 0) {
    return {
      basePad,
      padIndex: chosenIndex,
      padWorld: basePad.incomePadWorlds[chosenIndex],
    };
  }

  return null;
}

function getNearestBuyableStreetNpc() {
  let nearestNpc = null;
  let nearestDistance = Number.POSITIVE_INFINITY;
  for (const student of studentNpcs) {
    if (!student || !student.avatar || !student.avatar.userData) {
      continue;
    }
    if (!student.avatar.userData.isStreetWalker || student.purchaseState !== "forSale") {
      continue;
    }
    const dx = student.avatar.position.x - player.position.x;
    const dz = student.avatar.position.z - player.position.z;
    const distance = Math.hypot(dx, dz);
    if (distance > NPC_BUY_INTERACTION_DISTANCE || distance >= nearestDistance) {
      continue;
    }
    nearestNpc = student;
    nearestDistance = distance;
  }
  return nearestNpc;
}

function getActivePlayerBaseIndex() {
  const slot = getActiveSaveSlot();
  if (!slot) {
    return -1;
  }
  return ensureSlotBaseAssignment(slot, activeSaveSlotIndex);
}

function getActiveBasePassiveFlags() {
  const activeBaseIndex = getActivePlayerBaseIndex();
  return {
    baseIndex: activeBaseIndex,
    hasFletcherOnBase: doesBaseHaveGeneratingNpc(activeBaseIndex, FLETCHER_NAME),
    hasEshdogMarleyOnBase: doesBaseHaveGeneratingNpc(activeBaseIndex, ESHDOG_MARLEY_NAME),
  };
}

function isWorldPositionInsideBaseInterior(baseIndex, worldPosition) {
  if (!Number.isInteger(baseIndex) || baseIndex < 0 || !worldPosition) {
    return false;
  }
  const basePad = streetBasePads[baseIndex];
  const base = basePad && basePad.base;
  const interiorBounds = base && base.userData ? base.userData.interiorWallBounds : null;
  if (!base || !interiorBounds) {
    return false;
  }

  const localPosition = tmpPlacementCenter.copy(worldPosition);
  base.worldToLocal(localPosition);
  const margin = 0.28;
  return (
    localPosition.x >= interiorBounds.minX - margin &&
    localPosition.x <= interiorBounds.maxX + margin &&
    localPosition.z >= interiorBounds.minZ - margin &&
    localPosition.z <= interiorBounds.maxZ + margin
  );
}

function isBaseProtectedByEshdog(baseIndex) {
  if (!Number.isInteger(baseIndex) || baseIndex < 0) {
    return false;
  }
  if (doesBaseHaveGeneratingNpc(baseIndex, ESHDOG_MARLEY_NAME)) {
    return true;
  }
  if (!multiplayerConnected) {
    return false;
  }
  for (const state of remotePlayers.values()) {
    if (!state || state.baseIndex !== baseIndex) {
      continue;
    }
    if (state.hasEshdogMarleyOnBase) {
      return true;
    }
  }
  return false;
}

function triggerEshdogFighterSlow() {
  if (!multiplayerConnected) {
    return;
  }
  eshdogFighterSlowTimer = Math.max(eshdogFighterSlowTimer, ESHDOG_FIGHTER_DURATION_SECONDS);
}

function updateFletcherSnitchAlert() {
  const activeBaseIndex = getActivePlayerBaseIndex();
  if (activeBaseIndex < 0 || !doesBaseHaveGeneratingNpc(activeBaseIndex, FLETCHER_NAME)) {
    activeFletcherIntruderSocketIds.clear();
    return;
  }

  const nextIntruderIds = new Set();
  for (const state of remotePlayers.values()) {
    if (!state || !state.socketId || !state.targetPosition) {
      continue;
    }
    if (!isWorldPositionInsideBaseInterior(activeBaseIndex, state.targetPosition)) {
      continue;
    }
    nextIntruderIds.add(state.socketId);
    if (!activeFletcherIntruderSocketIds.has(state.socketId)) {
      showSpawnNotification(FLETCHER_SNITCH_ALERT_TEXT);
    }
  }

  activeFletcherIntruderSocketIds.clear();
  for (const socketId of nextIntruderIds) {
    activeFletcherIntruderSocketIds.add(socketId);
  }
}

function updateBaseLockDoors(dt) {
  const ignoredDeltaTime = dt;
  void ignoredDeltaTime;
  doorLaserColliders.length = 0;
}

function getLeoNpc() {
  return (
    studentNpcs.find((npc) => npc && npc.avatar && npc.avatar.userData && npc.avatar.userData.isLeo3D) || null
  );
}

function syncLeoStateToActiveSlot(shouldPersist = true) {
  const slot = getActiveSaveSlot();
  if (!slot) {
    return;
  }
  slot.leoPurchased = leoState !== LEO_STATE_FOR_SALE;
  slot.leoGenerating = leoState === LEO_STATE_GENERATING;
  ensureSlotBaseAssignment(slot, activeSaveSlotIndex);
  if (shouldPersist) {
    saveSaveSlotsToStorage();
    renderSaveSlotsUi();
  }
}

function setLeoState(nextState, shouldPersist = true) {
  if (leoState === nextState) {
    return;
  }
  leoState = nextState;
  leoBuyHoldTimer = 0;
  if (nextState !== LEO_STATE_GENERATING) {
    leoIncomeAccumulator = 0;
  }
  syncLeoStateToActiveSlot(shouldPersist);
}

function applyLeoStateToNpc(student, forceReposition = false) {
  if (!student || !student.avatar) {
    return;
  }

  if (leoState === LEO_STATE_FOR_SALE) {
    student.minZ = LEO_DEFAULT_MIN_Z;
    student.maxZ = LEO_DEFAULT_MAX_Z;
    student.speed = LEO_PATROL_SPEED;
    if (forceReposition) {
      student.direction = 1;
      student.avatar.position.set(LEO_DEFAULT_LANE_X, STREET_PATH_SURFACE_Y, LEO_DEFAULT_START_Z);
    }
    return;
  }

  const targetPad = getAssignedPadWorldPosition(leoTargetPadPosition);
  if (!targetPad) {
    student.speed = 0;
    return;
  }
  student.minZ = targetPad.z;
  student.maxZ = targetPad.z;

  if (leoState === LEO_STATE_WALK_TO_PAD) {
    student.speed = LEO_WALK_TO_PAD_SPEED;
    if (forceReposition) {
      student.direction = 1;
      student.avatar.position.set(LEO_DEFAULT_LANE_X, STREET_PATH_SURFACE_Y, LEO_DEFAULT_START_Z);
    }
    return;
  }

  student.speed = 0;
  if (forceReposition || leoState === LEO_STATE_GENERATING) {
    student.avatar.position.set(
      targetPad.x,
      Number.isFinite(targetPad.y) ? targetPad.y : WORLD_GROUND_SURFACE_Y,
      targetPad.z
    );
  }
}

function applyLeoStateFromActiveSlot() {
  leoBuyHoldTimer = 0;
  leoIncomeAccumulator = 0;
  setInteractionPrompt("");
  const slot = getActiveSaveSlot();
  if (!slot) {
    leoState = LEO_STATE_FOR_SALE;
    return;
  }

  ensureSlotBaseAssignment(slot, activeSaveSlotIndex);
  leoState = slot.leoPurchased
    ? slot.leoGenerating
      ? LEO_STATE_GENERATING
      : LEO_STATE_WALK_TO_PAD
    : LEO_STATE_FOR_SALE;

  const leoNpc = getLeoNpc();
  if (leoNpc) {
    applyLeoStateToNpc(leoNpc, true);
  }
}

function normalizeHexColor(value, fallback) {
  if (typeof value !== "string") {
    return fallback;
  }
  const normalized = value.trim().toLowerCase();
  return /^#[0-9a-f]{6}$/.test(normalized) ? normalized : fallback;
}

function normalizeAvatarConfig(rawConfig) {
  const config = rawConfig && typeof rawConfig === "object" ? rawConfig : {};
  const safeUsername = sanitizeNameTag(config.username ?? config.nametag ?? DEFAULT_NAMETAG);
  return {
    skinTone: SKIN_TONE_OPTIONS.includes(config.skinTone) ? config.skinTone : DEFAULT_SKIN_TONE,
    face: FACE_OPTIONS.includes(config.face) ? config.face : DEFAULT_FACE,
    hairStyle: HAIR_STYLE_OPTIONS.includes(config.hairStyle) ? config.hairStyle : DEFAULT_HAIR_STYLE,
    hairColor: normalizeHexColor(config.hairColor, DEFAULT_HAIR_COLOR),
    shirtColor: normalizeHexColor(config.shirtColor, DEFAULT_SHIRT_COLOR),
    pantsColor: normalizeHexColor(config.pantsColor, DEFAULT_PANTS_COLOR),
    username: safeUsername,
    nametag: safeUsername,
  };
}

function getDefaultAvatarConfig() {
  return normalizeAvatarConfig({
    skinTone: DEFAULT_SKIN_TONE,
    face: DEFAULT_FACE,
    hairStyle: DEFAULT_HAIR_STYLE,
    hairColor: DEFAULT_HAIR_COLOR,
    shirtColor: DEFAULT_SHIRT_COLOR,
    pantsColor: DEFAULT_PANTS_COLOR,
    username: DEFAULT_NAMETAG,
  });
}

function getCurrentAvatarConfig() {
  const shirtColor =
    player.userData.shirtColor ||
    (shirtColorInputEl && shirtColorInputEl.value) ||
    (player.userData.shirtMaterial ? `#${player.userData.shirtMaterial.color.getHexString()}` : DEFAULT_SHIRT_COLOR);
  const pantsColor =
    player.userData.pantsColor ||
    (pantsColorInputEl && pantsColorInputEl.value) ||
    (player.userData.pantMaterial ? `#${player.userData.pantMaterial.color.getHexString()}` : DEFAULT_PANTS_COLOR);
  return normalizeAvatarConfig({
    skinTone: player.userData.skinTone || (skinToneSelectEl && skinToneSelectEl.value),
    face: player.userData.faceStyle || (faceSelectEl && faceSelectEl.value),
    hairStyle: player.userData.hairStyle || (hairStyleSelectEl && hairStyleSelectEl.value),
    hairColor: player.userData.hairColor || (hairColorInputEl && hairColorInputEl.value),
    shirtColor,
    pantsColor,
    username: player.userData.nameTag || (nametagInputEl && nametagInputEl.value),
  });
}

function getFacePreviewCanvas(faceStyle) {
  if (!facePreviewCanvasCache[faceStyle]) {
    const texture = createFaceTexture(faceStyle);
    facePreviewCanvasCache[faceStyle] = texture && texture.image ? texture.image : null;
    if (texture && typeof texture.dispose === "function") {
      texture.dispose();
    }
  }
  return facePreviewCanvasCache[faceStyle];
}

function drawAvatarPreview2D(rawConfig) {
  if (!avatarPreviewCanvasEl) {
    return;
  }
  const ctx = avatarPreviewCanvasEl.getContext("2d");
  if (!ctx) {
    return;
  }

  const config = normalizeAvatarConfig(rawConfig || getCurrentAvatarConfig());
  const width = avatarPreviewCanvasEl.width;
  const height = avatarPreviewCanvasEl.height;
  const centerX = width * 0.5;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#8fc6ff";
  ctx.fillRect(0, 0, width, height * 0.58);
  ctx.fillStyle = "#78bb72";
  ctx.fillRect(0, height * 0.58, width, height * 0.42);

  const previewName = sanitizeNameTag(config.username || config.nametag || DEFAULT_NAMETAG);
  const bubbleWidth = Math.min(170, Math.max(96, previewName.length * 8 + 48));
  const bubbleHeight = 26;
  const bubbleX = centerX - bubbleWidth * 0.5;
  const bubbleY = 12;
  ctx.fillStyle = "rgba(16, 29, 66, 0.88)";
  ctx.strokeStyle = "rgba(153, 228, 255, 0.96)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  if (typeof ctx.roundRect === "function") {
    ctx.roundRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight, 13);
  } else {
    ctx.rect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);
  }
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#f4f9ff";
  ctx.font = "700 12px Sora, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(previewName, centerX, bubbleY + bubbleHeight * 0.5);

  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.beginPath();
  ctx.ellipse(centerX, 193, 32, 8, 0, 0, Math.PI * 2);
  ctx.fill();

  const torsoTop = 108;
  const torsoWidth = 54;
  const torsoHeight = 56;
  const legWidth = 20;
  const legHeight = 38;
  const headY = 83;
  const headRadius = 26;

  ctx.fillStyle = config.pantsColor;
  ctx.fillRect(centerX - 24, torsoTop + torsoHeight, legWidth, legHeight);
  ctx.fillRect(centerX + 4, torsoTop + torsoHeight, legWidth, legHeight);

  ctx.fillStyle = config.shirtColor;
  ctx.fillRect(centerX - torsoWidth * 0.5, torsoTop, torsoWidth, torsoHeight);
  ctx.fillStyle = config.skinTone;
  ctx.fillRect(centerX - torsoWidth * 0.5 - 13, torsoTop + 4, 12, 39);
  ctx.fillRect(centerX + torsoWidth * 0.5 + 1, torsoTop + 4, 12, 39);

  ctx.beginPath();
  ctx.arc(centerX, headY, headRadius, 0, Math.PI * 2);
  ctx.fillStyle = config.skinTone;
  ctx.fill();

  function blendHexColor(hexA, hexB, amount) {
    const a = clamp(amount, 0, 1);
    const colorA = normalizeHexColor(hexA, DEFAULT_HAIR_COLOR);
    const colorB = normalizeHexColor(hexB, "#000000");
    const rA = parseInt(colorA.slice(1, 3), 16);
    const gA = parseInt(colorA.slice(3, 5), 16);
    const bA = parseInt(colorA.slice(5, 7), 16);
    const rB = parseInt(colorB.slice(1, 3), 16);
    const gB = parseInt(colorB.slice(3, 5), 16);
    const bB = parseInt(colorB.slice(5, 7), 16);
    const r = Math.round(rA + (rB - rA) * a);
    const g = Math.round(gA + (gB - gA) * a);
    const b = Math.round(bA + (bB - bA) * a);
    return `rgb(${r}, ${g}, ${b})`;
  }

  const hairBase = normalizeHexColor(config.hairColor, DEFAULT_HAIR_COLOR);
  const hairShadow = blendHexColor(hairBase, "#000000", 0.34);
  const hairMid = blendHexColor(hairBase, "#000000", 0.14);
  const hairLight = blendHexColor(hairBase, "#ffffff", 0.18);
  const hairGloss = blendHexColor(hairBase, "#ffffff", 0.28);
  const hairTopY = headY - headRadius - 10;
  const templeY = headY - 9;
  const foreheadY = headY - 18;

  function drawRoundedRectPath(x, y, rectWidth, rectHeight, radius) {
    ctx.beginPath();
    if (typeof ctx.roundRect === "function") {
      ctx.roundRect(x, y, rectWidth, rectHeight, radius);
      return;
    }
    ctx.rect(x, y, rectWidth, rectHeight);
  }

  function fillAndStrokeCurrentPath(fillStyle) {
    ctx.fillStyle = fillStyle;
    ctx.fill();
    ctx.strokeStyle = hairShadow;
    ctx.lineWidth = 1.15;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.stroke();
  }

  function buildHairGradient(topMix = hairLight, bottomMix = hairMid) {
    const gradient = ctx.createLinearGradient(centerX, hairTopY, centerX, headY + 10);
    gradient.addColorStop(0, topMix);
    gradient.addColorStop(0.56, hairMid);
    gradient.addColorStop(1, bottomMix);
    return gradient;
  }

  if (config.hairStyle === "swoop") {
    const swoopGradient = buildHairGradient(blendHexColor(hairBase, "#ffffff", 0.2), hairShadow);

    ctx.beginPath();
    ctx.moveTo(centerX - 25, templeY);
    ctx.quadraticCurveTo(centerX - 30, headY - 27, centerX - 11, hairTopY);
    ctx.quadraticCurveTo(centerX + 7, hairTopY - 5, centerX + 23, headY - 25);
    ctx.quadraticCurveTo(centerX + 31, headY - 17, centerX + 26, headY - 3);
    ctx.quadraticCurveTo(centerX + 17, headY - 7, centerX + 8, headY - 8);
    ctx.quadraticCurveTo(centerX - 1, headY - 9, centerX - 10, headY - 7);
    ctx.quadraticCurveTo(centerX - 20, headY - 4, centerX - 25, templeY);
    ctx.closePath();
    fillAndStrokeCurrentPath(swoopGradient);

    ctx.beginPath();
    ctx.moveTo(centerX - 1, foreheadY + 2);
    ctx.quadraticCurveTo(centerX + 13, foreheadY - 7, centerX + 20, headY - 4);
    ctx.quadraticCurveTo(centerX + 10, headY + 1, centerX - 1, headY - 4);
    ctx.quadraticCurveTo(centerX - 8, headY - 8, centerX - 1, foreheadY + 2);
    ctx.closePath();
    ctx.fillStyle = hairGloss;
    ctx.globalAlpha = 0.52;
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.beginPath();
    ctx.moveTo(centerX - 2, foreheadY + 1);
    ctx.quadraticCurveTo(centerX + 9, foreheadY - 4, centerX + 16, headY - 5);
    ctx.strokeStyle = blendHexColor(hairBase, "#ffffff", 0.32);
    ctx.lineWidth = 1.3;
    ctx.stroke();

    ctx.fillStyle = hairMid;
    ctx.fillRect(centerX - 25, headY - 8, 4.5, 12);
    ctx.fillRect(centerX + 20.5, headY - 8, 4.5, 12);
  } else if (config.hairStyle === "curly") {
    const curlyGradient = buildHairGradient(blendHexColor(hairBase, "#ffffff", 0.14), hairShadow);

    ctx.beginPath();
    ctx.moveTo(centerX - 26, templeY + 1);
    ctx.quadraticCurveTo(centerX - 30, headY - 29, centerX - 9, hairTopY - 1);
    ctx.quadraticCurveTo(centerX + 12, hairTopY - 7, centerX + 28, headY - 25);
    ctx.quadraticCurveTo(centerX + 32, headY - 14, centerX + 25, headY - 1);
    ctx.quadraticCurveTo(centerX + 14, headY - 8, centerX, headY - 9);
    ctx.quadraticCurveTo(centerX - 13, headY - 9, centerX - 26, templeY + 1);
    ctx.closePath();
    fillAndStrokeCurrentPath(curlyGradient);

    const curlLoops = [
      [-18, -11, 8, 0.05],
      [-10, -15, 7.4, -0.08],
      [0, -17, 7.1, 0],
      [10, -15, 7.4, 0.08],
      [18, -11, 8, -0.05],
      [-15, -4, 6.3, 0.1],
      [-5, -6, 5.8, -0.06],
      [5, -6, 5.8, 0.06],
      [15, -4, 6.3, -0.1],
    ];
    for (const [ox, oy, radius, tilt] of curlLoops) {
      ctx.beginPath();
      ctx.ellipse(centerX + ox, headY + oy, radius, radius * 0.88, tilt, 0, Math.PI * 2);
      ctx.fillStyle = hairMid;
      ctx.fill();
      ctx.strokeStyle = hairShadow;
      ctx.lineWidth = 1.05;
      ctx.stroke();
    }

    ctx.strokeStyle = blendHexColor(hairBase, "#ffffff", 0.26);
    ctx.lineWidth = 1.1;
    for (const [ox, oy, radius] of curlLoops.slice(0, 5)) {
      ctx.beginPath();
      ctx.arc(centerX + ox - 0.4, headY + oy - 0.6, radius * 0.46, Math.PI * 0.22, Math.PI * 1.18);
      ctx.stroke();
    }
  } else if (config.hairStyle === "mohawk") {
    ctx.fillStyle = blendHexColor(hairBase, "#000000", 0.58);
    ctx.globalAlpha = 0.22;
    ctx.beginPath();
    ctx.ellipse(centerX - 18, headY - 10, 8, 13, -0.16, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(centerX + 18, headY - 10, 8, 13, 0.16, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    const mohawkGradient = buildHairGradient(blendHexColor(hairBase, "#ffffff", 0.16), hairShadow);
    drawRoundedRectPath(centerX - 7.5, hairTopY - 1, 15, 31, 6);
    fillAndStrokeCurrentPath(mohawkGradient);

    const ridgePieces = [
      [0, -29, 5.1],
      [0, -20, 4.8],
      [0, -11, 4.6],
      [0, -3, 4.2],
    ];
    for (const [ox, oy, radius] of ridgePieces) {
      ctx.beginPath();
      ctx.arc(centerX + ox, headY + oy, radius, 0, Math.PI * 2);
      ctx.fillStyle = hairLight;
      ctx.fill();
    }
  } else if (config.hairStyle === "spikes") {
    const spikesGradient = buildHairGradient(blendHexColor(hairBase, "#ffffff", 0.16), hairShadow);

    ctx.beginPath();
    ctx.moveTo(centerX - 23, templeY);
    ctx.quadraticCurveTo(centerX - 25, headY - 23, centerX - 12, headY - 24);
    ctx.quadraticCurveTo(centerX, headY - 26, centerX + 12, headY - 24);
    ctx.quadraticCurveTo(centerX + 25, headY - 23, centerX + 23, templeY);
    ctx.quadraticCurveTo(centerX + 13, headY - 4, centerX, headY - 5);
    ctx.quadraticCurveTo(centerX - 13, headY - 4, centerX - 23, templeY);
    ctx.closePath();
    fillAndStrokeCurrentPath(spikesGradient);

    const spikePieces = [
      { x: -18, baseY: headY - 12, tipX: -24, tipY: hairTopY + 7 },
      { x: -10, baseY: headY - 13, tipX: -14, tipY: hairTopY + 1 },
      { x: -2, baseY: headY - 14, tipX: -4, tipY: hairTopY - 4 },
      { x: 6, baseY: headY - 14, tipX: 9, tipY: hairTopY - 3 },
      { x: 14, baseY: headY - 12, tipX: 18, tipY: hairTopY + 3 },
      { x: 22, baseY: headY - 10, tipX: 26, tipY: hairTopY + 9 },
    ];
    for (const spike of spikePieces) {
      ctx.beginPath();
      ctx.moveTo(centerX + spike.x - 4.2, spike.baseY);
      ctx.lineTo(centerX + spike.tipX, spike.tipY);
      ctx.lineTo(centerX + spike.x + 4.2, spike.baseY);
      ctx.closePath();
      fillAndStrokeCurrentPath(hairMid);
    }

    ctx.strokeStyle = blendHexColor(hairBase, "#ffffff", 0.28);
    ctx.lineWidth = 1;
    for (const spike of spikePieces.slice(1, 5)) {
      ctx.beginPath();
      ctx.moveTo(centerX + spike.x - 0.8, spike.baseY - 1);
      ctx.lineTo(centerX + spike.tipX - 0.2, spike.tipY + 3.2);
      ctx.stroke();
    }
  }

  const faceCanvas = getFacePreviewCanvas(config.face);
  if (faceCanvas) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, headY, headRadius - 2, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(faceCanvas, centerX - 19, headY - 19, 38, 38);
    ctx.restore();
  }
}

function syncAvatarPreview2D(rawConfig) {
  drawAvatarPreview2D(rawConfig || getCurrentAvatarConfig());
}

function applyAvatarConfig(rawConfig, updateControls = true) {
  const config = normalizeAvatarConfig(rawConfig);
  suspendAvatarPreviewSync = true;
  try {
    setAvatarSkinTone(config.skinTone);
    setAvatarFace(config.face);
    setAvatarHairStyle(config.hairStyle);
    setAvatarHairColor(config.hairColor);
    setAvatarShirtColor(config.shirtColor);
    setAvatarPantsColor(config.pantsColor);
    setAvatarNameTag(config.username || config.nametag);
  } finally {
    suspendAvatarPreviewSync = false;
  }

  if (updateControls) {
    if (skinToneSelectEl) {
      skinToneSelectEl.value = config.skinTone;
    }
    if (faceSelectEl) {
      faceSelectEl.value = config.face;
    }
    if (hairStyleSelectEl) {
      hairStyleSelectEl.value = config.hairStyle;
    }
    if (hairColorInputEl) {
      hairColorInputEl.value = config.hairColor;
    }
    if (shirtColorInputEl) {
      shirtColorInputEl.value = config.shirtColor;
    }
    if (pantsColorInputEl) {
      pantsColorInputEl.value = config.pantsColor;
    }
    if (nametagInputEl) {
      nametagInputEl.value = config.username || config.nametag;
    }
  }
  syncAvatarPreview2D(config);
  return config;
}

function createEmptySaveSlot(index) {
  const defaultAvatar = getDefaultAvatarConfig();
  return {
    id: index + 1,
    used: false,
    name: "",
    money: STARTING_MONEY,
    level: 1,
    avatar: defaultAvatar,
    username: defaultAvatar.username,
    usernameConfirmed: false,
    baseIndex: resolveBaseIndexForSlot(index, index),
    rebirthCount: 0,
    rebirthMultiplier: 1,
    secondFloorUnlocked: false,
    floorMigrationApplied: false,
    startingMoneyMigrationApplied: false,
    adonisResetApplied: false,
    lastSeen: 0,
    leoPurchased: false,
    leoGenerating: false,
    shopUnlocks: getDefaultAdonisShopUnlocks(),
    indexCollected: [],
    ownedClassmates: [],
  };
}

function sanitizeOwnedClassmateEntry(rawEntry) {
  if (!rawEntry || typeof rawEntry !== "object") {
    return null;
  }
  const npcName = typeof rawEntry.npcName === "string" ? rawEntry.npcName.trim() : "";
  if (!getNpcRarityForName(npcName)) {
    return null;
  }
  return {
    npcName,
    variantId: normalizeNpcVariantId(rawEntry.variantId),
    padIndex: clampInt(rawEntry.padIndex, 0, 999, 0),
    pendingMoney: clampInt(rawEntry.pendingMoney, 0, MAX_CURRENCY_VALUE, 0),
  };
}

function sanitizeOwnedClassmateEntries(rawEntries) {
  if (!Array.isArray(rawEntries)) {
    return [];
  }
  const safeEntries = [];
  const usedPadIndexes = new Set();
  for (let i = 0; i < rawEntries.length; i += 1) {
    const safeEntry = sanitizeOwnedClassmateEntry(rawEntries[i]);
    if (!safeEntry || usedPadIndexes.has(safeEntry.padIndex)) {
      continue;
    }
    usedPadIndexes.add(safeEntry.padIndex);
    safeEntries.push(safeEntry);
  }
  safeEntries.sort((a, b) => a.padIndex - b.padIndex);
  return safeEntries;
}

function getOfflineIncomePerSecondForSlot(slot) {
  if (!slot) {
    return 0;
  }
  const ownedEntries = sanitizeOwnedClassmateEntries(slot.ownedClassmates);
  let totalIncomePerSecond = 0;
  let hasLeoEntry = false;
  for (const entry of ownedEntries) {
    if (entry.npcName === LEO_NAME) {
      hasLeoEntry = true;
    }
    const npcRarity = getNpcRarityForName(entry.npcName);
    const adjustedEconomy = getVariantAdjustedEconomy(entry.npcName, npcRarity, entry.variantId);
    totalIncomePerSecond += clampCurrencyValue(adjustedEconomy.moneyPerSecond, 0);
  }
  if (!hasLeoEntry && slot.leoPurchased && slot.leoGenerating) {
    totalIncomePerSecond += clampCurrencyValue(LEO_ECONOMY.moneyPerSecond, 0);
  }
  return clampCurrencyValue(totalIncomePerSecond, 0);
}

function calculateOfflineIncomeAward(slot, currentTimestampMs = Date.now()) {
  if (!slot || !slot.used) {
    return null;
  }
  const totalIncomePerSecond = getOfflineIncomePerSecondForSlot(slot);
  if (totalIncomePerSecond <= 0) {
    return null;
  }
  const lastSeen = Number(slot.lastSeen);
  const nowMs = Number(currentTimestampMs);
  if (!Number.isFinite(lastSeen) || lastSeen <= 0 || !Number.isFinite(nowMs) || nowMs <= lastSeen) {
    return null;
  }
  const offlineSeconds = clampInt((nowMs - lastSeen) / 1000, 0, OFFLINE_INCOME_MAX_SECONDS, 0);
  if (offlineSeconds <= 0) {
    return null;
  }
  const cashMultiplier = getSlotCashMultiplier(slot);
  const offlineEarnings = clampCurrencyValue(totalIncomePerSecond * cashMultiplier * offlineSeconds, 0);
  if (offlineEarnings <= 0) {
    return null;
  }
  return {
    offlineSeconds,
    offlineEarnings,
  };
}

function getDefaultAdonisShopUnlocks() {
  return {
    [SHOP_ITEM_SPEED_COIL]: false,
    [SHOP_ITEM_GRAVITY_COIL]: false,
    [SHOP_ITEM_DUAL_COIL]: false,
  };
}

function sanitizeAdonisShopUnlocks(rawUnlocks) {
  const safeRaw = rawUnlocks && typeof rawUnlocks === "object" ? rawUnlocks : {};
  return {
    [SHOP_ITEM_SPEED_COIL]: Boolean(safeRaw[SHOP_ITEM_SPEED_COIL]),
    [SHOP_ITEM_GRAVITY_COIL]: Boolean(safeRaw[SHOP_ITEM_GRAVITY_COIL]),
    [SHOP_ITEM_DUAL_COIL]: Boolean(safeRaw[SHOP_ITEM_DUAL_COIL]),
  };
}

function getAdonisShopItemConfig(itemId) {
  return ADONIS_SHOP_ITEMS[itemId] || null;
}

function slotOwnsAdonisShopItem(slot, itemId) {
  if (!slot) {
    return false;
  }
  const unlocks = slot.shopUnlocks && typeof slot.shopUnlocks === "object" ? slot.shopUnlocks : getDefaultAdonisShopUnlocks();
  return Boolean(unlocks[itemId]);
}

function getActiveAdonisShopEffectProfile(slot) {
  const baseProfile = {
    speedMultiplier: 1,
    jumpMultiplier: 1,
    gravityMultiplier: 1,
  };
  if (!slot) {
    return baseProfile;
  }

  const dualConfig = getAdonisShopItemConfig(SHOP_ITEM_DUAL_COIL);
  if (dualConfig && slotOwnsAdonisShopItem(slot, SHOP_ITEM_DUAL_COIL)) {
    return {
      speedMultiplier: dualConfig.effects.speedMultiplier,
      jumpMultiplier: dualConfig.effects.jumpMultiplier,
      gravityMultiplier: dualConfig.effects.gravityMultiplier,
    };
  }

  const speedConfig = getAdonisShopItemConfig(SHOP_ITEM_SPEED_COIL);
  const gravityConfig = getAdonisShopItemConfig(SHOP_ITEM_GRAVITY_COIL);
  if (speedConfig && slotOwnsAdonisShopItem(slot, SHOP_ITEM_SPEED_COIL)) {
    baseProfile.speedMultiplier = speedConfig.effects.speedMultiplier;
  }
  if (gravityConfig && slotOwnsAdonisShopItem(slot, SHOP_ITEM_GRAVITY_COIL)) {
    baseProfile.jumpMultiplier = gravityConfig.effects.jumpMultiplier;
    baseProfile.gravityMultiplier = gravityConfig.effects.gravityMultiplier;
  }
  return baseProfile;
}

function sanitizeSaveSlot(rawSlot, index) {
  const fallback = createEmptySaveSlot(index);
  if (!rawSlot || typeof rawSlot !== "object") {
    return fallback;
  }
  const used = Boolean(rawSlot.used);
  const avatar = normalizeAvatarConfig(rawSlot.avatar || fallback.avatar);
  const slotName = sanitizeNameTag(rawSlot.username ?? rawSlot.name ?? avatar.username ?? avatar.nametag ?? DEFAULT_NAMETAG);
  const normalizedAvatar = normalizeAvatarConfig({
    ...avatar,
    username: slotName,
    nametag: slotName,
  });
  const rebirthCount = clampInt(rawSlot.rebirthCount, 0, REBIRTH_STAGE_CONFIG.length, 0);
  const rawRebirthMultiplier = Number(rawSlot.rebirthMultiplier);
  const rebirthMultiplier =
    Number.isFinite(rawRebirthMultiplier) && rawRebirthMultiplier >= 1
      ? rawRebirthMultiplier
      : getRebirthMultiplierForCount(rebirthCount);
  const usernameConfirmed = used && isCustomUsername(slotName) ? Boolean(rawSlot.usernameConfirmed) : false;
  return {
    id: index + 1,
    used,
    name: used ? slotName : "",
    username: slotName,
    usernameConfirmed,
    money: clampInt(rawSlot.money, 0, MAX_CURRENCY_VALUE, fallback.money),
    level: clampInt(rawSlot.level, 1, 9999, 1),
    avatar: normalizedAvatar,
    baseIndex: resolveBaseIndexForSlot(index, rawSlot.baseIndex),
    rebirthCount,
    rebirthMultiplier,
    secondFloorUnlocked: Boolean(rawSlot.secondFloorUnlocked),
    floorMigrationApplied: Boolean(rawSlot.floorMigrationApplied),
    startingMoneyMigrationApplied: Boolean(rawSlot.startingMoneyMigrationApplied),
    adonisResetApplied: Boolean(rawSlot.adonisResetApplied),
    lastSeen: Number.isFinite(Number(rawSlot.lastSeen)) && Number(rawSlot.lastSeen) > 0 ? Math.round(Number(rawSlot.lastSeen)) : 0,
    leoPurchased: Boolean(rawSlot.leoPurchased),
    leoGenerating: Boolean(rawSlot.leoPurchased) && Boolean(rawSlot.leoGenerating),
    shopUnlocks: sanitizeAdonisShopUnlocks(rawSlot.shopUnlocks),
    indexCollected: sanitizeIndexCollected(rawSlot.indexCollected),
    ownedClassmates: sanitizeOwnedClassmateEntries(rawSlot.ownedClassmates),
  };
}

function applySecondFloorUnlockMigration() {
  if (!Array.isArray(saveSlots) || !saveSlots.length) {
    return false;
  }

  let changed = false;
  for (let i = 0; i < saveSlots.length; i += 1) {
    const slot = saveSlots[i];
    const rebirthCount = getSlotRebirthCount(slot);
    if (!slot || rebirthCount < SECOND_FLOOR_UNLOCK_REBIRTH_COUNT) {
      continue;
    }
    if (slot.floorMigrationApplied === true) {
      continue;
    }
    const shouldUnlockSecondFloor = getSecondFloorPadBonusForRebirthCount(rebirthCount) > 0;
    if (slot.secondFloorUnlocked !== shouldUnlockSecondFloor) {
      slot.secondFloorUnlocked = shouldUnlockSecondFloor;
      changed = true;
    }
    if (slot.floorMigrationApplied !== true) {
      slot.floorMigrationApplied = true;
      changed = true;
    }
  }

  return changed;
}

function applyStartingMoneyMigration() {
  if (!Array.isArray(saveSlots) || !saveSlots.length) {
    return false;
  }

  let changed = false;
  for (let i = 0; i < saveSlots.length; i += 1) {
    const slot = saveSlots[i];
    if (!slot || !slot.used || slot.startingMoneyMigrationApplied === true) {
      continue;
    }
    const hasNoClassmates = !Array.isArray(slot.ownedClassmates) || slot.ownedClassmates.length === 0;
    const isLegacyStarterProfile =
      clampInt(slot.level, 1, 9999, 1) <= 1 &&
      getSlotRebirthCount(slot) === 0 &&
      hasNoClassmates &&
      !slot.leoPurchased &&
      !slot.leoGenerating;
    if (!isLegacyStarterProfile) {
      continue;
    }
    if (slot.money < STARTING_MONEY) {
      slot.money = STARTING_MONEY;
      changed = true;
    }
    slot.startingMoneyMigrationApplied = true;
    changed = true;
  }

  return changed;
}

function applyAdonisProgressResetMigration() {
  if (!Array.isArray(saveSlots) || !saveSlots.length) {
    return false;
  }

  let changed = false;
  for (let i = 0; i < saveSlots.length; i += 1) {
    const slot = saveSlots[i];
    if (!slot || !slot.used || slot.adonisResetApplied === true) {
      continue;
    }

    const slotUsername = sanitizeNameTag(slot.username || slot.name || (slot.avatar && slot.avatar.username) || "");
    if (slotUsername.toLowerCase() !== "adonis") {
      continue;
    }

    const preservedAvatar = normalizeAvatarConfig({
      ...(slot.avatar || getDefaultAvatarConfig()),
      username: slotUsername,
      nametag: slotUsername,
    });

    slot.money = STARTING_MONEY;
    slot.level = 1;
    slot.avatar = preservedAvatar;
    slot.name = slotUsername;
    slot.username = slotUsername;
    slot.usernameConfirmed = true;
    slot.baseIndex = resolveBaseIndexForSlot(i, slot.baseIndex);
    slot.rebirthCount = 0;
    slot.rebirthMultiplier = 1;
    slot.secondFloorUnlocked = false;
    slot.floorMigrationApplied = false;
    slot.startingMoneyMigrationApplied = true;
    slot.adonisResetApplied = true;
    slot.lastSeen = 0;
    slot.leoPurchased = false;
    slot.leoGenerating = false;
    slot.shopUnlocks = getDefaultAdonisShopUnlocks();
    slot.ownedClassmates = [];
    changed = true;
  }

  return changed;
}

function sanitizeSettings(rawSettings) {
  const safe = rawSettings && typeof rawSettings === "object" ? rawSettings : {};
  return {
    shadows: safe.shadows !== false,
    invertMousepad: Boolean(safe.invertMousepad),
    graphicsQuality: QUALITY_LEVELS.includes(Number(safe.graphicsQuality))
      ? Number(safe.graphicsQuality)
      : DEFAULT_SETTINGS.graphicsQuality,
    sensitivity: clampInt(safe.sensitivity, 1, 100, DEFAULT_SETTINGS.sensitivity),
  };
}

function buildDefaultSaveSlots() {
  const slots = [];
  for (let i = 0; i < SAVE_SLOT_COUNT; i += 1) {
    slots.push(createEmptySaveSlot(i));
  }
  return slots;
}

function loadOneTimeProfileTopupState() {
  try {
    const raw = window.localStorage.getItem(ONE_TIME_PROFILE_TOPUP_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    console.warn("Failed to load one-time profile topup state.", error);
    return {};
  }
}

function saveOneTimeProfileTopupState(state) {
  try {
    window.localStorage.setItem(ONE_TIME_PROFILE_TOPUP_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Failed to save one-time profile topup state.", error);
  }
}

function loadOneTimeProfileRebirthGrantState() {
  try {
    const raw = window.localStorage.getItem(ONE_TIME_PROFILE_REBIRTH_GRANT_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    console.warn("Failed to load one-time profile rebirth grant state.", error);
    return {};
  }
}

function saveOneTimeProfileRebirthGrantState(state) {
  try {
    window.localStorage.setItem(ONE_TIME_PROFILE_REBIRTH_GRANT_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Failed to save one-time profile rebirth grant state.", error);
  }
}

function loadOneTimeProfileMaxedBaseGrantState() {
  try {
    const raw = window.localStorage.getItem(ONE_TIME_PROFILE_MAXED_BASE_GRANT_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    console.warn("Failed to load one-time profile maxed base grant state.", error);
    return {};
  }
}

function saveOneTimeProfileMaxedBaseGrantState(state) {
  try {
    window.localStorage.setItem(ONE_TIME_PROFILE_MAXED_BASE_GRANT_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Failed to save one-time profile maxed base grant state.", error);
  }
}

function buildAlternatingRainbowOwnedClassmateEntries(totalPadCount, primaryNpcName, secondaryNpcName) {
  const safeTotalPadCount = clampInt(
    totalPadCount,
    0,
    BASE_UNLOCKED_INCOME_PAD_SLOTS + SECOND_FLOOR_TOTAL_PAD_SLOTS,
    BASE_UNLOCKED_INCOME_PAD_SLOTS
  );
  const primaryName = getNpcRarityForName(primaryNpcName) ? primaryNpcName : FLETCHER_NAME;
  const secondaryName = getNpcRarityForName(secondaryNpcName) ? secondaryNpcName : ESHDOG_MARLEY_NAME;
  const entries = [];

  for (let padIndex = 0; padIndex < safeTotalPadCount; padIndex += 1) {
    entries.push({
      npcName: padIndex % 2 === 0 ? primaryName : secondaryName,
      variantId: VARIANT_RAINBOW,
      padIndex,
      pendingMoney: 0,
    });
  }

  return entries;
}

function applyOneTimeProfileTopups() {
  if (!Array.isArray(saveSlots) || !saveSlots.length || !ONE_TIME_PROFILE_TOPUPS.length) {
    return false;
  }
  const appliedState = loadOneTimeProfileTopupState();
  let changed = false;
  let stateChanged = false;

  for (const topup of ONE_TIME_PROFILE_TOPUPS) {
    if (!topup || typeof topup.username !== "string") {
      continue;
    }
    const safeUsername = sanitizeNameTag(topup.username);
    if (!safeUsername || appliedState[safeUsername]) {
      continue;
    }
    const targetMoney = clampInt(topup.targetMoney, 0, MAX_CURRENCY_VALUE, STARTING_MONEY);
    for (let i = 0; i < saveSlots.length; i += 1) {
      const slot = saveSlots[i];
      if (!slot || !slot.used) {
        continue;
      }
      const slotUsername = sanitizeNameTag(slot.username || slot.name || (slot.avatar && slot.avatar.username) || "");
      if (slotUsername !== safeUsername) {
        continue;
      }
      if (slot.money < targetMoney) {
        slot.money = targetMoney;
        changed = true;
      }
      appliedState[safeUsername] = true;
      stateChanged = true;
      break;
    }
  }

  if (stateChanged) {
    saveOneTimeProfileTopupState(appliedState);
  }
  return changed;
}

function applyOneTimeProfileRebirthGrants() {
  if (!Array.isArray(saveSlots) || !saveSlots.length || !ONE_TIME_PROFILE_REBIRTH_GRANTS.length) {
    return false;
  }

  const appliedState = loadOneTimeProfileRebirthGrantState();
  let changed = false;
  let stateChanged = false;

  for (const grant of ONE_TIME_PROFILE_REBIRTH_GRANTS) {
    if (!grant || typeof grant.username !== "string") {
      continue;
    }
    const safeUsername = sanitizeNameTag(grant.username);
    if (!safeUsername || appliedState[safeUsername]) {
      continue;
    }
    const targetRebirthCount = clampInt(grant.rebirthCount, 0, REBIRTH_STAGE_CONFIG.length, 0);
    const targetRebirthMultiplier = getRebirthMultiplierForCount(targetRebirthCount);
    const shouldUnlockSecondFloor = getSecondFloorPadBonusForRebirthCount(targetRebirthCount) > 0;

    for (let i = 0; i < saveSlots.length; i += 1) {
      const slot = saveSlots[i];
      if (!slot || !slot.used) {
        continue;
      }
      const slotUsername = sanitizeNameTag(slot.username || slot.name || (slot.avatar && slot.avatar.username) || "");
      if (slotUsername !== safeUsername) {
        continue;
      }

      if (slot.rebirthCount !== targetRebirthCount) {
        slot.rebirthCount = targetRebirthCount;
        changed = true;
      }
      if (slot.rebirthMultiplier !== targetRebirthMultiplier) {
        slot.rebirthMultiplier = targetRebirthMultiplier;
        changed = true;
      }
      if (slot.secondFloorUnlocked !== shouldUnlockSecondFloor) {
        slot.secondFloorUnlocked = shouldUnlockSecondFloor;
        changed = true;
      }
      if (slot.floorMigrationApplied !== true) {
        slot.floorMigrationApplied = true;
        changed = true;
      }

      appliedState[safeUsername] = true;
      stateChanged = true;
      break;
    }
  }

  if (stateChanged) {
    saveOneTimeProfileRebirthGrantState(appliedState);
  }
  return changed;
}

function applyOneTimeProfileMaxedBaseGrants() {
  if (!Array.isArray(saveSlots) || !saveSlots.length || !ONE_TIME_PROFILE_MAXED_BASE_GRANTS.length) {
    return false;
  }

  const appliedState = loadOneTimeProfileMaxedBaseGrantState();
  let changed = false;
  let stateChanged = false;

  for (const grant of ONE_TIME_PROFILE_MAXED_BASE_GRANTS) {
    if (!grant || typeof grant.username !== "string") {
      continue;
    }

    const safeUsername = sanitizeNameTag(grant.username);
    if (!safeUsername || appliedState[safeUsername]) {
      continue;
    }

    const targetRebirthCount = clampInt(grant.rebirthCount, 0, REBIRTH_STAGE_CONFIG.length, 0);
    const targetRebirthMultiplier = getRebirthMultiplierForCount(targetRebirthCount);
    const unlockedSecondFloorPadCount = getSecondFloorPadBonusForRebirthCount(targetRebirthCount);
    const totalUnlockedPadCount = clampInt(
      BASE_UNLOCKED_INCOME_PAD_SLOTS + unlockedSecondFloorPadCount,
      0,
      BASE_UNLOCKED_INCOME_PAD_SLOTS + SECOND_FLOOR_TOTAL_PAD_SLOTS,
      BASE_UNLOCKED_INCOME_PAD_SLOTS
    );
    const grantedOwnedClassmates = buildAlternatingRainbowOwnedClassmateEntries(
      totalUnlockedPadCount,
      grant.primaryNpcName,
      grant.secondaryNpcName
    );

    for (let i = 0; i < saveSlots.length; i += 1) {
      const slot = saveSlots[i];
      if (!slot || !slot.used) {
        continue;
      }
      const slotUsername = sanitizeNameTag(slot.username || slot.name || (slot.avatar && slot.avatar.username) || "");
      if (slotUsername !== safeUsername) {
        continue;
      }

      if (slot.rebirthCount !== targetRebirthCount) {
        slot.rebirthCount = targetRebirthCount;
        changed = true;
      }
      if (slot.rebirthMultiplier !== targetRebirthMultiplier) {
        slot.rebirthMultiplier = targetRebirthMultiplier;
        changed = true;
      }
      if (slot.secondFloorUnlocked !== true) {
        slot.secondFloorUnlocked = true;
        changed = true;
      }
      if (slot.floorMigrationApplied !== true) {
        slot.floorMigrationApplied = true;
        changed = true;
      }
      if (slot.adonisResetApplied !== true) {
        slot.adonisResetApplied = true;
        changed = true;
      }

      const currentOwnedJson = JSON.stringify(sanitizeOwnedClassmateEntries(slot.ownedClassmates));
      const grantedOwnedJson = JSON.stringify(grantedOwnedClassmates);
      if (currentOwnedJson !== grantedOwnedJson) {
        slot.ownedClassmates = grantedOwnedClassmates;
        changed = true;
      }

      appliedState[safeUsername] = true;
      stateChanged = true;
      break;
    }
  }

  if (stateChanged) {
    saveOneTimeProfileMaxedBaseGrantState(appliedState);
  }
  return changed;
}

function applyOneTimeProfileCustomClassmateGrants() {
  if (!Array.isArray(saveSlots) || !saveSlots.length || !ONE_TIME_PROFILE_CUSTOM_CLASSMATE_GRANTS.length) {
    return false;
  }
  const storageKey = ONE_TIME_PROFILE_CUSTOM_CLASSMATE_GRANT_STORAGE_KEY;
  let appliedState = {};
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (raw) appliedState = JSON.parse(raw) || {};
  } catch (e) { appliedState = {}; }
  let changed = false;
  let stateChanged = false;
  for (const grant of ONE_TIME_PROFILE_CUSTOM_CLASSMATE_GRANTS) {
    if (!grant || typeof grant.username !== "string") continue;
    const safeUsername = sanitizeNameTag(grant.username);
    if (!safeUsername || appliedState[safeUsername]) continue;
    for (let i = 0; i < saveSlots.length; i += 1) {
      const slot = saveSlots[i];
      if (!slot || !slot.used) continue;
      const slotUsername = sanitizeNameTag(slot.username || slot.name || (slot.avatar && slot.avatar.username) || "");
      if (slotUsername !== safeUsername) continue;
      if (!Array.isArray(slot.ownedClassmates)) slot.ownedClassmates = [];
      for (const entry of grant.classmates) {
        const alreadyHas = slot.ownedClassmates.some(
          (c) => c.npcName === entry.npcName && c.variantId === entry.variantId && c.padIndex === entry.padIndex
        );
        if (!alreadyHas) {
          slot.ownedClassmates.push({ npcName: entry.npcName, variantId: entry.variantId, padIndex: entry.padIndex, pendingMoney: 0 });
          changed = true;
        }
      }
      appliedState[safeUsername] = true;
      stateChanged = true;
      break;
    }
  }
  if (stateChanged) {
    try { window.localStorage.setItem(storageKey, JSON.stringify(appliedState)); } catch (e) {}
  }
  return changed;
}

function migrateSaveSlotsToSingleProfile() {
  if (!Array.isArray(saveSlots) || !saveSlots.length) {
    saveSlots = buildDefaultSaveSlots();
    selectedSaveSlotIndex = PRIMARY_PROFILE_SLOT_INDEX;
    return true;
  }

  const usedSlots = saveSlots
    .map((slot, index) => ({ slot, index }))
    .filter(({ slot }) => slot && slot.used);

  let primaryIndex = PRIMARY_PROFILE_SLOT_INDEX;
  if (!(saveSlots[PRIMARY_PROFILE_SLOT_INDEX] && saveSlots[PRIMARY_PROFILE_SLOT_INDEX].used) && usedSlots.length > 0) {
    primaryIndex = usedSlots[0].index;
  }

  let changed = false;
  if (primaryIndex !== PRIMARY_PROFILE_SLOT_INDEX || usedSlots.length > 1) {
    archiveLegacySaveSlots(saveSlots);
    const consolidatedSlots = buildDefaultSaveSlots();
    if (usedSlots.length > 0) {
      consolidatedSlots[PRIMARY_PROFILE_SLOT_INDEX] = sanitizeSaveSlot(
        saveSlots[primaryIndex],
        PRIMARY_PROFILE_SLOT_INDEX
      );
    }
    saveSlots = consolidatedSlots;
    changed = true;
  }

  const primarySlot = saveSlots[PRIMARY_PROFILE_SLOT_INDEX];
  if (primarySlot) {
    const safeUsername = sanitizeNameTag(primarySlot.username || primarySlot.name || (primarySlot.avatar && primarySlot.avatar.username) || DEFAULT_NAMETAG);
    const normalizedAvatar = normalizeAvatarConfig({
      ...(primarySlot.avatar || getDefaultAvatarConfig()),
      username: safeUsername,
      nametag: safeUsername,
    });
    if (primarySlot.username !== safeUsername || primarySlot.name !== (primarySlot.used ? safeUsername : "")) {
      primarySlot.username = safeUsername;
      primarySlot.name = primarySlot.used ? safeUsername : "";
      changed = true;
    }
    if (JSON.stringify(primarySlot.avatar) !== JSON.stringify(normalizedAvatar)) {
      primarySlot.avatar = normalizedAvatar;
      changed = true;
    }
    if (typeof primarySlot.usernameConfirmed !== "boolean") {
      primarySlot.usernameConfirmed = false;
      changed = true;
    }
  }

  if (selectedSaveSlotIndex !== PRIMARY_PROFILE_SLOT_INDEX) {
    selectedSaveSlotIndex = PRIMARY_PROFILE_SLOT_INDEX;
    changed = true;
  }
  if (activeSaveSlotIndex > PRIMARY_PROFILE_SLOT_INDEX) {
    activeSaveSlotIndex = PRIMARY_PROFILE_SLOT_INDEX;
    changed = true;
  }
  return changed;
}

function parseStoredSaveSlots(rawValue, fallbackSlots) {
  if (!rawValue) {
    return null;
  }
  try {
    const parsed = JSON.parse(rawValue);
    if (!Array.isArray(parsed)) {
      return null;
    }
    return fallbackSlots.map((slot, index) => sanitizeSaveSlot(parsed[index], index));
  } catch (error) {
    console.warn("Failed to parse stored save slot payload.", error);
    return null;
  }
}

function loadSettingsFromStorage() {
  try {
    const raw = window.localStorage.getItem(SETTINGS_STORAGE_KEY);
    gameSettings = raw ? sanitizeSettings(JSON.parse(raw)) : { ...DEFAULT_SETTINGS };
  } catch (error) {
    console.warn("Failed to load settings, using defaults.", error);
    gameSettings = { ...DEFAULT_SETTINGS };
  }
}

function saveSettingsToStorage() {
  try {
    window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(gameSettings));
  } catch (error) {
    console.warn("Failed to save settings.", error);
  }
}

function loadSaveSlotsFromStorage() {
  const fallbackSlots = buildDefaultSaveSlots();
  let didMigrate = false;
  try {
    const primaryRaw = window.localStorage.getItem(SAVE_SLOTS_STORAGE_KEY);
    const backupRaw = window.localStorage.getItem(SAVE_SLOTS_BACKUP_STORAGE_KEY);
    const primarySlots = parseStoredSaveSlots(primaryRaw, fallbackSlots);
    const backupSlots = parseStoredSaveSlots(backupRaw, fallbackSlots);
    saveSlots = primarySlots || backupSlots || fallbackSlots;
  } catch (error) {
    console.warn("Failed to load save slots, using empty slots.", error);
    saveSlots = fallbackSlots;
  }
  didMigrate = migrateSaveSlotsToSingleProfile();
  if (applyOneTimeProfileTopups()) {
    didMigrate = true;
  }
  if (applyOneTimeProfileRebirthGrants()) {
    didMigrate = true;
  }
  if (applySecondFloorUnlockMigration()) {
    didMigrate = true;
  }
  if (applyStartingMoneyMigration()) {
    didMigrate = true;
  }
  if (applyAdonisProgressResetMigration()) {
    didMigrate = true;
  }
  if (applyOneTimeProfileMaxedBaseGrants()) {
    didMigrate = true;
  }
  if (applyOneTimeProfileCustomClassmateGrants()) {
    didMigrate = true;
  }
  return didMigrate;
}

function buildOwnedClassmateEntriesForBase(baseIndex) {
  if (!Number.isInteger(baseIndex) || baseIndex < 0) {
    return [];
  }
  const entries = [];
  for (const student of studentNpcs) {
    if (!student || student.purchaseState === "forSale" || !student.avatar || !student.avatar.userData) {
      continue;
    }
    if (student.assignedBaseIndex !== baseIndex || !Number.isInteger(student.assignedPadIndex)) {
      continue;
    }
    const npcName = String(student.avatar.userData.npcBaseName || student.avatar.userData.npcDisplayName || "").trim();
    if (!getNpcRarityForName(npcName)) {
      continue;
    }
    entries.push({
      npcName,
      variantId: normalizeNpcVariantId(student.avatar.userData.npcVariantId),
      padIndex: student.assignedPadIndex,
      pendingMoney: clampInt(student.pendingMoney, 0, MAX_CURRENCY_VALUE, 0),
    });
  }
  entries.sort((a, b) => a.padIndex - b.padIndex);
  return entries;
}

function syncOwnedClassmatesToSaveSlots() {
  if (!Array.isArray(saveSlots) || !streetBasePads.length || !studentNpcs.length) {
    return;
  }
  for (let i = 0; i < saveSlots.length; i += 1) {
    const slot = saveSlots[i];
    if (!slot || !slot.used) {
      if (slot) {
        slot.ownedClassmates = [];
      }
      continue;
    }
    const baseIndex = ensureSlotBaseAssignment(slot, i);
    slot.ownedClassmates = buildOwnedClassmateEntriesForBase(baseIndex);
  }
}

function saveSaveSlotsToStorage() {
  try {
    if (isSecondaryTabBlocked() || !Array.isArray(saveSlots) || !saveSlots.length) {
      return;
    }
    if (activeSaveSlotIndex >= 0 && activeSaveSlotIndex < saveSlots.length) {
      const activeSlot = saveSlots[activeSaveSlotIndex];
      if (activeSlot && activeSlot.used) {
        activeSlot.lastSeen = Date.now();
      }
    }
    syncOwnedClassmatesToSaveSlots();
    const payload = JSON.stringify(saveSlots);
    window.localStorage.setItem(SAVE_SLOTS_STORAGE_KEY, payload);
    window.localStorage.setItem(SAVE_SLOTS_BACKUP_STORAGE_KEY, payload);
  } catch (error) {
    console.warn("Failed to save save slots.", error);
  }
}

function updateSaveAutosave(dt) {
  if (activeSaveSlotIndex < 0 || !Array.isArray(saveSlots) || !saveSlots.length) {
    saveAutosaveAccumulator = 0;
    return;
  }
  saveAutosaveAccumulator += Math.max(0, Number(dt) || 0);
  if (saveAutosaveAccumulator < SAVE_AUTOSAVE_INTERVAL_SECONDS) {
    return;
  }
  saveAutosaveAccumulator = 0;
  saveSaveSlotsToStorage();
}

function qualityToPixelRatio(level) {
  const deviceRatio = window.devicePixelRatio || 1;
  if (level <= 1) {
    return Math.max(0.5, deviceRatio * 0.65);
  }
  if (level === 2) {
    return Math.max(0.75, deviceRatio * 0.9);
  }
  if (level === 3) {
    return Math.max(1, deviceRatio);
  }
  return Math.min(2.25, deviceRatio * 1.3);
}

function setSceneShadowState(enabled) {
  renderer.shadowMap.enabled = enabled;
  sunLight.castShadow = enabled;
  scene.traverse((node) => {
    if (!node.isMesh) {
      return;
    }
    if (typeof node.userData.baseCastShadow === "undefined") {
      node.userData.baseCastShadow = Boolean(node.castShadow);
    }
    if (typeof node.userData.baseReceiveShadow === "undefined") {
      node.userData.baseReceiveShadow = Boolean(node.receiveShadow);
    }

    if (!enabled) {
      node.castShadow = false;
      node.receiveShadow = false;
      return;
    }
    node.castShadow = Boolean(node.userData.baseCastShadow);
    node.receiveShadow = Boolean(node.userData.baseReceiveShadow);
  });
}

function applyGraphicsQuality(qualityLevel) {
  renderer.setPixelRatio(qualityToPixelRatio(qualityLevel));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
}

function applySettingsToGame(shouldPersist = false) {
  gameSettings = sanitizeSettings(gameSettings);
  setSceneShadowState(gameSettings.shadows);
  applyGraphicsQuality(gameSettings.graphicsQuality);
  if (shouldPersist) {
    saveSettingsToStorage();
  }
}

function renderSettingsUi() {
  if (settingsShadowsToggleEl) {
    settingsShadowsToggleEl.checked = Boolean(gameSettings.shadows);
  }
  if (settingsInvertMousepadToggleEl) {
    settingsInvertMousepadToggleEl.checked = Boolean(gameSettings.invertMousepad);
  }
  if (settingsQualitySelectEl) {
    settingsQualitySelectEl.value = String(gameSettings.graphicsQuality);
  }
  if (settingsSensitivityRangeEl) {
    settingsSensitivityRangeEl.value = String(gameSettings.sensitivity);
  }
  if (settingsSensitivityValueEl) {
    settingsSensitivityValueEl.textContent = String(gameSettings.sensitivity);
  }
}

function renderSaveSlotsUi() {
  if (!saveSlotButtonEls.length) {
    return;
  }

  saveSlotButtonEls.forEach((buttonEl, index) => {
    const slot = saveSlots[index] || createEmptySaveSlot(index);
    const nameEl = buttonEl.querySelector("[data-slot-name]");
    const moneyEl = buttonEl.querySelector("[data-slot-money]");
    const levelEl = buttonEl.querySelector("[data-slot-level]");
    buttonEl.classList.toggle("selected", index === selectedSaveSlotIndex);

    if (slot.used) {
      if (nameEl) {
        nameEl.textContent = `Name: ${slot.name || slot.avatar.nametag}`;
      }
      if (moneyEl) {
        moneyEl.textContent = `Money: $${slot.money}`;
      }
      if (levelEl) {
        levelEl.textContent = `Level: ${slot.level}`;
      }
    } else {
      if (nameEl) {
        nameEl.textContent = "New Save Slot";
      }
      if (moneyEl) {
        moneyEl.textContent = `Money: $${STARTING_MONEY}`;
      }
      if (levelEl) {
        levelEl.textContent = "Level: 1";
      }
    }
  });

  if (selectedSlotLabelEl) {
    const selectedSlot = saveSlots[selectedSaveSlotIndex];
    selectedSlotLabelEl.textContent = selectedSlot && selectedSlot.used
      ? `Selected: Slot ${selectedSaveSlotIndex + 1} (Existing)`
      : `Selected: Slot ${selectedSaveSlotIndex + 1} (New)`;
  }
}

function setSelectedSaveSlot(index, applySlotAvatar = true) {
  if (!Number.isInteger(index) || index < 0 || index >= SAVE_SLOT_COUNT) {
    return;
  }
  selectedSaveSlotIndex = index;
  const slot = saveSlots[index];
  if (applySlotAvatar && slot && slot.used) {
    applyAvatarConfig(slot.avatar, true);
  }
  renderSaveSlotsUi();
}

function showMenuPanel(panelId) {
  const hasTargetPanel = menuPanelEls.some((panelEl) => panelEl.id === panelId);
  if (menuMainEl) {
    menuMainEl.classList.toggle("hidden", !hasTargetPanel);
  }

  menuTabButtonEls.forEach((buttonEl) => {
    const isActive = hasTargetPanel && buttonEl.dataset.menuTab === panelId;
    buttonEl.classList.toggle("active", isActive);
  });

  menuPanelEls.forEach((panelEl) => {
    panelEl.classList.toggle("active", hasTargetPanel && panelEl.id === panelId);
  });
}

function openPlayMenuPanel() {
  showMenuPanel("playPanel");
  if (menuMainEl) {
    menuMainEl.scrollTop = 0;
  }
}

function activateMenuTab(panelId) {
  if (typeof panelId !== "string" || !panelId) {
    return;
  }
  const now = typeof performance !== "undefined" && typeof performance.now === "function" ? performance.now() : Date.now();
  if (lastMenuTabActivationId === panelId && now - lastMenuTabActivationTimeMs < 240) {
    return;
  }
  lastMenuTabActivationId = panelId;
  lastMenuTabActivationTimeMs = now;

  if (panelId === "playPanel") {
    openPlayMenuPanel();
    return;
  }
  showMenuPanel(panelId);
}

function bindMenuNavigation() {
  if (menuNavigationBound) {
    return;
  }
  menuNavigationBound = true;

  menuTabButtonEls.forEach((buttonEl) => {
    buttonEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      activateMenuTab(buttonEl.dataset.menuTab);
    });
  });
}

function clearInputState() {
  Object.keys(keyState).forEach((key) => {
    keyState[key] = false;
  });
  jumpQueued = false;
  pointerRotate = false;
  oneFingerLookActive = false;
  oneFingerTouchId = -1;
  twoFingerLookActive = false;
  activeTouchCount = 0;
}

function hideJacobBlockOverlay() {
  if (jacobBlockOverlayEl) {
    jacobBlockOverlayEl.classList.add("hidden");
  }
}

function showJacobBlockOverlay() {
  if (jacobBlockOverlayEl) {
    jacobBlockOverlayEl.classList.remove("hidden");
  }
}

function isJacobBlockedName(name) {
  return typeof name === "string" && name.trim().toLowerCase() === "jacob";
}

function readPrimaryTabLockRecord() {
  try {
    const raw = window.localStorage.getItem(PRIMARY_TAB_LOCK_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return null;
    }
    const ownerId = typeof parsed.ownerId === "string" ? parsed.ownerId : "";
    const openedAt = Number(parsed.openedAt);
    const heartbeatAt = Number(parsed.heartbeatAt);
    if (!ownerId || !Number.isFinite(openedAt) || !Number.isFinite(heartbeatAt)) {
      return null;
    }
    return { ownerId, openedAt, heartbeatAt };
  } catch (error) {
    console.warn("Failed to read primary tab lock.", error);
    return null;
  }
}

function writePrimaryTabLockRecord(nowMs = Date.now()) {
  try {
    window.localStorage.setItem(
      PRIMARY_TAB_LOCK_STORAGE_KEY,
      JSON.stringify({
        ownerId: primaryTabId,
        openedAt: primaryTabOpenedAt,
        heartbeatAt: nowMs,
      })
    );
  } catch (error) {
    console.warn("Failed to write primary tab lock.", error);
  }
}

function isPrimaryTabLockFresh(record, nowMs = Date.now()) {
  return Boolean(record && Number.isFinite(record.heartbeatAt) && nowMs - record.heartbeatAt <= PRIMARY_TAB_LOCK_STALE_MS);
}

function comparePrimaryTabPriority(ownerId, openedAt) {
  if (!Number.isFinite(openedAt)) {
    return 1;
  }
  if (primaryTabOpenedAt !== openedAt) {
    return primaryTabOpenedAt < openedAt ? -1 : 1;
  }
  return primaryTabId.localeCompare(String(ownerId || ""));
}

function reloadStateAfterPrimaryTabUnlock() {
  loadSaveSlotsFromStorage();
  restoreOwnedClassmatesFromSaveSlots();
  renderSettingsUi();
  renderSaveSlotsUi();
  syncUsernameRequirementOverlay();
  if (selectedSaveSlotIndex !== PRIMARY_PROFILE_SLOT_INDEX) {
    setSelectedSaveSlot(PRIMARY_PROFILE_SLOT_INDEX, activeSaveSlotIndex < 0);
  }
  if (activeSaveSlotIndex >= 0 && saveSlots[PRIMARY_PROFILE_SLOT_INDEX] && saveSlots[PRIMARY_PROFILE_SLOT_INDEX].used) {
    activeSaveSlotIndex = PRIMARY_PROFILE_SLOT_INDEX;
    applyLeoStateFromActiveSlot();
  }
}

function setSecondaryTabBlocked(nextBlocked) {
  if (secondaryTabBlocked === nextBlocked) {
    return;
  }
  secondaryTabBlocked = nextBlocked;
  if (secondaryTabOverlayEl) {
    secondaryTabOverlayEl.classList.toggle("hidden", !secondaryTabBlocked);
  }
  if (secondaryTabBlocked) {
    if (multiplayerSocket && multiplayerSocket.connected) {
      multiplayerSocket.disconnect();
    }
    clearInputState();
    closeAdonisShop();
    closeRebirthOverlay();
    closeSellConfirmModal();
    setInteractionPrompt("");
    return;
  }
  if (multiplayerSocket && !multiplayerSocket.connected) {
    multiplayerSocket.connect();
  }
  reloadStateAfterPrimaryTabUnlock();
}

function isSecondaryTabBlocked() {
  return secondaryTabBlocked;
}

function syncPrimaryTabLock() {
  const nowMs = Date.now();
  const currentRecord = readPrimaryTabLockRecord();
  const currentIsFresh = isPrimaryTabLockFresh(currentRecord, nowMs);

  if (
    !currentIsFresh ||
    !currentRecord ||
    currentRecord.ownerId === primaryTabId ||
    comparePrimaryTabPriority(currentRecord.ownerId, currentRecord.openedAt) < 0
  ) {
    writePrimaryTabLockRecord(nowMs);
    setSecondaryTabBlocked(false);
    return;
  }

  setSecondaryTabBlocked(true);
}

function startPrimaryTabLockHeartbeat() {
  syncPrimaryTabLock();
  if (primaryTabHeartbeatIntervalId) {
    window.clearInterval(primaryTabHeartbeatIntervalId);
  }
  primaryTabHeartbeatIntervalId = window.setInterval(() => {
    syncPrimaryTabLock();
  }, PRIMARY_TAB_LOCK_HEARTBEAT_INTERVAL_MS);
}

function releasePrimaryTabLock() {
  if (primaryTabHeartbeatIntervalId) {
    window.clearInterval(primaryTabHeartbeatIntervalId);
    primaryTabHeartbeatIntervalId = 0;
  }
  try {
    const currentRecord = readPrimaryTabLockRecord();
    if (currentRecord && currentRecord.ownerId === primaryTabId) {
      window.localStorage.removeItem(PRIMARY_TAB_LOCK_STORAGE_KEY);
    }
  } catch (error) {
    console.warn("Failed to release primary tab lock.", error);
  }
}

function showPlayUsernameValidation(message) {
  if (playValidationMessageEl) {
    playValidationMessageEl.textContent = message;
    playValidationMessageEl.classList.remove("hidden");
  }
  if (usernameFieldEl) {
    usernameFieldEl.classList.add("is-attention");
  }
  if (usernameHighlightTimeoutId) {
    window.clearTimeout(usernameHighlightTimeoutId);
  }
  usernameHighlightTimeoutId = window.setTimeout(() => {
    if (playValidationMessageEl) {
      playValidationMessageEl.classList.add("hidden");
      playValidationMessageEl.textContent = "";
    }
    if (usernameFieldEl) {
      usernameFieldEl.classList.remove("is-attention");
    }
    usernameHighlightTimeoutId = 0;
  }, USERNAME_HIGHLIGHT_DURATION_MS);
}

function updateUsernameFieldLockState() {
  if (!nametagInputEl || !usernameFieldEl) {
    return;
  }
  const primarySlot = getPrimarySaveSlot();
  const isLocked = Boolean(primarySlot && primarySlot.used && primarySlot.usernameConfirmed);
  nametagInputEl.disabled = isLocked;
  nametagInputEl.readOnly = isLocked;
  usernameFieldEl.classList.toggle("is-locked", isLocked);
  if (isLocked) {
    nametagInputEl.title = "Username is locked for this profile.";
  } else {
    nametagInputEl.removeAttribute("title");
  }
}

function closeUsernameRequiredOverlay() {
  if (usernameRequiredOverlayEl) {
    usernameRequiredOverlayEl.classList.add("hidden");
  }
  if (usernameRequiredMessageEl) {
    usernameRequiredMessageEl.classList.add("hidden");
    usernameRequiredMessageEl.textContent = "";
  }
}

function showUsernameRequiredMessage(message) {
  if (!usernameRequiredMessageEl) {
    return;
  }
  usernameRequiredMessageEl.textContent = message;
  usernameRequiredMessageEl.classList.toggle("hidden", !message);
}

function openUsernameRequiredOverlay(prefillValue = "") {
  if (!usernameRequiredOverlayEl) {
    return;
  }
  usernameRequiredOverlayEl.classList.remove("hidden");
  if (usernameRequiredInputEl) {
    const initialValue = isCustomUsername(prefillValue) ? sanitizeNameTag(prefillValue) : "";
    usernameRequiredInputEl.value = initialValue;
    window.requestAnimationFrame(() => {
      usernameRequiredInputEl.focus();
      usernameRequiredInputEl.select();
    });
  }
  showUsernameRequiredMessage("");
}

function isUsernameRequiredOverlayOpen() {
  return Boolean(usernameRequiredOverlayEl && !usernameRequiredOverlayEl.classList.contains("hidden"));
}

function getPrimarySaveSlot() {
  return saveSlots[PRIMARY_PROFILE_SLOT_INDEX] || null;
}

function doesPrimaryProfileNeedUsername() {
  const primarySlot = getPrimarySaveSlot();
  return Boolean(primarySlot && primarySlot.used && !primarySlot.usernameConfirmed);
}

function syncUsernameRequirementOverlay() {
  if (doesPrimaryProfileNeedUsername()) {
    const primarySlot = getPrimarySaveSlot();
    const suggestedName = primarySlot ? primarySlot.name || (primarySlot.avatar && (primarySlot.avatar.username || primarySlot.avatar.nametag)) : "";
    openUsernameRequiredOverlay(suggestedName);
  } else {
    closeUsernameRequiredOverlay();
  }
  updateUsernameFieldLockState();
}

function applyUsernameToPrimaryProfile(username, avatarOverride = null) {
  const safeUsername = sanitizeNameTag(username);
  const slot = saveSlots[PRIMARY_PROFILE_SLOT_INDEX] || createEmptySaveSlot(PRIMARY_PROFILE_SLOT_INDEX);
  const avatarSource =
    avatarOverride && typeof avatarOverride === "object"
      ? avatarOverride
      : slot.avatar || getDefaultAvatarConfig();
  const nextAvatar = normalizeAvatarConfig({
    ...avatarSource,
    username: safeUsername,
    nametag: safeUsername,
  });
  slot.avatar = nextAvatar;
  slot.name = safeUsername;
  slot.username = safeUsername;
  slot.usernameConfirmed = true;
  saveSlots[PRIMARY_PROFILE_SLOT_INDEX] = sanitizeSaveSlot(slot, PRIMARY_PROFILE_SLOT_INDEX);
  if (selectedSaveSlotIndex === PRIMARY_PROFILE_SLOT_INDEX || activeSaveSlotIndex === PRIMARY_PROFILE_SLOT_INDEX || isMenuOpen()) {
    applyAvatarConfig(saveSlots[PRIMARY_PROFILE_SLOT_INDEX].avatar, true);
  }
  saveSaveSlotsToStorage();
  renderSaveSlotsUi();
  updateUsernameFieldLockState();
  syncMultiplayerProfile();
}

function commitPrimaryUsername(rawUsername, source = "menu") {
  const safeUsername = sanitizeNameTag(rawUsername);
  const primarySlot = getPrimarySaveSlot();
  const currentUsername = primarySlot ? primarySlot.name || (primarySlot.avatar && (primarySlot.avatar.username || primarySlot.avatar.nametag)) : "";
  const currentAvatar = getCurrentAvatarConfig();

  if (!isCustomUsername(safeUsername)) {
    const message = source === "overlay" ? "Please choose a username first." : "Change username first!";
    if (source === "overlay") {
      showUsernameRequiredMessage(message);
    } else {
      showPlayUsernameValidation(message);
    }
    return false;
  }

  if (isJacobBlockedName(safeUsername)) {
    showJacobBlockOverlay();
    if (source === "overlay") {
      showUsernameRequiredMessage("That username is blocked.");
    } else {
      showPlayUsernameValidation("That username is blocked.");
    }
    return false;
  }

  if (isUsernameTakenLocally(safeUsername, currentUsername)) {
    const takenMessage = "That username is already taken on this device.";
    if (source === "overlay") {
      showUsernameRequiredMessage(takenMessage);
    } else {
      showPlayUsernameValidation(takenMessage);
    }
    return false;
  }

  hideJacobBlockOverlay();
  applyUsernameToPrimaryProfile(safeUsername, currentAvatar);
  if (nametagInputEl) {
    nametagInputEl.value = safeUsername;
  }
  if (usernameRequiredInputEl) {
    usernameRequiredInputEl.value = safeUsername;
  }
  closeUsernameRequiredOverlay();
  return true;
}

function loadSelectedSaveSlot() {
  try {
    if (isSecondaryTabBlocked()) {
      return;
    }
    const slotIndex = PRIMARY_PROFILE_SLOT_INDEX;
    const slot = saveSlots[slotIndex];
    if (!slot) {
      return;
    }

    const currentAvatar = getCurrentAvatarConfig();
    applyAvatarConfig(currentAvatar, true);
    if (!commitPrimaryUsername(currentAvatar.username || currentAvatar.nametag, "menu")) {
      syncUsernameRequirementOverlay();
      return;
    }

    const refreshedSlot = saveSlots[slotIndex];
    const nextAvatar = refreshedSlot ? normalizeAvatarConfig(refreshedSlot.avatar) : currentAvatar;
    applyAvatarConfig(nextAvatar, true);
    if (isJacobBlockedName(nextAvatar.username || nextAvatar.nametag)) {
      showJacobBlockOverlay();
      clearInputState();
      setInteractionPrompt("");
      return;
    }
    hideJacobBlockOverlay();

    const activeProfile = saveSlots[slotIndex];
    const offlineIncomeAward = calculateOfflineIncomeAward(activeProfile);
    if (!activeProfile.used) {
      activeProfile.money = STARTING_MONEY;
      activeProfile.level = 1;
      activeProfile.rebirthCount = 0;
      activeProfile.rebirthMultiplier = 1;
      activeProfile.leoPurchased = false;
      activeProfile.leoGenerating = false;
    }
    if (offlineIncomeAward) {
      activeProfile.money = clampCurrencyValue(activeProfile.money + offlineIncomeAward.offlineEarnings, activeProfile.money);
    }
    activeProfile.money = clampInt(activeProfile.money, 0, MAX_CURRENCY_VALUE, STARTING_MONEY);
    activeProfile.used = true;
    activeProfile.avatar = nextAvatar;
    activeProfile.name = sanitizeNameTag(nextAvatar.username || nextAvatar.nametag);
    activeProfile.username = activeProfile.name;
    activeProfile.usernameConfirmed = true;
    ensureSlotBaseAssignment(activeProfile, slotIndex);

    saveSlots[slotIndex] = sanitizeSaveSlot(activeProfile, slotIndex);
    activeSaveSlotIndex = slotIndex;
    saveAutosaveAccumulator = 0;
    gameSettings.shadows = false;
    applySettingsToGame(true);
    renderSettingsUi();
    applyLeoStateFromActiveSlot();
    restoreOwnedClassmatesFromSaveSlots();
    syncMultiplayerProfile();
    saveSaveSlotsToStorage();
    renderSaveSlotsUi();
    syncUsernameRequirementOverlay();

    if (menuScreenEl) {
      menuScreenEl.classList.add("hidden");
    }
    clearInputState();
    start();
    if (offlineIncomeAward) {
      showOfflineIncomePopup(offlineIncomeAward.offlineSeconds, offlineIncomeAward.offlineEarnings);
    } else {
      closeOfflineIncomePopup();
    }
  } catch (error) {
    console.error("Loading selected save slot failed", error);
    if (menuScreenEl) {
      menuScreenEl.classList.add("hidden");
    }
    clearInputState();
    start();
    closeOfflineIncomePopup();
  }
}

function initMenuAndSettings() {
  loadSettingsFromStorage();
  const didMigrateSaves = loadSaveSlotsFromStorage();
  restoreOwnedClassmatesFromSaveSlots();
  syncBaseSecondFloorAvailability(true);
  applySettingsToGame(false);
  renderSettingsUi();
  setSelectedSaveSlot(PRIMARY_PROFILE_SLOT_INDEX, true);
  openPlayMenuPanel();
  syncAvatarPreview2D();
  syncUsernameRequirementOverlay();
  if (didMigrateSaves) {
    saveSaveSlotsToStorage();
  }

  bindMenuNavigation();

  saveSlotButtonEls.forEach((buttonEl, index) => {
    buttonEl.addEventListener("click", () => {
      setSelectedSaveSlot(index, true);
    });
  });

  if (loadSlotBtnEl) {
    loadSlotBtnEl.addEventListener("click", () => {
      loadSelectedSaveSlot();
    });
  }

  if (settingsShadowsToggleEl) {
    settingsShadowsToggleEl.addEventListener("change", (event) => {
      gameSettings.shadows = Boolean(event.target.checked);
      applySettingsToGame(true);
      renderSettingsUi();
    });
  }

  if (settingsInvertMousepadToggleEl) {
    settingsInvertMousepadToggleEl.addEventListener("change", (event) => {
      gameSettings.invertMousepad = Boolean(event.target.checked);
      saveSettingsToStorage();
      renderSettingsUi();
    });
  }

  if (settingsQualitySelectEl) {
    settingsQualitySelectEl.addEventListener("change", (event) => {
      gameSettings.graphicsQuality = clampInt(event.target.value, 1, 4, DEFAULT_SETTINGS.graphicsQuality);
      applySettingsToGame(true);
      renderSettingsUi();
    });
  }

  if (settingsSensitivityRangeEl) {
    settingsSensitivityRangeEl.addEventListener("input", (event) => {
      gameSettings.sensitivity = clampInt(event.target.value, 1, 100, DEFAULT_SETTINGS.sensitivity);
      if (settingsSensitivityValueEl) {
        settingsSensitivityValueEl.textContent = String(gameSettings.sensitivity);
      }
    });
    settingsSensitivityRangeEl.addEventListener("change", () => {
      gameSettings.sensitivity = clampInt(settingsSensitivityRangeEl.value, 1, 100, DEFAULT_SETTINGS.sensitivity);
      saveSettingsToStorage();
      renderSettingsUi();
    });
  }

  if (nametagInputEl) {
    nametagInputEl.addEventListener("input", () => {
      if (!isJacobBlockedName(nametagInputEl.value)) {
        hideJacobBlockOverlay();
      }
      if (playValidationMessageEl) {
        playValidationMessageEl.classList.add("hidden");
        playValidationMessageEl.textContent = "";
      }
      if (usernameFieldEl) {
        usernameFieldEl.classList.remove("is-attention");
      }
      const safeUsername = sanitizeNameTag(nametagInputEl.value);
      setAvatarNameTag(safeUsername);
      if (doesPrimaryProfileNeedUsername() && usernameRequiredInputEl) {
        usernameRequiredInputEl.value = isCustomUsername(safeUsername) ? safeUsername : "";
      }
    });
  }

  if (usernameRequiredInputEl) {
    usernameRequiredInputEl.addEventListener("input", () => {
      showUsernameRequiredMessage("");
    });
    usernameRequiredInputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        commitPrimaryUsername(usernameRequiredInputEl.value, "overlay");
      }
    });
  }

  if (usernameRequiredConfirmBtnEl) {
    usernameRequiredConfirmBtnEl.addEventListener("click", () => {
      commitPrimaryUsername(usernameRequiredInputEl ? usernameRequiredInputEl.value : "", "overlay");
    });
  }
}

function rayAabbDistance(origin, direction, maxDistance, collider, radius) {
  const minX = collider.minX - radius;
  const maxX = collider.maxX + radius;
  const minY = collider.minY - radius;
  const maxY = collider.maxY + radius;
  const minZ = collider.minZ - radius;
  const maxZ = collider.maxZ + radius;

  let tMin = 0;
  let tMax = maxDistance;

  const axes = [
    [origin.x, direction.x, minX, maxX],
    [origin.y, direction.y, minY, maxY],
    [origin.z, direction.z, minZ, maxZ],
  ];

  for (const [originAxis, directionAxis, axisMin, axisMax] of axes) {
    if (Math.abs(directionAxis) < 1e-7) {
      if (originAxis < axisMin || originAxis > axisMax) {
        return null;
      }
      continue;
    }

    const invDir = 1 / directionAxis;
    let t1 = (axisMin - originAxis) * invDir;
    let t2 = (axisMax - originAxis) * invDir;
    if (t1 > t2) {
      const temp = t1;
      t1 = t2;
      t2 = temp;
    }

    tMin = Math.max(tMin, t1);
    tMax = Math.min(tMax, t2);
    if (tMin > tMax) {
      return null;
    }
  }

  return tMin <= maxDistance ? tMin : null;
}

function resolveCameraCollisionPosition(origin, desiredPosition) {
  cameraCollisionDir.copy(desiredPosition).sub(origin);
  const maxDistance = cameraCollisionDir.length();
  if (maxDistance < 1e-6) {
    cameraCollisionPosition.copy(desiredPosition);
    return cameraCollisionPosition;
  }

  cameraCollisionDir.multiplyScalar(1 / maxDistance);
  let nearestHit = maxDistance;
  const ownerBaseIndex = getActivePlayerBaseIndex();

  for (const collider of worldColliders) {
    const hitDistance = rayAabbDistance(origin, cameraCollisionDir, maxDistance, collider, CAMERA_COLLISION_RADIUS);
    if (hitDistance === null) {
      continue;
    }
    nearestHit = Math.min(nearestHit, hitDistance);
  }

  for (const collider of doorLaserColliders) {
    if (ownerBaseIndex >= 0 && collider.baseIndex === ownerBaseIndex) {
      continue;
    }
    const hitDistance = rayAabbDistance(origin, cameraCollisionDir, maxDistance, collider, CAMERA_COLLISION_RADIUS);
    if (hitDistance === null) {
      continue;
    }
    nearestHit = Math.min(nearestHit, hitDistance);
  }

  if (nearestHit < maxDistance) {
    const safeDistance = Math.max(0.04, nearestHit - CAMERA_COLLISION_PADDING);
    cameraCollisionPosition.copy(origin).addScaledVector(cameraCollisionDir, safeDistance);
  } else {
    cameraCollisionPosition.copy(desiredPosition);
  }

  cameraCollisionPosition.y = Math.max(1.3, cameraCollisionPosition.y);
  return cameraCollisionPosition;
}

function applyLookDelta(deltaX, deltaY) {
  const sensitivityScale = clamp(gameSettings.sensitivity, 1, 100) / 50;
  const verticalLookDirection = gameSettings.invertMousepad ? -1 : 1;
  yaw -= deltaX * 0.003 * sensitivityScale;
  pitch -= deltaY * 0.00245 * sensitivityScale * verticalLookDirection;
  pitch = clamp(pitch, MIN_PITCH, MAX_PITCH);
}

function setCameraFov(nextFov) {
  cameraFov = clamp(nextFov, MIN_FOV, MAX_FOV);
  camera.fov = cameraFov;
  camera.updateProjectionMatrix();
}

function normalizeWheelDelta(event) {
  let scale = 1;
  if (event.deltaMode === 1) {
    scale = 16;
  } else if (event.deltaMode === 2) {
    scale = window.innerHeight;
  }
  return {
    x: event.deltaX * scale,
    y: event.deltaY * scale,
  };
}

function getTouchCenter(touchA, touchB) {
  return {
    x: (touchA.clientX + touchB.clientX) * 0.5,
    y: (touchA.clientY + touchB.clientY) * 0.5,
  };
}

function getTouchDistance(touchA, touchB) {
  return Math.hypot(touchA.clientX - touchB.clientX, touchA.clientY - touchB.clientY);
}

function getTouchByIdentifier(touchList, identifier) {
  for (let i = 0; i < touchList.length; i += 1) {
    if (touchList[i].identifier === identifier) {
      return touchList[i];
    }
  }
  return null;
}

function shouldShowMobileControls() {
  return MOBILE_TOUCH_ENABLED && running && !isMenuOpen() && !isBlockingGameplayOverlayOpen();
}

function updateMobileControlsVisibility() {
  if (!mobileControlsEl) {
    return;
  }
  const shouldShow = shouldShowMobileControls();
  if (!shouldShow && (mobileJoystickTouchId >= 0 || mobileJoystickVectorX !== 0 || mobileJoystickVectorY !== 0)) {
    resetMobileJoystick();
  }
  mobileControlsEl.classList.toggle("hidden", !shouldShow);
  mobileControlsEl.setAttribute("aria-hidden", shouldShow ? "false" : "true");
}

function updateMobileMovementFlags() {
  mobileMoveInputState.w = mobileJoystickVectorY <= -MOBILE_JOYSTICK_DEADZONE;
  mobileMoveInputState.s = mobileJoystickVectorY >= MOBILE_JOYSTICK_DEADZONE;
  mobileMoveInputState.a = mobileJoystickVectorX <= -MOBILE_JOYSTICK_DEADZONE;
  mobileMoveInputState.d = mobileJoystickVectorX >= MOBILE_JOYSTICK_DEADZONE;
}

function updateMobileJoystickThumb() {
  if (!mobileJoystickThumbEl) {
    return;
  }
  const offsetX = mobileJoystickVectorX * MOBILE_JOYSTICK_MAX_TRAVEL_PX;
  const offsetY = mobileJoystickVectorY * MOBILE_JOYSTICK_MAX_TRAVEL_PX;
  mobileJoystickThumbEl.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
}

function setMobileJoystickVector(nextX, nextY) {
  let x = Number.isFinite(nextX) ? nextX : 0;
  let y = Number.isFinite(nextY) ? nextY : 0;
  const length = Math.hypot(x, y);
  if (length > 1) {
    x /= length;
    y /= length;
  }
  mobileJoystickVectorX = clamp(x, -1, 1);
  mobileJoystickVectorY = clamp(y, -1, 1);
  updateMobileMovementFlags();
  updateMobileJoystickThumb();
}

function resetMobileJoystick() {
  mobileJoystickTouchId = -1;
  setMobileJoystickVector(0, 0);
}

function updateMobileJoystickFromTouch(clientX, clientY) {
  if (!mobileJoystickEl) {
    return;
  }
  const rect = mobileJoystickEl.getBoundingClientRect();
  const centerX = rect.left + rect.width * 0.5;
  const centerY = rect.top + rect.height * 0.5;
  const radius = Math.min(rect.width, rect.height) * 0.5;
  const dx = clientX - centerX;
  const dy = clientY - centerY;
  const clampedLength = Math.min(radius, Math.hypot(dx, dy));
  const angle = Math.atan2(dy, dx);
  const normalizedX = radius > 0 ? (Math.cos(angle) * clampedLength) / radius : 0;
  const normalizedY = radius > 0 ? (Math.sin(angle) * clampedLength) / radius : 0;
  if (!Number.isFinite(normalizedX) || !Number.isFinite(normalizedY)) {
    setMobileJoystickVector(0, 0);
    return;
  }
  setMobileJoystickVector(normalizedX, normalizedY);
}

function collectNearbyIncomeFromPads() {
  const activeSlot = getActiveSaveSlot();
  if (!activeSlot) {
    return 0;
  }

  let collectedDollars = 0;
  let triggeredEshdogFighter = false;
  const activeBaseIndex = getActivePlayerBaseIndex();
  const collectionRadiusFallback = PLAYER_COLLIDER_RADIUS + 0.52;
  for (const student of studentNpcs) {
    if (!student || student.purchaseState !== "generating" || !student.avatar || !student.avatar.userData) {
      continue;
    }

    let canCollectFromPad = false;
    if (Number.isInteger(student.assignedBaseIndex) && Number.isInteger(student.assignedPadIndex)) {
      canCollectFromPad = isPlayerOnIncomePad(student.assignedBaseIndex, student.assignedPadIndex);
    }
    if (!canCollectFromPad) {
      const targetPad = student.assignedPadWorld;
      if (targetPad && Number.isFinite(targetPad.x) && Number.isFinite(targetPad.z)) {
        const dx = targetPad.x - player.position.x;
        const dz = targetPad.z - player.position.z;
        canCollectFromPad = Math.hypot(dx, dz) <= collectionRadiusFallback;
      }
    }
    if (!canCollectFromPad || (student.pendingMoney || 0) <= 0) {
      continue;
    }
    if (
      multiplayerConnected &&
      Number.isInteger(student.assignedBaseIndex) &&
      student.assignedBaseIndex >= 0 &&
      student.assignedBaseIndex !== activeBaseIndex &&
      isBaseProtectedByEshdog(student.assignedBaseIndex)
    ) {
      triggeredEshdogFighter = true;
    }
    collectedDollars += student.pendingMoney;
    student.pendingMoney = 0;
    updateNpcInfoTag(student);
  }

  if (collectedDollars > 0) {
    activeSlot.money = clampInt(activeSlot.money + collectedDollars, 0, MAX_CURRENCY_VALUE, activeSlot.money);
    saveSaveSlotsToStorage();
    renderSaveSlotsUi();
  }

  if (triggeredEshdogFighter) {
    triggerEshdogFighterSlow();
  }

  return collectedDollars;
}

function updateMovement(dt) {
  const shopEffects = getActiveAdonisShopEffectProfile(getActiveSaveSlot());
  const speedMultiplier = Number.isFinite(shopEffects.speedMultiplier) ? shopEffects.speedMultiplier : 1;
  const jumpMultiplier = Number.isFinite(shopEffects.jumpMultiplier) ? shopEffects.jumpMultiplier : 1;
  const gravityMultiplier = Number.isFinite(shopEffects.gravityMultiplier) ? shopEffects.gravityMultiplier : 1;
  eshdogFighterSlowTimer = Math.max(0, eshdogFighterSlowTimer - Math.max(0, Number(dt) || 0));
  const movementDebuffMultiplier = eshdogFighterSlowTimer > 0 ? ESHDOG_FIGHTER_SPEED_MULTIPLIER : 1;
  const moveSpeed = WALK_SPEED * PLAYER_SPEED_MULTIPLIER * speedMultiplier * movementDebuffMultiplier;
  const accelScale = PLAYER_SPEED_MULTIPLIER * speedMultiplier * movementDebuffMultiplier;
  const forwardInput = (keyState.w || mobileMoveInputState.w ? 1 : 0) + (keyState.s || mobileMoveInputState.s ? -1 : 0);
  const rightInput = (keyState.d || mobileMoveInputState.d ? 1 : 0) + (keyState.a || mobileMoveInputState.a ? -1 : 0);
  const hasInput = forwardInput !== 0 || rightInput !== 0;

  tmpForward.set(Math.sin(yaw), 0, -Math.cos(yaw));
  tmpRight.set(Math.cos(yaw), 0, Math.sin(yaw));
  tmpMoveDir
    .set(0, 0, 0)
    .addScaledVector(tmpForward, forwardInput)
    .addScaledVector(tmpRight, rightInput);

  if (tmpMoveDir.lengthSq() > 0) {
    tmpMoveDir.normalize();
  }

  tmpTargetVelocity.copy(tmpMoveDir).multiplyScalar(moveSpeed);

  if (grounded) {
    if (hasInput) {
      velocity.x = moveToward(velocity.x, tmpTargetVelocity.x, GROUND_ACCEL * accelScale * dt);
      velocity.z = moveToward(velocity.z, tmpTargetVelocity.z, GROUND_ACCEL * accelScale * dt);
    } else {
      velocity.x = moveToward(velocity.x, 0, GROUND_DECEL * accelScale * dt);
      velocity.z = moveToward(velocity.z, 0, GROUND_DECEL * accelScale * dt);
    }

    if (jumpQueued) {
      velocity.y = JUMP_POWER * jumpMultiplier;
      grounded = false;
      jumpQueued = false;
    }
  } else {
    velocity.x = moveToward(velocity.x, tmpTargetVelocity.x, AIR_ACCEL * accelScale * dt);
    velocity.z = moveToward(velocity.z, tmpTargetVelocity.z, AIR_ACCEL * accelScale * dt);
  }

  const previousFeetY = player.position.y;
  velocity.y -= GRAVITY * gravityMultiplier * dt;
  const stairAssistTargetY = getSecondFloorStairAssistTargetY();
  const collisionFeetY = Number.isFinite(stairAssistTargetY) ? Math.max(previousFeetY, stairAssistTargetY) : previousFeetY;

  // Sub-step horizontal movement so the player can never skip through thin walls in a single frame.
  // Min wall thickness is ~0.46 units; we keep each sub-step below 0.3 units of travel.
  const _hSpeed = Math.hypot(velocity.x, velocity.z);
  const _numSteps = Math.max(1, Math.ceil(_hSpeed * dt / 0.3));
  const _subDt = dt / _numSteps;
  for (let _step = 0; _step < _numSteps; _step++) {
    player.position.x += velocity.x * _subDt;
    resolveHorizontalCollisions(collisionFeetY);
    player.position.z += velocity.z * _subDt;
    resolveHorizontalCollisions(collisionFeetY);
  }

  grounded = resolveVerticalCollisions(previousFeetY, player.position.y + velocity.y * dt);
  if (!grounded && velocity.y <= 0) {
    const snapRange = PLAYER_STEP_HEIGHT + Math.max(0.12, Math.abs(velocity.y) * dt + 0.08);
    grounded = snapPlayerToGround(snapRange);
  }
  if (applySecondFloorStairWalkAssist()) {
    grounded = true;
  }

  if (player.position.y <= WORLD_GROUND_SURFACE_Y) {
    player.position.y = WORLD_GROUND_SURFACE_Y;
    velocity.y = 0;
    grounded = true;
  }

  const clampedX = clamp(player.position.x, -WORLD_BOUND_X, WORLD_BOUND_X);
  const clampedZ = clamp(player.position.z, -WORLD_BOUND_Z, WORLD_BOUND_Z);
  if (clampedX !== player.position.x) {
    player.position.x = clampedX;
    velocity.x = 0;
  }
  if (clampedZ !== player.position.z) {
    player.position.z = clampedZ;
    velocity.z = 0;
  }

  updateBaseLockDoors(dt);

  const horizontalSpeed = Math.hypot(velocity.x, velocity.z);
  const moving = hasInput && horizontalSpeed > 0.25;
  const moveBlend = Math.min(1, horizontalSpeed / moveSpeed);

  if (moving && grounded) {
    walkCycle += dt * (4.1 + moveBlend * 4.9) * PLAYER_RUN_ANIM_SPEED_MULTIPLIER;
  }
  idleCycle += dt * 2.4;

  let targetLeftArmX = 0;
  let targetRightArmX = 0;
  let targetLeftLegX = 0;
  let targetRightLegX = 0;
  let targetTorsoY = TORSO_BASE_Y;
  let targetHeadY = HEAD_BASE_Y;
  let targetTorsoTilt = 0;

  if (!grounded) {
    const rising = velocity.y > 2;
    targetLeftArmX = rising ? -1.05 : -0.72;
    targetRightArmX = rising ? -1.05 : -0.72;
    targetLeftLegX = rising ? 0.42 : 0.78;
    targetRightLegX = rising ? 0.42 : 0.78;
    targetTorsoY = TORSO_BASE_Y + 0.05;
    targetHeadY = HEAD_BASE_Y + 0.02;
    targetTorsoTilt = rising ? -0.08 : 0.12;
  } else if (moving) {
    const swingStrength = moveBlend;
    const swing = Math.sin(walkCycle) * 0.55 * swingStrength;
    const bob = Math.sin(walkCycle * 2) * 0.04 * swingStrength;
    targetLeftArmX = swing;
    targetRightArmX = -swing;
    targetLeftLegX = -swing;
    targetRightLegX = swing;
    targetTorsoY = TORSO_BASE_Y + bob;
    targetHeadY = HEAD_BASE_Y + bob * 0.35;
    targetTorsoTilt = Math.cos(walkCycle) * 0.018 * swingStrength;
  } else {
    const breathe = Math.sin(idleCycle) * 0.03;
    targetLeftArmX = 0.05 + breathe;
    targetRightArmX = -0.05 - breathe;
    targetTorsoY = TORSO_BASE_Y + breathe * 0.4;
    targetHeadY = HEAD_BASE_Y + breathe * 0.25;
  }

  const animLerp = Math.min(1, dt * 10);
  player.userData.leftArm.rotation.x += (targetLeftArmX - player.userData.leftArm.rotation.x) * animLerp;
  player.userData.rightArm.rotation.x += (targetRightArmX - player.userData.rightArm.rotation.x) * animLerp;
  player.userData.leftLeg.rotation.x += (targetLeftLegX - player.userData.leftLeg.rotation.x) * animLerp;
  player.userData.rightLeg.rotation.x += (targetRightLegX - player.userData.rightLeg.rotation.x) * animLerp;
  player.userData.torso.position.y += (targetTorsoY - player.userData.torso.position.y) * animLerp;
  player.userData.head.position.y += (targetHeadY - player.userData.head.position.y) * animLerp;
  player.userData.torso.rotation.x += (targetTorsoTilt - player.userData.torso.rotation.x) * animLerp;

  let desiredYaw = player.rotation.y;
  if (moving) {
    desiredYaw = Math.atan2(tmpMoveDir.x, tmpMoveDir.z);
  }
  player.rotation.y = lerpAngle(player.rotation.y, desiredYaw, Math.min(1, dt * 14));
}

function updateArrowKeyLook(dt) {
  const horizontalInput = (keyState.arrowleft ? 1 : 0) + (keyState.arrowright ? -1 : 0);
  const verticalInput = (keyState.arrowdown ? 1 : 0) + (keyState.arrowup ? -1 : 0);
  if (horizontalInput === 0 && verticalInput === 0) {
    return;
  }
  applyLookDelta(horizontalInput * ARROW_LOOK_SPEED_X * dt, verticalInput * ARROW_LOOK_SPEED_Y * dt);
}

function updateCamera(dt) {
  cameraTarget.set(player.position.x, player.position.y + 3.4, player.position.z);
  cameraLookDir.set(Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch));
  cameraRight.crossVectors(upVector, cameraLookDir).normalize();

  cameraShoulderOffset.set(0, 0, 0);
  const desiredDistance = CAMERA_DISTANCE;
  cameraDesiredPosition.copy(cameraTarget);
  cameraDesiredPosition.addScaledVector(cameraLookDir, -desiredDistance);
  cameraDesiredPosition.add(cameraShoulderOffset);
  cameraDesiredPosition.y = Math.max(1.3, cameraDesiredPosition.y);

  camera.position.copy(resolveCameraCollisionPosition(cameraTarget, cameraDesiredPosition));
  cameraLookAtPoint.copy(cameraTarget);
  camera.lookAt(cameraLookAtPoint);
}

function updateDayNightCycle(dt) {
  dayNightCycleTime = (dayNightCycleTime + Math.max(0, dt)) % DAY_NIGHT_CYCLE_SECONDS;
  const cycleTime = dayNightCycleTime;
  const phaseProgress = (cycleTime % DAY_NIGHT_PHASE_SECONDS) / DAY_NIGHT_PHASE_SECONDS;
  const inNightHalf = cycleTime >= DAY_NIGHT_PHASE_SECONDS;
  const blend = smoothstep01(phaseProgress);
  const daylightAmount = inNightHalf ? blend : 1 - blend;
  const orbitAngle = (cycleTime / DAY_NIGHT_CYCLE_SECONDS) * Math.PI * 2;

  if (scene.background && scene.background.isColor) {
    scene.background.copy(tmpDayNightColorA.copy(nightBackgroundColor).lerp(dayBackgroundColor, daylightAmount));
  }
  if (skyDome.material && skyDome.material.uniforms) {
    skyDome.material.uniforms.topColor.value.copy(
      tmpDayNightColorA.copy(nightSkyTopColor).lerp(daySkyTopColor, daylightAmount)
    );
    skyDome.material.uniforms.horizonColor.value.copy(
      tmpDayNightColorB.copy(nightSkyHorizonColor).lerp(daySkyHorizonColor, daylightAmount)
    );
  }

  hemisphere.color.copy(tmpDayNightColorA.copy(nightHemisphereSkyColor).lerp(dayHemisphereSkyColor, daylightAmount));
  hemisphere.groundColor.copy(tmpDayNightColorB.copy(nightHemisphereGroundColor).lerp(dayHemisphereGroundColor, daylightAmount));
  hemisphere.intensity = 0.28 + daylightAmount * 0.56;

  sunLight.color.copy(tmpDayNightColorA.copy(nightSunColor).lerp(daySunColor, daylightAmount));
  sunLight.intensity = 0.06 + daylightAmount * 0.82;
  sunLight.position.set(
    Math.sin(orbitAngle) * 118,
    20 + daylightAmount * 150,
    Math.cos(orbitAngle) * 78
  );
}

function updateEnvironmentVisuals() {
  if (skyDome) {
    skyDome.position.copy(camera.position);
  }
}

function updateHud() {
  updateBaseSignLabels();
  if (hpValueEl) {
    hpValueEl.textContent = `${Math.round(player.position.x)}`;
  }
  if (scoreValueEl) {
    scoreValueEl.textContent = `${Math.round(player.position.z)}`;
  }
  if (chapterValueEl) {
    chapterValueEl.textContent = grounded ? "Grounded" : "Airborne";
  }
  if (moneyHudEl) {
    const activeSlot = activeSaveSlotIndex >= 0 ? saveSlots[activeSaveSlotIndex] : null;
    const selectedSlot = selectedSaveSlotIndex >= 0 ? saveSlots[selectedSaveSlotIndex] : null;
    const sourceSlot = activeSlot || selectedSlot;
    const moneyAmount = sourceSlot ? clampInt(sourceSlot.money, 0, MAX_CURRENCY_VALUE, 0) : 0;
    moneyHudEl.textContent = `$${moneyAmount.toLocaleString("en-US")}`;
  }
  updateIndexUi();
}

function updateRebirthUi() {
  const shouldShowDock = Boolean(running && !isMenuOpen() && !isSecondaryTabBlocked() && getActiveSaveSlot());
  if (rebirthDockEl) {
    rebirthDockEl.classList.toggle("hidden", !shouldShowDock);
  }
  if (!shouldShowDock) {
    closeRebirthOverlay();
  }

  const rebirthStatus = getActiveRebirthStatus();
  const activeStage = rebirthStatus.stage;
  const moneyAmount = rebirthStatus.moneyAmount;
  const finalStage = REBIRTH_STAGE_CONFIG[REBIRTH_STAGE_CONFIG.length - 1] || null;
  const npcAName = activeStage
    ? rebirthStatus.npcAName
    : finalStage
      ? formatRebirthRequirementLabel(getRebirthRequirementEntries(finalStage, "A"))
      : "";
  const npcBName = activeStage
    ? rebirthStatus.npcBName
    : finalStage
      ? formatRebirthRequirementLabel(getRebirthRequirementEntries(finalStage, "B"))
      : "";
  const requiredMoney = activeStage ? activeStage.requiredMoney : finalStage ? finalStage.requiredMoney : 0;
  const hasFirstRequirement = activeStage ? rebirthStatus.hasFirstRequirement : false;
  const hasSecondRequirement = activeStage ? rebirthStatus.hasSecondRequirement : false;
  const stageTitle = activeStage ? activeStage.title : finalStage ? finalStage.title : "Rebirth";
  const preserveProgress = Boolean(activeStage && activeStage.preserveProgressOnRebirth);

  if (rebirthTitleEl) {
    rebirthTitleEl.textContent = activeStage ? `Rebirth — ${stageTitle}` : "Rebirth — Complete";
  }

  if (rebirthOscarNameEl) {
    rebirthOscarNameEl.textContent = npcAName;
  }
  if (rebirthChristianNameEl) {
    rebirthChristianNameEl.textContent = npcBName;
  }
  if (rebirthOscarCardEl) {
    rebirthOscarCardEl.style.display = hasFirstRequirement ? "" : "none";
  }
  if (rebirthOscarProgressEl) {
    rebirthOscarProgressEl.style.display = hasFirstRequirement ? "" : "none";
  }
  if (rebirthChristianCardEl) {
    rebirthChristianCardEl.style.display = hasSecondRequirement ? "" : "none";
  }
  if (rebirthChristianProgressEl) {
    rebirthChristianProgressEl.style.display = hasSecondRequirement ? "" : "none";
  }

  if (rebirthStatus.isMaxRebirth) {
    if (rebirthBoostInfoEl) {
      rebirthBoostInfoEl.textContent =
        `You reached the maximum rebirth. Current boost: ${formatRebirthMultiplier(rebirthStatus.currentMultiplier)} income.`;
    }
    if (rebirthOscarProgressEl && hasFirstRequirement) {
      rebirthOscarProgressEl.textContent = `${npcAName}: complete`;
    }
    if (rebirthChristianProgressEl && hasSecondRequirement) {
      rebirthChristianProgressEl.textContent = `${npcBName}: complete`;
    }
    if (rebirthMoneyProgressEl) {
      rebirthMoneyProgressEl.textContent = `Current money: $${moneyAmount.toLocaleString("en-US")}`;
    }
    if (rebirthNextBoostEl) {
      rebirthNextBoostEl.textContent = "Next boost: Max";
    }
    if (rebirthCountLabelEl) {
      rebirthCountLabelEl.textContent = `Rebirths: ${rebirthStatus.rebirthCount}`;
    }
    if (rebirthMoneyRequirementEl) {
      rebirthMoneyRequirementEl.textContent = "Max rebirth reached";
      rebirthMoneyRequirementEl.classList.add("ready");
    }
    rebirthRequirementCardEls.forEach((cardEl) => {
      if (!cardEl) {
        return;
      }
      cardEl.classList.remove("ready", "locked");
    });
    if (rebirthConfirmBtnEl) {
      rebirthConfirmBtnEl.disabled = true;
      rebirthConfirmBtnEl.classList.remove("ready");
      rebirthConfirmBtnEl.textContent = "Max Rebirth";
      rebirthConfirmBtnEl.setAttribute("aria-label", "You have completed all available rebirth stages");
    }
  } else {
    if (rebirthBoostInfoEl) {
      rebirthBoostInfoEl.textContent =
        preserveProgress
          ? `Keep all cash and classmates. Current boost: ${formatRebirthMultiplier(rebirthStatus.currentMultiplier)} income.`
          : `Reset cash to $${STARTING_MONEY.toLocaleString("en-US")} and clear your classmates. Current boost: ${formatRebirthMultiplier(rebirthStatus.currentMultiplier)} income.`;
    }
    if (rebirthOscarProgressEl && hasFirstRequirement) {
      rebirthOscarProgressEl.textContent =
        `${npcAName}: ${rebirthStatus.npcACountOwned} / ${rebirthStatus.npcACountRequired}`;
    }
    if (rebirthChristianProgressEl && hasSecondRequirement) {
      rebirthChristianProgressEl.textContent =
        `${npcBName}: ${rebirthStatus.npcBCountOwned} / ${rebirthStatus.npcBCountRequired}`;
    }
    if (rebirthMoneyProgressEl) {
      rebirthMoneyProgressEl.textContent =
        `Money: $${moneyAmount.toLocaleString("en-US")} / $${requiredMoney.toLocaleString("en-US")}`;
    }
    if (rebirthNextBoostEl) {
      rebirthNextBoostEl.textContent =
        `Next boost: ${formatRebirthMultiplier(rebirthStatus.nextMultiplier)} income`;
    }
    if (rebirthCountLabelEl) {
      rebirthCountLabelEl.textContent = `Rebirths: ${rebirthStatus.rebirthCount}`;
    }
    if (rebirthMoneyRequirementEl) {
      rebirthMoneyRequirementEl.textContent = `Money Required: $${requiredMoney.toLocaleString("en-US")}`;
      rebirthMoneyRequirementEl.classList.toggle("ready", rebirthStatus.hasMoney);
    }
    if (rebirthOscarCardEl && hasFirstRequirement) {
      rebirthOscarCardEl.classList.toggle("ready", rebirthStatus.hasNpcA);
      rebirthOscarCardEl.classList.toggle("locked", !rebirthStatus.hasNpcA);
    }
    if (rebirthChristianCardEl && hasSecondRequirement) {
      rebirthChristianCardEl.classList.toggle("ready", rebirthStatus.hasNpcB);
      rebirthChristianCardEl.classList.toggle("locked", !rebirthStatus.hasNpcB);
    }
    if (rebirthConfirmBtnEl) {
      rebirthConfirmBtnEl.disabled = !rebirthStatus.canRebirth;
      rebirthConfirmBtnEl.classList.toggle("ready", rebirthStatus.canRebirth);
      rebirthConfirmBtnEl.textContent = "Rebirth";
      const firstRequirementText = hasFirstRequirement
        ? rebirthStatus.npcAEntries.length > 1
          ? npcAName
          : `${rebirthStatus.npcACountRequired} ${npcAName}`
        : "";
      const secondRequirementText = hasSecondRequirement
        ? rebirthStatus.npcBEntries.length > 1
          ? npcBName
          : `${rebirthStatus.npcBCountRequired} ${npcBName}`
        : "";
      const lockedRequirementText = hasFirstRequirement && hasSecondRequirement
        ? `Need ${firstRequirementText}, ${secondRequirementText}, and $${requiredMoney.toLocaleString("en-US")} to reach ${stageTitle}`
        : hasFirstRequirement
          ? `Need ${firstRequirementText} and $${requiredMoney.toLocaleString("en-US")} to reach ${stageTitle}`
          : `Need $${requiredMoney.toLocaleString("en-US")} to reach ${stageTitle}`;
      rebirthConfirmBtnEl.setAttribute(
        "aria-label",
        rebirthStatus.canRebirth
          ? `Complete ${stageTitle} and apply a permanent income boost`
          : lockedRequirementText
      );
    }
  }
  if (rebirthOpenBtnEl) {
    rebirthOpenBtnEl.textContent = "Rebirth";
  }
}

function simulateWorldTime(simulationDt) {
  const safeSimulationDt = Math.min(Math.max(0, Number(simulationDt) || 0), MAX_BACKGROUND_CATCHUP_SECONDS);
  if (safeSimulationDt <= 0) {
    return;
  }

  worldSimulationAccumulator = Math.min(worldSimulationAccumulator + safeSimulationDt, MAX_BACKGROUND_CATCHUP_SECONDS);

  while (worldSimulationAccumulator >= WORLD_SIMULATION_STEP) {
    updateGuaranteedSpawnTimers(WORLD_SIMULATION_STEP);
    updateStudentNpcs(WORLD_SIMULATION_STEP);
    updateDayNightCycle(WORLD_SIMULATION_STEP);
    if (running) {
      updateNpcBuyingAndIncome(WORLD_SIMULATION_STEP);
    }
    worldSimulationAccumulator -= WORLD_SIMULATION_STEP;
  }

  if (worldSimulationAccumulator > 0) {
    updateGuaranteedSpawnTimers(worldSimulationAccumulator);
    updateStudentNpcs(worldSimulationAccumulator);
    updateDayNightCycle(worldSimulationAccumulator);
    if (running) {
      updateNpcBuyingAndIncome(worldSimulationAccumulator);
    }
    worldSimulationAccumulator = 0;
  }
}

function start() {
  running = true;
  ensureAdonisShopkeeperExists();
  syncGuaranteedSpawnTimersToRewardProfile();
  syncBaseSecondFloorAvailability(true);
  refreshIncomePadAvailabilityVisuals();
  player.position.set(SPAWN_X, STREET_PATH_SURFACE_Y, SPAWN_Z);
  velocity.set(0, 0, 0);
  jumpQueued = false;
  grounded = true;
  walkCycle = 0;
  idleCycle = 0;
  yaw = 0;
  pitch = -0.42;
  setCameraFov(DEFAULT_FOV);
  leoBuyHoldTimer = 0;
  npcBuyHoldTimer = 0;
  npcBuyTargetId = 0;
  npcSellHoldTimer = 0;
  npcSellTargetId = 0;
  closeSellConfirmModal();
  closeRebirthOverlay();
  closeAdonisShop();
  closeIndexOverlay();
  closeOfflineIncomePopup();
  setInteractionPrompt("");
  const leoNpc = getLeoNpc();
  if (leoNpc) {
    applyLeoStateToNpc(leoNpc, false);
  }
  syncMultiplayerProfile();
}

if (sellConfirmYesBtnEl) {
  sellConfirmYesBtnEl.addEventListener("click", () => {
    confirmSellSelectedClassmate();
  });
}
if (sellConfirmNoBtnEl) {
  sellConfirmNoBtnEl.addEventListener("click", () => {
    closeSellConfirmModal();
  });
}
if (adonisShopCloseBtnEl) {
  adonisShopCloseBtnEl.addEventListener("click", () => {
    closeAdonisShop();
  });
}
if (offlineIncomeCloseBtnEl) {
  offlineIncomeCloseBtnEl.addEventListener("click", () => {
    closeOfflineIncomePopup();
  });
}
if (indexOpenBtnEl) {
  indexOpenBtnEl.addEventListener("click", () => {
    openIndexOverlay();
  });
}
if (indexCloseBtnEl) {
  indexCloseBtnEl.addEventListener("click", () => {
    closeIndexOverlay();
  });
}
if (rebirthOpenBtnEl) {
  rebirthOpenBtnEl.addEventListener("click", () => {
    openRebirthOverlay();
  });
}
if (rebirthCloseBtnEl) {
  rebirthCloseBtnEl.addEventListener("click", () => {
    closeRebirthOverlay();
  });
}
if (rebirthConfirmBtnEl) {
  rebirthConfirmBtnEl.addEventListener("click", () => {
    performActiveSlotRebirth();
  });
}
if (rebirthOverlayEl) {
  rebirthOverlayEl.addEventListener("click", (event) => {
    if (event.target === rebirthOverlayEl) {
      closeRebirthOverlay();
    }
  });
}
if (adonisShopOverlayEl) {
  adonisShopOverlayEl.addEventListener("click", (event) => {
    if (event.target === adonisShopOverlayEl) {
      closeAdonisShop();
    }
  });
}
if (offlineIncomeOverlayEl) {
  offlineIncomeOverlayEl.addEventListener("click", (event) => {
    if (event.target === offlineIncomeOverlayEl) {
      closeOfflineIncomePopup();
    }
  });
}
if (indexOverlayEl) {
  indexOverlayEl.addEventListener("click", (event) => {
    if (event.target === indexOverlayEl) {
      closeIndexOverlay();
    }
  });
}
if (jacobBlockOverlayEl) {
  jacobBlockOverlayEl.addEventListener("click", () => {
    hideJacobBlockOverlay();
  });
}

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (isSecondaryTabBlocked()) {
    event.preventDefault();
    return;
  }
  if (isUsernameRequiredOverlayOpen()) {
    if (key === "enter" && usernameRequiredInputEl) {
      event.preventDefault();
      commitPrimaryUsername(usernameRequiredInputEl.value, "overlay");
    }
    return;
  }
  if (jacobBlockOverlayEl && !jacobBlockOverlayEl.classList.contains("hidden")) {
    if (key === "escape" || key === "enter" || key === " ") {
      hideJacobBlockOverlay();
    }
    event.preventDefault();
    return;
  }
  if (isSellConfirmOpen()) {
    if (key === "enter" || key === "y") {
      confirmSellSelectedClassmate();
    } else if (key === "escape" || key === "n") {
      closeSellConfirmModal();
    }
    event.preventDefault();
    return;
  }
  if (isAdonisShopOpen()) {
    if (key === "escape" || key === "e") {
      closeAdonisShop();
    }
    event.preventDefault();
    return;
  }
  if (isOfflineIncomePopupOpen()) {
    if (key === "escape" || key === "enter" || key === " ") {
      closeOfflineIncomePopup();
    }
    event.preventDefault();
    return;
  }
  if (isIndexOverlayOpen()) {
    if (key === "escape" || key === "i") {
      closeIndexOverlay();
    }
    event.preventDefault();
    return;
  }
  if (isRebirthOverlayOpen()) {
    if (key === "escape") {
      closeRebirthOverlay();
    } else if (key === "enter" && rebirthConfirmBtnEl && !rebirthConfirmBtnEl.disabled) {
      performActiveSlotRebirth();
    }
    event.preventDefault();
    return;
  }

  const targetTag = event.target && event.target.tagName ? event.target.tagName.toLowerCase() : "";
  const typingInControl = targetTag === "input" || targetTag === "select" || targetTag === "textarea";

  if (typingInControl || isMenuOpen()) {
    return;
  }

  keyState[key] = true;

  if (key === " ") {
    jumpQueued = true;
  } else if (key === "r" && activeSaveSlotIndex >= 0) {
    start();
  }

  if (
    key === " " ||
    key === "arrowup" ||
    key === "arrowdown" ||
    key === "arrowleft" ||
    key === "arrowright" ||
    key === "w" ||
    key === "a" ||
    key === "s" ||
    key === "d"
  ) {
    event.preventDefault();
  }
});

window.addEventListener("keyup", (event) => {
  keyState[event.key.toLowerCase()] = false;
});

canvas.addEventListener("contextmenu", (event) => event.preventDefault());
canvas.addEventListener("mousedown", (event) => {
  if (isMenuOpen() || isBlockingGameplayOverlayOpen()) {
    return;
  }
  if (event.button === 2) {
    pointerRotate = true;
  }
});
window.addEventListener("mouseup", (event) => {
  if (event.button === 2) {
    pointerRotate = false;
  }
});

window.addEventListener("blur", () => {
  pointerRotate = false;
  oneFingerLookActive = false;
  oneFingerTouchId = -1;
  twoFingerLookActive = false;
  resetMobileJoystick();
});

window.addEventListener("mousemove", (event) => {
  if (isMenuOpen() || isBlockingGameplayOverlayOpen()) {
    return;
  }
  if (activeTouchCount > 0) {
    return;
  }
  if (!pointerRotate) {
    return;
  }
  applyLookDelta(event.movementX, event.movementY);
});

canvas.addEventListener(
  "touchstart",
  (event) => {
    if (isMenuOpen() || isBlockingGameplayOverlayOpen()) {
      return;
    }
    activeTouchCount = event.touches.length;
    if (event.touches.length === 1) {
      const touch = event.touches[0];
      oneFingerLookActive = true;
      oneFingerTouchId = touch.identifier;
      oneFingerTouchX = touch.clientX;
      oneFingerTouchY = touch.clientY;
      twoFingerLookActive = false;
    } else if (event.touches.length >= 2) {
      const center = getTouchCenter(event.touches[0], event.touches[1]);
      touchCenterX = center.x;
      touchCenterY = center.y;
      touchPinchDistance = getTouchDistance(event.touches[0], event.touches[1]);
      twoFingerLookActive = true;
      oneFingerLookActive = false;
      oneFingerTouchId = -1;
    } else {
      oneFingerLookActive = false;
      twoFingerLookActive = false;
      oneFingerTouchId = -1;
    }
    if (event.touches.length > 0) {
      event.preventDefault();
    }
  },
  { passive: false }
);

canvas.addEventListener(
  "touchmove",
  (event) => {
    if (isMenuOpen() || isBlockingGameplayOverlayOpen()) {
      return;
    }
    activeTouchCount = event.touches.length;
    if (event.touches.length === 2) {
      if (!twoFingerLookActive) {
        const center = getTouchCenter(event.touches[0], event.touches[1]);
        touchCenterX = center.x;
        touchCenterY = center.y;
        touchPinchDistance = getTouchDistance(event.touches[0], event.touches[1]);
        twoFingerLookActive = true;
        oneFingerLookActive = false;
        oneFingerTouchId = -1;
      } else {
        const center = getTouchCenter(event.touches[0], event.touches[1]);
        const pinchDistance = getTouchDistance(event.touches[0], event.touches[1]);
        const deltaX = center.x - touchCenterX;
        const deltaY = center.y - touchCenterY;
        const pinchDelta = pinchDistance - touchPinchDistance;

        if (Math.abs(deltaX) > TOUCH_LOOK_DEADZONE_PX || Math.abs(deltaY) > TOUCH_LOOK_DEADZONE_PX) {
          applyLookDelta(deltaX, deltaY);
        }
        setCameraFov(cameraFov - pinchDelta * 0.66);

        touchCenterX = center.x;
        touchCenterY = center.y;
        touchPinchDistance = pinchDistance;
      }
      event.preventDefault();
      return;
    }

    if (event.touches.length === 1) {
      const touch = oneFingerTouchId >= 0 ? getTouchByIdentifier(event.touches, oneFingerTouchId) || event.touches[0] : event.touches[0];
      if (!touch) {
        return;
      }

      if (!oneFingerLookActive || oneFingerTouchId !== touch.identifier) {
        oneFingerLookActive = true;
        oneFingerTouchId = touch.identifier;
        oneFingerTouchX = touch.clientX;
        oneFingerTouchY = touch.clientY;
      }

      const deltaX = touch.clientX - oneFingerTouchX;
      const deltaY = touch.clientY - oneFingerTouchY;
      if (Math.abs(deltaX) > TOUCH_LOOK_DEADZONE_PX || Math.abs(deltaY) > TOUCH_LOOK_DEADZONE_PX) {
        applyLookDelta(deltaX, deltaY);
      }

      oneFingerTouchX = touch.clientX;
      oneFingerTouchY = touch.clientY;
      twoFingerLookActive = false;
      event.preventDefault();
    }
  },
  { passive: false }
);

canvas.addEventListener("touchend", (event) => {
  if (isMenuOpen() || isBlockingGameplayOverlayOpen()) {
    return;
  }
  activeTouchCount = event.touches.length;
  if (event.touches.length >= 2) {
    const center = getTouchCenter(event.touches[0], event.touches[1]);
    touchCenterX = center.x;
    touchCenterY = center.y;
    touchPinchDistance = getTouchDistance(event.touches[0], event.touches[1]);
    twoFingerLookActive = true;
    oneFingerLookActive = false;
    oneFingerTouchId = -1;
  } else if (event.touches.length === 1) {
    const touch = event.touches[0];
    oneFingerLookActive = true;
    oneFingerTouchId = touch.identifier;
    oneFingerTouchX = touch.clientX;
    oneFingerTouchY = touch.clientY;
    twoFingerLookActive = false;
    touchCenterX = 0;
    touchCenterY = 0;
    touchPinchDistance = 0;
  } else {
    oneFingerLookActive = false;
    twoFingerLookActive = false;
    oneFingerTouchId = -1;
    oneFingerTouchX = 0;
    oneFingerTouchY = 0;
    touchCenterX = 0;
    touchCenterY = 0;
    touchPinchDistance = 0;
  }
});

canvas.addEventListener("touchcancel", () => {
  if (isMenuOpen() || isBlockingGameplayOverlayOpen()) {
    return;
  }
  activeTouchCount = 0;
  oneFingerLookActive = false;
  oneFingerTouchId = -1;
  oneFingerTouchX = 0;
  oneFingerTouchY = 0;
  twoFingerLookActive = false;
  touchCenterX = 0;
  touchCenterY = 0;
  touchPinchDistance = 0;
});

if (mobileJoystickEl) {
  mobileJoystickEl.addEventListener(
    "touchstart",
    (event) => {
      if (!shouldShowMobileControls() || mobileJoystickTouchId >= 0 || event.touches.length === 0) {
        return;
      }
      const touch = event.changedTouches[0];
      mobileJoystickTouchId = touch.identifier;
      updateMobileJoystickFromTouch(touch.clientX, touch.clientY);
      event.preventDefault();
      event.stopPropagation();
    },
    { passive: false }
  );
}

window.addEventListener(
  "touchmove",
  (event) => {
    if (mobileJoystickTouchId < 0) {
      return;
    }
    const touch = getTouchByIdentifier(event.touches, mobileJoystickTouchId);
    if (!touch) {
      return;
    }
    updateMobileJoystickFromTouch(touch.clientX, touch.clientY);
    event.preventDefault();
  },
  { passive: false }
);

window.addEventListener("touchend", (event) => {
  if (mobileJoystickTouchId < 0) {
    return;
  }
  const touch = getTouchByIdentifier(event.changedTouches, mobileJoystickTouchId);
  if (!touch) {
    return;
  }
  resetMobileJoystick();
});

window.addEventListener("touchcancel", (event) => {
  if (mobileJoystickTouchId < 0) {
    return;
  }
  const touch = getTouchByIdentifier(event.changedTouches, mobileJoystickTouchId);
  if (!touch) {
    return;
  }
  resetMobileJoystick();
});

if (mobileCollectBtnEl) {
  const handleMobileCollect = (event) => {
    if (!shouldShowMobileControls()) {
      return;
    }
    collectNearbyIncomeFromPads();
    mobileCollectBtnEl.classList.add("is-pressed");
    window.setTimeout(() => {
      if (mobileCollectBtnEl) {
        mobileCollectBtnEl.classList.remove("is-pressed");
      }
    }, 110);
    event.preventDefault();
    event.stopPropagation();
  };
  mobileCollectBtnEl.addEventListener("touchstart", handleMobileCollect, { passive: false });
  mobileCollectBtnEl.addEventListener("click", handleMobileCollect);
}

window.addEventListener(
  "wheel",
  (event) => {
    if (isMenuOpen() || isBlockingGameplayOverlayOpen()) {
      return;
    }
    if (customizerEl && customizerEl.contains(event.target)) {
      return;
    }

    const wheel = normalizeWheelDelta(event);
    const isPinchGesture = event.ctrlKey || event.metaKey;

    if (isPinchGesture) {
      setCameraFov(cameraFov + wheel.y * 0.18);
    } else {
      if (Math.hypot(wheel.x, wheel.y) < WHEEL_LOOK_DEADZONE) {
        event.preventDefault();
        return;
      }
      applyLookDelta(wheel.x * 0.58, -wheel.y * 0.58);
    }
    event.preventDefault();
  },
  { passive: false }
);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  applyGraphicsQuality(gameSettings.graphicsQuality);
});

window.addEventListener("pagehide", () => {
  saveSaveSlotsToStorage();
  releasePrimaryTabLock();
});

window.addEventListener("beforeunload", () => {
  saveSaveSlotsToStorage();
  releasePrimaryTabLock();
});

window.addEventListener("storage", (event) => {
  if (event.key === PRIMARY_TAB_LOCK_STORAGE_KEY) {
    syncPrimaryTabLock();
  }
});

window.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    lastHiddenAtMs = performance.now();
    saveSaveSlotsToStorage();
    return;
  }
  if (isSecondaryTabBlocked()) {
    lastHiddenAtMs = 0;
    return;
  }
  if (lastHiddenAtMs > 0) {
    const hiddenSeconds = Math.min(MAX_BACKGROUND_CATCHUP_SECONDS, Math.max(0, (performance.now() - lastHiddenAtMs) / 1000));
    simulateWorldTime(hiddenSeconds);
    updateIncomePadMoneyLabels();
    saveSaveSlotsToStorage();
    clock.getDelta();
    lastHiddenAtMs = 0;
  }
});

function animate() {
  requestAnimationFrame(animate);
  const rawDt = clock.getDelta();
  updateInteractionPromptOverride(rawDt);
  updateAdonisShopMessage(rawDt);
  updateSpawnNotification(rawDt);
  updateMobileControlsVisibility();
  const frameDt = Math.min(rawDt, 1 / 30);
  const blockedBySecondaryTab = isSecondaryTabBlocked();
  if (!blockedBySecondaryTab) {
    simulateWorldTime(rawDt);
  }

  if (running && !blockedBySecondaryTab) {
    updateArrowKeyLook(frameDt);
    updateMovement(frameDt);
    updateCamera(frameDt);
    updateHud();
  } else {
    setInteractionPrompt("");
    updateCamera(frameDt);
    updateHud();
  }

  if (!blockedBySecondaryTab) {
    updateRemotePlayers();
    updateFletcherSnitchAlert();
    updateMultiplayerPositionSync(rawDt);
  }

  updateIncomePadMoneyLabels();
  updateRebirthUi();
  if (!blockedBySecondaryTab) {
    updateSaveAutosave(rawDt);
  }

  updateEnvironmentVisuals();
  renderer.render(scene, camera);
}

try {
  initMenuAndSettings();
} catch (error) {
  console.error("Menu/settings bootstrap failed", error);
  let didMigrateSaves = false;
  try {
    loadSettingsFromStorage();
  } catch (settingsError) {
    console.error("Fallback settings load failed", settingsError);
  }
  try {
    didMigrateSaves = loadSaveSlotsFromStorage();
  } catch (saveError) {
    console.error("Fallback save slot load failed", saveError);
    saveSlots = buildDefaultSaveSlots();
  }
  applySettingsToGame(false);
  renderSettingsUi();
  setSelectedSaveSlot(PRIMARY_PROFILE_SLOT_INDEX, false);
  openPlayMenuPanel();
  syncAvatarPreview2D();
  syncUsernameRequirementOverlay();
  if (didMigrateSaves) {
    saveSaveSlotsToStorage();
  }

  bindMenuNavigation();
  saveSlotButtonEls.forEach((buttonEl, index) => {
    buttonEl.addEventListener("click", () => {
      setSelectedSaveSlot(index, true);
    });
  });
  if (loadSlotBtnEl) {
    loadSlotBtnEl.addEventListener("click", () => {
      loadSelectedSaveSlot();
    });
  }
  if (nametagInputEl) {
    nametagInputEl.addEventListener("input", () => {
      if (!isJacobBlockedName(nametagInputEl.value)) {
        hideJacobBlockOverlay();
      }
      if (playValidationMessageEl) {
        playValidationMessageEl.classList.add("hidden");
        playValidationMessageEl.textContent = "";
      }
      if (usernameFieldEl) {
        usernameFieldEl.classList.remove("is-attention");
      }
      const safeUsername = sanitizeNameTag(nametagInputEl.value);
      setAvatarNameTag(safeUsername);
      if (doesPrimaryProfileNeedUsername() && usernameRequiredInputEl) {
        usernameRequiredInputEl.value = isCustomUsername(safeUsername) ? safeUsername : "";
      }
    });
  }
  if (usernameRequiredConfirmBtnEl) {
    usernameRequiredConfirmBtnEl.addEventListener("click", () => {
      commitPrimaryUsername(usernameRequiredInputEl ? usernameRequiredInputEl.value : "", "overlay");
    });
  }
  if (usernameRequiredInputEl) {
    usernameRequiredInputEl.addEventListener("input", () => {
      showUsernameRequiredMessage("");
    });
    usernameRequiredInputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        commitPrimaryUsername(usernameRequiredInputEl.value, "overlay");
      }
    });
  }
}
if (menuScreenEl) {
  menuScreenEl.classList.remove("hidden");
}
connectMultiplayer();
startPrimaryTabLockHeartbeat();
animate();

// ─── CHAT FEED ────────────────────────────────────────────────────────────────
const chatFeedEl = document.createElement("div");
chatFeedEl.id = "chatFeed";
Object.assign(chatFeedEl.style, {
  position: "fixed",
  top: "12px",
  left: "12px",
  width: "600px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  pointerEvents: "none",
  zIndex: "9999",
});
document.body.appendChild(chatFeedEl);

function showChatMessage(type, text) {
  const msg = document.createElement("div");
  Object.assign(msg.style, {
    background: "rgba(0,0,0,0.65)",
    color: type === "admin" ? "#FFD700" : "#ffffff",
    fontFamily: "sans-serif",
    fontSize: "65px",
    fontWeight: type === "admin" ? "600" : "400",
    padding: "10px 20px",
    borderRadius: "10px",
    opacity: "1",
    transition: "opacity 0.5s ease",
    maxWidth: "100%",
    wordBreak: "break-word",
  });
  msg.textContent = type === "admin" ? "📢 " + text : text;
  chatFeedEl.appendChild(msg);
  setTimeout(() => { msg.style.opacity = "0"; }, 4000);
  setTimeout(() => { if (msg.parentNode) msg.parentNode.removeChild(msg); }, 4600);
}

// ─── ADMIN PANEL ──────────────────────────────────────────────────────────────
const ADMIN_NAME = "Adonis";

function isAdminUsername(value) {
  return sanitizeNameTag(value).toLowerCase() === ADMIN_NAME.toLowerCase();
}

function isAdmin() {
  const activeSlot = getActiveSaveSlot();
  const slotUsername = activeSlot ? activeSlot.username || activeSlot.name || "" : "";
  if (isAdminUsername(slotUsername)) {
    return true;
  }
  if (Array.isArray(saveSlots)) {
    for (let i = 0; i < saveSlots.length; i += 1) {
      const slot = saveSlots[i];
      if (!slot || !slot.used) {
        continue;
      }
      if (isAdminUsername(slot.username || slot.name || (slot.avatar && slot.avatar.username) || "")) {
        return true;
      }
    }
  }
  const currentAvatar = getCurrentAvatarConfig();
  if (isAdminUsername(currentAvatar && currentAvatar.username ? currentAvatar.username : "")) {
    return true;
  }
  const inputValue =
    (nametagInputEl && nametagInputEl.value) || (usernameRequiredInputEl && usernameRequiredInputEl.value) || ""
  ;
  return isAdminUsername(inputValue);
}

const adminBtnEl = document.createElement("button");
adminBtnEl.textContent = "A";
Object.assign(adminBtnEl.style, {
  position: "fixed",
  top: "12px",
  right: "12px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "#FFD700",
  color: "#000",
  fontWeight: "bold",
  fontSize: "16px",
  border: "none",
  cursor: "pointer",
  zIndex: "10001",
  display: "none",
});
document.body.appendChild(adminBtnEl);

const adminPanelEl = document.createElement("div");
adminPanelEl.id = "adminPanel";
Object.assign(adminPanelEl.style, {
  position: "fixed",
  top: "50px",
  right: "12px",
  width: "320px",
  background: "rgba(0,0,0,0.85)",
  borderRadius: "10px",
  padding: "12px",
  display: "none",
  flexDirection: "column",
  gap: "8px",
  zIndex: "10001",
  fontFamily: "sans-serif",
  color: "#fff",
});
const adminGrantCharacterOptionsHtml = ADMIN_GRANTABLE_CHARACTER_NAMES.map(
  (npcName) => `<option value="${npcName}">${npcName}</option>`
).join("");
const adminGrantVariantOptionsHtml = ADMIN_GRANTABLE_VARIANT_IDS.map((variantId) => {
  const variant = getNpcVariantDefinition(variantId);
  return `<option value="${variantId}">${variant.label}</option>`;
}).join("");
adminPanelEl.innerHTML = `
  <div style="font-size:14px;font-weight:700;color:#FFD700;margin-bottom:4px;">📢 Admin Panel</div>
  <input id="adminMsgInput" type="text" placeholder="Send message to all players..." 
    style="width:100%;box-sizing:border-box;padding:6px 8px;border-radius:6px;border:none;font-size:13px;background:#222;color:#fff;">
  <button id="adminMsgSendBtn" style="padding:6px;border-radius:6px;border:none;background:#FFD700;color:#000;font-weight:700;cursor:pointer;font-size:13px;">
    Send Message
  </button>
  <div style="margin-top:6px;font-size:13px;font-weight:700;color:#8bdcff;">Spawn classmate for everyone</div>
  <label for="adminGiftNpcSelect" style="font-size:12px;color:#d7d7d7;">Classmate</label>
  <select id="adminGiftNpcSelect" style="width:100%;box-sizing:border-box;padding:6px 8px;border-radius:6px;border:none;font-size:13px;background:#222;color:#fff;">
    ${adminGrantCharacterOptionsHtml}
  </select>
  <label for="adminGiftVariantSelect" style="font-size:12px;color:#d7d7d7;">Mutation</label>
  <select id="adminGiftVariantSelect" style="width:100%;box-sizing:border-box;padding:6px 8px;border-radius:6px;border:none;font-size:13px;background:#222;color:#fff;">
    ${adminGrantVariantOptionsHtml}
  </select>
  <button id="adminGiftSendBtn" style="padding:6px;border-radius:6px;border:none;background:#8bdcff;color:#03131d;font-weight:700;cursor:pointer;font-size:13px;">
    Spawn Classmate
  </button>
`;
document.body.appendChild(adminPanelEl);

adminBtnEl.addEventListener("click", () => {
  adminPanelEl.style.display = adminPanelEl.style.display === "none" ? "flex" : "none";
});

let adminSocket = null;
function getAdminSocket() {
  if (multiplayerSocket) {
    attachAdminBroadcastSocketListeners(multiplayerSocket);
    return multiplayerSocket;
  }
  if (adminSocket) return adminSocket;
  adminSocket = window.io(SOCKET_URL);
  attachAdminBroadcastSocketListeners(adminSocket);
  adminSocket.on("connect", () => {
    emitProfileRegistrationToSocket(adminSocket);
  });
  adminSocket.on("banned", () => {
    document.body.innerHTML = '<div style="background:#000;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;"><span style="color:#fff;font-size:80px;font-family:sans-serif;font-weight:700;">gb</span></div>';
  });
  adminSocket.on("chat:message", (payload = {}) => {
    showChatMessage(payload.type || "pull", payload.text || "");
  });
  return adminSocket;
}

document.getElementById("adminMsgSendBtn").addEventListener("click", () => {
  const input = document.getElementById("adminMsgInput");
  const text = input.value.trim();
  if (!text) return;
  const socket = getAdminSocket();
  emitProfileRegistrationToSocket(socket);
  socket.emit("admin:message", { text });
  input.value = "";
});

document.getElementById("adminMsgInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.getElementById("adminMsgSendBtn").click();
  }
});

document.getElementById("adminGiftSendBtn").addEventListener("click", () => {
  const npcSelect = document.getElementById("adminGiftNpcSelect");
  const variantSelect = document.getElementById("adminGiftVariantSelect");
  const npcName = npcSelect ? String(npcSelect.value || "").trim() : "";
  const variantId = variantSelect ? String(variantSelect.value || "").trim() : VARIANT_NORMAL;
  if (!npcName) {
    return;
  }
  const socket = getAdminSocket();
  emitProfileRegistrationToSocket(socket);
  socket.emit("admin:grantClassmate", {
    npcName,
    variantId,
  });
  const variant = getNpcVariantDefinition(variantId);
  const sentLabel = variantId === VARIANT_NORMAL ? npcName : `${variant.label} ${npcName}`;
  showTemporaryInteractionPrompt(`Spawned ${sentLabel} for everyone.`, "default", 2);
});

// Show admin button only for admin user
setInterval(() => {
  adminBtnEl.style.display = isAdmin() ? "block" : "none";
}, 1000);

// Connect all clients to receive chat messages even when multiplayer is disabled
if (!MULTIPLAYER_ENABLED && SOCKET_URL) {
  getAdminSocket();
}

// Version check — show update popup if cached version is outdated
(function checkGameVersion() {
  try {
    const stored = window.localStorage.getItem(GAME_VERSION_STORAGE_KEY);
    if (stored && stored !== GAME_VERSION) {
      const overlay = document.createElement("div");
      Object.assign(overlay.style, {
        position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh",
        background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center",
        justifyContent: "center", zIndex: "99999", fontFamily: "sans-serif",
      });
      overlay.innerHTML = `
        <div style="background:#1a1a2e;border:2px solid #FFD700;border-radius:14px;padding:36px 40px;max-width:480px;text-align:center;">
          <div style="font-size:32px;margin-bottom:12px;">🎮</div>
          <div style="color:#FFD700;font-size:22px;font-weight:700;margin-bottom:12px;">There's a new update!</div>
          <div style="color:#fff;font-size:15px;line-height:1.6;">Delete this tab, make a new tab with Catch A Classmate on it to find the new update!</div>
        </div>`;
      document.body.appendChild(overlay);
    }
    window.localStorage.setItem(GAME_VERSION_STORAGE_KEY, GAME_VERSION);
  } catch (e) {}
})();
