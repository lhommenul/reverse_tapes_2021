const sharp = require('sharp');
const fs = require('fs');

fs.readFile('./public/pochette_1.jpg',(err,data)=>{
    if (err) {
        throw err;
    } else {
        sharp(data)
          .resize(1000, 1000)
          .toFile('test.webp', (err, info) => { 
              if (err) {
                  throw err;
              } else {
                  console.log(info);
              }
           });
    }
})

module.exports = {
    sharp
}