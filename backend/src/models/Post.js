const mongoose = require('mongoose')

// representação da tabela do banco de dados
// em formato javascript
// abstração da tabela
const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Post', PostSchema)