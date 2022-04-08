const conexao = require('./conexaoInfraestrutura');


const execuraQuery = (sql, parametros = '')=>{
    return new Promise((resolve, reject)=>{
        
        conexao.query(sql, parametros, (erros, resultados, campos)=>{    
            if(erros){    
                reject(erros)
            }else{
                resolve(parametros)
            }    
        })    
    })     
}

module.exports = execuraQuery;