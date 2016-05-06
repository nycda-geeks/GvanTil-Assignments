var fs = require ('fs');

// This is a module that reads and parses JSON files
function readAndParse(file, dowhendone) {	// a function that takes in two parameters, a string and a function.
	fs.readFile (file, function(error, data){ // fs.readfile = node's reading machine. syntax = (file and function(this function either gives you an error or the data)
		if ( error ) {
			console.log ("Something is up! Details: " + error)
			throw error
		} else {// Remember: If everything goes well: readfile gives you the data, but nothing is done with that data yet.
			var thereadfile = JSON.parse (data) // Parse the data and store them in a variable
		}
		dowhendone (thereadfile) // the callback function. Remember this is parameter that enables us to use a function to do something with the data stored in the variable
	})	
};

// THIS IS A CHECK TO MAKE SURE THE FUNCTION WORKS. (and it does!!!)
// readAndParse('./countries.json', function (showthereadfile){
// 	console.log (showthereadfile)
// })

module.exports.reader = readAndParse


// NOTES TO SELF::

// readAndParse('file', function(fileresult){console.log('done' + fileresult)} )

// function bakeAcake (flavor, callback) {
// 	console.log('I baked a cake in the ' + flavor + ' flavor')
// 	callback(flavor)	
// }


// bakeAcake('chocolate', function(catchflavor) {
// 	sendEmail('mentor@palokaj.co', 'Your ' + catchflavor + 'cake is ready')
// })