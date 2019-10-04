require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

var spotifyThis = function (userInput) {
    var spotify = new Spotify(keys.spotify);
    console.log(`spotify-this ${userInput}`);
    spotify.search({ type: 'track', query: userInput, limit: 1 }
    ).then(function (response) {

        var result = response.tracks.items[0];
        var artistArray = result.album.artists;
        var artists = ""
        for (var i = 0; i < artistArray.length; i++) {
            artists += artistArray[i].name + ","
        };
        artists = artists.substring(0, artists.length - 1);
        var url = result.album.external_urls.spotify;
        console.log(`\n\nArtist(s): ${artists} \n\nSong: ${userInput} \n\nURL: ${url} \n\nAlbum: ${result.album.name}`)
    }).catch(function (err) {

        console.log(err);
    });
};

var concertThis = function (userInput) {

    var app_id = "codingbootcamp";
    var queryUrl = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=" + app_id;

    axios.get(queryUrl).then(
        function (response) {
            var result = response.data;
            // console.log(result);
            for (var i = 0; i < result.length; i++) {
                var venue = result[i].venue.name;
                var location = result[i].venue.city + ", " + result[i].venue.country;
                var date = moment(result[i].datetime).format("MM/DD/YYYY");
                console.log(`\n\nVenue: ${venue}, \n\nLocation: ${location}, \n\nDate: ${date}\n`);
            }
        }).catch(function (err) {
            console.log(err);
        });
};

var movieThis = function (userInput) {

    var apiKey = "trilogy";
    var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=" + apiKey;

    axios.get(queryUrl).then(
        function (response) {
            var result = response.data;

            console.log(`\nTitle: ${result.Title}, \nYear: ${result.Year}, \nIMDB Rating: ${result.Ratings[0].Value}, \nRotten Tomatoes Rating: ${result.Ratings[1].Value}, \nCountry: ${result.Country}, \nLanguage: ${result.Language}, \nPlot: ${result.Plot}, \nActors: ${result.Actors}\n`);



        }).catch(function (err) {

            console.log(err);
        });
};
var doThis = function () {
    fs.readFile("random.txt", "utf8", function (err, data) {
        var contents = data.split(",");
        commands(contents[0], contents[1]);
    })
};

function commands(command, userInput) {

    switch (command) {

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
}


commands(process.argv[2], process.argv.slice(3).join(" "))