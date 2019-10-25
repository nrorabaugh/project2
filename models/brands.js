const mongoose = require('./connection.js')
const BrandSchema = new mongoose.Schema({
 name: String,
 country: String,
 numberOfItems: Number,
 logoImg: String
})

clothingApi = require('./clothing.js')

const BrandCollection = mongoose.model('Brands', BrandSchema)

const getAllBrands = () => {
    return BrandCollection.find({})
}

const getBrand = (id) => {
    let brand = BrandCollection.findOne({"_id": id})
    brand.numberOfItems = clothingApi.getItemsByBrand(brand.name)
    console.log(brand.numberOfItems)
    return brand
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
