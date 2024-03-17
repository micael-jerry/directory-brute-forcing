const { getUrlInArgv } = require("./src/argTraitement");

const argv = process.argv;

const url = getUrlInArgv(argv);

console.log(argv);
