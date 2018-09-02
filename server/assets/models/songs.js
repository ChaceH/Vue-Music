let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schemaName = 'Songs'


let schema = new Schema({
    artistName: {type: String, required: true},
    artworkUrl100: {type: String, required: true},
    collectionName: {type: String, required: true},
    previewUrl: {type: String, required: true},
    trackId: {type: Number , required: true},
    trackName: {type: String, required: true}
})


module.exports = mongoose.model(schemaName, schema)