const express = require('express');


module.exports = {
    home: (req, res) => {
        res.render('index.hbs');

    },
    about: (req, res) => {
        res.render('about.hbs');
    }
}



