import StyleDictionary from "style-dictionary";

import { themeFormat, varFormat } from "./sd/formatter";

StyleDictionary.registerFormat(themeFormat);
StyleDictionary.registerFormat(varFormat);

const dict = StyleDictionary.extend({
  source: ["./src/tokens/**/*.js"],
  platforms: {
    js: {
      transformGroup: "js",
      buildPath: "./src/theme/",
      files: [
        {
          destination: "theme.ts",
          format: "themeFormat"
        },
        {
          filter: function (token) {
            return token.path ? token.path.includes("vars") : false;
          },
          destination: "vars.ts",
          format: "varFormat"
        }
      ]
    }
  }
});

dict.buildAllPlatforms();
