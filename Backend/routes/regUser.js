const express = require("express");
const router = express.Router();
const passwordHash = require('password-hash');
const pool = require('../pool.js');
var kafka = require('../kafka/client');

router.get('/:event_id', (req, res) => {
  console.log(req.params.event_id)
  kafka.make_request("events_topic", { "path": "userRegList", "id": req.params.event_id}, function (err, results) {
    console.log("In make request call back", results);
    if (err) {
      console.log("Inside err");
      console.log(err);
      return res.status(err.status).send(err.message);
    } else {
      console.log("Inside else");
      console.log(results.data[0].registration);
      if (results.status === 200) {
        return res.status(results.status).send(results.data[0].registration);
      } else {
        return res.status(results.status).send(results.errors);
      }
    }
  })
})

module.exports = router;
