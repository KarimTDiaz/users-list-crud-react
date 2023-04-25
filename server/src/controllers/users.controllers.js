const fs = require('fs');
const path = require('path');
const usersFile = path.resolve(__dirname, '../../data/users.json');
const { v4 } = require('uuid');
const controller = {};

// CONTROLADORES PARA LEER

controller.allUsers = (req, res) => {
  fs.readFile(usersFile, (err, data) => {
    if (err)
      return res.status(500).send('Error al leer el archivo de usuarios');
    const jsonData = JSON.parse(data);
    res.send(jsonData);
  });
};

controller.userId = (req, res) => {
  fs.readFile(usersFile, (err, data) => {
    if (err)
      return res.status(500).send('Error al leer el archivo de usuarios');
    const jsonData = JSON.parse(data);
    const user = jsonData.find(user => (req.params.id = user.userId));
    res.send(user);
  });
};

// CONTROLADORES PARA CREAR USUARIOS

controller.createUser = (req, res) => {
  const newData = req.body;
  fs.readFile(usersFile, (err, data) => {
    if (err)
      return res.status(500).send('Error al leer el archivo de usuarios');
    const jsonData = JSON.parse(data);
    const errorEmail = jsonData.some(user => user.email === newData.email);
    const errorUserName = jsonData.some(
      user => user.username === newData.username
    );
    if (errorEmail) {
      return res.status(409).send('El email que ha introducido ya esta en uso');
    } else if (errorUserName) {
      return res.status(409).send('El nombre de usuario ya esta en uso');
    }
    const dataWithId = { userId: v4(), ...newData };
    jsonData.push(dataWithId);
    fs.writeFile(usersFile, JSON.stringify(jsonData), err => {
      if (err)
        return res.status(500).send('Error al escribir el archivo de usuarios');
    });
    res
      .status(201)
      .send({ message: 'Usuario creado correctamente', users: jsonData });
  });
};

// CONTROLADORES PARA BORRAR USUARIOS

controller.deleteUser = (req, res) => {
  fs.readFile(usersFile, (err, data) => {
    if (err)
      return res.status(500).send('Error al leer el archivo de usuarios');
    const jsonData = JSON.parse(data);
    const userIndex = jsonData.findIndex(user => req.params.id === user.userId);
    if (userIndex === -1) {
      return res
        .status(404)
        .send('No se encuentra el usuario que desea eliminar');
    }
    jsonData.splice(userIndex, 1);
    fs.writeFile(usersFile, JSON.stringify(jsonData), err => {
      if (err)
        return res.status(409).send({
          message: 'El usuario no se ha podido eliminar'
        });
      return res
        .status(201)
        .send({ message: 'Usuario borrado correctamente', users: jsonData });
    });
  });
};

module.exports = controller;
