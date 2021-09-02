import { Format } from "style-dictionary";
import { Named } from "style-dictionary/types/_helpers";
//@ts-ignore
import { minifyDictionary } from "style-dictionary/lib/common/formatHelpers";
export const themeFormat: Named<Format> = {
  name: "themeFormat",
  formatter: function ({ dictionary, platform, options, file }) {
    dictionary.allTokens.forEach((token) => {
      if (token.original.value.indexOf("{vars.") > -1) {
        let v = token.original.value.replace("{vars.", "").replace(".value}", "");
        token.value = `var(--${v.replaceAll(".", "-")})`;
      }
    });

    return `const _theme = ${JSON.stringify(minifyDictionary(dictionary.tokens), null, 2)};

export type Theme = typeof _theme;
export const theme = _theme as Theme;
    `;
  }
};
