let express = require('express');
let app = express();
let config = require('./config');
let port = config.webPort;


app.get("/", (req, res) => {
    res.send("Hello user!");
});

app.get("/about", (req, res) => {
    res.json({
        "message": "Written by Sam",
        "author": "Sam Glerum",
        "school": "Avans Breda"
    });
});

app.listen(port, () => {
    console.log("Server app is listening on port " + port);
});