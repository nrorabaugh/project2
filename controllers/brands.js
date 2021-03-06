const express = require('express')

const brandApi = require('../models/brands.js')
const clothingApi = require('../models/clothing.js')
const brandRouter = express.Router()

brandRouter.get('/brands/add', (req, res) => {
  res.render('addBrand')
})

brandRouter.get('/brands/edit/:id', (req,res) => {
  brandApi.getBrand(req.params.id)
  .then((brand) => {
    res.render('updateBrand', {brand})
  })
})
 
brandRouter.get('/brands', (req, res) => {
    brandApi.getAllBrands()
  .then((brands) => {
    res.render('allBrands', {brands})
  })
})

brandRouter.post('/brands', (req, res) => {
    brandApi.addBrand(req.body)
  .then(() => {
    res.redirect('/brands')
  })
})

brandRouter.get('/brands/:id', (req, res) => {
    brandApi.getBrand(req.params.id)
  .then((brand) => {
    clothingApi.getItemsByBrand(brand.name)
    .then((clothes) => {
      res.render('brand', {brand, clothes})
    })
  })
})

brandRouter.put('/brands/:id', (req, res) => {
    brandApi.updateBrand(req.params.id, req.body)
  .then(() => {
    res.redirect(`/brands/${req.params.id}`)
  })
})

brandRouter.delete('/brands/:id', (req, res) => {
    brandApi.deleteBrand(req.params.id)
  .then(() => {
    res.redirect('/brands')
  })
})

module.exports = {
    brandRouter
}
