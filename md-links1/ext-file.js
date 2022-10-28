const path = require ('path'); // Este módulo provee de utilidades para trabajar con rutas de archivos y directorios.
const chalk = require('chalk'); // Librería para colores
const {exit}=require('process')

 const extFile = (absolutePath, arrayMD)=>{
    const ext = path.extname(absolutePath);
    if(ext !== '.md'){ 
        console.log(chalk.red.bold('Its not a .md file')) 
        exit()
    }else if(ext === '.md'){
          arrayMD.push(absolutePath);
            console.log(chalk.rgb(255,184,184)('Absolute Path ->',arrayMD))
        }
        
    }
 module.exports = extFile;

 