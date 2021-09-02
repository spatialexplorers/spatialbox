const _theme = {
  "color": {
    "primary": "#61dafb",
    "secondary": "#ffc0cb"
  },
  "test": {
    "base": {
      "primary": "--bla-primary",
      "secondary": "--bla-secondary"
    },
    "background": "--blu"
  },
  "vars": {
    "bla": {
      "primary": "#61dafb",
      "secondary": "pink"
    },
    "bli": "#666666",
    "blu": "#EEEEEE"
  }
};

export type Theme = typeof _theme;
export const theme = _theme as Theme;
    