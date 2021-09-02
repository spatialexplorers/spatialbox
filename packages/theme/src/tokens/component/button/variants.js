module.exports = {
  component: {
    button: {
      variants: {
        primary: {
          base: {
            color: { value: "{vars.color.primary.font.value}" },
            background: { value: "{vars.color.primary.background.base.value}" }
          },
          hover: {
            background: { value: "{vars.color.primary.background.darker.value}" }
          }
        },
        outline: {
          base: {
            color: { value: "{vars.color.primary.font.value}" },
            background: { value: "transparent" },
            borderColor: { value: "{vars.color.primary.background.base.value}" }
          },
          hover: {
            background: { value: "{vars.color.primary.background.base.value}" }
          }
        }
      }
    }
  }
};
