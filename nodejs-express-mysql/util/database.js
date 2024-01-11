const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('nft-db', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost'
})

module.exports = sequelize;