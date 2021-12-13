const express = require('express');
const routes = express.Router()
const Usuario = require('./controllers/usuarios.controllers')


routes.get('/', Usuario.index);
routes.post('/api/users', Usuario.create);
routes.get('/api/users', Usuario.index);
routes.get('/api/users.details', Usuario.details);

module.exports = routes;


