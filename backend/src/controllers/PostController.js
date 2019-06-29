const Post = require('../models/Post')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

module.exports = {
    // rota index retorna todos os posts por data decrescente
    // de criação do registro em formato json 
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt')

        return res.json(posts)
    },

    // método que recebe os dados do arquivo e demais dados
    async store(req, res) {
        console.log(req.body)
        console.log(req.file)

        const { author, place, description, hashtags} = req.body
        const { filename: image} = req.file

        // altera a extensão
        const [name] = image.split('.')
        const filename = `${name}.jpg`

        // redimensiona a imagem
        await sharp(req.file.path)
            .resize(500)
            .jpeg( { quality: 70} )
            .toFile(
                path.resolve(req.file.destination, 'resized', filename)
            )
        // deleta o arquivo original
        fs.unlinkSync(req.file.path)
        
        // salva no banco de dados
        const post = await Post.create({
            author,
            place,
            description, 
            hashtags,
            image: filename,
        })

        // envia informação em tempo real através do io com todos os dados do post
        // para o frontend conseguir acessar a mensagem em tempo real
        req.io.emit('post', post)

        return res.json(post)
    }
}