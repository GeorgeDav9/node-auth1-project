//Imports
const bcrypt = require('bcrypt');
const router = require('express').Router();

//Import Routers
const authRouter = require('../auth/authRouter.js');
const usersRouter = require('../users/usersRouter.js');

//Import Middleware
const restricted = require('../auth/restrictedMiddleware.js');

//Setting Routers
router.use('/auth', authRouter);
router.use('/users', usersRouter);

// Now begins CRUD


//Hashes auth header
router.get('/hash', (req, res) => {
    const authentication = req.headers.authentication;
// Get auth header
    const hash = bcrypt.hashSync(authentication, 8) // num defines how many times the value is hashed 
// Hash auth header value
    res.json({ originalValue: authentication, hash });
});

// Live api
router.get('/', (req, res) => {
    res.json({ api: "We live baby" });
});

module.exports = router