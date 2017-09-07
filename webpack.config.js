const path = require('path')

const appDir = path.resolve(__dirname)

module.exports = {
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