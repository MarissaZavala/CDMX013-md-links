const fs = require('fs')
const path = require('path')
const readDirectory = (pathfile, arrayMD) => {
    const directoryFiles = fs.readdirSync(pathfile);

    directoryFiles.forEach((element) => {
      const absolutePath = path.resolve(pathfile, element);
      const ext = path.extname(absolutePath);
      if (fs.lstatSync(absolutePath).isDirectory()) {
        readDirectory(absolutePath, arrayMD); 
      } else if (ext === '.md') { 
        arrayMD.push(absolutePath);
      }
    });
   
};

module.exports = readDirectory;