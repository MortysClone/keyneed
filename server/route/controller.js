const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log("HELLO WORLD")
        //res.render('index.html')
})

module.exports = router