import StyleDictionary from "style-dictionary";
import chokidar from "chokidar";
import { themeFormat, varFormat } from "./sd/formatter";

function build() {
  const dict = StyleDictionary.extend({
    source: ["./src/tokens/**/*.js"],
    platforms: {
      js: {
        transformGroup: "js",
        buildPath: "./src/base/",
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

build();

if (process.argv && process.argv.length > 2) {
  const watcher = chokidar.watch("./src/tokens/**/*.js", {
    awaitWriteFinish: true
  });
  watcher.on("change", function (path) {
    console.log("File " + path + " has been changed");
    build();
  });
}
