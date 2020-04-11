const mongoose = require('mongoose')
const Scheme = mongoose.Schema

const exerciseSchema = new Scheme({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, reqruied: true },
  date: { type: Date, reqruied: true }
}, { timestamps: true })

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise
