const express = require('express')
const cors = require('cors')

const Controller = require('./route/controller')

const app = express()
app.use(require('body-parser').json())
app.use(cors())
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use(express.static(__dirname + '/public'))

app.use('/', Controller)


function init() {
    app.listen(3000, function() {
        console.log("Server will be start!");
    })
}

init();