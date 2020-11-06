const express = require("express");
const router = express.Router();
const passwordHash = require('password-hash');
const pool = require('../pool.js');
var kafka = require('../kafka/client');


router.get('/appetizer/:rest_id', (req, res) => {
  console.log(req.params.rest_id);
  kafka.make_request("restSignUp_topic", { "path": "getRestMenu", "id": req.params.rest_id, "category": 'Appetizer' }, function (err, results) {
    //console.log("In make request call back");
    console.log(results);
    if (err) {
      console.log("Inside err");
      console.log(err);
      return res.status(err.status).send(err.message);
    } else {
      console.log("Inside else", results);
      if (results.status === 200) {
        return res.status(results.status).send(results.data);
      } else {
        return res.status(results.status).send(results.errors);
      }
    }
  })
  })

router.get('/maincourse/:rest_id', (req, res) => {
  console.log(req.params.rest_id);
  kafka.make_request("restSignUp_topic", { "path": "getRestMenu", "id": req.params.rest_id, "category": 'Main course' }, function (err, results) {
    console.log("In make request call back");
    console.log(results.data);
    if (err) {
      console.log("Inside err");
      console.log(err);
      return res.status(err.status).send(err.message);
    } else {
      console.log("Inside else", results);
      if (results.status === 200) {
        return res.status(results.status).send(results.data);
      } else {
        return res.status(results.status).send(results.errors);
      }
    }
  })
  })

router.get('/salad/:rest_id', (req, res) => {
  console.log(req.params.rest_id);
  kafka.make_request("restSignUp_topic", { "path": "getRestMenu", "id": req.params.rest_id, "category": 'Salads' }, function (err, results) {
    //console.log("In make request call back");
    console.log(results.data);
    if (err) {
      console.log("Inside err");
      console.log(err);
      return res.status(err.status).send(err.message);
    } else {
      console.log("Inside else", results);
      if (results.status === 200) {
        return res.status(results.status).send(results.data);
      } else {
        return res.status(results.status).send(results.errors);
      }
    }
  })
  })


router.get('/dessert/:rest_id', (req, res) => {
    console.log(req.params.rest_id);
    kafka.make_request("restSignUp_topic", { "path": "getRestMenu", "id": req.params.rest_id, "category": 'Dessert' }, function (err, results) {
      //console.log("In make request call back");
      console.log(results.data);
      if (err) {
        console.log("Inside err");
        console.log(err);
        return res.status(err.status).send(err.message);
      } else {
        console.log("Inside else", results);
        if (results.status === 200) {
          return res.status(results.status).send(results.data);
        } else {
          return res.status(results.status).send(results.errors);
        }
      }
    })
    })


router.get('/beverage/:rest_id', (req, res) => {
  console.log(req.params.rest_id);
    kafka.make_request("restSignUp_topic", { "path": "getRestMenu", "id": req.params.rest_id, "category": 'Beverage' }, function (err, results) {
      //console.log("In make request call back");
      console.log(results.data);
      if (err) {
        console.log("Inside err");
        console.log(err);
        return res.status(err.status).send(err.message);
      } else {
        console.log("Inside else", results);
        if (results.status === 200) {
          return res.status(results.status).send(results.data);
        } else {
          return res.status(results.status).send(results.errors);
        }
      }
    })
    })

router.get('/:rest_id', (req, res) => {
  console.log(req.params.rest_id);
    kafka.make_request("userSignUp_topic", { "path": "getMenu", "id": req.params.rest_id}, function (err, results) {
      //console.log("In make request call back");
      console.log(results.data[0].menu);
      if (err) {
        console.log("Inside err");
        console.log(err);
        return res.status(err.status).send(err.message);
      } else {
        console.log("Inside else", results);
        if (results.status === 200) {
          return res.status(results.status).send(results.data[0].menu);
        } else {
          return res.status(results.status).send(results.errors);
        }
      }
    })
    })
    
module.exports = router;