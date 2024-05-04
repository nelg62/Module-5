const express = require('express')
const app = express()
const port = 3000

// map all routes to the express app
const calculatorRoutes =
require('./routes/calculatorRoutes');

const fakeEcomWebsite = require('./routes/RoutesFakeEcomWebsite')

app.use('/calculator', calculatorRoutes);

app.use('/FakeEcom', fakeEcomWebsite)


// export the app
module.exports = app;

