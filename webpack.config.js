module.exports = {
  entry: "./src/bootstrap.tsx",
  output: {
    filename: "./public/bundle.js"
  },
  mode: 'development',
  // Enable sourcemaps for debugging webpack's output.
  devtool: "eval",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // Handle .ts and .tsx file via ts-loader.
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [['@babel/typescript', { jsxPragma: "h" }]],
            plugins: [
              ['@babel/proposal-class-properties'],
              ['@babel/proposal-object-rest-spread'],
              ["@babel/transform-react-jsx", { "pragma": "h" }]
            ]
          }
        }
      }
    ]
  }
};
