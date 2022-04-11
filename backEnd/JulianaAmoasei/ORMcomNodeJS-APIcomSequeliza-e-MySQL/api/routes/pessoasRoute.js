const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')



const app = Router()
app.get('/pessoas', PessoaController.pegaTodasAsPessoas)
app.get('/pessoas/:id', PessoaController.pegaUmaPessoas)


module.exports = app