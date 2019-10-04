# liri-node-app

This time you'll need to include screenshots, 
a GIF, and/or a video showing us that you have
the app working with no bugs. You can include 
these screenshots/GIFs or a link to a video in a README.md file.

In order to meet the Employer Competitive standards 
and be ready to show your application to employers, 
the README.md file should meet the following criteria:

-Clearly state the problem the app is trying to solve 
(i.e. what is it doing and why)
-Give a high-level overview of how the app is organized
-Give start-to-finish instructions on how to run the app
-Include screenshots, gifs or videos of the app functioning
-Contain a link to a deployed version of the app
-Clearly list the technologies used in the app
-State your role in the app development

-Because screenshots (and well-written READMEs) 
are extremely important in the context of GitHub, 
this will be part of the grading in this assignment.
If you haven't written a markdown file yet, click here for a rundown,
or just take a look at the raw file of these instructions.



eg.

liri-node-app

Requirements:

-Make a Node.js app that depends on user input from the command line

-Integrate Bands In Town, Spotify, and OMDb APIs via the appropriate NPM modules

-Use API calls and parse through returned JSON objects, outputting them in a specified format

-Read commands and queries from file


Technologies Used:

-Node.js
-JavaScript
-Bands In Town Artists Events API
-Spotify API (via spotify npm module)
-OMDB API (via request npm module)
-NPM command line utility

Code Explanation:

Authentication keys for Spotify are stored in "keys.js", and its contents is exported to the main "liri.js" file.

What the app does depends on user input, and there are 4 main functions: 
1) Bands in town searches for events and touring information, and then prints it to the screen. 
2) Spotify searches for a song, and relevand artist information, and then prints to screen.
3) OMDb searches a movie name for relevant film and actor information, and prints it to screen.
(4) Do this reads a command and queries a response from a seperate file.

The program makes a request to the Bands API and a JSON object is returned. It is then parsed to only print to screen specified output, using console.log 








The program also makes a request to the Spotify API, and we get back a JSON object that includes everything we need (artist(s), song, preview link, and album)

The program also makes a HTTP request to the OMDb API using the request NPM module, and we get back a JSON object that includes everything we need (title, year, IMDb rating, language, etc.)

The program also reads from a file called "random.text" and executes the command and query found there using string and array methods
Appropriate comments and error-checking has been added