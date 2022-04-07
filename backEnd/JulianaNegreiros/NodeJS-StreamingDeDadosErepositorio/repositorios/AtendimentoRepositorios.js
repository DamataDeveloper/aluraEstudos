const query = require('../infraetrutura/database/queriesInfraestrutura');

class AtendimentoRepositorios{
    
    adiciona(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?' 
        return query(sql, atendimento);
    }

    lista(){
        const sql = 'SELECT * FROM Atendimentos' 
        return query(sql);
    }
}
module.exports = new AtendimentoRepositorios