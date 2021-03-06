const express = require('express')
const router = express.Router();
const db = require('./db');
const {minifyAndStore} = require('./utils');
const {isAdmin} = require('./auth');
const Product = require('./schema/Product')
const Event = require('./schema/Event')
const fs = require('fs');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// router.use(isAdmin)

// INSERT

router.post('/addpicture', async (req, res) => {

        if (req.files) { // files are in the body

            if (!req.files.image.length) { // there is one image

                res.status(200).send(await minifyAndStore(req.files.image.data))

            }else{ // multiple images

                (async ()=>{

                    try {
                        let list_id_picture = []
                        
                        for (let index = 0; index < req.files.image.length; index++) {

                            const image = req.files.image[index];
                            list_id_picture.push(await minifyAndStore(image.data))

                        }

                        res.status(200).send(list_id_picture);

                    } catch (error) {   

                        res.status(400).send({message:"error while adding images"});

                    }

                })();
            }
        } else {
            res.sendStatus(400).send({message:"error no img in the body"});
        }
})

router.post('/addproduct', (req, res) => {
    if (req.files.thumbnail && typeof req.files.thumbnail === "object") { // check if thhere is a thumbnail

        minifyAndStore(req.files.thumbnail.data)
        .then(data_thumbnail=>{ // the thumbnail has been saved and stored inside the bdd 
            pictures(["/static/pictures/"+data_thumbnail.file_name])
        })
        .catch(err=>{
            console.log(err);
            res.status(400).send({message:"error when minifying images"});
        })

    }else{
        console.error("erreur");
        res.status(400).send({message:"error with the thumbnail"});
    }


    const pictures = async (data_thumbnail)=>{
        if (req.files && req.files.picture) { // check if there is files

            if (!req.files.picture.length) { // if there is only one image
                
                addProduct({thumbnail:data_thumbnail,pictures:"/static/pictures/"+(await minifyAndStore(req.files.picture.data)).file_name})
    
            }else{ // if there is multiple images
    
                (async ()=>{
    
                    try {
                        let list_id_picture = []
                        for (let index = 0; index < req.files.picture.length; index++) {
    
                            const picture = req.files.picture[index];
                            list_id_picture.push("/static/pictures/"+(await minifyAndStore(picture.data)).file_name)
    
                        }
                        
                        addProduct({thumbnail:data_thumbnail,pictures:list_id_picture})
    
                    } catch (error) {   
                        console.log(error);
                        res.status(400).send({message:"error while adding pictures"});
    
                    }
    
                })();
            }
        } else {
            console.log("error");
            res.sendStatus(400)
        }        
    }

    const addProduct = ({thumbnail,pictures})=>{
        if (req.body.name && req.body.description && req.body.price_ttc && req.body.price_ht && req.body.quantity){
            Product({
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
                color:req.body.color,
                thumbnail:thumbnail,
                pictures:pictures,
                size:req.body.size,
                bandcamp:req.body.bandcamp,
                come_to_get_it:req.body.come_to_get_it,
                price_ttc:req.body.price_ttc,
                price_ht:req.body.price_ht,
                quantity:req.body.quantity
            })
            .save()
            .then(()=>{ // Product has been added
                res.status(200).send({message:"token has been created"});            
            })
            .catch(err=>{
                console.log(err);
                res.status(400).send({message:"error while checking data in the form"})
            })
    
        }else{
            res.status(400).send({message:"error while checking data in the form"})
        }
    }
})

router.post('/addband', (req, res) => {
    
    
    if (req.body.name && req.body.description){

        let query = `INSERT INTO band (name,description) VALUES ("${req.body.name}","${req.body.description}");`;
        
        db.query(query, function (err, result) {
            if (err) throw err;
            else{
                let query = "INSERT INTO band_has_image (band_id, picture_id) VALUES ?";
                let values = [];
                // console.log(req.body.list_id);
                if (!req.body.list_id.length) {
                    
                    query = `INSERT INTO band_has_image (band_id, picture_id) VALUES (${result.insertId},${req.body.list_id.date_id})`;

                } else {
                    
                    req.body.list_id.forEach(element => {
                        values.push([result.insertId,element.date_id]);    
                    });

                }

                db.query(query, [values] ,function (err, result) {
                    if (err) {
                        throw err;
                    } else {
                        console.log(result);
                    }
                })

                res.status(200).send({message:"Band has been added"});
            }
        });
    }else{
        res.status(400).send({message:"error while checking data in the form"})
    }
})

router.post('/addevent', async (req, res) => {
    
    if (req.body.name && req.body.description && req.body.location && req.body.date_start && req.body.date_end && req.body.hour_start && req.body.hour_end){
        if (req.files) { // check if there is files 
            let event = {
                name: req.body.name,
                description: req.body.description,
                location:req.body.location,
                price:req.body.price,
                // thumbnail:Array, // 1:1 format 
                // thumbnail_large:Array, // 4:1
                // pictures:Array, // // 1:1 format
                date_start:req.body.date_start,
                date_end:req.body.date_end,
                hour_start:req.body.hour_start,
                hour_end:req.body.hour_end,
                bands:req.body.bands.reduce((acc,band)=>{ 
                    try {
                        return acc.concat(JSON.parse(band))
                    } catch (error) {
                        console.error("error");
                        return acc;
                    }
                },[])
            }

            if(req.files.thumbnail && req.files.thumbnail_large){

                event.thumbnail_large = ["/static/pictures/"+(await minifyAndStore(req.files.thumbnail.data,575,400)).file_name];

                event.thumbnail = ["/static/pictures/"+(await minifyAndStore(req.files.thumbnail_large.data)).file_name];

            }else if (req.files.thumbnail){ 

                event.thumbnail_large = ["/static/pictures/"+(await minifyAndStore(req.files.thumbnail.data)).file_name];

            }else if (req.files.thumbnail_large){

                event.thumbnail = ["/static/pictures/"+(await minifyAndStore(req.files.thumbnail_large.data,575,400)).file_name];

            }else{
                res.status(400).send({message:"there is no thumbnail or thumbnail_large"})        
            }

            try { // save the event in the bdd
                Event(event)
                .save()
                .then(()=>{
                    res.status(200).send({message:"event saved"})
                })
                .catch(error=>{
                    console.log(error);
                    res.status(400).send({message:"error while saving the event in the bdd"})            
                })
            } catch (error) {
                res.status(400).send({message:"error while saving the event in the bdd"})            
            }

        }else{
            res.status(400).send({message:"there is no files"})    
        }

    }else{
        res.status(400).send({message:"error while checking data in the form"})
    }
})

// DELETE 

router.post('/deleteproduct', (req, res) => {
    if (req.body.id){
    
        const query = `DELETE FROM product WHERE id=${req.body.id}`;
        
        db.query(query, function (err, result) {
            if (err) throw err;
            else{
                console.log("Product has been deleted");
                res
                    .status(200)
                    .send({message:"product has been deleted"});
            }
        });

    }else{
        res.status(400).send({message:"error while deleting data"})
    }
})

router.post('/deletepicture',(req,res)=>{
    console.log(req.body);
    if (req.body.date_id) {
        const query = `CALL delete_picture(${req.body.date_id})`
        db.query(query, function (err, result) {
            if (err) throw err;
            else{
                const path = req.body.picture_path+"/"+req.body.file_name;
                fs.unlink(path,(err=>{
                    if (err) {
                        console.error(err);
                        res.status(400).send();
                    } else {                        
                        console.log("Picture has been deleted has been deleted");
                        res.status(200).send({message:"Picture has been deleted has been deleted"});
                    }
                }))
            }
        });

    } else {
        res.status(400).send()
    }
})

router.post('/deleteproduct', (req, res) => {
    if (req.body.id){
    
        const query = `DELETE FROM product WHERE id=${req.body.id}`;
        
        db.query(query, function (err, result) {
            if (err) throw err;
            else{
                console.log("Product has been deleted");
                res
                    .status(200)
                    .send({message:"product has been deleted"});
            }
        });

    }else{
        res.status(400).send({message:"error while deleting data"})
    }
})

router.post('/deleteband', (req, res) => {
    if (req.body.id){
        // delete band_hhas_image
        const query = `DELETE FROM band_has_image WHERE band_id=${req.body.id}`;

        // delete pictures
        // `DELETE FROM picture WHERE date_id=${req.body.id}`;

        db.query(query, function (err, result) {
            if (err) throw err;
            else{
                console.log("Product has been deleted");
                res
                    .status(200)
                    .send({message:"product has been deleted"});
            }
        });

    }else{
        res.status(400).send({message:"error while deleting data"})
    }
})

// GET
router.post('/getuser',(req, res) => {
    console.log(req.cookies);
    res.status(200).send({
        id:"dsqdsq",
        name:'dsq'
    })
})



module.exports = router;