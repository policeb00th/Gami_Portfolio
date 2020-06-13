const path = require('path');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin=require('extract-text-webpack-plugin')


module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract= new ExtractTextPlugin('styles.css');
  return {
    plugins: [
      new Dotenv(),CSSExtract
    ],
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use:[
            {
              loader:'css-loader',
              options:{
                sourceMap:true
              }
            },
            {
              loader:'sass-loader',
              options:{
                sourceMap:true
              }
            }
          ]
        })
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
    }
}
