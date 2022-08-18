import * as React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonProps } from "@spatialbox/core/src";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary", "outline", "negative"] },
    size: { control: "inline-radio", options: ["xs", "sm", "md", "lg"] }
  },
  args: {
    variant: "primary",
    size: "md"
  }
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const FirstStory = Template.bind({});
