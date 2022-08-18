import Handlebars from "handlebars";
import fs from "fs-plus";

export function processTemplate(path: string, data: object) {
  let s = fs.readFileSync(path, "utf8");

  let result = Handlebars.compile(s)(data);

  let newPath = path.substring(0, path.lastIndexOf("."));
  fs.renameSync(path, newPath);
  fs.writeFileSync(newPath, result);
}
