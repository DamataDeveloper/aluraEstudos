const AtendimentoModels = require('../models/AtendimetoModels');


module.exports = app => {    
    app.get('/atendimentos', (req, res) => {
        AtendimentoModels.lista()
            .then(resultados=> res.status(200).json(resultados))
            .catch(erros=> res.status(400).json(erros))
    });

    app.get('/atendimentos/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        AtendimentoModels.buscaPorId(id, res)
    })


    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;       
        AtendimentoModels.adiciona(atendimento)
            .then( atendimentoCadastrado => {
                res.status(201).json(atendimentoCadastrado)
            })
            .catch(erros =>{
                res.status(400).json(erros)
            })
        
       
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