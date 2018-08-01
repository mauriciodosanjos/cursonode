const app = require('./custom_express')
const porta = 3000

app.listen(porta, function(){
    console.log(`server ok`)
})