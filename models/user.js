
const mongoose = require('./connection.js');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
})

const userCollection = mongoose.model('user', userSchema)

const getAllUsers = () => {
  return userCollection.find({})
};

const getUser = (userId) => {
  return userCollection.findById(userId)
};

const addNewUser = (newUser) => {
  return userCollection.create(newUser)
};

const updateUser = (userId, newUser) => {
  return userCollection.updateOne({_id: userId}, newUser)
};

const deleteUser = (userId) => {
  return userCollection.deleteOne({_id: userId})
}

module.exports = {
  userCollection,
  getAllUsers,
  getUser,
  addNewUser,
  updateUser,
  deleteUser
}