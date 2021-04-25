var express = require('express');
var router = express.Router();
const {getCode} = require('../utils/svgCaptcha');
/* GET users listing. */
router.get('/getCode', function(req, res, next) {
  console.log('svgCaptcha',getCode)
  getCode(req,res)
});

module.exports = router;
