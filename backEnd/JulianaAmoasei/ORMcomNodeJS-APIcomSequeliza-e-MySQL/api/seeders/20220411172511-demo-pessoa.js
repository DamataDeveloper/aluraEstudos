'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'John Doe',
        ativo: true,
        email: 'john@jonh.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()      
      },
      {
        nome: 'marcelo Doe',
        ativo: true,
        email: 'marcelo@jonh.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()      
      },
      {
        nome: 'catarina Doe',
        ativo: true,
        email: 'catarina@jonh.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()      
      },
      {
        nome: 'marlene Doe',
        ativo: true,
        email: 'marlene@jonh.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()      
      },
      {
        nome: 'marcos Doe',
        ativo: true,
        email: 'marcos@jonh.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()      
      },
    ], 
      {});
    
  },

  async down (queryInterface, Sequelize) {
     
    await queryInterface.bulkDelete('People', null, {});
    
  }
};
