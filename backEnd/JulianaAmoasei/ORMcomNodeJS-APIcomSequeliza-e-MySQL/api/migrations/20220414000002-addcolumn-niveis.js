'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Niveis', 'deletedAt',{
      id: {
        allowNull: false,        
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Niveis', 'deletedAt');
  }
};