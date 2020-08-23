const mongoose = require('mongoose');

module.exports = {
  deleteOne
}

mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`connected to MongoDB at ${db.host}:${db.port}`)
});

function deleteOne(id) {
  const idx = flight.findIndex(flight => flight.id === parseInt(id))
  flights.splice(idx, 1)
}