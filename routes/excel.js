var express = require('express');
var router = express.Router();
var nodeExcel = require('excel-export');
var bestShellTool = require('best-shell-tool')
/* GET home page. */
/**
 * @api {get} / 文件导出
 * @apiName /excelFun
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

router.get('/excelFun', function (req, res, next) {
    var conf = {};
    conf.name = "mysheet";
    conf.cols = [{
        caption: 'string',
        type: 'string',
    }, {
        caption: 'date',
        type: 'date',
    }, {
        caption: 'bool',
        type: 'bool'
    }, {
        caption: 'number',
        type: 'number'
    }];
    conf.rows = [
        ['pi', new Date(Date.UTC(2013, 4, 1)), true, 3.14],
        ["e", new Date(2012, 4, 1), false, 2.7182],
        ["M&M<>'", new Date(Date.UTC(2013, 6, 9)), false, 1.61803],
        ["null date", null, true, 1.414]
    ];
    var result = nodeExcel.execute(conf);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
    res.end(result, 'binary');
});

module.exports = router;
