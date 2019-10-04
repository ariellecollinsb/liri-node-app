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

Requirements

Make a Node.js app that depends on user input from the command line
Integrate Twitter, Spotify, and OMDb APIs via the appropriate NPM modules
Use API calls and parse through returned JSON objects, outputting them in a specified format
Read commands and queries from file

Technologies Used
Node.js
JavaScript
Twitter API (via twitter npm module)
Spotify API (via spotify npm module)
OMDb API (via request npm module)

Code Explanation
Authentication keys for Twitter are stored in "keys.js", and we are exporting its contents to the main "liri.js" file

What our app does depends on what the user types, and there are 4 main functions: 
(1) prints latest tweets, 
(2) Spotify lookup for a song, 
(3) OMDb lookup for a movie, and 
(4) read command and query from another file

The program makes a request to the Twitter API that is limited by parameters -- username and number of tweets, and we get back a JSON object that includes an array of the 20 most recent tweets; from there, we selectively output using console.log

The program also makes a request to the Spotify API, and we get back a JSON object that includes everything we need (artist(s), song, preview link, and album)

The program also makes a HTTP request to the OMDb API using the request NPM module, and we get back a JSON object that includes everything we need (title, year, IMDb rating, language, etc.)

The program also reads from a file called "random.text" and executes the command and query found there using string and array methods
Appropriate comments and error-checking has been added