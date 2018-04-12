/* global __dirname */

import path from 'path';
// import ChromeExtensionReloader from 'webpack-chrome-extension-reloader';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const distFolder = 'dist-dev';

export default {
    entry: {
        'content-script': './src/scripts/search-time.js',
    },
    output: {
        path: path.join(__dirname, distFolder, 'scripts'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        // new ChromeExtensionReloader(),
        new CopyWebpackPlugin([
            {
                from: path.join('src', 'manifest.json'),
                to: path.join(__dirname, distFolder)
            },
            {
                from: path.join('src', 'icons'),
                to: path.join(__dirname, distFolder, 'icons')
            }
        ])
    ]
};
