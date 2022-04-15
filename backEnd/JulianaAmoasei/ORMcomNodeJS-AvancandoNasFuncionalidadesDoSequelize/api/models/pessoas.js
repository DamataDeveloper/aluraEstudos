'use strict'
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: {
      type: DataTypes.STRING,
      validate:{
        funcaoValidadora: function(dado){
          if(dado.length < 3) throw Error('o campo nome deve ter mais de 3 caracteres')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: {
          args: true,
          msg: 'dados do tipo email invalido'
        }
      }
    },
    role: DataTypes.STRING
  }, 
  {
    paranoid: true,
    defaultScope:{
      where: {ativo: true},
    },
    scopes:{
      todos:{ where: {} },      
    }    
  })
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docent_id'
    }) 
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id',
      scope:{ status: 'ativo' },
      as: 'aulasMatriculadas'
    })

  }
  return Pessoas
}