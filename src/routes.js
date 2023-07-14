const express = require ('express');
const UserController = require('./controllers/userController');
const AddressController = require('./controllers/addressController');

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








module.exports = routes;