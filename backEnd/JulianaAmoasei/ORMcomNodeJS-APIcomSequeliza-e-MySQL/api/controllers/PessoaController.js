const { css } = require('js-beautify');
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
    //________________________________________________________________
    static async pegaUmaPessoas(req, res){
        const id = req.params.id
        console.log(id)
        try{            
            const UmaPessoas = await database.Pessoas.findByPk({
                where:{
                    id: Number(id) 
                }
            });            
            return res.status(201).json(UmaPessoas)

        }catch(error){
            return res.status(500).json(error.message)
        }
    } 
    //________________________________________________________________
    static async pegaUmaPessoa(req, res){
        const id = req.params.id
        console.log(id)
        try{            
            const UmaPessoas = await database.Pessoas.findByPk(id)                        
            return res.status(201).json(UmaPessoas)

        }catch(error){
            return res.status(500).json(error.message)
        }
    } 
    static async criaPessoa(req, res){
        const novaPessoa = req.body;
        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)

        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async atualizaPessoa(req, res){
        const id = req.params.id;
        const novasInfos = req.body

        try{
            await database.Pessoas.update(novasInfos, {where: {id: id}})
            const dadosDaPessoa = await database.Pessoas.findByPk(id)
             
            res.status(200).json(dadosDaPessoa)

        }catch(error){
            res.status(500).json(error.message)

        }
    }
    static async apagaPessoa(req, res){
        const id = req.params.id
        try{
            await database.Pessoas.destroy({where:{id: id}})
            console.log('estou aqui')
            return res.status(200).json({message: "ok pessoa deletada com sucesso"})

        }catch(error){
            console.log('deu erro')
            res.status(500).json(error.message)
        }
    }

}
module.exports = PessoaController
