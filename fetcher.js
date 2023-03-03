
const args = process.argv.splice(2);
const fs = require('fs/promises');
const request = require('request');

const readUrl = function(url){
  request(url, async (err,response,body) => {
    if(!err){
      if(response.statusCode === 200)
   { await fs.writeFile(args[0], body);
    console.log(`Downloaded and saved ${body.length} bytes to ${args[0]}`)}
    }
   


});

}
  
readUrl(args[1])
