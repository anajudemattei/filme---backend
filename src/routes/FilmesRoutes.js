const express = require('express');
const router = express.Router();
const filmeController = require('../controllers/FilmeControllers.js');

router.post('/filmes', filmeController.addFilme);
router.get('/filmes', filmeController.getAllFilmes);
router.get('/filmes/:id', filmeController.getFilmeById);
router.put('/filmes/:id', filmeController.updateFilme);
router.delete('/filmes/:id', filmeController.deleteFilme);
router.get('/filmes/top10', filmeController.getTop10Filmes);

module.exports = router;