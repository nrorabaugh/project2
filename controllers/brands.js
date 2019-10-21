const express = require('express')

const brandApi = require('../models/brands.js')

const brandRouter = express.Router()

brandRouter.get('/clothing/brands/add', (req, res) => {
  res.render('addBrand')
})

brandRouter.get('/clothing/brands/edit/:id', (req,res) => {
  brandApi.getItem(req.params.id)
  .then((brand) => {
    res.render('updateBrand', {brand})
  })
})
 
brandRouter.get('/clothing/brands', (req, res) => {
    brandApi.getAllBrands()
  .then(brands, () => {
    res.render("allBrands", {brands})
  })
})

brandRouter.post('/clothing/brands', (req, res) => {
    brandApi.addBrand(req.body)
  .then(() => {
    res.redirect("/clothing/brands")
  })
})

brandRouter.get('/clothing/brands/:id', (req, res) => {
    brandApi.getBrand(req.params.id)
  .then(brand, () => {
    res.render("brand", {brand})
  })
})

brandRouter.put('/clothing/brands/:id', (req, res) => {
    brandApi.updateBrand(req.params.id, req.body)
  .then(() => {
    res.redirect(`/clothing/brands/${req.params.id}`)
  })
})

brandRouter.delete('/clothing/brands/:id', (req, res) => {
    brandApi.deleteBrand(req.params.id)
  .then(() => {
    res.redirect("/clothing/brands")
  })
})

module.exports = {
    brandRouter
}
