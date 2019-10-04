require("dotenv").config();
  var keys = require("./keys.js");

  
var Spotify = require('node-spotify-api');

var axios = require("axios");

// var inquirer = require("inquirer");

// var commandsArray =["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"];

var commands = process.argv[2];

var userInput = process.argv.slice(3).join(" ");


var spotifyThis = function (userInput) {
    var spotify = new Spotify(keys.spotify);
    console.log(`spotify-this ${userInput}`);
    spotify
  .search({ type: 'track', query: 'All the Small Things', limit: 1 })
  .then(function(response) {
    console.log(response.tracks.items[0])
    var result = response.tracks.items[0];
    
  })
  .catch(function(err) {
    console.log(err);
  });
};

var concertThis = function (userInput) {

    var app_id = "codingbootcamp";
    var queryUrl = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=" + app_id;

    axios.get(queryUrl).then(
        function (response) {
            console.log(response.data);
        });
};

var movieThis = function (userInput) {

    var apiKey = "trilogy";
    var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=" + apiKey;

    axios.get(queryUrl).then(
        function (response) {
            console.log(response.data);
        });
};

var doThis = function () {

};


// function (commands) {


switch (commands) {

    case "spotify-this-song":
        spotifyThis(userInput);

        break;

    case "movie-this":
        movieThis(userInput);
        break;

    case "concert-this":
        concertThis(userInput);
        break;

    case "do-what-it-says":
        doThis();
        break;

    default:
        console.log("Something's wrong...");
}





//  var inquirer = require("inquirer");
//  inquirer.prompt([  
//     {
//       type: "list",
//       name: "commands",
//       message:"What would you like me to do?",
//       choices:["concert-this", "spotify-this-song", "movie-this"],
//       when: function(answers) {
//         return answers.concert-this;
//   },
//   {
//       name: "concert-this",
//       message: "What band/artist are you looking for?",
//       when: function(answers) {
//           return 
//       }
//   };
//   {
//       name:
//       message:
//       when
//   }
//     },
// ])
// .then(function(inquirerCommand) {

//     var message ="";
//     switch(inquirerCommand) {
//         case "concert-this" : 
//             message = "What band/artist are you looking for?"
//             break;
//         case "spotify-this-song" :
//             message = "What song are you looking for?"
//             break;
//         case "movie-this" :
//             message = "What movie are you looking for?"
//     }
//   if (inquirerCommand.input) {
//     console.log("\n" + inquirerResponse.username );
//     console.log("I'm already in the house!\n");
//   }
//   else {
//     console.log("\n" + inquirerResponse.username + " do you wanna watch " + inquirerResponse.movie + " with me?");
//     console.log("Look out your back window!\n");
//   }
// });


// // var apiKey = trilogy,
// // // var queryUrl = https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy"";

// // axios.get( queryUrl ).then(
// //   function(response) {

// //     console.log(response.data);
// //   },



// // // node liri.js concert-this <artist/band name here>
// // // This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
// // // Name of the venue
// // // Venue location
// // // Date of the Event (use moment to format this as "MM/DD/YYYY")
// // // Important: There is no need to sign up for a Bands in Town api_id key. Use the codingbootcamp as your app_id. For example, the URL used to search for "Celine Dion" would look like the following:
// // // https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp


// // spotify-this-song -
// // // This will show the following information about the song in your terminal/bash window
// // // Artist(s)
// // // The song's name
// // // A preview link of the song from Spotify
// // // The album that the song is from
// // // If no song is provided then your program will default to "The Sign" by Ace of Base.
// // // You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

// // movie-this -

// // var apiKey = ,
// // var queryUrl = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

// // axios.get( queryUrl ).then(
// //   function(response) {

// //     console.log(response.data);
// //   },


// // // This will output the following information to your terminal/bash window:
// // //   * Title of the movie.
// // //   * Year the movie came out.
// // //   * IMDB Rating of the movie.
// // //   * Rotten Tomatoes Rating of the movie.
// // //   * Country where the movie was produced.
// // //   * Language of the movie.
// // //   * Plot of the movie.
// // //   * Actors in the movie.
// // // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// // // If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// // // It's on Netflix!


// // do-what-it-says -
// // // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// // // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// // // Edit the text in random.txt to test out the feature for movie-this and concert-this.
