const conexao = require('../infraetrutura/database/conexaoInfraestrutura');
const uploadDeArquivo = require('../infraetrutura/arquivos/uploadDeArquivos');
class PetsModel{

    adiciona(pet, res){
        const sql = 'INSERT INTO Pets SET ?';

        uploadDeArquivo(pet.imagem, pet.nome, (erroIMG, novoCaminho)=>{
            if(erroIMG){
                res.status(400).json({erroIMG})
            }else{
                const novoPet = { nome: pet.nome, imagem: novoCaminho}      
                conexao.query(sql, novoPet, erro =>{
                    if(erro){
                        res.status(400).json(erro);
                    }else{
                        res.status(200).json(novoPet)
                    }
                })

            }

        })
        
    }
    
}

module.exports = new PetsModel;
