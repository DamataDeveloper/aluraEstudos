const customExpress = require('./config/customExpressConfig');
const conexao = require('./infraetrutura/conexaoInfraestrutura');


conexao.connect((erro)=>{
    if(erro){
        console.log(erro)
    }else{
        console.log('conectado com o banco de dados');
        const app = customExpress();
        app.listen(3000, ()=> console.log('servidor rodando na porta 3000'));
    }
})


