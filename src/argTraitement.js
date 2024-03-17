function getUrlInArgv(argv) {
	try {
		return new URL(argv[2]);
	} catch (error) {
		console.log(error);
	}
}

module.exports.getUrlInArgv = getUrlInArgv;
