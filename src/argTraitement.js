function getUrlInArgv(argv) {
	try {
		return new URL(argv[2]);
	} catch (error) {
		console.log(error);
	}
}

function getWordListPathInArgv(argv) {
	if (argv[3]) return argv[3];
	return null;
}

module.exports.getUrlInArgv = getUrlInArgv;
module.exports.getWordListPathInArgv = getWordListPathInArgv;
