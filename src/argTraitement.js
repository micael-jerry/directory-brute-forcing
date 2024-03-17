function getUrlInArgv(argv) {
	try {
		for (let i = 0; i < argv.length; i++) {
			if (argv[i] == "--url")
				return new URL(argv[i + 1])
		}
	} catch (error) {
		console.log(error);
	}
}

module.exports.getUrlInArgv = getUrlInArgv;
