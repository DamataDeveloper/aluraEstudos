const { restart } = require('nodemon');
const AtendimentoModels = require('../models/AtendimetoModels');


module.exports = app => {    
    app.get('/atendimentos', (req, res) => {
        AtendimentoModels.lista()
            .then(resultados=> res.status(200).json(resultados))
            .catch(erros=> res.status(400).json(erros))
    });

    app.get('/atendimentos/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        AtendimentoModels.buscaPorId(id)
            .then(resultado=>res.status(200).json(resultado))
            .catch(erros=>res.status(400).json())
    })


    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;  
        console.log("controllercontrollercontrollercontrollercontrollercontroller") 
        console.log(req.body)
        console.log("controllercontrollercontrollercontrollercontrollercontroller")     
       
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
        AtendimentoModels.altera(id, valores)
            .then(resposta=>res.status(200).json({...valores, id}))
            .catch(erros=>restart.status(400).json(erro))
       
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        
        AtendimentoModels.deleta(id)
            .then(resultado=> res.status(200).json({id}))
            .catch(erros=>res.status(400).json(erros))
       
    })
}
