// Requirements
const mongoose = require('mongoose');

// Connect to MongoDB Database (Fetcher is automatically created by MongoDB if it doesn't exist)
mongoose.connect('mongodb://localhost/fetcher');


// Database: Schema
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  full_name: String,
  stargazers_count: Number,
  watchers_count: Number,
  forks_count: Number
});


// Database: Model
let Repo = mongoose.model('Repo', repoSchema);


// Database Query: Save
let save = function(repo) {
  // TODO: Your code here
  // This function should save a repo or repos to MongoDB
  repo.save().then(function(error){
    if(error){
      return handleError(error);
    }
    else{
      console.log("The " + repo + " has been saved.");
    }
  });
};

// Database Query: Seach/Find
let search = function() {
  // This function should find a repo or repos in MongoDB
  Repo.find(function(error, data){
    if(error){
      return handleError(error);
    }
    else{
      console.log(data + " has been found.");
    }
}  });
};

// Database Query: Update



/***************************** For Testing *****************************/
    // var test = new Repo({
    //   id: 1,
    //   name: "String",
    //   fullName: "String",
    //   stargazers_count: 1,
    //   watchers_count: 1,
    //   forks_count: 1
    // });
    //
    // test.save();
    //
    // Repo.find(function(err, data) {
    //   if(err) {
    //     return console.log(err);
    //   }
    //   console.log(data);
    // });
/***************************** For Testing *****************************/


// Export Functions/Model
module.exports.save = save;
module.exports.search = search;
module.exports.Repo = Repo;
