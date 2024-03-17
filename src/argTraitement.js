function getUrlInArgv(argv) {
	try {
		return new URL(argv[3]);
	} catch (error) {
		console.log(error);
	}
}

module.exports.getUrlInArgv = getUrlInArgv;
