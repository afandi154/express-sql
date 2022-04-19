const { Sequelize } = require('sequelize')

const sequel = new Sequelize({
  database: 'eduwork',
  host: 'localhost',
  username: 'root',
  password: 'root',
  dialect: 'mysql'
});

(async () => {
  try {
    await sequel.authenticate()
    console.log('Connection has been established successfully.')
  } catch (err) {
    console.error('Unable to connect to database : ', err)
  }
})()

module.exports = sequel