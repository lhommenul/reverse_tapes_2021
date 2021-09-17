const jwt = require('jsonwebtoken');
const db = require("./db");
const User = require('./schema/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

require('dotenv').config();

const setToken = (user_name = String,user_first_name= String,user_email= String,user_password= String,is_admin=false)=>{
    return jwt.sign({
        name:user_name,
        first_name:user_first_name,
        password:user_password,
        email:user_email,
        is_admin:is_admin
    }, process.env.SECRET_TOKEN);
}

const isAuth = (req, res, next)=>{

} 

const isAdmin = (req, res, next)=>{
    if (req.cookies.rv_token) {
        console.log("cookie : "+req.cookies.rv_token);
        jwt.verify(req.cookies.rv_token, process.env.SECRET_TOKEN, function(err, decoded_token) { 
            if (err) {
                throw err;
            } else {
         
                console.log(decoded_token);
                User.findOne({email:decoded_token.email,password:decoded_token.password})
                .then(data=>{
                    console.log("user is connected");
                    next();
                })
                .catch(err=>{
                    res.clearCookie("rv_token");
                    console.error("error in the cookie");
                    res.send({message:"cookie has been regenerated"})
                })

            }
        })
    }else{
        console.log("not connected");

        res.redirect(process.env.VUE_ADDRESS+":"+process.env.VUE_PORT+'/#/connection');
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
                    

                    User.findOne({name:req.body.name,first_name:req.body.first_name,email:req.body.email,password:hash})
                    .then(data=>{
                        console.log(data);
                    })
                    .catch(err=>{
                        throw err;
                    })
                    
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

