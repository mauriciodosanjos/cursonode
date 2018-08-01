require('dotenv').config()

const app = require('./custom_express')

const porta = process.env.PORT
console.log('Ambiente:', process.env.NODE_ENV)

app.listen(porta, function(){
    console.log(`Server..: OK`)
})