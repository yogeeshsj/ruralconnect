const mongoose = require('mongoose')
// mongoose.connect('mongodb://ikismail:qwerty12@ds127362.mlab.com:27362/vue-shop', {
mongoose.connect('mongodb://<yogeeshsj>:<abcABC123!@#>@ds115420.mlab.com:15420/crud', {
    useNewUrlParser: true
}); // connect to our database

// db.on('error', console.error.bind(console, 'connection error:'));
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

module.exports = mongoose

// mongo ds115420.mlab.com:15420/crud -u yogeeshsj -p abcABC123!@#