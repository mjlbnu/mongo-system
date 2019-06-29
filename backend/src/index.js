const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

// permite lidar com rotas, parâmetros e respostas
const app = express()

// para o servidor suportar protocolo http e websocket
// websocket para comunicação em tempo real
const server = require('http').Server(app)
const io = require('socket.io')(server)

// conexão com banco de dados
mongoose.connect('mongodb+srv://admin:admin001@cluster0-4agvr.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

// websockets
// repassa o io para todas as rotas/controllers
app.use((req, res, next) => {
    req.io = io

    next()
})

// permite que todas as urls e ips possam acessar o backend
// sem isso o react não consegue acessar a aplicação
app.use(cors())

// rota para acessar arquivos estáticos (imagens)
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

// arquivo separado de rotas para separar as rotas da aplicação
app.use(require('./routes'))

server.listen(3333)