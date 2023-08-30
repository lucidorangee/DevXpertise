const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/User');

passport.use( new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
    },
    async function (req, accessToken, refreshToken, profile, cb){
        const userData = {
            googleId: profile.id,
            displayName: profile.displayName,
        };

        try {
            const user = await User.findOrCreate({ googleId: profile.id }, userData);
            return cb(null, user);
        } catch (error) {
            return cb(error);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});