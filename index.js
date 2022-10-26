const chalk = require ('chalk');
const resolve = require('./md-links1/resolve.js');
const readFile = require ('./md-links1/readfile.js');
const getLinks = require ('./md-links1/getlinks.js')
const readDirectory = require('./md-links1/readDirectory.js')
const fs = require('fs');


let arrayMD = [];
   resolve(pathfile);
   const fileOrDirectory = fs.lstatSync(pathfile).isDirectory();
   console.log(fileOrDirectory);

   if (fileOrDirectory === false) {
    readFile(pathfile, arrayMD);
   } else {
     readDirectory(pathfile, arrayMD);
   }

if(arrayMD.length === 0){
  return console.log((chalk.inverse.yellow.bold('No markdown files found')))
}else{
  getLinks(arrayMD);
}
