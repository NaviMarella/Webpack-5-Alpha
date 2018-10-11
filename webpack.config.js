const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Paths = {
    DIST: path.join(__dirname, 'dist')
}

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name].js'
    },
    watch: true,
    cache: {
        loglevel: 'debug',
        type: 'filesystem',
        store: 'background',
        name: 'test'
    },
    plugins: [
        new CleanWebpackPlugin([Paths.DIST])
    ]
}