const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')



const router = Router()
router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoas)
router.post('/pessoas', PessoaController.criaPessoa)


module.exports = router