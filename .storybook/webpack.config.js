const path = require('path');

module.exports = ({ config }) => {
   config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
         {
            loader: require.resolve('babel-loader'),
            options: {
               cwd: path.resolve(''),
               presets: [['react-app', { flow: false, typescript: true }]],
            },
         },
      ],
   });

   config.resolve.extensions.push('.ts', '.tsx');

   config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loaders: [
         {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: { parser: 'typescript' },
         },
      ],
      enforce: 'pre',
   });

   return config;
};
