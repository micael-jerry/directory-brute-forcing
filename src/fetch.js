async function fetchURL(url) {
	try {
		const response = await fetch(url);
		if (response.status != 404)
			console.log(url);
	} catch (error) {
		console.error('Une erreur est survenue lors de la récupération des données:', error);
		throw error;
	}
}

module.exports.fetchURL = fetchURL;
