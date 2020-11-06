const express = require("express");
const router = express.Router();
const multer = require('multer');
const pool = require('../pool.js');
const path = require('path');
const fs = require('fs');

const itemStorage = multer.diskStorage ({
    destination: path.join(__dirname, '..') + '/public/uploads/items',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({storage: itemStorage});

router.post("/item", upload.single("image"), (req, res) => {
    console.log(req);
    try {
        return res.status(201).json ({
            message: 'File uploaded successfully',
        })
    } catch (error) {
        console.log(error);
    }
});

router.get('/restaurant/:filename', (req, res) => {
    console.log("hiii")
    const image = path.join(__dirname, '..') + 
    '/public/uploads/items/' + 
    req.params.filename;
    console.log(image);

    if(fs.existsSync(image)) {
        res.sendFile(image);
    }
});

module.exports = router;