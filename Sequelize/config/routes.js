const router = require('express').Router()
const { index, store, view } = require('./controller')

router.get('/get', index)
router.get('/get/:id', view)
router.post('/post', store)

module.exports = router