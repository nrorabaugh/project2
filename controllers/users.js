const express = require('express')

const userApi = require('../models/users.js')

const userRouter = express.Router()

userRouter.get('/users/login', (req,res) => {
  res.render('login')
})

userRouter.get('/users/add', (req, res) => {
  res.render('addUser')
})

userRouter.get('/users/:id', (req,res) => {
    userApi.getUser(req.params.id)
  .then((user) => {
    res.render('updateUser', {user})
  })
})
 
userRouter.get('/users', (req, res) => {
    userApi.getAllUsers()
    .then((users) => {
      res.render('users', {users})
    })
})

userRouter.post('/users', (req, res) => {
    userApi.addUser(req.body)
    .then(() => {
      res.redirect('/users')
    })
})

userRouter.get('/users/:id', (req, res) => {
    userApi.getUser(req.params.id)
  .then((user) => {
    res.render('user', {user})
  })
})

userRouter.put('/users/:id', (req, res) => {
    userApi.updateUser(req.params.id, req.body)
  .then(() => {
    res.redirect(`/clothing/users/${req.params.id}`)
  })
})

userRouter.delete('/users/:id', (req, res) => {
    userApi.deleteUser(req.params.id)
  .then( () => {
    res.redirect('/users')
  })
})

module.exports = {
    userRouter
}
