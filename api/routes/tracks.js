const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype === 'audio/mpeg') {
            cb(null, './uploads/audioFiles');
        }
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    cb(null, false);
    cb(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});


Track = require('../models/track')

router.get('/', (req, res, next) => {
    Track.find()
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

router.post('/', upload.single('trackAudio'), (req, res, next) => {
    console.log(req.file);
    const track = new Track({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        audio: req.file.path,
        lyrics: req.body.lyrics,
        album: req.body.album
    });
    track
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Track created sucessfully",
                createdTrack: {
                    _id: result._id,
                    album: result.album,
                    title: result.title,
                    audio: result.audio,
                    lyrics: result.lyrics,
                    request: {
                        type: "GET",
                        url: process.env.SERVER_ADRESS + "track/" + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});


router.get('/:trackId', (req, res, next) => {
    const id = req.params.trackId;
    Track.findById(id)
        .select('_id album title audio lyrics')
        .exec()
        .then(result => {
            console.log("From DB", result);
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'No valid entry found for provided ID' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

//ws to search 
router.get('/lyrics/:keyword', (req, res, next) => {
    Track.find({ lyrics: { $regex: '.*' + req.params.keyword + '.*' } })
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



/*
    const id = req.params.albumId;
    Album.findById(id)
        .select('_id title totalSongs')
        .exec()
        .then(result => {
            console.log("From DB", result);
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'No valid entry found for provided ID' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });

*/

module.exports = router;