var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
    ////Render source-map file for final build
    //devtool: 'source-map',
    entry: ['./app/src.js'],
    resolve: {
        extensions: ["", ".js"]
    },
    output: {
        path: './app/',    //Path of output file
        filename: 'runtime.js'  //Name of output file
    },
    plugins: [
        //Allows error warnings but does not stop compiling. Will remove when eslint is added
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [nodeModulesPath],
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};

module.exports = config;
