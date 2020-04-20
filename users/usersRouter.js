// Imports 
const router = require('express').Router();

// Import helper functions
const Users = require('./usersModel');

// Here comes CRUD

// GET users list
router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;