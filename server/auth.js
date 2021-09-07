const jwt = require('jsonwebtoken');
const db = require("./db");
const bcrypt = require('bcrypt');
const saltRounds = 10;

require('dotenv').config();

const setToken = (user_name = String,user_first_name= String,user_email= String,user_password= String,is_admin=Boolean)=>{
    return jwt.sign({
        name:user_name,
        first_name:user_first_name,
        password:user_password,
        email:user_email,
        is_admin:false
    }, process.env.SECRET_TOKEN);
}

const checkToken =  (req, res, next)=>{
    if (req.cookies.rv_token) {
        jwt.verify(req.cookies.rv_token, process.env.SECRET_TOKEN, function(err, decoded_token) {
            if (err) {
                throw err;
            } else {
                console.log("==== TOKEN ====");
                console.log(decoded_token);
                if (decoded_token.is_admin) {
                    
                    const query = `INSERT INTO user (name,first_name,email,password) VALUES ('${req.body.name}','${+req.body.first_name}','${req.body.email}','${hash}')`;

                    db.query(query, function (err, result) {
                        if (err) throw err;
                        else{
                            console.log(result);
                        }
                    });
                    
                }
            }
        });
        next();
    } else {
        if (req.body.email && req.body.password) { // check in the bdd if the user exist

            console.error("There is no token");

            const query = `SELECT * FROM user WHERE email='${req.body.email}';`

             db.query(query,(err,response)=>{
                if (err) {
                    throw err;
                } else {

                     bcrypt.compare(req.body.password, response[0].password, function(err, result) {

                        if (err) { // wrong password 
                            throw err;
                        } else {
                            if (result) {  // if the password are the same

                                const token = setToken(
                                    response[0].name,
                                    response[0].first_name,
                                    response[0].email,
                                    response[0].password,
                                    false
                                );

                                res.cookie("rv_token",token, { maxAge: 900000, httpOnly: true });

                                next();

                            } else {

                                console.error("password doesnt match");

                                res.send({
                                    message:"password doesnt match"
                                })
                            }
                        }
        
                    });
                }
            })

        }else{
            console.error("not the informations requested");
        }
    }

     // Must be changed for the prod

    console.log(`Current time is ${new Date().getTime()}`)
}

module.exports = {
    checkToken,
    setToken,
}

