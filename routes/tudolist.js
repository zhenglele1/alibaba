var express = require('express');
var mongo = require("../dbs/mongo");
var router = express.Router();
var upload = require('../utils/upload')
//===================文件上传逻辑===================================
// var multer = require('multer')
// var path = require('path')
// var randomstring = require('randomstring')
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         console.log('destination: ', '文件上传');
//         console.log('__dirname: ', __dirname);
//         var fullPath = path.join(__dirname, '../public/upload');  // __dirname是获取当前文件绝对路径的全局对象。
//         console.log('fullPath: ', fullPath);
//         cb(null, fullPath)
//     },
//     filename: function (req, file, cb) {
//         var ext = path.extname(file.originalname)
//         cb(null, randomstring.generate(44) + ext)
//     }
// })
// var upload = multer({ storage: storage })
//===================文件上传逻辑===================================
/**
 * @api {get} /todu/addlist 添加单个
 * @apiName addlist
 * @apiGroup Nav
 *
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述0
 * @apiSuccess {String} data  数据
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "导航的分类数据",
 *       "data": []
 *     }
 * @apiSampleRequest /
 */

router.get('/addlist', function (req, res, next) {
    var data = {
        name: "花花",
        age: 14,
        sex: "女",
        address: "上海市"
    }
    mongo.insertOne("user", data, function (result) {
        console.log('添加ok', result)
        res.send(result.ok.toString());
    });
    // res.send('respond with a addlist');
});

/**
 * @api {get} /todu/addslist 添加多个
 * @apiName addslist
 * @apiGroup Nav
 *
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述0
 * @apiSuccess {String} data  数据
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "导航的分类数据",
 *       "data": []
 *     }
 * @apiSampleRequest /
 */


router.get('/addslist', function (req, res, next) {
    var data = [
        {
            name: "首尔",
            age: 17,
            sex: "女",
            address: "北京市"
        },
        {
            name: "冬冬",
            age: 29,
            sex: "男",
            address: "成都市"
        }
    ]
    mongo.insertMany("user", data, function (result) {
        console.log('result: ', result);
        res.send(result.ok.toString());
    });
    // res.send('respond with a addlist');
});


/**
 * @api {get} /todu/updatalist 更改
 * @apiName addlist
 * @apiGroup Nav
 *
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述0
 * @apiSuccess {String} data  数据
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "导航的分类数据",
 *       "data": []
 *     }
 * @apiSampleRequest /
 */


router.get('/updatalist', function (req, res, next) {
    mongo.updateOne("user", { name: "首尔" }, { $set: { age: 32 } }, function (result) {
        res.send("修改成功！");
    });
    // res.send('respond with a updatalist');
});


/**
 * @api {get} /todu/getlist 获取
 * @apiName addlist
 * @apiGroup Nav
 *
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述0
 * @apiSuccess {String} data  数据
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "导航的分类数据",
 *       "data": []
 *     }
 * @apiSampleRequest /
 */


router.get('/getlist', function (req, res, next) {
    mongo.findAll("user", {}, function (result) {
        console.log(result);
        res.render("index", { title: '获取ok' });
    });
    // res.send('respond with a getlist');
});


/**
 * @api {get} /todu/delete 删除
 * @apiName delete
 * @apiGroup Nav
 *
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述0
 * @apiSuccess {String} data  数据
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "导航的分类数据",
 *       "data": []
 *     }
 * @apiSampleRequest /
 */


router.get('/delete', function (req, res, next) {
    mongo.deleteOne("user", { name: "花花" }, function (result) {
        console.log('删除成功result: ', result);
        res.send("删除成功！");
    });
    // res.send('respond with a delete');
});


/**
 * @api {get} /todu/upload 上传文件
 * @apiName addlist
 * @apiGroup Nav
 *
 * @apiSuccess {String} code 状态码.
 * @apiSuccess {String} message  描述0
 * @apiSuccess {String} data  数据
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "导航的分类数据",
 *       "data": []
 *     }
 * @apiSampleRequest /
 */

 
router.post('/upload', upload.single('file'), function (req, res, next) {
    console.log('req:== ', req.file);
    var file = req.file
    console.log('file: ', file);
    console.log(file)
    if (file) {
        file.url = `http://localhost:3000/upload/${file.filename}`
        console.log('file: ', file);
        res.send(file)
    } else {
        res.send({
            msg: '老铁，别皮了，请上传文件吧'
        })
    }
});

router.get('')

module.exports = router;
