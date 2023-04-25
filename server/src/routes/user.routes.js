const express = require('express');
const userRoutes = express.Router();
const controller = require('../controllers/users.controllers');

// OBTENER TODOS LOS USUARIOS
userRoutes.get('/', controller.allUsers);
// OBTENER UN USUARIO POR ID
userRoutes.get('/:id', controller.userId);
// CREAR UN NUEVO USUARIO
userRoutes.post('/', controller.createUser);
// ELIMINAR UN USUARIO
userRoutes.delete('/:id', controller.deleteUser);

module.exports = userRoutes;
