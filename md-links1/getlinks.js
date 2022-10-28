const fs = require('fs') // Este módulo provee de utilidades para trabajar con rutas de archivos y directorios.
const chalk = require('chalk');
let linksData=[]
const getLinks =(arrayMD) =>{
    arrayMD.forEach((file) => {
        const data = fs.readFileSync(file,'utf8');
        const regExpGetLink = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n]+)(?=\))/g;
        let arrayLinks =[...data.matchAll(regExpGetLink)]

        if (arrayLinks.length > 0) {
            arrayLinks.forEach(link => {
                linksData.push({
                    href: link[2],
                    text: link[1],
                    file: arrayMD
                })
                
            })
            console.log(chalk.rgb(216,137,255)('LINKS INFORMATION'),linksData)
            
        }      
})
return linksData


}
module.exports = getLinks;