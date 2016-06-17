const main = require('react-redux-webpack').init(require('./webpack.config'));
const server = main.server;
const app = main.app;

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/src/main/index.html');
});

server.listen(3000, function(err, result) {
  console.log('Listening at http://localhost:3000/');
});
