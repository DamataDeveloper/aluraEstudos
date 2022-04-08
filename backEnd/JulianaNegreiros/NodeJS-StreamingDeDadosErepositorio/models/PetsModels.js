//const conexao = require('../infraetrutura/database/conexaoInfraestrutura');
const petsRepositorio = require('../repositorios/PetsRepositorio')
const uploadDeArquivo = require('../infraetrutura/arquivos/uploadDeArquivos');
class PetsModel{

    adiciona(pet){        

        uploadDeArquivo(pet.imagem, pet.nome, (erroIMG, novoCaminho)=>{
            if(erroIMG){
                console.log("++++++++++++++++++++++++++++++++++++++++++if")
                return petsRepositorio.adiciona(novoPet)
                console.log('deu erro na imagem')
            }else{                
                const novoPet = { nome: pet.nome, imagem: novoCaminho}      
                console.log("++++++++++++++++++++++++++++++++++++++++++else")
                return petsRepositorio.adiciona(novoPet)
            }

        })
        console.log("++++++++++++++++++++++++++++++++++++++++++direto")
        return petsRepositorio.adiciona(pet)
        
    }
    
}

module.exports = new PetsModel;
