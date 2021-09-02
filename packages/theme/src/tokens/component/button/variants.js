module.exports = {
  component: {
    button: {
      variants: {
        primary: {
          color: "{vars.colors.primary.font.value}",
          background: {
            base: "{vars.colors.primary.background.value}",
            hover: "{vars.colors.primary.font.value}"
          }
        },
        secondary: {
          color: tokens.colors.bg[100],
          background: {
            default: tokens.colors.bg[600],
            hover: tokens.colors.bg[500]
          }
        },
        outline: {},
        cta: {
          color: tokens.colors.bg[50],
          background: {
            default: tokens.colors.primary[500],
            hover: tokens.colors.primary[600]
          }
        },
        negative: {
          color: tokens.colors.bg[50],
          background: {
            default: tokens.colors.red[500],
            hover: tokens.colors.red[600]
          }
        }
      }
    }
  }
};
