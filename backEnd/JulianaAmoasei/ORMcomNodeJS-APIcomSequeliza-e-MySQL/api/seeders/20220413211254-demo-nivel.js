'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Niveis', [
      {
        descr_nivel: 'basico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'intermediario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'avancado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'profissional',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
