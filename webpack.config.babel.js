const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/public/',
        library: 'LanguageParser',
        libraryTarget: 'window'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app')
        ],
        extensions: ['.js', '.json', '.jsx', '.css'],
        alias: {
            'module': 'new-module',
            'only-module$': 'new-module',
            'module': path.resolve(__dirname, 'app/third/module.js'),
        },
    },
    context: __dirname,
    target: 'web'
}