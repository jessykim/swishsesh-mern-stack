const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')

const Run = mongoose.model('Run')

module.exports = app => {
  app.get('/api/runs', requireLogin, (req, res) => {
    Run.find({})
    .then(runs => {
      res.send(runs)
    })
  })

  app.post('/api/runs', requireLogin, async (req, res) => {
    const { date, location, duration , cost, gameFormat } = req.body

    const run = new Run({
      date,
      location,
      duration,
      cost,
      gameFormat,
      host: req.user.profile.id
    })

    try {
      const newRun = await run.save()
      res.send(newRun)
    } catch (err) {
      res.status(422).send(err)
    }
  })

}