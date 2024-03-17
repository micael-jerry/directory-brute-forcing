async function fetchURL(url) {
	try {
		console.log(`Testing URL: ${url}`);
		const response = await fetch(url);
		return (response.status != 404);
	} catch (error) {
		console.error('Une erreur est survenue lors de la récupération des données:', error);
		throw error;
	}
}

async function testUrl(url, wordList) {
	let validUrl = [];
	for (const element of wordList) {
		const u = `${url}${element.indexOf('/') == 0 ? element.slice(1) : element}`;
		const isValid = await fetchURL(u);
		if (isValid)
			validUrl.push(u);
	}
	return validUrl;
}

module.exports.fetchURL = fetchURL;
module.exports.testUrl = testUrl;
