require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const scaleRoutes = require('./api/routes/scaleRoutes');
const chordRoutes = require('./api/routes/chordRoutes');

app.use(morgan('dev'));
app.use(`/api/${process.env.version}/scales`, scaleRoutes);
app.use(`/api/${process.env.version}/chords`, chordRoutes);
app.use((req, res, next) => {
    const error = new Error('Please enter a valid HTTP request.');
    error.status = 404;
    next(error);
});

module.exports = app;