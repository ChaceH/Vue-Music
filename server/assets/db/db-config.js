let mongoose = require('mongoose')
let connectionString = 'mongodb://C:password1@ds062898.mlab.com:62898/vue-music'
let connection = mongoose.connection


mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})