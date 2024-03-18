// function returns true if url passed as parameter exists otherwise false, in case of error, application stops
async function fetchURL(url) {
	try {
		console.log(`Testing URL: ${url}`);
		const response = await fetch(url);
		return response.status != 404;
	} catch (error) {
		console.error(
			'An error occurred during data recovery:',
			error,
		);
		throw error;
	}
}

// function that tests a path list on a basic url by calling the function above
async function testUrl(url, wordList) {
	let validUrl = [];
	for (const element of wordList) {
		// join the url base and the path to be tested
		const u = `${url}${element.indexOf('/') == 0 ? element.slice(1) : element}`;
		const isValid = await fetchURL(u);
		// if the path is valid, add to the validUrl array
		if (isValid) validUrl.push(u);
	}
	return validUrl;
}

module.exports.fetchURL = fetchURL;
module.exports.testUrl = testUrl;
