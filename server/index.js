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

// Set up Ports
const cors = require('cors');
app.use(cors());

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

// Testing Purpose
const sampleData = [
    { id: 1, title: 'Sample Item 1' , author: 'A1', date: 'W', tags: []},
    { id: 2, title: 'Sample Item 2' , author: 'A2', date: 'A', tags: []},
    { id: 3, title: 'Sample Item 3' , author: 'A3', date: 'C', tags: ["333"]},
  ];

app.get('/api/posts', (req, res) => {
    res.json(sampleData);
});

app.get('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = sampleData.find(post => post.id === postId);

    if(!post){
        return res.status(404).json({error: 'Post not found '});
    }

    res.json(post);
});

// Passport-google-oauth20
app.get(
    '/auth/google',
    passport.authenticate('google', {scope: ['profile']})
);

app.get(
    '/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/'}),
    (req, res) => {
        res.redirect(`http://localhost:3000/?message=loggedin&displayName=${req.user.displayName}`); //
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