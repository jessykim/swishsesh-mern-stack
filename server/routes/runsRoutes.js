const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')

const Run = mongoose.model('runs')

module.exports = app => {
  app.get('/api/runs', requireLogin, (req, res) => {
    Run.find({})
    .then(runs => {
      console.log(runs)
      runs.sort(function(a, b) {
        return new Date(a.start) - new Date(b.start)
      })

      const updatedRuns = runs.map(run => {
        const newStart = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(run.start)
        return {
          _id: run._id,
          start: newStart,
          location: run.location,
          address: run.address
        }
      })
      res.send(updatedRuns)
    })
  })
  
  app.get('/api/runs/:runId', requireLogin, (req, res) => {
    Run.findById(req.params.runId)
    .populate('host')
    .populate('players')
    .then(run => {
      // console.log(run.start, "THIS RUN")
      const newStart = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(run.start)
      // console.log(newStart)
      const newEnd = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(run.end)
      // console.log(newEnd)

      // console.log(run)
      const updatedRun = {
        _id: run._id,
        start: newStart,
        end: newEnd,
        location: run.location,
        address: run.address,
        cost: run.cost,
        spots: run.spots,
        gameFormat: run.gameFormat,
        host: run.host,
        players: run.players
      }
      res.send(updatedRun)
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