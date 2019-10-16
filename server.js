const express = require('express');
const server = express();
const usersRouter = require('./api/user-router.js');

server.use(express.json());
server.use('/api', usersRouter)
module.exports = server;