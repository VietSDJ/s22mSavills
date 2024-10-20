export const ACC_TOKEN_COOKIE_KEY = "_tk_landing_";
export const ACC_ROLE_COOKIE_KEY = "_tk_role_";
export const REPORT_TITLE = "_rp_title_";
export const REPORT_PBI_ID = "_rp_id_";
export const REPORT_CREATED_DATE = "_rp_date_";
export const ACC_ADMIN = "Admin";
export const ACC_USER = "User";

export const ASPECT_RATIO_2_3 = 2 / 3;
export const ASPECT_RATIO_4_3 = 4 / 3;
export const ASPECT_RATIO_16_10 = 16 / 10;
export const ASPECT_RATIO_16_9 = 16 / 9;
export const DESKTOP_DEVICES = {
  [ASPECT_RATIO_4_3]: "desktop43",
  [ASPECT_RATIO_16_10]: "desktop1610",
  [ASPECT_RATIO_16_9]: "desktop169",
};

export const DIMENSIONS_2_3 = "800x1200";
export const DIMENSIONS_4_3 = "1200x900";
export const DIMENSIONS_16_10 = "1600x1000";
export const DIMENSIONS_16_9 = "1600x900";

export const VIDEO_WIDTH_HEIGHT = "lp-background--wh";
export const VIDEO_HEIGHT_WIDTH = "lp-background--hw";

export const VIDEO_BACKGROUND = {
  mobile: DIMENSIONS_2_3,
  tablet: DIMENSIONS_4_3,
  destop43: DIMENSIONS_4_3,
  desktop1610: DIMENSIONS_16_10,
  desktop169: DIMENSIONS_16_9,
};
export const COOKIE_EXPIRATION_TIME = 86400000;
export const DATE_27_08 = 1662552600000;
export const DATE_CHECKING = DATE_27_08;

export * from "./url";
