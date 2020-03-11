const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-storysource/register',
        '@storybook/addon-essentials',
        '@storybook/addon-docs/register',
        '@storybook/addon-a11y',
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                    options: {
                        configFile: path.resolve(__dirname, "./tsconfig.json"),
                    }
                },
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                    options: {
                        tsconfigPath: path.resolve(__dirname, "./tsconfig.json"),
                    }
                },
                {
                    loader: require.resolve('@storybook/addon-storysource/loader'),
                },
            ],
        });

        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    },
};