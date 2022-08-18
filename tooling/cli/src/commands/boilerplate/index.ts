import { SpatialBoxCommand } from "../../base";
import * as path from "path";
import copy from "recursive-copy";
import { processTemplate } from "../../helpers";

export default class BoilerplateCommand extends SpatialBoxCommand {
  static description = "Boilerplate generator";

  static examples = [`$ sbox boilerplate spatialx`];

  static args = [{ name: "slug", description: "slug to use in package naming", required: true }];

  async run(): Promise<void> {
    const { args } = await this.parse(BoilerplateCommand);

    let slug = args.slug;
    let data = { slug };

    let rootPath = path.resolve(__dirname);
    let srcPath = path.join(rootPath, `../../../templates/project`);
    let trgPath = path.resolve("./");
    //console.log(srcPath, trgPath);
    try {
      const results = await copy(srcPath, trgPath, {
        overwrite: true,
        junk: true,
        dot: true,
        rename: function (filePath) {
          if (filePath.includes("__SLUG__")) {
            return filePath.replace("__SLUG__", slug);
          }
          return filePath;
        }
      });

      console.log(results);

      results.forEach((result) => {
        if (result.dest.includes(".hbs")) {
          processTemplate(result.dest, data);
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
}
