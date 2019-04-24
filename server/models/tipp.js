const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TippSchema = new Schema({
  title: String
})

const Tipp = mongoose.model('Tipp', TippSchema)
module.exports = Tipp
