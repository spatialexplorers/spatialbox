import { Format } from "style-dictionary";
import { Named } from "style-dictionary/types/_helpers";
//@ts-ignore
import { minifyDictionary } from "style-dictionary/lib/common/formatHelpers";
export const varFormat: Named<Format> = {
  name: "varFormat",
  formatter: function ({ dictionary, platform, options, file }) {
    dictionary.allTokens.forEach((token) => {
      if (token.original.value.indexOf("{vars.") > -1) {
        let v = token.original.value.replace("{vars.", "").replace(".value}", "");
        token.value = `--${v.replace(".", "-")}`;
      }
    });

    return `const _vars =  ${JSON.stringify(minifyDictionary(dictionary.tokens), null, 2)};
export type ThemeVars = typeof _vars;
export const themeVars = _vars as ThemeVars;
`;
  }
};
