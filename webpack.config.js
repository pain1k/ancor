const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'assets')
    },
    module: {
        rules: [
            {
                test: /\.(?:|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `./fonts/[name].[ext]`,
                        }
                    }
                ]
            },
            {
                test: /.(s*)css$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader',
                    'resolve-url-loader',
                ]
            },
            // {
            //     test: /\.(woff2?|ttf|otf|eot|svg)$/,
            //     exclude: /node_modules/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[path][name].[ext]'
            //     }
            // },
            // {
            //     test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
            //     use: [
            //         {
            //             loader: 'file-loader?name=./assets/fonts/[name].[ext]'
            //         },
            //     ]
            // }
        ]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
    ]
};