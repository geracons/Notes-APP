 const passport = require('passport');

 const pass = passport.authenticate('local', { 
    successRedirect: '/notes',
    failureRedirect: '/users/login' }) 

module.exports = pass;