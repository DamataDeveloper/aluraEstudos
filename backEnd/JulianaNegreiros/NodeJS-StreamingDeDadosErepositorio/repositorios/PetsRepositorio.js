const query = require('../infraetrutura/database/queriesInfraestrutura')
class PetsRepositorio{
    
    adiciona(pet){
        const sql = 'INSERT INTO Pets SET ?';
        return query(sql, pet);
    }
}
module.exports = new PetsRepositorio