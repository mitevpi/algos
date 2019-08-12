import minify from "rollup-plugin-babel-minify";

module.exports = {
  input: "dist/index.js",
  plugins: [
    minify({
      // Options for babel-minify.
    })
  ]
};
