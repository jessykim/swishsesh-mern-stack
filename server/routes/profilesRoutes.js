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

  app.post('/api/profiles/:profileId', requireLogin, async (req, res) => {
    const { position, level } = req.body

    // console.log(req.body, 'REQ BODY')

    Profile.findByIdAndUpdate(req.params.profileId)
    .then(profile => {
      // console.log(profile.name, 'PROFILE')
      profile.position = position,
      profile.level = level
      profile.save()
      .then(() => {
        // console.log(profile, 'SAVED PROFILE')
        res.send(profile)
      })
    })
  })
}