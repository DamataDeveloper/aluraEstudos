const PetsModels = require('../models/PetsModels')

module.exports = app =>{

    app.post('/pet', (req, res) => {
        const pet = req.body;
        PetsModels.adiciona(pet, res);
    })
}