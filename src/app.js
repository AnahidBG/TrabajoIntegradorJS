const express = require('express');
const app = express();
const products = require('./routes/products');
const { json } = require('body-parser');

//configuraciones siempre con app.use
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//app.use permite implementar las rutas
app.use('/products', products)

app.listen(3000, () => console.log('Server corriendo en el puerto 3000'));

