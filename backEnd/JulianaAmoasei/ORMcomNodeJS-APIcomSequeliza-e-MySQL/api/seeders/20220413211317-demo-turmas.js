'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Turmas', [
      {
        data_inicio: "2022-04-10",
        nivel_id: 1,
        docent_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2022-04-08",
        nivel_id: 3,
        docent_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2022-04-01",
        nivel_id: 2,
        docent_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2022-04-06",
        nivel_id: 4,
        docent_id: 4,
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
