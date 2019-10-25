const express = require('express')

const concertApi = require('../models/concert.js')
const userApi = require('../models/user.js')

const concertRouter = express.Router()

concertRouter.get('/concert/new', (req, res) => {
  res.render('concert/createConcertForm')
})

concertRouter.get('/concert/new/:userId', (req, res) => {
  res.render('concert/createConcertForm', {userId: req.params.userId})
})

concertRouter.get('/concert/edit/:id', (req, res) => {
  concertApi.getOneConcert(req.params.id)
    .then((singleConcert) => {
      res.render('concert/editConcertForm', {singleConcert})
    })
})

//getAll
concertRouter.get('/concert', (req, res) => {
  concertApi.getAllConcerts()
  .then((allConcerts) => {
    res.render('concert/allConcerts', {allConcerts})
  })
})

//getOne
concertRouter.get('/concert/:id', (req, res) => {
  concertApi.getOneConcert(req.params.id)
  .then((singleConcert) => {
    res.render('concert/singleConcert', {singleConcert})
  })
})

//update
concertRouter.put('/concert/:id', (req, res) => {
  concertApi.updateConcert(req.params.id, req.body)
  .then((updatedConcert) => {
    res.redirect(`/concert/${req.params.id}`)
  })
})

//create
concertRouter.post('/concert', (req, res) => {
  concertApi.createConcert(req.body)
  .then((createdConcert) => {
    res.redirect("/concert")
  }) 
})

//delete
concertRouter.delete('/concert/:id', (req, res) => {
  concertApi.deleteConcert(req.params.id)
  .then((deletedConcert) => {
    res.redirect("/concert")
  })
})


module.exports = {
  concertRouter
}
