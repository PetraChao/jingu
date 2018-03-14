const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config.js')
const compiler = webpack(config)
const server = new WebpackDevServer(compiler, {
    open: true,
    
});

server.listen(9999, function () {
    console.log('ok')
})