// Imports 
const bcrypt = require('bcrypt');

// Import helper functions
const Users = require('../users/usersModel');

module.exports = (req, res, next) => {
    let { username, password } = req.headers;
    
// Checks if username/password exists
if (username && password) {
    Users.findBy({ username })
    .first()
    .then(user => {
        // compares stored hashed password to entereed password
        if (user && bcrypt.compareSync(password, user.password)) {
            next();
        } else {
            res.status(401).json({ message: 'Username or Password is incorrect'});
        }
    })
    .catch(({ name, message, stack }) => {
       res.status(500).json({ name, message, stack });
    });
} else {
    res.status(400).json({ error: 'provide credentials' })
  }
};