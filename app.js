const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const albumRoutes = require('./api/routes/albums');
const trackRoutes = require('./api/routes/tracks');

//connect mydatabase
mongoose.connect(
    'mongodb+srv://admin:' +
    process.env.MONGO_ATLAS_PW +
    '@neopolis-backend-techni.vug1v.mongodb.net/mediaDB?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header(
        'Acess-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});
//Routes which will handle requests
app.use('/albums', albumRoutes);
app.use('/tracks', trackRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;