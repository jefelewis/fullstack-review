// Requirements
const express = require('express');
let app = express();

// Requirements: Database
const database = require('../database');

// Requirements: Middleware
const bodyParser = require('body-parser');

// UNCOMMENT FOR ANGULARJS
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules/angular'));

/**************************** WHAT IS THIS DOING?? ****************************/
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));


// Routes: Default Page?

// Routes: Repos
app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  /********************** WRONG? **********************/
  let username = req.body;

  // and get the repo information from the github API, then

  // save the repo information in the database


});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

    // Search into Database for top 25 repos


});




// Port
let port = 1128;

// Listener
app.listen(port, function() {
  console.log("listening on port: " + port);
});
