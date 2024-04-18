const express = require('express')
const app = express()
const port = [3000, 3009, 3007]

const testRoutes =
require('./routes/myTestRoutes');
const calculatorRoutes =
require('./routes/calculatorRoutes');

app.use('/', express.static('public'))

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);

port.forEach((item) => {

app.get('/', (req, res) => {
res.send('Hello World!')
})
app.use('/mytest', testRoutes);

app.listen(item, () => {
console.log(`Example app listening
at http://localhost:${item}`)
})
})

// node .\index.js
// npm run start     --created of the above 

