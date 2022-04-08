const PetsModels = require('../models/PetsModels')

module.exports = app =>{

    app.post('/pet', (req, res) => {
        const pet = req.body;
        PetsModels.adiciona(pet)
            .then(resposta=>res.status(200).json(resposta))
            .catch(erros=>res.status(400).json(erros))
    })
}