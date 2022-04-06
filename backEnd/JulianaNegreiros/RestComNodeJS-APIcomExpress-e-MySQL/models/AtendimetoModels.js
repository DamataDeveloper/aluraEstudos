const conexao = require('../infraetrutura/conexaoInfraestrutura');
const moment = require('moment');

class AtendimentoModels{
    adiciona(atendimento){
        
        
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:S');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:S');
        
        
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        
       console.log(atendimentoDatado)

        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) =>{
            if(erro){                
                console.log(erro);
            }else{
                console.log(resultados)
            }

        })
    }
}
module.exports = new AtendimentoModels