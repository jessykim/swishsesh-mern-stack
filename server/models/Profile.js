const mongoose = require('mongoose');

const { Schema } = mongoose

const profileSchema = new Schema ({
  name: String,
  avatar: String,
  position: {
    type: String, 
    // enum: ["No preference", "Center", "Power forward", "Small forward", "Point guard", "Shooting guard"]
  },
  level: {
    type: String,
    enum: ["Amateur", "Competitive", "Elite"]
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Profile', profileSchema)