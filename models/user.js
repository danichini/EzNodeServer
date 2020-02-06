const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Model = Sequelize.Model;

class User extends Model {}
User.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // profilePic: {
  //   type: Sequelize.STRING
  // },
  // password: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // },
  // email: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // }
}, {
  sequelize,
  modelName: 'user'
})

module.exports = User