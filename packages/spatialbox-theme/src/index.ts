import * as path from "path";
import ncp from "ncp";
import fs from "fs-plus";

function copyCommand(args: string[]) {
  if (args.length !== 2) {
    console.log("Usage: copy <theme> <destination>");
    return;
  }
  const [theme, destination] = args;
  console.log("Copying theme " + theme + " to " + destination);
  console.log(path.resolve(destination));

  let srcPath = path.resolve(__dirname, "../themes/" + theme);
  let destPath = path.join(path.resolve(destination), "tokens");

  fs.makeTreeSync(destPath);

  ncp(srcPath, destPath, function (err: any) {
    if (err) {
      console.log(err);
    } else {
      console.log("Theme copied successfully");
    }
  });
}

export async function run() {
  if (process.argv && process.argv.length > 2) {
    const [, , command, ...args] = process.argv;
    switch (command) {
      case "copy":
        copyCommand(args);
        break;
      default:
        console.log(`Unknown command: ${command}`);
        console.log(process.argv);
    }
  }
}
