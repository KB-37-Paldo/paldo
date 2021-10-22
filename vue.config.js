const path = require('path')

module.exports = {
  PORTFOLIO_SERVICE_URL:process.env.PORTFOLIO_SERVICE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'))
  },
  devServer: {
    disableHostCheck:true
  },
  // publicPath: '/moneymany/'
}