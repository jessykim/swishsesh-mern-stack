const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')

const Run = mongoose.model('runs')

module.exports = app => {
  app.get('/api/runs', requireLogin, (req, res) => {
    Run.find({})
    .then(runs => {
      res.send(runs)
    })
  })
  
  app.get('/api/runs/:runId', requireLogin, (req, res) => {
    Run.findById(req.params.runId)
    .populate('host')
    .populate('players')
    .then(run => {
      // console.log(run.start, "THIS RUN")
      res.send(run)
    })
  })
  
  app.post('/api/runs', requireLogin, async (req, res) => {
    const { start, end, location, address, cost, spots, gameFormat } = req.body

    const run = new Run({
      start,
      end,
      location,
      address,
      cost,
      spots,
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