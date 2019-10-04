# liri-node-app

Link: https://ariellecollinsb.github.io/liri-node-app/


Requirements:

-Make a Node.js app that depends on user input from the command line

-Integrate Bands In Town, Spotify, and OMDb APIs via the appropriate NPM modules

-Use API calls and parse through returned JSON objects, outputting them in a specified format

-Read commands and queries from file


Technologies Used:

-Node.js
-Moment.js
-axios
-JavaScript
-Bands In Town Artists Events API
-Spotify API (via spotify npm module)
-OMDB API (via request npm module)
-NPM command line utility

Code Explanation:

Authentication keys for Spotify are stored in .env "keys.js", and its contents is exported to the main "liri.js" file.

App functionality depends on user input.
There are 4 main functions: 

1) Bands in town searches for events and touring information, and then prints it to the screen. 

2) Spotify searches for a song, and returns relevant artist information, which is then printed to screen.

3) OMDb searches a movie name for relevant film and actor information, and prints it to screen.

(4) Do this reads a command and queries a response from a seperate file.


API Functionality

Liri.bot takes in the user's commands(command + search term), and then makes a request to the relevant API. 

-If the command is 'concert-this', a request is made to the Bands API via axios ```axios.get(queryUrl)```, and a JSON object is returned, then parsed, and only specified perameters;(Venue, Location, Date) 
are printed to screen, using ```console.log()```.
In the event of an error, a ```.catch(function (err)``` function is there to log the error.

```
```

-If the command is 'spotify-this-song' a request is made to the Spotify API, and a JSON object is returned, then parsed, and only the specified perameters; (Artist(s), Song Name, Url, Album)
are printed to screen, using console.log.
In the event of an error, a ```.catch(function (err)``` function is there to log the error.

-If the command is 'movie-this' a request is made to the OMDb API using axios ```axios.get(queryUrl)```, and a JSON object is returned, then parsed, and only specified perameters;(Title, Year, IMDB RAting, RT Rating, Country, Language, Plot, Actors) 
are printed to screen, using ```console.log()```.
In the event of an error, a ```.catch(function (err)``` function is there to log the error.

-If the command is 'do-what-it-says' The program 'does what it says', by first, reading the "random.text" file, and executing the command, and the query found there. 

Appropriate comments and error-checking has been added