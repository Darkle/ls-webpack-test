const path = require('path')

const appDir = path.resolve(__dirname)

const webpackOptions = {
  entry: './index.lsc.js',
  output: {
    filename: 'index-compiled.js',
    path: appDir
  },
  context: appDir,
  module: {
    rules: [
      {
        test: /.(lsc|jsx?)/,
        loader: 'babel-loader',
        options: {
          plugins: ['lightscript']
        }
      }
    ]
  }
}

if(process.env.NODE_ENV === 'development'){
  webpackOptions.devtools = 'source-map'
}

module.exports = webpackOptions