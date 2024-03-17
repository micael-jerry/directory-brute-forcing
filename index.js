const { getUrlInArgv } = require("./src/argTraitement");
const { fileToArray } = require("./src/readFile");

const argv = process.argv;
const dirListPath = `${process.cwd()}/docs/dir_list.txt`;

const url = getUrlInArgv(argv);
const data = fileToArray(dirListPath, 'utf8');

console.log(url);
console.log(data);
