const User = require('./user-model.js');

const express = require('express');
const router = express.Router();

// const restricted = require('../')

router.post('/register', (req, res) => {
    User.register(req.body)
        .then(user => {
            res.status(201).json({ registerMessage: user })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})

module.exports = router;