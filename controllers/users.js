const express = require('express')

const userApi = require('../models/users.js')

const userRouter = express.Router()

userRouter.get('/clothing/users/add', (req, res) => {
  res.render('addUser')
})

userRouter.get('/clothing/users/:id', (req,res) => {
    userApi.getItem(req.params.id)
  .then((user) => {
    res.render('updateUser', {user})
  })
})
 
userRouter.get('/clothing/users', (req, res) => {
    userApi.getAllUsers()
    .then((users) => {
      res.render('users', {users})
    })
})

userRouter.post('/clothing/users', (req, res) => {
    userApi.addUser(req.body)
    .then(() => {
      res.redirect('/users')
    })
})

userRouter.get('/clothing/users/:id', (req, res) => {
    userApi.getUser(req.params.id)
  .then((user) => {
    res.render('user', {user})
  })
})

userRouter.put('/clothing/users/edit/:id', (req, res) => {
    userApi.updateUser(req.params.id, req.body)
  .then(() => {
    res.redirect('/users/:id')
  })
})

userRouter.delete('/clothing/users/:id', (req, res) => {
    userApi.deleteUser(req.params.id)
  .then( () => {
    res.redirect('/users')
  })
})

module.exports = {
    userRouter
}
