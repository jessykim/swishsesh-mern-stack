const mongoose = require('mongoose');

const { Schema } = mongoose

const runSchema = new Schema ({
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  gameFormat: String,
  host: { type: Schema.Types.ObjectId, ref: 'Profile'},
  players: [{ type: Schema.Types.ObjectId, ref: 'Profile' }]
}, {
  timestamps: true
})

mongoose.model('Run', runSchema)