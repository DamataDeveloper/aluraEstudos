const fs = require('fs');

fs.readFile('./assets/lua4.jpg', (error, buffer)=>{
    console.log('imagem bufferizada');
    console.log(buffer)

    fs.writeFile('./assets/lua5.jpg', buffer, erro => {
        console.log('imagem escrita')
    })
})