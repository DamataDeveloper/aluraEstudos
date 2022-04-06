module.exports = app => {    
    app.get('/atendimentos', (req, res) => res.send('tudo ok estamos no get clientes'));


    app.post('/atendimentos', (req, res) => {
        console.log(req.body);
        
        res.send('fazendo um post nos clientes');
    });
}