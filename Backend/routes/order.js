const express = require("express");
const router = express.Router();
// const passwordHash = require('password-hash');
const pool = require('../pool.js');
var kafka = require('../kafka/client');
const { checkAuth } = require('../Utils/passport');

router.get('/:user_id', checkAuth, (req, res) => {
  console.log(req.params.user_id)
  kafka.make_request("orders_topic", { "path": "getUserOrders", "id": req.params.user_id }, function (err, results) {
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

router.get('/rest/:rest_id', checkAuth,  (req, res) => {
  console.log(req.params.rest_id)
  kafka.make_request("orders_topic", { "path": "getRestOrders", "id": req.params.rest_id }, function (err, results) {
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

router.get('/:user_id/:order_status', (req, res) => {
  console.log(req.params.rest_id)
  kafka.make_request("orders_topic", { "path": "getOrderStatus", "id": req.params.user_id, "status": req.params.order_status }, function (err, results) {
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

router.post('/', (req, res) => {
  kafka.make_request("orders_topic", { "path": "addOrder", "body": req.body }, function (err, results) {
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

  router.post('/update', checkAuth, (req, res) => {
    console.log(req.params)
  kafka.make_request("orders_topic", { "path": "updateOrderStatus", "id": req.body.order_id, "status": req.body.order_status }, function (err, results) {
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