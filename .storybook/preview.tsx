import { StoryContext } from "@storybook/react";
import * as React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { withPerformance } from "storybook-addon-performance";

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
  direction: {
    name: "Direction",
    description: "Direction for layout",
    defaultValue: "LTR",
    toolbar: {
      icon: "globe",
      items: ["LTR", "RTL"]
    }
  }
};

const withChakra = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals;
  const dir = direction.toLowerCase();

  return (
    <div dir={dir} id="story-wrapper" style={{ minHeight: "100vh" }}>
      <StoryFn />
    </div>
  );
};

export const decorators = [withChakra, withPerformance];
