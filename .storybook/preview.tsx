import { StoryContext } from "@storybook/react";
import * as React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { withPerformance } from "storybook-addon-performance";
import { ThemeProvider } from "@spatialbox/theme";
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

const withSpatialbox = (StoryFn: Function, context: StoryContext) => {
  return (
    <div id="story-wrapper" style={{ minHeight: "100vh" }}>
      <ThemeProvider>
        <StoryFn />
      </ThemeProvider>
    </div>
  );
};

export const decorators = [withSpatialbox, withPerformance];
