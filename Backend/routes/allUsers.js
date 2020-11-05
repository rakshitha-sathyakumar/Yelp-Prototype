const express = require("express");
const router = express.Router();
// const passwordHash = require('password-hash');
const pool = require('../pool.js');
var kafka = require('../kafka/client');



router.get('/:userKeyword', (req, res) => {
    console.log(req.params.userkeyword)
    kafka.make_request("userSignUp_topic", { "path": "userSearchResult", "body": req.params.userKeyword }, function (err, results) {
    console.log(results);
    console.log("In make request call back", results);
    if (err) {
      console.log("Inside err");
      console.log(err);
      return res.status(err.status).send(err.message);
    } else {
      //console.log("Inside else", results);
      if (results.status === 200) {
        return res.status(results.status).send(results.data);
      } else {
        return res.status(results.status).send(results.errors);
      }
    }
  })
  })
  
  module.exports = router;