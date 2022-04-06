const conexao = require('../infraetrutura/conexaoInfraestrutura');
const moment = require('moment');

class AtendimentoModels{
    adiciona(atendimento, res){
        
        
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:S');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:S');
        
        
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        
       console.log(atendimentoDatado)

        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) =>{
            if(erro){  
                              
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultados)
            }

        })
    }
}
module.exports = new AtendimentoModels