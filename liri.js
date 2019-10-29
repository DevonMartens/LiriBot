require("dotenv").config();



// variables
var action = process.argv[2];
var value = process.argv[3];

//requirements
var request = require('request')
var keys = require('./keys.js');
var bandsintown = require('bandsintown')("codingbootcamp");
//A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
var moment = require('moment');
//file system node - work with my computer now
var fs = require("fs");
// uses spotify api
var spotify = require('node-spotify-api');
var KeysSpotify = new Spotify(keys.spotify);

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret,
  });
//var defaults
var DFMoive = 'Mr. Nobody.'
var DFSong = "The Sign"



//Case and Switch statement (differnt action = run api) based on different condition (node command)



//What we need: for concert-this - search the Bands in Town Artist terminal: 
//api codingbootcamp 
//Output:
// Name of the venue
// Venue location
//Date of the Event (use moment to format this as "MM/DD/YYYY")
switch (action) {
    case "concert-this":
getConcert (value)
break;
// spotify-this-song: spotify api
//	Artist(s)
// The song's name
//	A preview link of the song from Spotify
//	The album that the song is from
case "spotify-this-song":
}