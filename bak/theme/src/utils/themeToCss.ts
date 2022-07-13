export function cssComponent(obj: any) {
  return Object.entries(obj)
    .map(([key, value]) => {
      switch (key) {
        case "base":
          return cssProps(value);
        case "variants":
        case "sizes":
          return cssClasses(value);
      }
    })
    .join("\n");
}

export function cssClasses(obj: any): string {
  return Object.entries(obj)
    .map(([key, value]) => {
      return `
      &.${key} {
        ${cssStates(value)};
      }
    
    `;
    })
    .join("\n");
}

export function cssStates(obj: any) {
  return Object.entries(obj)
    .map(([key, value]) => {
      switch (key) {
        case "base":
          return cssProps(value);
        case "hover":
          return `&:hover {
          ${cssProps(value)}
        }`;
        default:
          return "";
      }
    })
    .join("\n");
}

export function cssProps(obj: any) {
  return Object.entries(obj)
    .map(([key, value]) => {
      return `
      ${camelCaseToSnakeCase(key)}: ${value};
    `;
    })
    .join("\n");
}

const camelCaseToSnakeCase = (str: string) => {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
};
