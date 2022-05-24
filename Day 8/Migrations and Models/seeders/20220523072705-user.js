const service = require("../service");

module.exports = {
  async up (queryInterface, Sequelize) {
    let data = service.importCSV(__dirname+'/company.csv').then(res => {
      console.log(res)
       queryInterface.bulkInsert('Company', [res], {});
    })
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
