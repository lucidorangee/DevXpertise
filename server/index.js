const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// Load environment variables from .env file
const dotenv = require('dotenv');

// Load environment variables from .env file
const result = dotenv.config();
dotenv.config();

const session = require('express-session');
const connectToDB = require('../server/db');
require('../server/passport-config');


// Create an Express app
const app = express();

// Middleware setup (body-parser and others if needed)
app.use(express.json());

// Passportjs
app.use(
    session({
        secret: process.env.GOOGLE_API_KEY,
        resave: false,
        saveUninitialized: false,
    })
)

app.use(passport.initialize());
app.use(passport.session());
connectToDB();

// Passport-google-oauth20
app.get(
    '/auth/google',
    passport.authenticate('google', {scope: ['profile']})
);

app.get(
    'auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/'}),
    (req, res) => {
        res.redirect('/dashboard');
    }
)

//Check if the user is authenticated
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
}


// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});