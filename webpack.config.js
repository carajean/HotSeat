module.exports = {
    //where to start compiling js
    entry: ['app.js'],
    //where to put output
    output: {
        //absolute path
        path: __dirname,
        //filename
        filename: './public/bundle.js'
    },
    //config for loaders
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }]
    }
};
