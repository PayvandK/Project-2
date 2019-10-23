const express = require('express')

const concertApi = require('../models/concert.js')

const concertRouter = express.Router()

//getAll
concertRouter.get('/concert', (req, res) => {
  concertApi.getAllConcerts()
  .then((concerts) => {
    res.render('concert/concerts', {concerts})
  })
  .catch((err) => {
    console.log(err)
  })
})

//getOne
concertRouter.get('/concert/:id', (req, res) => {
  concertApi.getConcert(req.params.id)
  .then((singleConcert) => {
    res.render(singleConcert)
  })
})

//update
concertRouter.put('/concert/:id', (req, res) => {
  concertApi.updateConcert(req.params.id, req.body)
  .then((updatedConcert) => {
    res.render(updatedConcert)
  })
})

//create
concertRouter.post('/concert', (req, res) => {
  concertApi.createConcert(req.body)
  .then((createdConcert) => {
    res.render(createdConcert)
  }) 
})

//delete
concertRouter.delete('/concert/:id', (req, res) => {
  concertApi.deleteConcert(req.params.id)
  .then((deletedConcert) => {
    res.render(deletedConcert)
  })
})


module.exports = {
  concertRouter
}
