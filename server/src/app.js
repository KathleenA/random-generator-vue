const express = require('express')
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
const bodyParser = require('body-parser')
// Middleware that can be used to enable CORS with various options. (Cross-origin resource sharing (CORS)
// is a mechanism that allows restricted resources on a web page to be requested
// from another domain outside the domain from which the first resource was served.)
const cors = require('cors')
// HTTP request logger middleware for node.js
const morgan = require('morgan')
const mongoose = require('mongoose')
const Tipp = require('../models/tipp')

const app = express()

// vanilla http server
// -----------------------
// var finalhandler = require('finalhandler')
// var http = require('http')
// var morgan = require('morgan')
//
// // create "middleware"
// var logger = morgan('combined')
//
// http.createServer(function (req, res) {
//   var done = finalhandler(req, res)
//   logger(req, res, function (err) {
//     if (err) return done(err)
//
//     // respond to request
//     res.setHeader('content-type', 'text/plain')
//     res.end('hello, world!')
//   })
// })

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const server = 'localhost:27017'
const database = 'tipps'
const mongoDB = `mongodb://${server}/${database}`
mongoose.connect(mongoDB, { useNewUrlParser: true }) // connection with database called tipps

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('Connection Succeeded')
})

app.post('/add', (req, res) => {
  var title = req.body.title
  var new_tipp = new Tipp({
    title: title
  })

  new_tipp.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})

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
