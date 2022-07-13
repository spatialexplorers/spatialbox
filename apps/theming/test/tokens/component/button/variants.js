module.exports = {
  component: {
    button: {
      variants: {
        cta: {
          base: {
            color: { value: "{vars.color.cta.font.value}" },
            background: { value: "{vars.color.cta.background.base.value}" }
          },
          hover: {
            background: { value: "{vars.color.cta.background.darker.value}" }
          }
        },
        primary: {
          base: {
            color: { value: "{vars.color.primary.font.value}" },
            background: { value: "{vars.color.primary.background.base.value}" }
          },
          hover: {
            background: { value: "{vars.color.primary.background.darker.value}" }
          }
        },
        secondary: {
          base: {
            color: { value: "{vars.color.secondary.font.value}" },
            background: { value: "{vars.color.secondary.background.base.value}" }
          },
          hover: {
            background: { value: "{vars.color.secondary.background.darker.value}" }
          }
        },
        outline: {
          base: {
            color: { value: "{vars.color.primary.background.base.value}" },
            background: { value: "transparent" },
            border: { value: "1px solid" },
            borderColor: { value: "{vars.color.primary.background.base.value}" }
          },
          hover: {
            color: { value: "{vars.color.primary.font.value}" },
            background: { value: "{vars.color.primary.background.base.value}" }
          }
        }
      }
    }
  }
};
