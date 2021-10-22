const path = require('path')

module.exports = {
  // publicPath :process.env.VUE_APP_PORTFOLIO_SERVICE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'))
  },
  devServer: {
    disableHostCheck:true
  },
}