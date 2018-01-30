require("dotenv").config();

// Core node package for reading and writing files
var fs = require("fs");

// Request npm package
var request = require('request');

// Twitter npm package
var Twitter = require('twitter');

// Spotify npm package
var Spotify = require('node-spotify-api');


// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);


// Capture user input
//=================================================================================================================================
var userInstruct = process.argv[2];
var userSearch = process.argv[3];


// If else statement for first argument in user input
//=================================================================================================================================

if (userInstruct === "my-tweets") {
  
  twitter();
  
} else if (userInstruct === "spotify-this-song") {
  
  spotify();
  
} else if (userInstruct === "movie-this") {
  
  movie();
  
} else if (userInstruct === "do-what-it-says") {
  
  doWhatItSays();
  
}



// Movie Function
//=================================================================================================================================

function movie() {
  
  var userMovieSearch;
  
  // node liri.js movie-this '<movie name here>'

  // if process.argv[3] is blank then the user
  if (userSearch === "") {
    
    // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    userMovieSearch = "Mr. Nobody";
    
  } else {
    
    userMovieSearch = userSearch;
    
  }
  
  console.log(userMovieSearch);
  
  url = "http://www.omdbapi.com/";

  apiKey = "?apikey=" + "trilogy";
  
  movieName = "&t=" + userMovieSearch;
  
  queryUrl = url + apiKey + movieName
  
  console.log(queryUrl);
  
  
  request(queryUrl, function (error, response, body) {
    
    // If there is no error and status code is 200
    if (!error && response.statusCode === 200) {
      
      // Title of the movie.
      console.log("Title: " + JSON.parse(body).Title);
      // Year the movie came out.
      console.log("Year: " + JSON.parse(body).Year);
      // IMDB Rating of the movie.
      console.log("IMDB movie rating: " + JSON.parse(body).imdbRating);
      // Rotten Tomatoes Rating of the movie.
      console.log("Rotten Tomatoes rating: " + JSON.parse(body).Ratings[1].Value);
      // Country where the movie was produced.
      console.log("Country: " + JSON.parse(body).Country);
      // Language of the movie.
      console.log("Language: " + JSON.parse(body).Language);
      // Plot of the movie.
      console.log("Plot: " + JSON.parse(body).Plot);
      // Actors in the movie.
      console.log("Actors: " + JSON.parse(body).Actors);
      
    }
    
  });
  
}


//=================================================================================================================================

function doWhatItSays() {
  
  // node liri.js do-what-it-says

  // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


  // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
  // Feel free to change the text in that document to test out the feature for other commands.
}



//=================================================================================================================================




function spotify() {
  
  // node liri.js spotify-this-song '<song name here>'
  // This will show the following information about the song in your terminal/bash window

  // Artist(s)
  // The song's name
  // A preview link of the song from Spotify
  // The album that the song is from
  
  // If no song is provided then your program will default to "The Sign" by Ace of Base.
  
  
}










//=================================================================================================================================



function twitter() {
  
  // node liri.js my-tweets
  // This will show your last 20 tweets and when they were created at in your terminal/bash window.
  
  
}








//=================================================================================================================================
