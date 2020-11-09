const express = require("express");
const router = express.Router();
// const passwordHash = require('password-hash');
const pool = require('../pool.js');
var kafka = require('../kafka/client');
const { checkAuth } = require('../Utils/passport');

router.post('/', checkAuth, (req, res) => {
  console.log("I am in the backend post method")
  console.log(req.body.rest_id);
  console.log("Byeee")
    kafka.make_request("restSignUp_topic", { "path": "addRestMenu", "id": req.body.rest_id, "body": req.body }, function (err, results) {
      //console.log("In make request call back");
      console.log(results);
      if (err) {
        console.log("Inside err");
        console.log(err);
        return res.status(err.status).send(err.message);
      } else {
        console.log("Inside else", results);
        if (results.status === 200) {
          return res.end(results.message);
        } else {
          return res.end(results.message);
        }
      }
    })
    })

  module.exports = router;