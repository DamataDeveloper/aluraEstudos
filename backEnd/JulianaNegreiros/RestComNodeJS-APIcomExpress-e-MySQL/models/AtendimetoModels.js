const conexao = require('../infraetrutura/conexaoInfraestrutura');

class AtendimentoModels{
    adiciona(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimento, (erro, resultados) =>{
            if(erro){
                console.log(erro);
            }else{
                console.log(resultados)
            }

        })
    }
}
module.exports = new AtendimentoModels