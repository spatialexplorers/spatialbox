import { Transform } from "style-dictionary";
import { Named } from "style-dictionary/types/_helpers";

export const toVar: Named<Transform> = {
  type: "value",
  transitive: true,
  name: "toVars",
  matcher: (token) => (token.original ? token.original.value.indexOf("{vars.") > -1 : false),
  transformer: (token) => {
    let v = token.original.value.replace("{vars.", "").replace(".value}", "");
    return `--${v.replace(".", "-")}`;
  }
};
