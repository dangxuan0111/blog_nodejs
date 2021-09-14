const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

// logger
app.use(morgan('combined'))

// handlebars
app.engine('hbs', handlebars({
    extname: '.hbs'//doi phan mo rong
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'));
// console.log(paht.join(__dirname))

// route
app.get('/', (req, res) =>  {
    res.render('home')
})

app.get('/news', (req, res) =>  {
    res.render('news')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});