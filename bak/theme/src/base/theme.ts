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
      },
      "shade": {
        "50": "#eaf1ff",
        "100": "#cdd5e8",
        "200": "#adb9d3",
        "300": "#8d9dbe",
        "400": "#6e81aa",
        "500": "#556791",
        "600": "#415072",
        "700": "#2e3953",
        "800": "#192234",
        "900": "#040b18"
      }
    }
  },
  "component": {
    "button": {
      "base": {
        "border": "0",
        "borderRadius": "16px"
      },
      "sizes": {
        "xs": {
          "base": {
            "fontSize": "0.75rem",
            "padding": "0.25rem 0.5rem",
            "borderRadius": "0.5rem"
          }
        },
        "sm": {
          "base": {
            "fontSize": "0.875rem",
            "padding": "0.25rem 0.5rem",
            "borderRadius": "0.375rem"
          }
        },
        "md": {
          "base": {
            "fontSize": "1rem",
            "padding": "0.5rem 1rem",
            "borderRadius": "0.5rem"
          }
        },
        "lg": {
          "base": {
            "fontSize": "1.125rem",
            "padding": "1rem 1.5rem",
            "borderRadius": "0.75rem"
          }
        }
      },
      "variants": {
        "cta": {
          "base": {
            "color": "var(--color-cta-font)",
            "background": "var(--color-cta-background-base)"
          },
          "hover": {
            "background": "var(--color-cta-background-darker)"
          }
        },
        "primary": {
          "base": {
            "color": "var(--color-primary-font)",
            "background": "var(--color-primary-background-base)"
          },
          "hover": {
            "background": "var(--color-primary-background-darker)"
          }
        },
        "secondary": {
          "base": {
            "color": "var(--color-secondary-font)",
            "background": "var(--color-secondary-background-base)"
          },
          "hover": {
            "background": "var(--color-secondary-background-darker)"
          }
        },
        "outline": {
          "base": {
            "color": "var(--color-primary-background-base)",
            "background": "transparent",
            "border": "1px solid",
            "borderColor": "var(--color-primary-background-base)"
          },
          "hover": {
            "color": "var(--color-primary-font)",
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
    },
    "padding": {
      "xs": "0.25rem",
      "sm": "0.5rem",
      "md": "1rem",
      "lg": "1.5rem",
      "xl": "2rem"
    },
    "radius": {
      "none": "0rem",
      "sm": "0.125rem",
      "base": "0.25rem",
      "md": "0.375rem",
      "lg": "0.5rem",
      "xl": "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "full": "9999rem"
    }
  }
};

export type Theme = typeof _theme;
export const theme = _theme as Theme;
    