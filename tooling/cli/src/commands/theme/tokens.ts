import { Flags } from "@oclif/core";
import { SpatialBoxCommand } from "../../base";
import * as path from "path";

const rcopy = require("recursive-copy");

export default class ThemeTokensCommand extends SpatialBoxCommand {
  static description = "Copy tokens";

  static examples = [`$ sbox theme tokens ./theme spatialbox`];

  static flags = {
    theme: Flags.string({
      char: "t",
      description: "Unused flag",
      required: false,
      default: "spatialbox",
      options: ["spatialbox"]
    })
  };

  static args = [
    { name: "path", description: "Where to copy tokens to", required: true },
    {
      name: "theme",
      description: "Which theme to copy",
      required: false,
      default: "spatialbox",
      options: ["spatialbox"]
    }
  ];

  async run(): Promise<void> {
    const { args } = await this.parse(ThemeTokensCommand);

    let rootSrcPath = path.dirname(require.resolve("@spatialbox/theme/package.json"));
    let rootDestPath = path.resolve(args.path);

    let themesPath = path.resolve(rootSrcPath, "themes", args.theme, "tokens");
    let destPath = path.join(rootDestPath, "tokens");
    try {
      const results = await rcopy(themesPath, destPath);
      this.log(`Theme "${args.theme}" copied to "${args.path}", ${results.length} files copied`);
    } catch (err: any) {
      this.log("themes:tokens error:", err + "");
    }
  }
}
