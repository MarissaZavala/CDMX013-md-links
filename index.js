const chalk = require ('chalk');
const { exit } = require('process');
const mdLinks = require ('./md-links.js');
const readline =require ('readline').createInterface({
  input:process.stdin,
  output:process.stdout
})
const welcome = () => {
  console.log(chalk.inverse.rgb(210,175,234)('                                                            '))
  console.log(chalk.inverse.rgb(210,175,234)('•·.·••·.·• W E L C O M E    T O   M D - L I N K S •·.·••·.·•'))
  console.log(chalk.inverse.rgb(210,175,234)('                                                            '))
  console.log(chalk.inverse.rgb(210,175,234)('           👇  Please follow the instructions  👇           '))
  console.log(chalk.inverse.rgb(210,175,234)('                                                            '))
  console.log('                                                                            ')
  
}


welcome()
readline.question(chalk.rgb(216,137,255)('Enter a route:'), (path) => {
  readline.question(chalk.inverse.rgb(181,238,185)('Enter an option (--validate OR --stats OR --validate --stats):'), (option)=>{
if (option === '--validate' || option === '--stats' || option === '--validate --stats'){
  mdLinks(path,option).then(() =>{
    console.log('                                                                            ')
    console.log(chalk.inverse.rgb(210,175,234)(' END PROGRAM. Thanks for using MD-Links 👋'));
    console.log('                                                                            ')
    exit()
  
  })
.catch((error)=>{
  console.trace(error);
})
}else{
  console.log(chalk.green('The option entered is not valid'))
  exit()
}
})
})
/*let path = process.argv[2];
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

let arrayMD = [];     
   extFile(path, arrayMD);
   getLinks(arrayMD);
 
*/
