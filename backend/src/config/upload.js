const multer = require('multer')
const path = require('path')

// configuração do multer
// destino dos arquivos
// utilizando o nome original do arquivo

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb){
            cb(null, file.originalname)
        }
    })
}