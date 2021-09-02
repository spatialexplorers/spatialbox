import * as React from "react";
import { Theme } from "./theme/theme";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

export type ColorMode = "light" | "dark";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export type IThemeProviderContext = {
  colorMode: string;
  setColorMode: React.Dispatch<React.SetStateAction<string>>;
  theme: Theme;
};

export const ThemeContext = React.createContext<IThemeContext>(["dark", () => null, variables]);

export function ThemeProvider({ children }) {}

export const UIProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<keyof Themes>("dark");

  const vars: any = React.useMemo(() => {
    if (typeof window !== "undefined" && document && document.documentElement) {
      const vars = toVars(themes[theme]);
      for (const [key, value] of Object.entries(vars)) {
        document.documentElement.style.setProperty(key, value as any);
      }
      return vars;
    }
    return null;
  }, [theme]);

  const value: IThemeContext = React.useMemo(() => [theme, setTheme, variables], [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={variables}>
        <Foundation />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
