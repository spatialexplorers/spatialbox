import "@emotion/react";
import styledIn from "@emotion/styled";
import type { Theme as SpatialTheme } from "./theme/theme";

declare module "@emotion/react" {
  export interface Theme extends SpatialTheme {}
}

export const styled = styledIn;
