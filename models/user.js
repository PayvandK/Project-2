
const mongoose = require('./connection.js');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema ({
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
  experience: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  }
})

const concertCollection = mongoose.model('concert', concertSchema)

const getAllConcerts = () => {
  return concertCollection.find({})
};

const getConcert = (concertId) => {
  return concertCollection.findById(concertId)
};

const addNewConcert = (newConcert) => {
  return concertCollection.create(newConcert)
};

const updateConcert = (concertId, newConcert) => {
  return concertCollection.updateOne({_id: concertId}, newConcert)
};

const deleteConcert = (concertId) => {
  return concertCollection.deleteOne({_id: concertId})
}

module.exports = {
  concertCollection,
  getAllConcerts,
  getConcert,
  addNewConcert,
  updateConcert,
  deleteConcert
}