import express  from "express";
import LivroController from "../controller/livrosController.js";

const router = express.Router()

console.log("estou nas routas")
router.get('/livros', LivroController.listarLivros)
console.log(LivroController.listarLivros)


export default router