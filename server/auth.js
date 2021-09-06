let jwt = require('jsonwebtoken');
require('dotenv').config();


const user_informations = { foo: 'bar' };

let token = jwt.sign(user_informations, process.env.SECRET_TOKEN);


const auth = (req, res, next)=>{

    console.log(`Current time is ${new Date().getTime()}`)
    
    next();
    
}


module.exports = {auth}

