var express = require('express');
var app = express();


app.get
('/', function(request, response) {
    response.send('Hello Avans!');
})
app.get('/about', function(request, response) {
    response.send('Written by Sam');
})
app.post('/', function(request, response) {
    response.send('Hello Avans, POST request received!');
})
app.put('/', function(request, response) {
    response.send('Hello Avans, PUT request received!');
})

app.all('*', (req, res, next) => {
    res.send("Error");
    res.status(404);
    next();
});

app.listen(3000, function() {
    console.log('Server app is listening on port 3000');
})