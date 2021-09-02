const _theme = {
  "color": {
    "base": {
      "blue": {
        "50": "#e3eeff",
        "100": "#b4cbff",
        "200": "#84a9fa",
        "300": "#5486f7",
        "400": "#2664f4",
        "500": "#104adb",
        "600": "#083aab",
        "700": "#03297b",
        "800": "#00194c",
        "900": "#00081e"
      }
    }
  },
  "component": {
    "button": {
      "base": {
        "borderRadius": "16px"
      },
      "variants": {
        "primary": {
          "base": {
            "color": "var(--color-primary-font)",
            "background": "var(--color-primary-background-base)"
          },
          "hover": {
            "background": "var(--color-primary-background-darker)"
          }
        },
        "outline": {
          "base": {
            "color": "var(--color-primary-font)",
            "background": "transparent",
            "borderColor": "var(--color-primary-background-base)"
          },
          "hover": {
            "background": "var(--color-primary-background-base)"
          }
        }
      }
    }
  },
  "size": {
    "font": {
      "xss": "0.75rem",
      "xs": "0.75rem",
      "sm": "0.875rem",
      "md": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem"
    }
  },
  "vars": {
    "color": {
      "primary": {
        "background": {
          "base": "#2664f4",
          "darker": "#104adb"
        },
        "font": "#e3eeff"
      }
    }
  }
};

export type Theme = typeof _theme;
export const theme = _theme as Theme;
    