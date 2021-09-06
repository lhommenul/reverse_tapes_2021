var express = require('express')
var router = express.Router();
const db = require('./db');
const {minifyAndStore} = require('./utils');

router.post('/adduser', function (req, res) {
    const query = "INSERT INTO `user` (`name`,`first_name`,`email`) VALUES ('"+req.body.name+"','"+req.body.first_name+"','"+req.body.email+"')";
    db.query(query, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    res.send('ok');
})

router.post('/addpicture', function (req, res) {
        if (req.files) {
            req.files.pictures.forEach(file => {
                minifyAndStore(file.data)
            });
        } else {
            
        }
        res.sendStatus(200)
    // const query = "CALL `picture`("+picture_path+","+file_name+")";
})


module.exports = router;