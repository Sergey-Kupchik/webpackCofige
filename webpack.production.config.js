const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        'helloPage': './src/helloPage.js',
        'kiwiPage': './src/kiwiPage.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "./dist"),
        publicPath: ""
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 // 3 kilobytes
                    }
                },
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.join(process.cwd(), 'build/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            filename:'helloBtn.html',
            chunks:['helloPage'],
            title: 'Hello button',
            template: 'src/page-template.hbs',
            description: 'Click on button',
            minify: false,
        }),
        new HtmlWebpackPlugin({
            filename:'kiwiImg.html',
            chunks:['kiwiPage'],
            title: 'Hello KIWI',
            template: 'src/page-template.hbs',
            description: 'Img of kiwi',
            minify: false,
        })
    ]
};