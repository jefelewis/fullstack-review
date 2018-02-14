// Requirements
const mongoose = require('mongoose');

// Connect to MongoDB Database (Fetcher is automatically created by MongoDB if it doesn't exist)
mongoose.connect('mongodb://localhost/fetcher');


// Database Schema
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  full_name: String,
  stargazers_count: Number,
  watchers_count: Number,
  forks_count: Number
});


// The Model is one instance of the Schema
let Repo = mongoose.model('Repo', repoSchema);


// Database Query: Save
let save = function(repo) {
  // TODO: Your code here
  // This function should save a repo or repos to the MongoDB
  repo.save();

};

// Database Query: Seach/Find
let find = function(repo) {
  repo.find()
};



/***************************** For Testing *****************************/
var test = new Repo({
  id: 1,
  name: "String",
  fullName: "String",
  stargazers_count: 1,
  watchers_count: 1,
  forks_count: 1
});

test.save();

Repo.find(function (err, data) {
  if (err) return console.log(err);
  console.log(data);
})
/***************************** For Testing *****************************/


// Export Save functions (Where do we import?)
module.exports.save = save;
module.exports.search = find;
