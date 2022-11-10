const chalk = require ('chalk');
const pathN = require ('path');
const fs = require ('fs');
const extFile = require ('./md-links1/ext-file.js');
const getLinks = require ('./md-links1/getlinks.js');
const { exit } = require('process');
const validateLinks = require('./md-links1/validate.js');
const getLinkStats= require ('./md-links1/getstats.js');
//const statsAndValidation= require('./md-links1/getstats.js');
let path = process.argv[2];
path = pathN.resolve(path);
path = pathN.normalize(path);

const mdLinks = (path,option) =>{
    return new Promise ((resolve, reject) => {
const fileExist = fs.existsSync(path) 
  let arrayMD = [];
  if (!fileExist) {
    console.log((chalk.bold.rgb(181,238,185)('❌This path does not exist❌')))
    exit()
  } else {
    console.log((chalk.bold.rgb(181,238,185)('✅This is a valid path ✅')))
    extFile(path, arrayMD);
    console.log('                                                                            ')
if (option === undefined){
    resolve(mdLinks)
}else if(option ==='--validate'){
    const arrayLinks = getLinks(arrayMD);
    resolve (validateLinks(arrayLinks))
}
else if(option==='--stats'){
    const arrayLinks= getLinks(arrayMD);
    resolve (getLinkStats(arrayLinks))
}
else if (option === '--validate --stats'){
    const arrayLinks = getLinks(arrayMD);
    resolve(validateLinks(arrayLinks))
    resolve(getLinkStats(arrayLinks))
}
else reject
}
    }
    )
}
    
module.exports = mdLinks;