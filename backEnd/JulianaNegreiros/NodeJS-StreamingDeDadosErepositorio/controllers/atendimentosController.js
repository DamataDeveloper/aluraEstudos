const atendimetoModels = require('../models/AtendimetoModels');
const AtendimentoModels = require('../models/AtendimetoModels');

module.exports = app => {    
    app.get('/atendimentos', (req, res) => {
        AtendimentoModels.lista(res)
    });

    app.get('/atendimentos/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        AtendimentoModels.buscaPorId(id, res)
    })


    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        console.log('estou aqui 1')
        AtendimentoModels.adiciona(atendimento, res);
        
       
    });
    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        AtendimentoModels.altera(id, valores, res)
       
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        
        AtendimentoModels.deleta(id, res)
       
    })
}