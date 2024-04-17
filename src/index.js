const express = require('express')
const app = express()
const port = [3000, 3009, 3007]
// import all calculator routes (up the top)
const calculatorRoutes =
require('/src/calculatorRoutes');


app.use('/', express.static('public'))


port.forEach((item) => {

app.get('/', (req, res) => {
res.send('Hello World!')
})

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);

app.listen(item, () => {
console.log(`Example app listening
at http://localhost:${item}`)
})
})





// node .\index.js
// npm run start     --created of the above 

