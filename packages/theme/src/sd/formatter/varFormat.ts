import { Format, TransformedTokens } from "style-dictionary";
import { Named } from "style-dictionary/types/_helpers";
//@ts-ignore
import { minifyDictionary } from "style-dictionary/lib/common/formatHelpers";
import { TransformedToken } from "style-dictionary/types/TransformedToken";
export const varFormat: Named<Format> = {
  name: "varFormat",
  formatter: function ({ dictionary, platform, options, file }) {
    dictionary.allTokens.forEach((token) => {
      if (token.original.value.indexOf("{vars.") > -1) {
        let v = token.original.value.replace("{vars.", "").replace(".value}", "");
        token.value = `--${v.replace(".", "-")}`;
      }
    });

    const vars = JSON.stringify(minifyDictionary(dictionary.tokens).vars, null, 2);
    const defs = flatten(dictionary.allTokens);

    return `const _vars =  ${vars};
const _defs = ${defs};
export type ThemeVars = typeof _vars;
export type ThemeVarDefs = typeof _defs;
export const themeVars = _vars as ThemeVars;
export const themeVarDefs = _defs as ThemeVarDefs;
`;
  }
};

function flatten(tokens: TransformedToken[]) {
  let result = tokens
    .map((token) => {
      return `  "--${token.path.slice(1).join("-")}": ${JSON.stringify(token.value)}`;
    })
    .join(",\n");

  return `{\n${result}\n}`;
}
