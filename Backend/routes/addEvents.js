'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
var kafka = require('../kafka/client');
const { checkAuth } = require('../Utils/passport');


router.post('/', checkAuth, (req, res) => {
  kafka.make_request("events_topic", { "path": "createEvent", "body": req.body }, function (err, results) {
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

  router.post('/update', checkAuth, (req, res) => {
    console.log(req.body.event_id);
    kafka.make_request("events_topic", { "path": "addEventRegis", "id": req.body.event_id, "body": req.body }, function (err, results) {
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