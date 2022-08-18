const path = require("path");

/** @type {import('next').NextConfig} */
let config = {
  output: "standalone",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"]
};

if (process.env.NODE_ENV === "development") {
  const webpack = require("webpack");
  const { parsed: myEnv } = require("dotenv").config({
    path: "../../.env.dev"
  });
  config.webpack = (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  };
}

module.exports = config;
