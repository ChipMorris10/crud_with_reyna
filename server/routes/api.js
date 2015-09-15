var express = require('express');
var router = express.Router();
var LLama = require('../models/llamas.js');

// Get all llamas
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    res.send("hello");
});


// Post all llamas
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// Get one llama
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// Edit one llama
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// Delete one llama
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


module.exports = router;