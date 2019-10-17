const express = require('express');
const server = express();
const usersRouter = require('./api/users/user-router.js');
const helmet = require('helmet');
const cors = require('cors');


server.use(helmet())
server.use(cors());


server.use(express.json());
server.use('/api', usersRouter)
module.exports = server;