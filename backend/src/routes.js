const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')

const routes = new express.Router()
const upload = multer(uploadConfig)

// rota que retorna todos os posts
routes.get('/posts', PostController.index)

// utilizado multer na rota para upload, para que o express entenda o multipart
routes.post('/posts', upload.single('image'), PostController.store)

// rota que permite os likes
routes.post('/posts/:id/like', LikeController.store)

module.exports = routes

// rotas detalhadas dentro dos controllers
// responsáveis pela lógica da aplicação e regras de negócio
