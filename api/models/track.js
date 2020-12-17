const mongoose = require('mongoose');

const trackSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album' },
    title: String,
    audio: String,
    lyrics: String,

    /*
    album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album' },
    title: { type: String, required: true },
    audio: { type: String, required: true },
    lyrics: { type: String, required: true },
    */
});

module.exports = mongoose.model('Track', trackSchema);