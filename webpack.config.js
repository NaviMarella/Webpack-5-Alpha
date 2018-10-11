const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Paths = {
    DIST: path.join(__dirname, 'dist')
}

function getWatchFlag() {
    // Set watch mode either to true/false.
    return false;
}

function getCacheConfiguration() {
    const watch = getWatchFlag();
    // based on watch mode we will be setting cache configuration either to fileCache or memoryCache
    return watch ? {
        type: 'memory'
    } : {
        type: 'filesystem',
        loglevel: 'debug',
        name: 'Project-Cache',
        store: 'background'
    }
}

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name].js'
    },
    watch: getWatchFlag(),
    cache: getCacheConfiguration(),
    plugins: [
        new CleanWebpackPlugin([Paths.DIST])
    ]
}