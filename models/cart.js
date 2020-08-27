'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User , {
        targetKey: "id",
        foreignKey:"UserId"
      })
      Cart.belongsTo(models.Item , {
        targetKey: "id",
        foreignKey:"ItemId"
      })
    }
  };
  Cart.init({
    status_order: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    total_price: DataTypes.BIGINT,
    address: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
