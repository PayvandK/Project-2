const express = require('express')
const app = express()
const methodOverride = require('method-override')
const bodyParser = require('body-parser');

const { concertRouter } = require('./controllers/concert.js')

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(methodOverride('_method'))

app.use(express.static(__dirname+"/public"))

app.set('view engine', 'hbs')

app.use('/', concertRouter)

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
