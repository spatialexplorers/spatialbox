module.exports = {
  component: {
    button: {
      sizes: {
        xs: {
          base: {
            fontSize: { value: "{size.font.xs.value}" },
            padding: { value: "{size.padding.xs.value} {size.padding.sm.value}" },
            borderRadius: { value: "{size.radius.lg.value}" }
          }
        },
        sm: {
          base: {
            fontSize: { value: "{size.font.sm.value}" },
            padding: { value: "{size.padding.xs.value} {size.padding.sm.value}" },
            borderRadius: { value: "{size.radius.md.value}" }
          }
        },
        md: {
          base: {
            fontSize: { value: "{size.font.md.value}" },
            padding: { value: "{size.padding.sm.value} {size.padding.md.value}" },
            borderRadius: { value: "{size.radius.lg.value}" }
          }
        },
        lg: {
          base: {
            fontSize: { value: "{size.font.lg.value}" },
            padding: { value: "{size.padding.md.value} {size.padding.lg.value}" },
            borderRadius: { value: "{size.radius.xl.value}" }
          }
        }
      }
    }
  }
};
