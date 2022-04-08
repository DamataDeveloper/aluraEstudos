//const conexao = require('../infraetrutura/database/conexaoInfraestrutura');
const petsRepositorio = require('../repositorios/PetsRepositorio')
const uploadDeArquivo = require('../infraetrutura/arquivos/uploadDeArquivos');
const { promise } = require('../infraetrutura/database/conexaoInfraestrutura');
class PetsModel{
    
    adiciona(pet){        

        
        uploadDeArquivo(pet.imagem, pet.nome, (erroIMG, novoCaminho)=>{
            if(erroIMG){                
                return petsRepositorio.adiciona(novoPet)
                console.log('deu erro na imagem')
            }else{                
                const novoPet = { nome: pet.nome, imagem: novoCaminho}                
                return petsRepositorio.adiciona(novoPet)
            }

        })        
        return petsRepositorio.adiciona(pet)
        
    }
    
   
    adiciona2(pet){
        console.log('porra')
        return new Promise((resolve, reject)=>{
            uploadDeArquivo(pet.imagem, pet.nome, (erroIMG, novoCaminho)=>{
                if(erroIMG){                    
                    return reject(erroIMG)
                }else{                
                    const novoPet = { nome: pet.nome, imagem: novoCaminho}  
                    
                    return resolve(petsRepositorio.adiciona(pet))                   
                }    
            })
        })
    }
       
    adiciona2(pet){
        console.log('porra')
        return new Promise((resolve, reject)=>{
            uploadDeArquivo(pet.imagem, pet.nome, (erroIMG, novoCaminho)=>{
                if(erroIMG){                    
                    return reject(erroIMG)
                }else{                
                    const novoPet = { nome: pet.nome, imagem: novoCaminho}                     
                   resolve(petsRepositorio.adiciona(novoPet))
                                      
                }    
            })
        })
    }
    


    
}

module.exports = new PetsModel;
