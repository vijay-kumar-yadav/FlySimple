const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://prithidevghosh:39039820@cluster0.3amaqwo.mongodb.net/FlySimple"


mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })

const DB = mongoose.connection;

DB.on('error', () => {
    console.log("error in starting db");
})

DB.on('connected', () => {
    console.log("connected to db");
})

module.exports = DB