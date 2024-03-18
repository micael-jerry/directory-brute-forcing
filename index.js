const { getUrlInArgv, getWordListPathInArgv } = require("./src/argTraitement");
const { testUrl } = require("./src/fetch");
const { fileToArray } = require("./src/readFile");

// argument entered during launch
const argv = process.argv;
// path to default wordlist or path entered as argument
const dirListPath = getWordListPathInArgv(argv) ? getWordListPathInArgv(argv) : `${process.cwd()}/docs/dir_list.txt`;

// the url to be tested entered in the argument
const baseUrl = getUrlInArgv(argv);
// table created from word list file
const data = fileToArray(dirListPath, 'utf8');

async function brutForcing(baseUrl, wordListArray) {
	// division of the table into 2
	let array_1 = wordListArray.slice(0, Math.ceil(wordListArray.length / 2));
	let array_2 = wordListArray.slice(Math.ceil(wordListArray.length / 2));

	// Perform tests on 2 simultaneous tasks
	const [validUrl_1, validUrl_2] = await Promise.all(
		[testUrl(baseUrl, array_1), testUrl(baseUrl, array_2)]
	)

	// remove duplicates if there are any in the valid paths
	const validUrl = Array.from(new Set(validUrl_1.concat(validUrl_2)));
	console.log("==================================================================");
	console.log(validUrl);
}

brutForcing(baseUrl, data);
