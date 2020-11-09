const express = require("express");
const router = express.Router();
// const passwordHash = require('password-hash');
const pool = require('../pool.js');
var kafka = require('../kafka/client');
const { checkAuth } = require('../Utils/passport');


router.get('/:rest_id/:dish_id', (req, res) => {
  console.log(req.params.user_id);
  kafka.make_request("restSignUp_topic", { "path": "getDishDetails", "restId": req.params.rest_id, "dishId": req.params.dish_id }, function (err, results) {
    console.log(results.data[0].menu);
    console.log("In make request call back", results);
    if (err) {
      console.log("Inside err");
      console.log(err);
      return res.status(err.status).send(err.message);
    } else {
      //console.log("Inside else", results);
      if (results.status === 200) {
        return res.status(results.status).send(results.data[0].menu[0]);
      } else {
        return res.status(results.status).send(results.errors);
      }
    }
  })
})

router.post('/', checkAuth, (req, res) => {
  console.log(req.body.rest_id);
  console.log(req.body.user_id)
  kafka.make_request("restSignUp_topic", { "path": "updateDishDetails", "body": req.body, "restId": req.body.rest_id, "dishId": req.body.dish_id }, function (err, results) {
    console.log(results);
    console.log("In make request call back", results);
    if (err) {
      console.log("Inside err");
      console.log(err);
      return res.status(err.status).send(err.message);
    } else {
      //console.log("Inside else", results);
      if (results.status === 200) {
        return res.end(results.status);
      } else {
        return res.end(results.status);
      }
    }
  })
  });

module.exports = router;