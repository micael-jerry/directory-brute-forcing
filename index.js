const { getUrlInArgv, getWordListPathInArgv } = require("./src/argTraitement");
const { testUrl } = require("./src/fetch");
const { fileToArray } = require("./src/readFile");

const argv = process.argv;
const dirListPath = getWordListPathInArgv(argv) ? getWordListPathInArgv(argv) : `${process.cwd()}/docs/dir_list.txt`;

const baseUrl = getUrlInArgv(argv);
const data = fileToArray(dirListPath, 'utf8');

async function brutForcing(baseUrl, wordListArray) {
	let array_1 = wordListArray.slice(0, Math.ceil(wordListArray.length / 2));
	let array_2 = wordListArray.slice(Math.ceil(wordListArray.length / 2));

	const [validUrl_1, validUrl_2] = await Promise.all(
		[testUrl(baseUrl, array_1), testUrl(baseUrl, array_2)]
	)

	const validUrl = validUrl_1.concat(validUrl_2);
	console.log("==================================================================");
	console.log(validUrl);
}

brutForcing(baseUrl, data);
