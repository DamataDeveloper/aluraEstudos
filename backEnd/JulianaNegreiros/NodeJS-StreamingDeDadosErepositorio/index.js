const customExpress = require('./config/customExpressConfig');
const conexao = require('./infraetrutura/database/conexaoInfraestrutura');
const TabelasBanco = require('./infraetrutura/database/TabelasInfraestrutura');

conexao.connect((erro)=>{
    if(erro){
        console.log(erro)
    }else{
        console.log('conectado com o banco de dados');

        TabelasBanco.init(conexao);
        const app = customExpress();
        app.listen(3000, ()=> console.log('servidor rodando na porta 3000'));
    }
})


