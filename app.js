var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var randomstring = require('randomstring')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// mongodb
// var mongo = require('./dbs/mongo.js')
var fs = require('fs'); //文件模块
var bodyParser = require('body-parser')
var app = express();
var upload = require('./utils/upload')
app.use(bodyParser.urlencoded({ extended: false }))
// view engine setup\
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//-------------文件上传-----------------------
// 指定上传文件的存储目录及文件名


app.post('/upload', upload.single('file'), (req, res) => {
  console.log('req:== ', req.file);
  var file = req.file
  if (file) {
    file.url = `http://localhost:3000/uploads/${file.filename}`
    console.log('file: ', file);
    res.send(file)
  } else {
    res.send({
      msg: '老铁，别皮了，请上传文件吧'
    })
  }
})

//-------------文件上传-----------------------
app.use(require('cors')())
//解决跨域
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
indexRouter(app)
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
