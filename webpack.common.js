const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            /* style and css loader */
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },

    /* plugin */
    plugins: [
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            favicon: "./src/style/favicon.ico",
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
};