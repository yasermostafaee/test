const path = require('path');
console.log(path.resolve(__dirname  , 'dist'));
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry : './src', // == './src/index.js'
    output : {
        filename : 'bundle[chunkhash].js',
        path : path.resolve(__dirname  , 'dist')
    },
    mode : 'production',
    watch : true,
    module : {
        rules : [
            {
                test : /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },'sass-loader'
                    ]
                })
            },
            {
                test : /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use:  [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }]                        
                })
                    
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin("styles[chunkhash].css"),
    ]
};