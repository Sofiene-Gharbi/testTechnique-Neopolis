const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Album = require('../models/album');
const Track = require('../models/track');

router.get('/', (req, res, next) => {
    Album.find()
        .select('_id title totalSongs')
        .exec()
        .then(result => {
            const response = {
                count: result.length,
                albums: result.map(result => {
                    return {
                        _id: result._id,
                        title: result.title,
                        totalSongs: result.totalSongs,
                        request: {
                            type: "GET",
                            url: process.env.SERVER_ADRESS + "albums/" + result._id
                        }
                    }
                })
            };
            //if (result.length >= 0) {
            res.status(200).json(response);
            //} else {
            //    res.status(404).json({ message: 'No albums' });
            //}
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.post('/', (req, res, next) => {
    const album = new Album({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        artist: req.body.artist,
        year: req.body.year,
        songsFormat: req.body.songsFormat,
        totalSongs: req.body.totalSongs
    });
    album
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Album created sucessfully",
                createdAlbum: {
                    _id: result._id,
                    title: result.title,
                    artist: result.artist,
                    year: result.year,
                    songsFormat: result.songsFormat,
                    totalSongs: result.totalSongs,
                    request: {
                        type: "GET",
                        url: process.env.SERVER_ADRESS + "albums/" + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.get('/:albumId', (req, res, next) => {
    Track.find({ album: req.params.albumId })
        .select('_id album title audio lyrics')
        .populate('album')
        .exec()
        .then(result => {
            const response = {
                count: result.length,
                tracks: result.map(result => {
                    return {
                        _id: result._id,
                        album: result.album,
                        title: result.title,
                        audio: result.audio,
                        lyrics: result.lyrics,
                        request: {
                            type: "GET",
                            url: process.env.SERVER_ADRESS + "tracks/" + result._id
                        }
                    }
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});




module.exports = router;