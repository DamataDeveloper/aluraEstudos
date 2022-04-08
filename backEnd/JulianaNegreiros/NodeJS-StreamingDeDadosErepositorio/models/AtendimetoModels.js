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

        console.log("_________________________________")
        console.log(dataCriacao)
        console.log(data)
        console.log("_________________________________")

        
        
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
    buscaPorId(id){return atendimentoRepositorios.buscaPorId(id);}

    lista(){ return atendimentoRepositorios.lista()}

    altera(id, valores){
        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:S');
        }
        return atendimentoRepositorios.altera(id, valores);      
    }
   
    deleta(id){ return atendimentoRepositorios.deleta(id)}

    

}
module.exports = new AtendimentoModels