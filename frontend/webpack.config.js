const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const isProduction = process.env.NODE_ENV == 'production'

//const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : "style-loader"

const config = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "target"),
    },
    devtool: "cheap-source-map",
    devServer: {
        open: true,
        host: "localhost",
        port: 4200,
        proxy: [
            {
                context: ["/api"],
                target: "http://localhost:8080",
                changeOrigin: true,
                logLevel: 'debug',
                secure: false,
                ws: true,
                historyApiFallback: true 
            }
        ]  
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            hash: true,
            scriptLoading: "module"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: "./node_modules/@picocss/pico/css/pico.min.css", to: "styles"},
                {from: "images", to: "images"}
            ]
        }),
        new MiniCssExtractPlugin({
            filename: "styles/style.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },  
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
