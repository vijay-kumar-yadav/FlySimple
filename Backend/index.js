const express = require('express');
const db = require('./config/dbConfig')
const session = require('express-session');
const mongoStore = require('connect-mongo');
const passport = require('passport');
const jwtStrategy = require('./config/passport-jwt-strategy');
const PORT = process.env.PORT || 8000;
const cors = require('cors');
const app = express();

require('dotenv').config();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(session({
    name: 'user_flysimple',
    secret: process.env.SESSION_SECRET_KEY,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 1000 * 60 * 100 },
    store: mongoStore.create({
        mongoUrl: process.env.DATABASE_URI,
        autoRemove: 'disabled'
    })
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./routes/index'));

app.listen(PORT, (e) => {
    if (e) { console.log("error in starting DB"); return; }

    console.log(`Server started at port ${PORT}`);

})