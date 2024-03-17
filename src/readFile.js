const fs = require('fs');

const fileToArray = (path, encoding) => {
	try {
		const data = fs.readFileSync(path, encoding);
		return data.toString().split('\n');
	} catch (err) {
		console.error(err);
		throw err;
	}
}

module.exports.fileToArray = fileToArray;
