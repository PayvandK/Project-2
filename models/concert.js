const mongoose = require('./connection.js');

const concertSchema = new mongoose.Schema ({
  event: {
    type: String,
    required: true
  },
  band: {
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
  experience: String,
  image: String
})

const concertCollection = mongoose.model('concert', concertSchema)

const getAllConcerts = () => {
  return concertCollection.find({})
};

const getAllConcertsByUserId = (userId) => {
  return concertCollection.find({userId: userId})
};

const getOneConcert = (id) => {
  return concertCollection.findById(id)
}

const createConcert = (concertData) => {
  return concertCollection.create(concertData)
};

const updateConcert = (id, concertData) => {
  return concertCollection.updateOne({_id: id}, concertData)
};

const deleteConcert = (id) => {
  return concertCollection.deleteOne({_id: id})
}

module.exports = {
  getAllConcerts,
  getAllConcertsByUserId,
  getOneConcert, 
  createConcert,
  updateConcert,
  deleteConcert
}