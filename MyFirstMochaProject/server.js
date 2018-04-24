let express = require('express');
let server = express();
let config = require('./config');
let port = config.webPort;

server.all('*', (req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
});

server.use('/api/v1', require('./routes/routes_api_v1'));

server.get("/", (req, res) => {
    res.send("Hello user!");
});

server.get("/about", (req, res) => {
    res.json({
        "message": "Written by Sam",
        "author": "Sam Glerum",
        "school": "Avans Breda"
    });
});

server.listen(port, () => {
    console.log("Server app is listening on port " + port);
});