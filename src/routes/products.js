const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsControllers')

router.post('/crear', controller.crear);
router.get('/listar', controller.listar);
router.get('/detalle', controller.detalle);

module.exports = router;