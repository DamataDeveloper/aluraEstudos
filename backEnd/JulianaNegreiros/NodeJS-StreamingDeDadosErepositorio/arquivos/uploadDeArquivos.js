const fs = require('fs');
/*
fs.readFile('./assets/lua4.jpg', (error, buffer)=>{
    console.log('imagem bufferizada');
    console.log(buffer)

    fs.writeFile('./assets/lua5.jpg', buffer, erro => {
        console.log('imagem escrita') 
    })
})
*/
fs.createReadStream('./assets/lua4.jpg') 
    .pipe(fs.createWriteStream('./assets/lua-stream.jpg'))
    .on('finish', ()=> console.log('imagem stream escrita com sucesso'))

