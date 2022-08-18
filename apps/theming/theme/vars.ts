const _vars =  {
  "color": {
    "cta": {
      "background": {
        "base": "#2664f4",
        "darker": "#104adb"
      },
      "font": "#eaf1ff"
    },
    "primary": {
      "background": {
        "base": "#6e81aa",
        "darker": "#556791"
      },
      "font": "#eaf1ff"
    },
    "secondary": {
      "background": {
        "base": "#8d9dbe",
        "darker": "#6e81aa"
      },
      "font": "#eaf1ff"
    }
  }
};
const _defs = {
  "--color-cta-background-base": "#2664f4",
  "--color-cta-background-darker": "#104adb",
  "--color-cta-font": "#eaf1ff",
  "--color-primary-background-base": "#6e81aa",
  "--color-primary-background-darker": "#556791",
  "--color-primary-font": "#eaf1ff",
  "--color-secondary-background-base": "#8d9dbe",
  "--color-secondary-background-darker": "#6e81aa",
  "--color-secondary-font": "#eaf1ff"
};
export type ThemeVars = typeof _vars;
export type ThemeVarDefs = typeof _defs;
export const themeVars = _vars as ThemeVars;
export const themeVarDefs = _defs as ThemeVarDefs;
