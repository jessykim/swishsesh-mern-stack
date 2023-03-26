const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')

const Run = mongoose.model('runs')

module.exports = app => {
  app.get('/api/runs', requireLogin, (req, res) => {
    Run.find({})
    .then(runs => {
      // console.log(runs)
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
      // const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
      // const timeOptions = { hour: 'numeric', minute: 'numeric' };
      // const newStart = run.start.toLocaleDateString('en-US', dateOptions) + ' at ' + run.start.toLocaleTimeString('en-US', timeOptions);
      // const newEnd = run.end.toLocaleDateString('en-US', dateOptions) + ' at ' + run.end.toLocaleTimeString('en-US', timeOptions);

      const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };
      const newStart = new Intl.DateTimeFormat('en-US', options).format(run.start);
      const newEnd = new Intl.DateTimeFormat('en-US', options).format(run.end);

      // console.log(run.start, "THIS RUN")
      // const newStart = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(run.start)
      // console.log(newStart)
      // const newEnd = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(run.end)
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

  app.post('/api/runs/:runId/signup', requireLogin, async (req, res) => {
    Run.findById(req.params.runId)
    .then((run) => {
      // console.log(run.id, 'RUNID?!')
      const runPlayers = run.players
      const user = req.user.profile._id
      if (!runPlayers.includes(user)) {
        run.players.push(req.user.profile._id)
        run.save()
        .then(() => {
          // console.log(run, 'UPDATED RUN')
          // res.redirect(`/api/runs/${run.id}`)
          res.send(run)
        })
      } else {
        // res.redirect(`/api/runs/${run.id}`)
        res.send(run)
      }
    })
  })

  app.delete('/api/runs/:runId/remove', requireLogin, async (req, res) => {
    Run.findById(req.params.runId)
    .then(run => {
      run.players.remove(req.user.profile._id)
      run.save()
      .then(() => {
        res.send(run)
      })
    })
  })

  app.delete('/api/runs/:runId', requireLogin, async (req, res) => {
    Run.findByIdAndDelete(req.params.runId)
    // console.log(req.params.runId)
    .then(() => {
      // Run.find({})
      // .then(runs => {
      //   res.send(runs)
      // })
    })
  })
}