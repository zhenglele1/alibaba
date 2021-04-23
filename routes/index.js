var usersRouter = require('./users');
var homeRouter = require('./home');
var toduListRouter = require('./todulist')
/* GET home page. */
const routers = (app) => {
  app.use('/', homeRouter)
  app.use('/user', usersRouter)
  app.use('/todu', toduListRouter)
}


module.exports = routers;
