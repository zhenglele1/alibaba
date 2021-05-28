var usersRouter = require('./users');
var homeRouter = require('./home');
var toduListRouter = require('./tudolist')
var excelRouter = require('./excel')
/* GET home page. */
console.log('index')
const routers = (app) => {
  app.use('/', homeRouter)
  app.use('/user', usersRouter)
  app.use('/tudo', toduListRouter)
  app.use('/excel', excelRouter)
}


module.exports = routers;
