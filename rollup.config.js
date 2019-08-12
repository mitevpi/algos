import minify from "rollup-plugin-babel-minify";

module.exports = {
  input: "dist/index.js",
  plugins: [
    minify({
      comments: false
      // Options for babel-minify.
    })
  ]
};
