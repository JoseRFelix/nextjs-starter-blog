const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const path = require("path");
const fs = require("fs");

module.exports = withPlugins([optimizedImages], {
  webpack(config) {
    //Absolute imports paths
    const ROOT_DIR = process.cwd();

    const directories = fs
      .readdirSync(ROOT_DIR, { withFileTypes: true })
      // Disregard hidden folders
      .filter((file) => file.isDirectory() && file.name[0] !== ".")
      .map((file) => file.name);

    directories.forEach((directory) => {
      config.resolve.alias[directory] = path.join(__dirname, directory);
    });

    return config;
  },
});
