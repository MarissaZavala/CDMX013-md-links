const path = require('path') // Este módulo provee de utilidades para trabajar con rutas de archivos y directorios.
const chalk = require('chalk') // Librería para colores

 const readFile = (pathAbsolute, arrayMD)=>{
    const ext = path.extname(pathAbsolute);
    if(ext !== '.md'){ 
        console.log(chalk.red.bold('Its not a .md file')) 
    }else if(ext === '.md'){
          arrayMD.push(pathAbsolute);
            console.log(arrayMD)
        }
        
    }
 module.exports = readFile;