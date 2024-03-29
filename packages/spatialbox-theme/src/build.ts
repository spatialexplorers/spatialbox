import StyleDictionary from "style-dictionary";
import { themeFormat, varFormat } from "./sd/formatter";

export async function build(src: string) {
  let buildPath = src.endsWith("/") ? src : src + "/";
  const dict = StyleDictionary.extend({
    source: [`${src}/tokens/**/*.js`],
    platforms: {
      js: {
        transformGroup: "js",
        buildPath: buildPath,
        files: [
          {
            filter: function (token) {
              return token.path ? !token.path.includes("vars") : false;
            },
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

  dict.registerFormat(themeFormat);
  dict.registerFormat(varFormat);

  dict.buildAllPlatforms();
}
