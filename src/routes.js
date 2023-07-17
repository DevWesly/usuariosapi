const express = require ('express');
const UserController = require('./controllers/userController');
const AddressController = require('./controllers/addressController');
const JobController = require('./controllers/jobController');

const routes = express.Router();

//Rotas de Usuarios
routes.get('/index',UserController.index);
routes.get('/index/:id',UserController.user);
routes.post('/users',UserController.store);
routes.put('/att/:id',UserController.att);
routes.delete('/del/:id',UserController.del);

//Rotas de Enderessos
routes.get('/users/addresses', AddressController.allAddresses);
routes.get('/user/:user_id/address', AddressController.endereco);
routes.post('/user/:user_id/address', AddressController.storeAddress);


//Rotas de Trabalho

routes.get('/users/jobs', JobController.index);
routes.post('/user/:user_id/jobs', JobController.create);











module.exports = routes;