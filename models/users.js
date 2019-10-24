const mongoose = require('./connection.js')
const UserSchema = new mongoose.Schema({
 name: String,
 password: String,
 numberOfItems: Number
})

const UserCollection = mongoose.model('Users', UserSchema)

const getAllUsers = () => {
return UserCollection.find({})
}

const getUser = (id) => {
  return UserCollection.findOne({"_id": id})
}

const addUser = (itemData) => {
  return UserCollection.create(itemData)
}

const updateUser = (id, itemData) => {
  return UserCollection.update({"_id": id}, itemData)
}

const deleteUser = (id) => {
  return UserCollection.deleteOne({"_id": id})
}

let currentUser = document.getElementsByClassName('currentUser')[0]

const setUser = (userName) => {
  if(currentUser == undefined) {
    return
  } else {
    currentUser.innerHTML = userName
  }
}

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  setUser
}
