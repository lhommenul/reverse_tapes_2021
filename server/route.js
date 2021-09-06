var express = require('express')
var router = express.Router();
const db = require('./db');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', function (req, res) {
    res.send('Birds home page')
})

router.post('/adduser', function (req, res) {
    const query = "INSERT INTO `user` (`name`,`first_name`,`email`) VALUES ('"+req.body.name+"','"+req.body.first_name+"','"+req.body.email+"')";
    db.query(query, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    res.send('ok');
})

const query = "CALL add_picture('path/test/ducfichier.jpg','ducfichier.jpg')";


module.exports = router;