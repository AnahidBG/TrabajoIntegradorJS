const path = require('path');
const fs = require('fs');

//ubicacion del archivo
const ruta = path.resolve(__dirname, '../data/products.json');

//con fs buscamos el json de products
const jsonProducts = fs.readFileSync(ruta, {encoding: 'utf-8' });

//pasamos el json a un objeto
let products = JSON.parse(jsonProducts);

const controller = {
    crear: (req, res) => {
        console.log(req.body);
        res.json('Crear un producto');
    },

    //devuelve los productos
    listar: (req, res) =>{
        res.json(products);
    },

    detalle: (req, res) =>{
        res.json('detalle de producto');
    },
}


module.exports = controller;