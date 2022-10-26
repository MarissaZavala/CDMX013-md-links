const fs = require('fs') // Este módulo provee una API para interactuar con el sist. de archivos
const path = require('path') // Este módulo provee de utilidades para trabajar con rutas de archivos y directorios.
const chalk = require('chalk') // Librería para colores

const welcome = () => {
    console.log(chalk.inverse.magenta('•·.·••·.·• W E L C O M E    T O   M D - L I N K S •·.·••·.·•'))
}
welcome()
let filePath = process.argv[2] // Process es un objeto global que provee de info y control de un proceso de nodejs
console.log('RELATIVE:', chalk.blue(filePath)) // Nos muestra la ruta relativa 

filePath = path.resolve(filePath) // Resuelve la ruta relativa en absoluta
console.log('ABSOLUTE:', chalk.yellow(filePath)) 


const dirOrFile = () => { // Función que distinge directorios
    fs.readdir(filePath, (err, files) => { // Función toma dos parámetros, el path y un callback
        files.forEach(file => { // Toma todos los archivos que encuentra y por cada uno :
            if(file.includes('.md')){ // Si cada archivo incluye una extensión .md 
                console.log('EXT.MD->', chalk.green(file)) // 
            }else{
                console.log('ITS NOT A EXT.MD->', chalk.redBright(file))
            }
        })
    })
}

module.exports = dirOrFile