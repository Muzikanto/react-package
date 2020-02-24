const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

function getEntries() {
   const entries = {};

   glob.sync('src/**/*.tsx').forEach((file) => {
      const name = file.replace('src/', '').replace('.tsx', '').replace('.ts', '');

      if (['.stories', 'mock/folders'].reduce((acc, el) => acc && name.indexOf(el) === -1, true)) {
         entries[name] = path.join(__dirname, file);
      }
   });

   return entries;
}

const optimization = {
   minimizer: [
      new TerserPlugin({
         terserOptions: {
            keep_classnames: true,
            parse: {
               ecma: 8,
            },
            compress: {
               ecma: 6,
               warnings: false,
               comparisons: false,
               inline: 2,
            },
            output: {
               ecma: 6,
               comments: false,
               ascii_only: true,
            },
         },
         parallel: true,
         cache: true,
         sourceMap: true,
      }),
   ],
};

module.exports = (env, argv) => {
   const config = {
      mode: 'production',
      devtool: false,
      entry: getEntries(),
      externals: [nodeExternals()],
      optimization,
      resolve: {
         extensions: ['.tsx', '.ts', '.js', '.jpg', '.png', '.svg', '.gif'],
      },
      node: {
         console: false,
         global: false,
         process: false,
         Buffer: false,
         __filename: false,
         __dirname: false,
      },
      module: {
         rules: [
            {
               test: /\.tsx?$/,
               use: 'awesome-typescript-loader',
               exclude: /node_modules/,
            },
            {
               test: /\.(scss|css)$/,
               use: [
                  argv.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                  {
                     loader: 'css-loader',
                     options: {
                        importLoaders: 1,
                     },
                  },
                  {
                     loader: 'sass-loader',
                     options: {
                        sourceMap: false,
                     },
                  },
               ],
            },
            {
               test: /\.(png|svg|jpg|gif)$/,
               use: [
                  'file-loader',
               ],
            },
         ],
      },
      output: {
         path: __dirname + '/dist',
         filename: '[name].js',
      },
      plugins: [
         new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
         }),
      ],
   };
   return config;
};
