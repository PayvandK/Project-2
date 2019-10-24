const express = require('express')

const userApi = require('../models/user.js')

const userRouter = express.Router()

//getAll
userRouter.get('/user', (req, res) => {
  userApi.getAllUsers()
  .then((users) => {
    res.render('user/users', {users})
  })
  .catch((err) => {
    console.log(err)
  })
})

//getOne
userRouter.get('/user/:id', (req, res) => {
  userApi.getUser(req.params.id)
  .then((singleUser) => {
    res.render(singleUser)
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