import { Command } from "@oclif/core";
import { cosmiconfig } from "cosmiconfig";

import { SpatialboxCLIConfig } from "./types";

const defaultConfig: SpatialboxCLIConfig = {
  projectName: "spatialbox"
};

export abstract class SpatialBoxCommand extends Command {
  spatialBoxConfig: SpatialboxCLIConfig = defaultConfig;

  async init() {
    const explorer = cosmiconfig("spatialbox");
    try {
      let result = await explorer.search();
      if (result) {
        this.spatialBoxConfig = result.config as SpatialboxCLIConfig;
      }
    } catch (err: any) {
      console.log("Using default config");
    }
  }
}
