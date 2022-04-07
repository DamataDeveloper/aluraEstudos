const fs = require('fs');
const path = require('path')
/*
fs.readFile('./assets/lua4.jpg', (error, buffer)=>{
    console.log('imagem bufferizada');
    console.log(buffer)

    fs.writeFile('./assets/lua5.jpg', buffer, erro => {
        console.log('imagem escrita') 
    })
})
*/
/*
fs.createReadStream('./assets/lua4.jpg') 
    .pipe(fs.createWriteStream('./assets/imagens/lua-stream.jpg'))
    .on('finish', ()=> console.log('imagem stream escrita com sucesso'))

 */   

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada)=>{
    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

    

    if(tipoEhValido){

        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
    
        fs.createReadStream(caminho) 
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', ()=> callbackImagemCriada(false, novoCaminho))
    }else{
        const erro = 'Tipo e invalido'
        console.log('Erro! Tipo invalido')
        callbackImagemCriada(erro)           
        
    }
    


}