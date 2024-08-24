const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development', // Set to development for dev server
  devtool: 'inline-source-map', // Support inline source mapping for debugging
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  performance: {
    maxAssetSize: 1000000,
    hints: false,
    maxEntrypointSize: 1000000,
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the output directory before each build
    new HtmlWebpackPlugin({
      template: './index.html', // Specify an HTML template
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // Split common dependencies into separate files
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Updated from contentBase to static.directory
    },
    compress: true, // Enable gzip compression for served files
    port: 8564, // Port on which the server runs
    open: true, // Automatically open the browser
  },
  output: {
    filename: '[name].bundle.js', // Dynamic filename for multiple entries
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Rule for CSS files
        use: ["style-loader", "css-loader"], // Loaders for processing CSS
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i, // Rule for image files
        use: [
          "file-loader", // Loader for handling image imports
          {
            loader: "image-webpack-loader", // Loader for optimizing images
            options: {
              bypassOnDebug: true, // Disable optimization in debug mode
              disable: true, // Disable in development for faster builds
            },
          },
        ],
      },
    ],
  },
};
