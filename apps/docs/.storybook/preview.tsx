import React from "react";

import { ThemeProvider } from "@spatialbox/core";

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
];
