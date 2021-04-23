var path = require('path');
var multer = require('multer')
var randomstring = require('randomstring')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('destination: ', '文件上传');
        console.log('__dirname: ', __dirname);
        cb(null, path.join(__dirname , '../public/uploads'))
    },
    filename: function (req, file, cb) {
        var ext = path.extname(file.originalname)
        cb(null, randomstring.generate(44) + ext)
    }
})
var upload = multer({ storage: storage })
module.exports = upload