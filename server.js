const express = require('express');
const app = express();
app.use(express.json());

let productos = [
    { id: 1, nombre: 'Servidor Cloud', precio: 100 },
];

// GET: Ver productos (Lo probarás en Postman)
app.get('/api/productos', (req, res) => {
    res.json(productos);
});

// POST: Crear producto (Lo probarás en Postman)
app.post('/api/productos', (req, res) => {
    const nuevo = { id: productos.length + 1, ...req.body };
    productos.push(nuevo);
    res.status(201).json(nuevo);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
