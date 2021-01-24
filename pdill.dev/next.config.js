const withImages = require('next-images')
module.exports = withImages()

const webpack = require('webpack')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.REACT_APP_API_KEY': JSON.stringify(process.env.REACT_APP_API_KEY)
      })
    )
    return config
  }
}

const Dotenv = require('dotenv-webpack')

module.exports = {
  plugins: [
    new Dotenv({
      path: './some.other.env', // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
    })
  ]
}
