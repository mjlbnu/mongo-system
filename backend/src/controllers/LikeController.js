const Post = require('../models/Post')

module.exports = {

    // incrementa a qtdade de likes
    async store(req, res) {
        const post = await Post.findById(req.params.id)

        post.likes += 1

        await post.save()

        // envia informação em tempo real através do io com todos os dados do post
        // para o frontend conseguir acessar a mensagem em tempo real
        req.io('like', post)

        return res.json(post)
    }
}