const conexao = require('../infraetrutura/conexaoInfraestrutura');
const moment = require('moment');

class AtendimentoModels{
    adiciona(atendimento, res){
        
        
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:S');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:S');

        // retorna booliano
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
        const clienteEhValido = atendimento.cliente.length >= 5

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'O nome tem que sem maior que 5 caracter'
            
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length
        
        if(existemErros){
            res.status(400).json(erros)
        }else{
            const atendimentoDatado = {...atendimento, dataCriacao, data}
            
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
}
module.exports = new AtendimentoModels