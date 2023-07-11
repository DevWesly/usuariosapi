const express = require ('express');
const UserController = require('./controllers/userController');

const routes = express.Router();

routes.get('/index',UserController.index);
routes.get('/index/:id',UserController.user);

routes.post('/users',UserController.store);


routes.put('/att/:id',UserController.att)

routes.delete('/del/:id',UserController.del)


module.exports = routes;