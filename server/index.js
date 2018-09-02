let express = require('express')
let bp = require('body-parser')
let server = express()
let cors = require('cors')
let port = 3000

let whitelist = ['http://localhost:8080'];
let corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))

//Fire up database connection
require('./assets/db/db-config')


//REGISTER MIDDLEWEAR
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))


//YOUR ROUTES HERE!!!!!!
let songs = require('./assets/routes/songs')
server.use(songs.router)


//Catch all

server.get('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})


server.listen(port, () => {
  console.log('server running on port', port)
})