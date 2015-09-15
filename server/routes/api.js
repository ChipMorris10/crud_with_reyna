var express = require('express');
var router = express.Router();
var Llama = require('../models/llamas.js');

// Get all llamas
router.get('/', function(req, res, next) {
    res.send("hello");
});


// Get one llama
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });

});


// Post llamas
router.post('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// Upadte one llama
router.put('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// Delete one llama
router.delete('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


module.exports = router;