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

    buscaPorId(id){
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

        return query(sql, id);
    }

    deleta(id){
        const sql = 'DELETE FROM Atendimentos WHERE id=?'

        return query(sql, id);
    }

    altera(id, valores){
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'
        return query(sql, [valores, id]);
    }
}
module.exports = new AtendimentoRepositorios