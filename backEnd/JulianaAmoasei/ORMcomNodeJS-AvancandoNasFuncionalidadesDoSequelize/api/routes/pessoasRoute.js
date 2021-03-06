const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.pegaUmaMatricula)
  .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatricula)
  .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculaPorTurma)

  .post('/pessoas', PessoaController.criaPessoa)
  .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
  .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
  .put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.atualizaMatricula)

  .put('/pessoas/:id', PessoaController.atualizaPessoa)

  .delete('/pessoas/:id', PessoaController.cancelaPessoa)  
  .delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.apagaMatricula)
  

module.exports = router