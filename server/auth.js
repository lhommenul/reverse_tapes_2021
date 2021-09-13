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

const isAuth = (req, res, next)=>{

} 

const isAdmin = (req, res, next)=>{
    if (req.cookies.rv_token) {
        jwt.verify(req.cookies.rv_token, process.env.SECRET_TOKEN, function(err, decoded_token) { 
            if (err) {
                throw err;
            } else {

                console.log(decoded_token);                

                const query = `SELECT * FROM user (email,password) VALUES ('${decoded_token.email}','${decoded_token.password}')`;

                db.query(query, function (err, result) {
                    
                    if (err) throw err;
                    else{
                        console.log(result);
                    }

                });

                next();
            }
        })
    }else{
        console.log("redirect");
        res.redirect('/connection');
    }
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

    }

     // Must be changed for the prod

    console.log(`Current time is ${new Date().getTime()}`)
}

module.exports = {
    checkToken,
    setToken,
    isAuth,
    isAdmin
}

