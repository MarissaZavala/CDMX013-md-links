const chalk = require('chalk');

 const getLinkStats = (arrayLinks) => {
        const totalLinks = (arrayLinks.map((link) => link.href))
        //console.log((chalk.inverse.rgb(255,255,186)('Total Links:')), totalLinks.length)
        
        const uniqueLinks = [... new Set(arrayLinks.map((link) => link.href))]
        //console.log((chalk.inverse.rgb(255,255,186)('Unique Links:')), uniqueLinks.length)
        let result =  console.log((chalk.inverse.rgb(181,238,185)('Stats of Links:')), { total: totalLinks.length, unique:uniqueLinks.length}) 
        console.log('                                                            ')
        // console.log(result)
        return result
        //console.log(chalk.inverse.rgb(210,175,234)('                                                            '))
    }


  /*const statsAndValidation = (arrayLinks) => {
        let statsOfLinks =  getLinkStats(arrayLinks);
        let brokenLinks =  arrayLinks.filter(e => e.status != '200');
        let result = {total: links.length, unique: statsOfLinks.unique, broken: brokenLinks.length}
        return result
    }
 /*const statsAndValidation = (arrayLinks) => {
    const totalLinks = (arrayLinks.map((link) => link.href))
        console.log((chalk.inverse.rgb(255,255,186)('Total Links:')), totalLinks.length)
        
        const uniqueLinks = [... new Set(arrayLinks.map((link) => link.href))]
        console.log((chalk.inverse.rgb(255,255,186)('Unique Links:')), uniqueLinks.length)

        let brokenLinks =  uniqueLinks.filter(e => e.StatusOfRequest != '200');
        console.log((chalk.inverse.rgb(255,255,186)('Broken Links:')), brokenLinks.length)
    }
*/
module.exports = getLinkStats