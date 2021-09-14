const sharp = require('sharp');
const db = require('./db');
const Picture = require('./schema/Picture');

const minifyAndStore = (file_buffer,height=1000,width=1000)=>{
    const file_name = `picture_${new Date().getTime()}_${Math.floor(Math.random()*100000)}.webp`;
    const path = `./public/pictures`;
    return new Promise((resolve,reject)=>{

        sharp(file_buffer)
            .toFile(`${path}/${file_name}`, (err, info) => { 
                if (err) {
                    throw err;
                } else {

                    Picture({
                        file_name: file_name,
                        path_to_file: path,
                    })
                    .save()
                    .then(res=>{
                        resolve(res)
                    })
                    .catch(err=>{
                        reject(err);
                    })

                }
        });
    })
}



module.exports = {
    minifyAndStore
}