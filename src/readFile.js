const fs = require('fs');

// function that reads a file and returns an array
// each element corresponds to each line in the file
function fileToArray(path, encoding) {
	try {
		const data = fs.readFileSync(path, encoding);
		return data.toString().split('\n');
	} catch (err) {
		console.error(err);
		throw err;
	}
}

module.exports.fileToArray = fileToArray;
