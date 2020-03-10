module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-docs/register',
        '@storybook/addon-storysource/register',
        '@storybook/addon-essentials',
        '@storybook/addon-actions',
        '@storybook/addon-a11y',
        '@storybook/addon-knobs',
        '@storybook/addon-design-assets/register',
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
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