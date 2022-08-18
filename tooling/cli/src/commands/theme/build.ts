import { SpatialBoxCommand } from "../../base";
import { build } from "@spatialbox/theme";
import * as path from "path";

export default class ThemeBuildCommand extends SpatialBoxCommand {
  static description = "Copy tokens";

  static examples = [`$ sbox theme build ./theme`];

  static args = [{ name: "path", description: "Path to the theming folder", required: true }];

  async run(): Promise<void> {
    const { args } = await this.parse(ThemeBuildCommand);

    let srcPath = path.resolve(args.path);

    try {
      await build(srcPath);

      this.log("Theme built");
    } catch (err: any) {
      this.log("Theme build failed:", err + "");
    }
  }
}
