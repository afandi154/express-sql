const router = require('express').Router()
const { index, view } = require('./controller')
const upload = require('multer')({ dest: 'Files' })
const fs = require('fs')
const path = require('path')

router.get('/get', index)
router.get('/get/:id', view)

// Test Upload Image / File
router.post('/post', upload.single('image'), (req, res) => {
  const { id, name, date } = req.body
  const image = req.file

  if (image) {
    const target = path.join('Files', image.originalname)
    fs.renameSync(image.path, target)

    res.json({ id, name, date, image })
  }
})

module.exports = router