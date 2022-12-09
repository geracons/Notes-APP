const express = require('express');
const User = require('../models/User');
const passport = require('passport');

module.exports = {
    showLogin:
       async (req, res)=> {
          res.render('users/login');
        
    },
    login: 
      async (req, res) => {
        const pass = passport.authenticate('local', { 
            successRedirect: '/notes',
            failureRedirect: '/users/login' }) 
      },
    
    showRegister: 
        async (req, res) => {
          res.render('users/register');
    },
    register:
        async (req, res) => {
           const { name, email, password, repassword } = req.body;
           const errors = [];
           const emailUser = await User.findOne({email: email});
            if(emailUser) {
                errors.push({text: 'Email ya registrado'});
            }
           if(name <= 0 ) {
                errors.push({text: 'Por favor ingresa un nombre'});
           }
           if(password != repassword){
                errors.push({text: 'Las contraseñas no coinciden'});
           }
           if (password.lenght < 8 ) {
                errors.push({text: 'La contraseña debe ser mayor a 8 dígitos'});
           }
           if(errors.length > 0) {
            res.render('users/register', {errors, name, email, password, repassword});
           } else {
            
            const newUser = new User({name, email, password});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'Estás registrado');
            res.redirect('/users/login');

           }


        },
        logout: async (req, res) => {
          req.logout();
          res.redirect('/');

        }
};