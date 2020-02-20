const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        // `filename` provides a template for naming your bundles (remember to use `[name]`)
        filename: '[name].bundle.js',
        // `chunkFilename` provides a template for naming code-split bundles (optional)
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    mode: 'production',
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000,
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'styles.css',
            chunkFilename: '[id].css',
        }),
        new OptimizeCSSAssetsPlugin({}),
        // To strip all locales except “en”
        new MomentLocalesPlugin({
            localesToKeep: ['es-us'],
        }),
        new CompressionPlugin(),
    ],
};
