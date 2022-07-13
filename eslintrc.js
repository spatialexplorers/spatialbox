module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-acme`
  extends: ["spatialbox"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};