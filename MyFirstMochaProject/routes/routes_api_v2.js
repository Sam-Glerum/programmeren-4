// API version 1
let express = require('express');
let router = express.Router();
let path = require('path');

router.get('/info', (req,res) => {
    res.status(200);
    res.json({
        "description": "You have reached the V2 Mocha testing server"
    });
});

router.get('*', (req, res) => {
    res.status(404);
    res.json({
        "msg": "Requested resource not found"
    })
});

module.exports = router;