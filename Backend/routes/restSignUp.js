'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
var kafka = require('../kafka/client');
//const validate = require('../../validation/signupLogin');
//const passportAuth = passport.authenticate('jwt', { session: false });

router.post('/', (req, res) => {
kafka.make_request("restSignUp_topic", { "path": "restSignUp", "body": req.body }, function (err, results) {
//console.log("In make request call back");
console.log(results);
if (err) {
  console.log("Inside err");
  console.log(err);
  return res.status(err.status).send(err.message);
} else {
  //console.log("Inside else", results);
  if (results.status === 200) {
    return res.end(results.message);
  } else {
    return res.end(results.message);
  }
}
})
})



module.exports = router;