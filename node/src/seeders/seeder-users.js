
//Tao du lieu tai khoan fake User tren DB:
'use strict';
// email: DataTypes.STRING,
//     password:DataTypes.STRING,
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     address: DataTypes.STRING,
//     gender: DataTypes.BOOLEAN,
//     roleid: DataTypes.STRING
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    //BulkInsert: chen nhiu ban ghi 1 luc
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',   //plain text -> hash password==>Luu trong DB
      firstName: 'Huu',
      lastName: 'Tri',
      address: 'USA',
      gender: 1,
      typeRole: 'ROLE',
      keyRole: 'R1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
