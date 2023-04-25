const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const userRoutes = require('./routes/user.routes');

// Rutas

// Middlewares para cliente
app.use(cors());
app.use(express.json());

// Uso de rutas
app.use('/api/users', userRoutes);

app.listen(3000, () => console.log('Servidor en ejecución en el puerto 3000'));
