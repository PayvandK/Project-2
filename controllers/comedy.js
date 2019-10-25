const express = require('express')

const coomedyApi = require('../models/comedy.js')
const userApi = require('../models/user.js')

const comedyRouter = express.Router()

comedyRouter.get('/comedy/new', (req, res) => {
  res.render('comedy/createShowForm')
})

comedyRouter.get('/comedy/new/:userId', (req, res) => {
  res.render('comedy/createConcertForm', {userId: req.params.userId})
})

comedyRouter.get('/comedy/edit/:id', (req, res) => {
  comedyApi.getOneShow(req.params.id)
    .then((singleShow) => {
      res.render('comedy/editShowForm', {singleShow})
    })
})

//getAll
comedyRouter.get('/comedy', (req, res) => {
  comedyApi.getAllShows()
  .then((allShows) => {
    res.render('comedy/allShows', {allShows})
  })
})

//getOne
comedyRouter.get('/comedy/:id', (req, res) => {
  comedyApi.getOneShow(req.params.id)
  .then((singleShow) => {
    res.render('comedy/singleShow', {singleShow})
  })
})

//update
comedyRouter.put('/comedy/:id', (req, res) => {
  comedyApi.updateShow(req.params.id, req.body)
  .then((updatedShow) => {
    res.redirect(`/comedy/${req.params.id}`)
  })
})

//create
comedyRouter.post('/comedy', (req, res) => {
  comedyApi.createShow(req.body)
  .then((createdShow) => {
    res.redirect("/comedy")
  }) 
})

//delete
comedyRouter.delete('/comedy/:id', (req, res) => {
  comedyApi.deleteShow(req.params.id)
  .then((deletedShow) => {
    res.redirect("/comedy")
  })
})


module.exports = {
  comedyRouter
}