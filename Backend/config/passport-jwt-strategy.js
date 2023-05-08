const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const USER = require('../model/userSchema');

let opts = {
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}

passport.use(new jwtStrategy(opts, async (jwt_payload, done) => {
    try {
        const userFetchedDb = await USER.findById(jwt_payload._id);
        if (userFetchedDb) {
            return done(null, userFetchedDb);
        }
        else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
}))

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    try {
        const userFetchedDb = await USER.findById(id);
        if (userFetchedDb) {
            done(null, userFetchedDb);
        } else {
            done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
})