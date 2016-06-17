const server = require('http').createServer();
const express = require('express');
const app = express();
const webpack = require('webpack');

function init(config) {
  const compiler = webpack(config);

  // webpack with hot reloading
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true, modules: false, chunks: false, timings: true }
  }));
  app.use(require('webpack-hot-middleware')(compiler, {
    reload: true
  }));

  // start the server
  server.on('request', app);

  return {
    express,
    server,
    app
  }
}

module.exports = init
