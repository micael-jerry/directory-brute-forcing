// Retrieve the url from the project launch argument and return an error if the format is not valid
function getUrlInArgv(argv) {
	try {
		return new URL(argv[2]);
	} catch (error) {
		console.log(error);
	}
}

// retrieve the wordlist path from the project launch argument and return null if there is none
function getWordListPathInArgv(argv) {
	if (argv[3]) return argv[3];
	return null;
}

module.exports.getUrlInArgv = getUrlInArgv;
module.exports.getWordListPathInArgv = getWordListPathInArgv;
