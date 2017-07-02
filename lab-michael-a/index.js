'use strict';

let fp = require('./lib/fp.js');

const main = module.exports = () => {
  let argument = process.argv;
  let result = fp.map(argument, letter => letter.toUpperCase());

  console.log(result);
  // return result;
};

main();
