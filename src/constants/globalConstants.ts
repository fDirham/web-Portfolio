const URL_CDN_ROOT = "https://d1af2lvvh100pg.cloudfront.net/";
const URL_CDN_SHARED = URL_CDN_ROOT + "shared/";
const URL_CDN_PORTFOLIO = URL_CDN_ROOT + "portfolio/";
const URL_CDN_PROJECT_VIDEOS = URL_CDN_PORTFOLIO + "project_videos/";
const URL_CDN_PROJECT_ICONS_64 = URL_CDN_PORTFOLIO + "project_icons_64x64/";

// Misc Icons
export const URL_LOCK_ICON = URL_CDN_PORTFOLIO + "lock_icon-32x32.png";
export const URL_BOT_AVATAR = URL_CDN_SHARED + "fbd_headshot-64x64.jpg";
export const URL_BLANK_AVATAR = URL_CDN_SHARED + "blank_avatar-64x64.jpg";
export const URL_SUBMIT_ICON = URL_CDN_SHARED + "submit_icon.svg";

// Project Icons
export const URL_ICON_PROFFY = URL_CDN_ROOT + "snapexplain/icon-64x64.jpg";
export const URL_ICON_NEKO_FOCUS = URL_CDN_ROOT + "nekotimer/icon-64x64.jpg";
export const URL_ICON_ROCKET_PIXELS =
  URL_CDN_ROOT + "rocketpixels/icon-64x64.jpg";
export const URL_ICON_JUST_FOCUS = URL_CDN_PROJECT_ICONS_64 + "just_focus.jpg";
export const URL_ICON_DUCK_BLOCK = URL_CDN_PROJECT_ICONS_64 + "duck_block.jpg";
export const URL_ICON_JOTTER = URL_CDN_PROJECT_ICONS_64 + "jotter.jpg";
export const URL_ICON_ASR = URL_CDN_PROJECT_ICONS_64 + "asr.jpg";

// Project videos
export const URL_VID_PROFFY = URL_CDN_PROJECT_VIDEOS + "proffy.mp4";
export const URL_VID_NEKO_FOCUS = URL_CDN_PROJECT_VIDEOS + "neko_focus.mp4";
export const URL_VID_ROCKET_PIXELS =
  URL_CDN_PROJECT_VIDEOS + "pixel_rockets.mp4";
export const URL_VID_JUST_FOCUS = URL_CDN_PROJECT_VIDEOS + "just_focus.mp4";
export const URL_VID_DUCK_BLOCK = URL_CDN_PROJECT_VIDEOS + "duck_block.mp4";
export const URL_VID_JOTTER = URL_CDN_PROJECT_VIDEOS + "jotter.mp4";
export const URL_VID_ASR = URL_CDN_PROJECT_VIDEOS + "asr.mp4";

// Names
export const NAME_BOT = "Fajar Dirham";
export const NAME_USER = "You";

// Things to preload
export const PRELOAD_IMG_SRC_LIST = [
  URL_BOT_AVATAR,
  URL_BLANK_AVATAR,
  URL_LOCK_ICON,
  URL_SUBMIT_ICON,
  URL_ICON_PROFFY,
  URL_ICON_NEKO_FOCUS,
  URL_ICON_ROCKET_PIXELS,
  URL_ICON_JUST_FOCUS,
  URL_ICON_DUCK_BLOCK,
  URL_ICON_JOTTER,
  URL_ICON_ASR,
];
