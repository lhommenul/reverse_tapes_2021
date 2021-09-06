let jwt = require('jsonwebtoken');

require('dotenv').config();

const setToken = (user_name = String,user_first_name= String,user_email= String)=>{
    return jwt.sign({
        name:user_name,
        first_name:user_first_name,
        email:user_email
    }, process.env.SECRET_TOKEN);
}

const checkToken = (req, res, next)=>{
    if (req.cookies.rv_token) {
        jwt.verify(req.cookies.rv_token, process.env.SECRET_TOKEN, function(err, decoded_token) {
            if (err) {
                throw err;
            } else {
                console.log(decoded_token);
            }
        });
    } else {
        console.error("There is no token");
    }
    next(); // Must be changed for the prod
    console.log(`Current time is ${new Date().getTime()}`)
}


module.exports = {
    checkToken,
    setToken
}

