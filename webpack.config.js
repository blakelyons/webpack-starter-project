const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src", "index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
        clean: true,
        assetModuleFilename: "images/[name][contenthash][ext][query]"
    },
    devtool: "source-map",  // "source-map" for production
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
            watch: true,  // Ensure files are watched for changes
        },
        open: true,
        hot: false,
        compress: true,
        historyApiFallback: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Starter Kit",
            template: path.resolve(__dirname, "src", "index.html")  // Correct path to index.html
        }),
        //new BundleAnalyzerPlugin(),
    ]
};
