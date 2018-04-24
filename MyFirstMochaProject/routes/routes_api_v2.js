// API version 1
let express = require('express');
let router = express.Router();
let path = require('path');
let recipes = require('.././recipes');

router.get('/info', (req,res) => {
    res.status(200);
    res.json({
        "description": "You have reached the V2 Mocha testing server"
    });
});

router.get('/recipes', (req,res) => {
   res.status(200);
   res.json(recipes);
});

router.get('*', (req, res) => {
    res.status(404);
    res.json({
        "msg": "Requested resource not found"
    })
});

module.exports = router;