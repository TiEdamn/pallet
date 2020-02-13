const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(ttf|eot|svg|gif|png|jpg|jpeg|woff|webp|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: '[id].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
};
