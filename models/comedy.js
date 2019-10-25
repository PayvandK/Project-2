const mongoose = require('./connection.js');

const comedySchema = new mongoose.Schema ({
  comedian: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  experience: String
})

const comedyCollection = mongoose.model('comedy', comedySchema)

const getAllShows = () => {
  return comedyCollection.find({})
};

const getAllShowsByUserId = (userId) => {
  return comedyCollection.find({userId: userId})
};

const getOneShow = (id) => {
  return comedyCollection.findById(id)
}

const createShow = (showData) => {
  return comedyCollection.create(showData)
};

const updateShow = (id, showData) => {
  return comedyCollection.updateOne({_id: id}, showData)
};

const deleteShow = (id) => {
  return comedyCollection.deleteOne({_id: id})
}

module.exports = {
  getAllShows,
  getAllShowsByUserId,
  getOneShow, 
  createShow,
  updateShow,
  deleteShow
}