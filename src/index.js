const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('public'))

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})


// node .\index.js
// npm run start     --created of the above 

// exercise1 foreach loop  add more port in an array and add app get and app listen to the for loop