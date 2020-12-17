const mongoose = require('mongoose');

const albumSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    artist: String,
    year: Number,
    songsFormat: String,
    totalSongs: Number
});

module.exports = mongoose.model('Album', albumSchema);