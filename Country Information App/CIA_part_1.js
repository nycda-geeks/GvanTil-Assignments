// Country Information App

// Part 1
// Create a Node.js application that does the following:
// - Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array `process.argv`
// - Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync. Get it here: countries.jsonIn een nieuw venster bekijken
// - Outputs information about that specific country. Must be in the following format:
// Country: <country name>
// Top Level Domain: <tld>

var countryname = process.argv[2] // JSONfile is case-sensitive
var fs = require ('fs')

// I want node.js to read the file
fs.readFile ('./countries.json', function (error, filedata){
	//Make sure errors are visible in console
	if (error){
		console.log ("Something is up! Details: " + error)
		throw error
	}
	var jsondata =JSON.parse (filedata) //Store our file data in var as json

	jsondata.forEach(function(country){
		if (country.name == countryname){// I want node.js to print out certain information from the file
			console.log ('Country: ' + country.name)
			console.log ('Top Level Domain: ' + country.topLevelDomain)
		}
	})
})

// Part 2
// - For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
// - This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
// - One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
// - Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.

// Hints:
// - Use JSON.parse (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse (Links to an external site.)) to parse JSON data from files into a JavaScript object.
// - Try first completing the assignment without creating a separate module - Extracting the second module out is significantly more difficult.
