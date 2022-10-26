const path = require('path') // Este módulo provee de utilidades para trabajar con rutas de archivos y directorios.
const chalk = require('chalk') // Librería para colores

 const readFile = (pathAbsolute, arrayMD)=>{
    const ext = path.extname(pathAbsolute);
    if(ext!=='.md'){ // Si cada archivo incluye una extensión .md
        console.log('ITS NO A EXT.MD->', chalk.red(file)) 
    }else{  arrayMD.push(pathAbsolute);
            console.log(arrayMD)
        }
        
    }
 module.exports = readFile;