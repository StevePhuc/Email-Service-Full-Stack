const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
        },
        (accessToken, refreshToken, profile, done) => {
            // console.log('accessToken', accessToken);
            // console.log('refresh token', refreshToken);
            // console.log('profile', profile);
            new User({ googleId: profile.id }).save().then(() => console.log('meow'));
        }
    )
);