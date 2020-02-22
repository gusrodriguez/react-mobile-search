
const config = require('./config');
const express = require('express');
const path = require('path');

const server = express();

// serve static assets from here
server.use(express.static(path.join(__dirname, '/build')));

server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// start the server
server.listen(config.port);
// eslint-disable-next-line no-console
console.log('Application listening on port: ', config.port);
