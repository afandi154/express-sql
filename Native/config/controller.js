const connection = require('../mysql')

const index = (req, res) => {
  connection.query({
    sql: 'SELECT * FROM mahasiswa'
  }, _response(res))
}

const view = (req, res) => {
  connection.query({
    sql: 'SELECT * FROM mahasiswa where id = ?',
    values: [req.params.id]
  }, _response(res))
}

const store = (req, res) => {
  const { nama, umur, jurusan, semester, domisili, ipk } = req.body
  connection.query({
    sql: 'INSERT into mahasiswa VALUES {null, ?, ?, ?, ?, ?}',
    values: [nama, umur, jurusan, semester, domisili, ipk]
  }, _response(res))
}
const _response = res => {
  return (error, result) => {
    error ? res.send({
      status: 'Failed',
      response: 'failed to fetch data'
    }) : res.send({
      status: 'Success',
      response: result
    })
  }
}

module.exports = { index, view, store }