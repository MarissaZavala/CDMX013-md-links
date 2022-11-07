const chalk = require('chalk');


/*const getStats = (arrayLinks) => {
    const totalLinks = (arrayLinks.map((element) => element.href))
    console.log((chalk.black.bgYellowBright.bold('Total de Links:')), totalLinks.length)
    
    const uniqueLinks = [... new Set(arrayLinks.map((element) => element.href))]
    console.log((chalk.black.bgYellowBright.bold('Links únicos:')), uniqueLinks.length)
}
*/

module.exports = getStats;