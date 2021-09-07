const jwt = require('jsonwebtoken');
const db = require("./db");
const bcrypt = require('bcrypt');
const saltRounds = 10;

require('dotenv').config();

const setToken = (user_name = String,user_first_name= String,user_email= String,user_password= String)=>{
    return jwt.sign({
        name:user_name,
        first_name:user_first_name,
        password:user_password,
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
        if (req.body.email && req.body.password) { // check in the bdd if the user exist

            console.error("There is no token");

            const query = `SELECT * FROM user WHERE email='${req.body.email}';`

            db.query(query,(err,res)=>{
                if (err) {
                    throw err;
                } else {

                    console.log(res[0].password);

                    bcrypt.compare(req.body.password, res[0].password, function(err, result) {
                        
                        if (err) { // wrong password 
                            throw err;
                        } else {
                            console.log(result);
                        }
        
                    });
                }
            })

        }else{
            console.error("not the informations requested");
        }
    }

    next(); // Must be changed for the prod

    console.log(`Current time is ${new Date().getTime()}`)
}

module.exports = {
    checkToken,
    setToken,
}

