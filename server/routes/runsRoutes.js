const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')

const Run = mongoose.model('Run')

module.exports = app => {
  app.post('/api/runs', requireLogin, (req, res) => {
    const { date, location, duration , cost, gameFormat, host } = req.body

    const run = new Run({
      date,
      location,
      duration,
      cost,
      gameFormat,
      host
    })
  })
}