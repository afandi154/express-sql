const Dosen = require('./model')

const index = async (req, res) => {
  try {
    await Dosen.sync();
    const result = await Dosen.findAll();
    res.send(result)
  } catch (err) {
    res.send(err)
  }
}

const view = async (req, res) => {
  try {
    await Dosen.sync();
    const result = await Dosen.findAll({
      where: {
        id: req.params.id
      }
    });
    res.send(result)
  } catch (err) {
    res.send(err)
  }
}

const store = async (req, res) => {
  try {
    await Dosen.sync();
    const result = await Dosen.create({ nama, gelar, umur, jenis_kelamin, menikah } = req.body);
    res.send(result)
  } catch (err) {
    res.send(err)
  }
}

module.exports = { index, store, view }