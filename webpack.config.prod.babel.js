/* global __dirname */

import path from 'path';
// import ChromeExtensionReloader from 'webpack-chrome-extension-reloader';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Crx from 'crx-webpack-plugin';

import manifest from './src/manifest.json';
const buildFolder = 'build';

export default {
    entry: {
        'content-script': './src/scripts/search-time.js',
    },
    output: {
        path: path.join(__dirname, buildFolder, 'scripts'),
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
                to: path.join(__dirname, buildFolder)
            },
            {
                from: path.join('src', 'icons'),
                to: path.join(__dirname, buildFolder, 'icons')
            }
        ]),
        new Crx({
            keyFile: 'secrets/key.pem',
            contentPath: 'build',
            outputPath: 'dist',
            name: manifest.name.toLowerCase().replace(/\s/g, '-')
        })
    ]
};
