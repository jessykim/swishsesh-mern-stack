const mongoose = require('mongoose');

const { Schema } = mongoose

const profileSchema = new Schema ({
  name: String,
  avatar: String,
  position: String,
  level: {
    type: String,
    enum: ["Recreational", "Experienced", "Competitive", "Elite"]
  },
}, {
  timestamps: true
})

mongoose.model('profiles', profileSchema)