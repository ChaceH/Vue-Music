let router = require('express').Router()
let Songs = require('../models/songs')

//GET ALL
router.get('/api/songs', (req, res, next) => {
    Songs.find({})
        .then(songs => {
            res.status(200).send(songs)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

//ADD
router.post('/api/songs', (req, res, next) => {
    var song = req.body
    Songs.create(song)
        .then(newSong => {
            res.status(204).send(newSong)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

//DESTROY
router.delete('/api/songs/:id', (req, res, next) => {
    Songs.findByIdAndRemove(req.params.id)
        .then(data => {
            res.send("Successfully Deleted Song")
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

module.exports = {
    router
}