//const conexao = require('../infraetrutura/conexaoInfraestrutura');
const moment = require('moment');
const atendimentoRepositorios = require('../repositorios/AtendimentoRepositorios');

class AtendimentoModels{
    constructor(){
        // retorna booliano
        this.dataEhValida = ({data, dataCriacao}) => {moment(data).isSameOrAfter(dataCriacao);}
        this.clienteEhValido = (tamanho) => {tamanho >= 5}
        this.valida = parametros => this.validacoes.filter(campo => {
            const {nome} = campo
            const parametro = parametros[nome]
            return !campo.valido(parametro)
        })

        
        
        this.validacoes = [
            {
                nome: 'data',
                valido: this.dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            
            },
            {
                nome: 'cliente',
                valido: this.clienteEhValido,
                mensagem: 'O nome tem que sem maior que 5 caracter'
            
            }
        ]


    }
    adiciona(atendimento){
        
        
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:S');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:S');

        

        const parametros = {
            data: {data, dataCriacao},
            cliente: {tamanho: atendimento.cliente.length}
        }

        const erros = this.valida(parametros)
        const existemErros = erros.length




        
        if(existemErros){
            return new Promise((resolve, reject)=>{
                reject(erros)
            })
            
        }else{
            const atendimentoDatado = {...atendimento, dataCriacao, data}
                        
            return atendimentoRepositorios.adiciona(atendimentoDatado)
                .then((resultados)=>{
                    const id = resultados.insertId
                    return {...atendimento, id}

                })       
            
        }
    }
    buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0]
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(atendimento)
            }
        })
    }

    lista(){ return atendimentoRepositorios.lista()}

    altera(id, valores, res){
        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:S');
        }

        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({...valores, id})
            }
        })
    }
   
    deleta(id, res){
        const sql = 'DELETE FROM Atendimentos WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }

    

}
module.exports = new AtendimentoModels