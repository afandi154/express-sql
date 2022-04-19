const express = require('express')
const app = express()
const logger = require('morgan')
const path = require('path')
const routeMahasiswa = require('./Native/config/routes')
const routeDosen = require('./Sequelize/config/routes')

// Config
app.use(logger('dev'))
// COnfig untuk image upload
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Config untuk Static dan Download
app.use('/', express.static(path.join(__dirname, 'uploads')))

// Routes
app.use('/mahasiswa', routeMahasiswa)
app.use('/dosen', routeDosen)
app.use((req, res) => {
  res.status(404)
  res.send({
    status: 'Failed',
    message: `Path ${req.originalUrl} Not Found`
  })
})

app.listen(3000, () => console.log("Server is starting at 127.0.0.1:3000"))