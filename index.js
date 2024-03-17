const { getUrlInArgv, getWordListPathInArgv } = require("./src/argTraitement");
const { testUrl } = require("./src/fetch");
const { fileToArray } = require("./src/readFile");

const argv = process.argv;
const dirListPath = getWordListPathInArgv(argv) ? getWordListPathInArgv(argv) : `${process.cwd()}/docs/dir_list.txt`;

const baseUrl = getUrlInArgv(argv);
const data = fileToArray(dirListPath, 'utf8');

async function brutForcing(baseUrl, wordListArray) {
	const validUrl = await testUrl(baseUrl, wordListArray);
	console.log("==================================================================");
	console.log(validUrl);
}

brutForcing(baseUrl, data);
