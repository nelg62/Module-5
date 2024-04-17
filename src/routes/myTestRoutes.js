const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    console.log("my test route");
    next();
})
router.get('/test', (req, res) => {
res.send('Hello World!')
})
router.get('/test2', (req, res) => {
res.send('Second test')
})

module.exports = router;