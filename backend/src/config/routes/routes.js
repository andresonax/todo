const express = require('express')

module.exports = function (server) {
    //ROTAS API
    const router = express.Router()
    server.use('/api',router)

    //TODO ROTAS
    const todoService = require('../../api/todo/todoService')
    todoService.register(router, '/todos')
}