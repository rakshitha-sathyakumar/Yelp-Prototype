'use strict'
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
// const passwordHash = require('password-hash');
// const pool = require('../pool.js');
var kafka = require('../kafka/client');
const { secret } = require('../Utils/config');
const { auth } = require('../Utils/passport');
auth();

// var app = express();

router.post('/', (req, res) => {
  kafka.make_request("login_topic", { "path": "login", "body": req.body }, function (err, results) {
    console.log(results)
    if (err) {
      console.log("Inside err");
      console.log(err);
      return res.status(err.status).send(err.password);
    } 
    if(results.status === 200) {
      const payload = { _id: results.data._id, email: results.data.email};
      const token = jwt.sign(payload, secret, {
      expiresIn: 1008000
      });
      results.data.token = "jwt " + token;
      console.log(results.data);
      // res.status(200).end(results.data + "jwt " + token);
      return res.end(JSON.stringify(results.data));
    } else {
        return res.end(results.message);
      }
    });
    });

module.exports = router;

