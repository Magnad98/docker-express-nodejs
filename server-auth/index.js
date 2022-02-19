let express = require('express');
let app = express();

let bodyparser = require('body-parser');
app.use(bodyparser.json());

let mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/cinema');
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB @ 27017');
});
  
const user = require('./route/user-router');
app.use('/api/user', user);
  
const port = 5001;
app.listen(port, () => {
    console.log("Server running at port: " + port);
});