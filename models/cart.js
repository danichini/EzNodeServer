const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Model = Sequelize.Model

class Cart extends Model {}
Cart.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  }
}, {
  sequelize,
  modelName: 'cart'
})

module.exports = Cart