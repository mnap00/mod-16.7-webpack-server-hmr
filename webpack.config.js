const path = require('path');

module.exports = {
    entry: './src/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    }
};
