const express = require('express')

const clothingApi = require('../models/clothing.js')

const clothingRouter = express.Router()

clothingRouter.get('/clothing/add', (req, res) => {
  res.render('addItem')
})

clothingRouter.get('/clothing/edit/:id', (req,res) => {
  clothingApi.getItem(req.params.id)
  .then((item) => {
    res.render('updateItem', {item})
  })
})
 
clothingRouter.get('/clothing', (req, res) => {
  clothingApi.getAllClothes()
    .then((clothes) => {
      res.render('allClothes', {clothes})
    })
})

clothingRouter.post('/clothing', (req, res) => {
  clothingApi.addItem(req.body)
    .then(() => {
      res.redirect('/clothing')
    })
})

clothingRouter.get('/clothing/:id', (req, res) => {
  clothingApi.getItem(req.params.id)
  .then((item) => {
    res.render('item', {item})
  })
})

clothingRouter.put('/clothing/edit/:id', (req, res) => {
  clothingApi.updateItem(req.params.id, req.body)
  .then(() => {
    res.redirect('/clothing/:id')
  })
})

clothingRouter.delete('/clothing/:id', (req, res) => {
  clothingApi.deleteItem(req.params.id)
  .then( () => {
    res.redirect('/clothing')
  })
})

module.exports = {
  clothingRouter
}
