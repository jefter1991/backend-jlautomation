const connection = require('../database/connection');

var req = require('request');

module.exports = {

   inverterRelay(request, response) {
      const {dev_ip, status, port} = request.body;
      if(port == 1){
        req(`http://${dev_ip}/gpio/${status}`, function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          console.log('body:', body); // Print the HTML for the Google homepage.
        });
        return response.json(response.statusCode);
      }else{
        //enviando a porta
        req(`http://${dev_ip}/gpio/${port}/${status}`, function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          console.log('body:', body); // Print the HTML for the Google homepage.
        });
      }
          
  } 

}