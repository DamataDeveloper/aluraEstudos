const AtendimentoModels = require('../models/AtendimetoModels');

module.exports = app => {    
    app.get('/atendimentos', (req, res) => res.send('tudo ok estamos no get clientes'));


    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        console.log('estou aqui 1')
        AtendimentoModels.adiciona(atendimento);
        
        res.send('fazendo um post nos clientes');
    });
}