const fs = require('fs') // Este módulo provee una API para interactuar con el sist. de archivos
const path = require('path') // Este módulo provee de utilidades para trabajar con rutas de archivos y directorios.
const chalk = require('chalk') // Librería para colores

const resolve = (pathfile) => {
    let absolutePath;
    if (path.isAbsolute(pathfile) === false) {
        absolutePath = path.resolve(pathfile);
    } else {
        absolutePath = pathfile;
    }
    console.log('Absolute Path:', '${absolutePath}')
    const file = fs.existsSync(absolutePath)
    if (!file) {
        console.log(chalk.red.bold('INVALID PATH ->', chalk.red(absolutePath)))
    } else {
        console.log(chalk.green.bold('VALID PATH ->', chalk.red(absolutePath)))
    }
}

/*const dirOrFile = () => { // Función que distinge directorios
    fs.readdir(filePath, (err, files) => { // Función toma dos parámetros, el path y un callback
        if(err) {
            console.log(chalk.red.bold('INVALID PATH ->'), err)
        } else {
            files.forEach(file => { // Toma todos los archivos que encuentra y por cada uno :
                if(file.includes('.md')){ // Si cada archivo incluye una extensión .md 
                    console.log('EXT.MD->', chalk.green(file)) // 
                }
            })
        }
    })
}
*/
module.exports = resolve;