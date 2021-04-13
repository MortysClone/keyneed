const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log("Main")
        //res.render('index.html')
})

router.get('/', (req, res) => {
    console.log("QR CODE");
})

module.exports = router