const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const loginControle = require('./src/controllers/loginControle'); // 👈 FALTAVA ISSO

const { loginRequired } = require('./src/middlewares/middleware');

// Home
route.get('/', homeController.index);

// Login
route.get('/login/index', loginControle.index);
route.post('/login/register', loginControle.register);
route.post('/login/login', loginControle.login);
route.get('/login/logout', loginControle.logout);

// Contato
route.get('/contato/index', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/index/:id', loginRequired, contatoController.editIndex);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);
route.get('/contato/delete/:id', loginRequired, contatoController.delete);


module.exports = route;