const fs = require('fs') // Este módulo provee de utilidades para trabajar con rutas de archivos y directorios.
let linksData=[]
const getLinks =(arrayMD) =>{
    arrayMD.forEach((mdFile) => {
        const data = fs.readFileSync(mdFile,'utf8');
        const regExpGetLink = '^(https):\/\/[^ "]+$';
        let arrayLink =[...data.match(regExpGetLink)]

        if (arrayLink.length > 0){
            arrayLink.forEach(link => {
                linksData.push({
                    href:link[2],
                    text:link[1],
                    file:arrayMD
                })
            })
                console.log(linksData)
        }

    })
}
        
 module.exports = getLinks;