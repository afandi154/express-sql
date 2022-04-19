const sequel = require('../sequelize')
const { DataTypes } = require('sequelize')

const Dosen = sequel.define('dosen', {
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gelar: {
    type: DataTypes.STRING,
    allowNull: false
  },
  umur: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  jenis_kelamin: {
    type: DataTypes.STRING,
    allowNull: false
  },
  menikah: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
})

module.exports = Dosen