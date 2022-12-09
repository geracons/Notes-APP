const express = require('express');


module.exports = {
    login:
       async (req, res)=> {
          res.render('users/login');
        
    },
    register: 
        async (req, res) => {
          res.render('users/register');
        
        
    },
}