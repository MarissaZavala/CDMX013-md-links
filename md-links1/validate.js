const axios = require('axios');
const chalk = require('chalk');

const validateLinks = (arrayLinks) => {
   let request = (arrayLinks.map((object) =>{
   return axios.get(object.href).then((response) => {
        const statusObj = {
          ...object,
          status: response.status,
          statusText: 'ok',
        };
        return console.log((chalk.inverse.rgb(255,255,186)('STATUS 200')), statusObj); /*retornar statusObj y luego .then console.log*/
      })
      .catch((error) => {
           const statusObj = {
            ...object,
            status: error.response.status,
            statusText: 'fail',
          };
          return console.log((chalk.inverse.rgb(255,255,186)('STATUS 404')), statusObj);
            });
        }));
        return request
    };
    

module.exports = validateLinks;