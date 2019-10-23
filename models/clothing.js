const mongoose = require('./connection.js')
const users = require('./users.js')
const ClothingSchema = new mongoose.Schema({
 name: String,
 brand: String,
 price: Number,
 type: String,
 img: String,
 userId: mongoose.ObjectId
})

const ClothingCollection = mongoose.model('Clothing', ClothingSchema)

const getAllClothes = () => {
return ClothingCollection.find({})
}

const getItem = (id) => {
  return ClothingCollection.findOne({"_id": id})
}

const getItemsByBrand = (name) => {
  return ClothingCollection.find({"brand": name})
}

const getItemsByUserId = (id) => {
  return ClothingCollection.find({"userId": id})
}

const addItem = (itemData) => {
  return ClothingCollection.create(itemData)
}

const updateItem = (id, itemData) => {
  return ClothingCollection.update({"_id": id}, itemData)
}

const deleteItem = (id) => {
  return ClothingCollection.deleteOne({"_id": id})
}

module.exports = {
  getAllClothes,
  getItem,
  getItemsByBrand,
  getItemsByUserId,
  addItem,
  updateItem,
  deleteItem
}
