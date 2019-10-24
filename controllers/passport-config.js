const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
let usersApi = require('../models/users.js')

const initialize = function(passport) {
    const authenticateUser = async (name, password, done) => {
        const user = usersApi.find({"name": name})
        if(user == null) {
            return done(null, false, { message: 'No account with this username.' })
        }
        try {
            if(await bcrypt.compare(password, user.password)){
            return done(null, user)
            } else {
            return done(null, false, { message: 'Password incorrect.' })
            }
        }
        catch (e) {
            return done(e)
        }
    }
passport.use(new LocalStrategy({usernameField: "name"}, authenticateUser))
}

module.exports = initialize