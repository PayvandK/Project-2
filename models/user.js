
const mongoose = require('./connection.js')

const userSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
})

const userCollection = mongoose.model('user', userSchema)

const getAllUsers = () => {
  return userCollection.find({})
};

const getOneUser = (id) => {
  return userCollection.findById(id)
};

const createUser = (UserData) => {
  return userCollection.create(UserData)
};

const updateUser = (id, UserData) => {
  return userCollection.updateOne({_id: id}, UserData)
};

const deleteUser = (id) => {
  return userCollection.deleteOne({_id: id})
}

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
}