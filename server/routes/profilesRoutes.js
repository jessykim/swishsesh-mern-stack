const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')

const Profile = mongoose.model('profiles')

module.exports = app => {
  app.get('/api/profiles', requireLogin, (req, res) => {
    Profile.find({})
    .then(profiles => {
      res.send(profiles)
    })
  })

  app.get('/api/profiles/:profileId', requireLogin, (req, res) => {
    Profile.findById(req.params.profileId)
    .then(profile => {
      res.send(profile)
    })
  })

  // app.post('/api/profiles/:profileId', requireLogin, (req, res) => {
  //   const { position, level } = req.body

  //   console.log(req.body, 'REQ BODY')

  //   Profile.findByIdAndUpdate(req.params.id, req.body, { position: position, level: level })
  //   .then(profile => {
  //     res.send(profile)
  //   })
  // })
}