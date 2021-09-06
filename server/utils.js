const sharp = require('sharp');
const db = require('./db');

const minifyAndStore = (file_buffer,height=1000,width=1000)=>{
    const file_name = `picture_${new Date().getTime()}_${Math.floor(Math.random()*100000)}.webp`;
    const path = `./public/pictures`;
    const minified_picture =  sharp(file_buffer)
        .toFile(`${path}/${file_name}`, (err, info) => { 
            if (err) {
                throw err;
            } else {
                console.log(info);
            }
    });

    const query = `CALL add_picture('${path}','${file_name}')` 

    db.query(query,(err,result)=>{
        if (err) {
            throw err;
        } else {
            console.log(result);
        }
    })

    return minified_picture;
}

module.exports = {
    minifyAndStore
}