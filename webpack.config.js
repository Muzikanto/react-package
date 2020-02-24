const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
   const config = {
      mode: 'development',
      devtool: false,
      entry: './src/index.ts',
      resolve: {
         extensions: ['.tsx', '.ts', '.js', '.jpg', '.png', '.svg', '.gif'],
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
         libraryTarget: 'umd',
         library: 'MyLib',
         umdNamedDefine: true
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
