const mongoose = require('mongoose')

const CWLSignupSchema = {
  tag: String,
  playerName: String,
  thLevel: Number,
  clan: String
}

const CWLSignupModel = mongoose.model('CWLSignup', CWLSignupSchema)

module.exports = CWLSignupModel