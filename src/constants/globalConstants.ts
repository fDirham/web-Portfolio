const URL_CDN_ROOT = "https://d1af2lvvh100pg.cloudfront.net/";
const URL_CDN_SHARED = URL_CDN_ROOT + "shared/";
const URL_CDN_PORTFOLIO = URL_CDN_ROOT + "portfolio/";
const URL_CDN_PROJECT_VIDEOS = URL_CDN_PORTFOLIO + "project_videos/";

// Misc Icons
export const URL_LOCK_ICON = URL_CDN_PORTFOLIO + "lock_icon-32x32.png";
export const URL_BOT_AVATAR = URL_CDN_SHARED + "fbd_headshot-64x64.jpg";
export const URL_BLANK_AVATAR = URL_CDN_SHARED + "blank_avatar-64x64.jpg";
export const URL_SUBMIT_ICON = URL_CDN_SHARED + "submit_icon.svg";

// Project Icons
export const URL_ICON_PROFFY = URL_CDN_ROOT + "snapexplain/icon-64x64.jpg";

// Project videos
export const URL_VID_PROFFY = URL_CDN_PROJECT_VIDEOS + "proffy.mp4";

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
];
