const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Tipp = require('../models/tipp')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const server = 'localhost:27017'
const database = 'tipps'
const mongoDB = `mongodb://${server}/${database}`
mongoose.connect(mongoDB, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('Connection Succeeded')
})

// app.post('/', (req, res) => {
//   var title = req.body.title
//   var newTipp = new Tipp({
//     title: title
//   })
//
//   newTipp.save(function (error) {
//     if (error) {
//       console.log(error)
//     }
//     res.send({
//       success: true,
//       message: 'Post saved successfully!'
//     })
//   })
// })

app.get('/', (req, res) => {
  // with Promises:
  Tipp.count().exec().then(function (count) {
    const random = Math.floor(Math.random() * count)
    Tipp.findOne().skip(random).exec().then(function (randomTipp) {
      res.send({
        tipp: randomTipp
      })
    }).catch(function (err) {
      res.json(err)
    })
  }).catch(function (err) {
    res.json(err)
  })
  // with callback:
  // Tipp.count().exec(function (err, count) {
  //   if (err) { res.json(err); return }
  //   const random = Math.floor(Math.random() * count)
  //   Tipp.findOne().skip(random).exec(
  //     function (err, randomTipp) {
  //       if (err) { res.json(err); return }
  //       res.send({
  //         tipp: randomTipp
  //       })
  //     })
  // })
  // find all:
  // Tipp.find({}, 'title', (error, tipp) => {
  //   if (error) { console.error(error) }
  //   res.send({
  //     tipp: tipp
  //   })
  // })
})

app.listen(process.env.PORT || 8081)
