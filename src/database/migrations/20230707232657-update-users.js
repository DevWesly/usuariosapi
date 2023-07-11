'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.changeColumn('users','email',{
      type: Sequelize.STRING
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users','email',{
      type: Sequelize.INTEGER
    })
  }
};
