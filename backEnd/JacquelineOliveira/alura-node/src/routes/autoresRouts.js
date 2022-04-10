import express  from "express";
import AutoreController from "../controller/autoresController.js";

const router = express.Router()


router
  .get('/autores', AutoreController.listarAutores)
  .get('/autores/:id', AutoreController.listarAutorPorId)
  .post('/autores', AutoreController.cadastrarAutor)
  .put('/autores/:id', AutoreController.atualizarAutor)
  .delete('/autores/:id', AutoreController.excluirAutor)

export default router