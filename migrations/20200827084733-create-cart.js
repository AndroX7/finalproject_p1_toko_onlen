'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status_order: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Users",
          key:"id"
        }
      },
      item_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Items",
          key:"id"
        }
      },
      qty: {
        type: Sequelize.INTEGER
      },
      total_price: {
        type: Sequelize.BIGINT
      },
      address: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Carts');
  }
};
