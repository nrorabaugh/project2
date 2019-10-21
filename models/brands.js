const mongoose = require('mongoose')
const BrandModelSchema = new mongoose.Schema({
 name: String,
 country: String,
 numberOfItems: Number,
 description: String,
 style: String,
 logoImg: String
})

const BrandCollection = mongoose.model('Brands', BrandModelSchema)

const getAllBrands = () => {
    return BrandCollection.find({})
}

const getBrand = (id) => {
    return BrandCollection.findOne({"brandId": id})
}

const addBrand = (itemData) => {
    return BrandCollection.create(itemData)
}

const updateBrand = (id, itemData) => {
    return BrandCollection.update({"_id": id}, itemData)
}

const deleteBrand = (id) => {
    return BrandCollection.deleteOne({"_id": id})
}

module.exports = {
  BrandCollection,
  getAllBrands,
  getBrand,
  addBrand,
  updateBrand,
  deleteBrand
}
