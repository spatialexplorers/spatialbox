import * as path from "path";
import ncp from "ncp";
import fs from "fs-plus";
import chokidar from "chokidar";
import { build } from "./build";

function copyCommand(args: string[]) {
  let theme = "default";
  let destination = "spatialbox";
  if (args.length > 0) {
    destination = args[0];
  }
  if (args.length > 1) {
    theme = args[1];
  }

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

function runCommand(args: string[]) {
  let watch = false;
  if (args.length > 0) {
    watch = true;
  }

  if (watch) {
    const watcher = chokidar.watch("./src/tokens/**/*.js", {
      awaitWriteFinish: true
    });
    watcher.on("change", function (path) {
      console.log("File " + path + " has been changed");
      build();
    });
  }
}

export async function run() {
  if (process.argv && process.argv.length > 2) {
    const [, , command, ...args] = process.argv;
    switch (command) {
      case "copy":
        copyCommand(args);
        break;
      case "run":
        runCommand(args);
        break;
      default:
        console.log(`Unknown command: ${command}`);
        console.log(process.argv);
    }
  }
}
