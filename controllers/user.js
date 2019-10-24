const express = require('express')

const userApi = require('../models/user.js')
const concertApi = require('../models/concert.js')

const userRouter = express.Router()

userRouter.get('/user/new', (req, res) => {
    res.render('user/createUserForm')
})

userRouter.get('/user/edit/:id', (req, res) => {
    userApi.getOneUser(req.params.id)
    .then((singleUser) => {
        res.render('user/editUserForm', {singleUser})
    })    
})

//getAll
userRouter.get('/user', (req, res) => {
  userApi.getAllUsers()
  .then((allUsers) => {
    res.render('user/allUsers', {allUsers})
  })
})

//getOne
userRouter.get('/user/edit/:id', (req, res) => {
    userApi.getOneUser(req.params.id)
    .then((singleUser) => {
        concertApi.getAllConcertsByUserId(req.params.id)
        .then((userConcerts) => {
            res.render('user/singleUser', {singleUser, userConcerts})
        })
    })
})

//update
userRouter.put('/user/:id', (req, res) => {
  userApi.updateUser(req.params.id, req.body)
  .then((updatedUser) => {
    res.render(updatedUser)
  })
})

//create
userRouter.post('/user', (req, res) => {
  userApi.createUser(req.body)
  .then((createdUser) => {
    res.render(createdUser)
  }) 
})

//delete
userRouter.delete('/user/:id', (req, res) => {
  userApi.deleteUser(req.params.id)
  .then((deletedUser) => {
    res.render(deletedUser)
  })
})


module.exports = {
  userRouter
}