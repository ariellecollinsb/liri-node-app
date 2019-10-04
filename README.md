# Assignment 8: LIRI-Bot 

## Author

Arielle Collins: 

- https://github.com/ariellecollinsb

- ariellecollinsb@gmail.com



LIRI-Bot Links: 

- https://github.com/ariellecollinsb/liri-node-app 
                
                
- https://ariellecollinsb.github.io/liri-node-app/


## Requirements:

-Make a Node.js app that depends on user input from the command line

-Integrate Bands In Town, Spotify, and OMDb APIs via the appropriate NPM modules

-Use API calls and parse through returned JSON objects, outputting them in a specified format

-Read commands and queries from file


## Technologies Used:

-Node.js
-Moment.js
-axios
-JavaScript
-Bands In Town Artists Events API
-Spotify API (via spotify npm module)
-OMDB API (via request npm module)
-NPM command line utility + packages

## Code Explanation:


App functionality depends on user input.
There are 4 main functions: 

1) Bands in town searches for events and touring information, and then prints it to the screen. 

2) Spotify searches for a song, and returns relevant artist information, which is then printed to screen.

3) OMDb searches a movie name for relevant film and actor information, and prints it to screen.

4) Do this reads a command and queries a response from a seperate file.



## API Functionality

Liri.bot takes in the user's commands(command + search term), and then makes a request to the relevant API. 

               ```node liri.js + command + searchTerm```    


-If a command is entered without a search term, a [default](./images/liri-default.png) response, listing all commands will be triggered.

-If the command is 'concert-this', a request is made to the Bands API via axios ```axios.get(queryUrl)```, and a JSON object is returned, then parsed, and only specified perameters;(Venue, Location, Date) 
are [printed](./images/liri-concert-this.png) to screen, using ```console.log()```.
In the event of an error, a ```.catch(function (err)``` is there to log the error.

-If the command is 'spotify-this-song' a ```spotify.search()``` request is made to the Spotify API, and a JSON object is returned, then parsed, and only the specified perameters; (Artist(s), Song Name, Url, Album)
are [printed](./images/liri-spotify-this.png) to screen, using console.log.
In the event of an error, a ```.catch(function (err)``` is there to log the error.

-If the command is 'movie-this' a request is made to the OMDb API using axios ```axios.get(queryUrl)```, and a JSON object is returned, then parsed, and only specified perameters;(Title, Year, IMDB RAting, RT Rating, Country, Language, Plot, Actors) 
are [printed](./images/liri-movie-this.png) to screen, using ```console.log()```.
In the event of an error, a ```.catch(function (err)``` is there to log the error.

-If the command is 'do-what-it-says' The program 'does what it says', by first, reading the "random.text" file, and [executing](./images/liri-do-this.png) the command and query found there. 



## Security

Authentication keys for Spotify were stored in a .env file, and then referenced in "keys.js", which was then exported to the main "liri.js" file. By doing this, my keys remain private, and Github users would need to provide their own DotEnv file.
