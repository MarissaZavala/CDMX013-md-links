const fs = require('fs') 
const chalk = require('chalk') 
const resolve = require('./md-links1/resolve.js')
const readFile = require('./md-links1/readfile.js')
const getLinks = require('./md-links1/getlinks.js')

const welcome = () => {
  console.log(chalk.inverse.magenta('•·.·••·.·• W E L C O M E    T O   M D - L I N K S •·.·••·.·•'))
}
welcome();

let arrayMD = [];
resolve();
readFile();

if(arrayMD.length === 0){
  return console.log((chalk.reverse.yellow.bold('NO .md files exist')))
}else{
  getLinks(arrayMD);
}
