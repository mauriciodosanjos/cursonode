const express = require('express')
const app = express()
app.use(
    express.static('./public')//middleware entre o request
)

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const expressValidator = require('express-validator')
app.use(expressValidator())

const cors = require('cors')
app.use(cors())


app.set('view engine', 'ejs')

//require('./routes/home')(app)
//require('./routes/produtos')(app)

// Autoload (rotas)
var consign = require('consign');
consign()
  .include('routes')
  .then('controllers')
  .into(app);
//  

app.use(function (req, res) {
    res.status(404).render('404')
})


module.exports = app