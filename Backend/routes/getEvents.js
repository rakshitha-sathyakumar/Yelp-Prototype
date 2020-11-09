const express = require("express");
const router = express.Router();
const passwordHash = require('password-hash');
const pool = require('../pool.js');
var kafka = require('../kafka/client');
const { checkAuth } = require('../Utils/passport');


router.get('/:rest_id',  (req, res) => {
  console.log(req.params.rest_id)
  kafka.make_request("events_topic", { "path": "getRestEvents", "body": req.params.rest_id }, function (err, results) {
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

router.get('/', (req,res) => {
  kafka.make_request("events_topic", { "path": "getAllEvents"}, function (err, results) {
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


router.get('/eventDetails/:event_id', (req,res) => {
  console.log(req.params.event_id)
  kafka.make_request("events_topic", { "path": "getEventDetails", "body": req.params.event_id}, function (err, results) {
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

router.get('/user/:user_id', checkAuth, (req, res) => {
  console.log(req.params.user_id)
  kafka.make_request("events_topic", { "path": "userRegistration", "id": req.params.user_id}, function (err, results) {
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