const database = require('../models');

class PessoaController{
    static async pegaTodasAsPessoas(req, res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas)

        }catch(error){
            return res.status(500).json(error.message)
        }
    } 
    static async pegaUmaPessoas(req, res){
        const id = req.params.id
        console.log(id)
        try{            
            const UmaPessoas = await database.Pessoas.findOne({
                whrere:{
                    id: Number(id) 
                }
            });            
            return res.status(201).json(UmaPessoas)

        }catch(error){
            return res.status(500).json(error.message)
        }
    } 

}
module.exports = PessoaController
