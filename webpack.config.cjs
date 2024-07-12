const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js', // Replace with your actual main application entry file
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        hot: true, // Enable HMR
        client: {
            logging: 'none', // Change this to 'warn' or 'error' to show only warnings or errors
            overlay: {
                warnings: true,
                errors: true,
            },
        },
    },
    resolve: {
      extensions: ['.js', '.json'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            favicon: './favicon.png'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
