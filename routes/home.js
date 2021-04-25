var express = require('express');
var router = express.Router();
/* GET home page. */
/**
 * @api {get} / 获取导航分类
 * @apiName GetNavCategory
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
 * @apiSampleRequest /home
 */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
