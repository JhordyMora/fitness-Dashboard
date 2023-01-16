const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js",
    },
    mode: "development",
    resolve: {
        extensions: [".js", "jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
                
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.(scss|css)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                // type: 'assets',
                use: [
                    {
                        loader: 'file-loader',//['svg-url-loader','file-loader'],
                        options: {
                            limit: 10000,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: './index.html',
        }),
    ]
}