const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')

app.use(express.urlencoded()) 

let trips = [{title: 'France Trip', dateOfDeparture: 'October 26, 2022', dateOfReturn: 'October 31, 2022'}]

app.engine('mustache', mustacheExpress())

app.set('views', './views')

app.set('view engine', 'mustache')


app.get('/trip', (req, res) => {
    res.render('trip', {allTrips: trips}) // render a page/view called index.mustache 
})

app.post('/trip/add-trip', (req, res) => {
    let trip = {title: req.body.tripName, dateOfDeparture: req.body.tripDeparture, dateOfReturn: req.body.tripReturn}
    trips.push(trip)
    res.render('trip', {allTrips: trips})
})


app.listen(3000, () => {
    console.log('Server is running...')
})