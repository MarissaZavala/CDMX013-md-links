const chalk = require ('chalk');
const extFile = require ('./md-links1/ext-file.js');
const getLinks = require ('./md-links1/getlinks.js');
const pathN = require ('path');
const fs = require ('fs');
const { exit } = require('process');
const validateLinks = require('./md-links1/validate.js');
const getStats= require ('./md-links1/getstats.js');
const process =require ('node:process');

const welcome = () => {
  console.log(chalk.inverse.rgb(210,175,234)('                                                            '))
  console.log(chalk.inverse.rgb(210,175,234)('•·.·••·.·• W E L C O M E    T O   M D - L I N K S •·.·••·.·•'))
  console.log(chalk.inverse.rgb(210,175,234)('                                                            '))
  console.log('                                                                            ')
}
welcome()
let path = process.argv[2];
path = pathN.resolve(path);
path = pathN.normalize(path);

const fileExist = fs.existsSync(path) 
let arrayMD = [];
  if (!fileExist) {
    console.log((chalk.bold.rgb(181,238,185)('❌This path does not exist❌')))
    exit()
  } else {
    console.log((chalk.bold.rgb(181,238,185)('✅This is a valid path ✅')))
    extFile(path, arrayMD);
    console.log('                                                                            ')
    const arrayLinks = getLinks(arrayMD);
    validateLinks(arrayLinks);
   // getStats(arrayLinks)
    //const arrayLinks = getLinks(arrayMD);
  
  }

/*let arrayMD = [];     
   extFile(path, arrayMD);
   getLinks(arrayMD);
 
*/
