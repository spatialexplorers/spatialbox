import * as React from "react";
import { theme as defaultTheme, themeVars, Theme, ThemeVars } from "./base";
import { css, Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";

export type ColorMode = "light" | "dark";

export interface ThemeProviderProps {
  theme?: Theme;
  vars?: ThemeVars;
  children: React.ReactNode;
}

export type IThemeProviderContext = {
  theme: Theme;
};

export const ThemeProviderContext = React.createContext<IThemeProviderContext>({ theme: defaultTheme });

export function ThemeProvider({ theme = defaultTheme, vars = themeVars, children }: ThemeProviderProps) {
  const parsedVariables = React.useMemo(() => {
    return toCSSVars(vars);
  }, [vars]);

  console.log("parsed", parsedVariables);

  return (
    <ThemeProviderContext.Provider value={{ theme }}>
      <Global
        styles={css`
          :root {
            ${Object.entries(parsedVariables)
              .map(([key, value]) => `${key}: ${value};`)
              .join("\n")}
          }
        `}
      />
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

function toCSSVars(obj: object, vars = {}, path: string[] = []) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      toCSSVars(value, vars, [...path, key]);
    } else {
      vars["--" + path.join("-") + "-" + key] = value;
    }
  }
  return vars;
}
