var svgCaptcha = require('svg-captcha');
var qs = require('qs')
exports.getCode = (req, res) => {

    var codeConfig = {
        size: 5,// 验证码长度
        ignoreChars: '0o1i', // 验证码字符中排除 0o1i
        noise: 8, // 干扰线条的数量
        height: 44
    }
    var captcha = svgCaptcha.create(codeConfig);
    // req.session.captcha = captcha.text.toLowerCase(); //存session用于验证接口获取文字码
    res.cookie('userinfo', captcha.text.toLowerCase(), { maxAge: 60000, httpOnly: true })
    console.log('req.cookies', qs.parse(req.cookies))
    var codeData = {
        img: captcha.data
    }
    res.send(codeData);
}