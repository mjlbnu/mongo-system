const express = require('express')

const routes = new express.Router()

// intercept
routes.get('/', (req, res) => {
    return res.send(`Olá ${req.query.name}`)

})

module.exports = routes
