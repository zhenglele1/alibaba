var usersRouter = require('./users');
var homeRouter = require('./home');
var toduListRouter = require('./tudolist')
/* GET home page. */
console.log('index')
const routers = (app) => {
  app.use('/', homeRouter)
  app.use('/user', usersRouter)
  app.use('/tudo', toduListRouter)
}


module.exports = routers;
