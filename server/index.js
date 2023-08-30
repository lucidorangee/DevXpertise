const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser'); 
const Post = require('../server/models/Post');
const User = require('../server/models/User');


// Load environment variables from .env file
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const session = require('express-session');
const connectToDB = require('../server/db');

// Create an Express app
const app = express();

// Set up Ports
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

// Middleware setup (body-parser and others if needed)
app.use(express.json());

// Passportjs
app.use(
    session({
        secret: process.env.GOOGLE_API_KEY,
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('../server/passport-config');

connectToDB();

// Testing Purpose - No longer used.
const sampleData = [
    { id: 1, title: 'Sample Item 1' , author: 'A1', date: 'W', tags: []},
    { id: 2, title: 'Sample Item 2' , author: 'A2', date: 'A', tags: []},
    { id: 3, title: 'Sample Item 3' , author: 'A3', date: 'C', tags: ["333"]},
  ];

// Actual Data
app.get('/api/posts', (req, res) => {
    Post.find()
        .then((posts) => {
            res.json(posts);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving posts' });
        });
});

//Delete
app.delete('/api/posts', async (req, res) => {
    try {
        // Delete all posts
        await Post.deleteMany({});
        res.json({ message: 'All posts deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting posts' });
    }
});

app.post('/api/createpost', bodyParser.json(), async (req, res) => {
    try{
        // Create a new post instance based on the request body
        const newPost = new Post({
            title: req.body.title,
            author: req.body.author,
            date: req.body.date,
            tags: req.body.tags,
            thread: req.body.thread,
        });

        const savedPost = await newPost.save();
        console.log("ID IS ", savedPost._id);

        res.json({
            message: 'Post created successfully' ,
            postId: savedPost._id,
        });
    } catch (error) {
        console.error(err);
        res.status(500).json({ error: 'Error creating a new post' });
    }
});

app.get('/api/post/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
        const post = await Post.findOne({ _id: postId }); 

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Passport-google-oauth20
app.get(
    '/auth/google',
    passport.authenticate('google', {scope: ['profile']})
);

app.get(
    '/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/'}),
    async (req, res) => {
        const { googleId, displayName } = req.user;

        try {
            const existingUser = await User.findOne({ googleId });

            if(existingUser) {
                existingUser.displayName = displayName;
                await existingUser.save();
            } else {
                const newUser = new User({
                    googleId,
                    displayName,
                });
                await newUser.save();
            }
            res.redirect('http://localhost:3000/');
        } catch(error){
            console.error(error);
            res.redirect('http://localhost:3000/');
        }
    }
);


//Check if the user is authenticated
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ error: 'Unauthorized, failed ensureAuthenticated' });
};

app.get('/api/getUser', (req, res) => {
    console.log("req user is ", req.user);
    if(req.isAuthenticated()){
        const user = req.user;
        res.json(user);
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});