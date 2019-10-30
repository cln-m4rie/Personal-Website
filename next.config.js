// next.config.js
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  /* config options here */
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]_[hash:base64:5]"
  }
});
