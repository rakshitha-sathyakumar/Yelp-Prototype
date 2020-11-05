const express = require("express");
const router = express.Router();
// const passwordHash = require('password-hash');
const pool = require('../pool.js');
var kafka = require('../kafka/client');

router.get('/:user_id', (req, res) => {
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
//     let sql = `CALL get_order('${req.params.user_id}');`;
//     pool.query(sql, (err, result) => {
//         console.log(result);
//       if (err) {
//         res.writeHead(500, {
//           'Content-Type': 'text/plain'
//         });
//         res.end("Error in Data");
//       }
//       if (result && result.length > 0 && result[0][0]) {
//         res.writeHead(200, {
//           'Content-Type': 'text/plain'
//         });
//         //console.log(result[0]);
//         res.end(JSON.stringify(result[0]));
//       }
//     });
// });

router.get('/rest/:rest_id', (req, res) => {
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
//     let sql = `CALL get_restOrder('${req.params.rest_id}');`;
//     pool.query(sql, (err, result) => {
//         console.log(result);
//       if (err) {
//         res.writeHead(500, {
//           'Content-Type': 'text/plain'
//         });
//         res.end("Error in Data");
//       }
//       if (result && result.length > 0 && result[0][0]) {
//         res.writeHead(200, {
//           'Content-Type': 'text/plain'
//         });
//         //console.log(result[0]);
//         res.end(JSON.stringify(result[0]));
//       }
//     });
// });

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
//     let sql = `CALL get_orderStatus('${req.params.user_id}', '${req.params.order_status}');`;
//     pool.query(sql, (err, result) => {
//         // console.log(result);
//       if (err) {
//         res.writeHead(500, {
//           'Content-Type': 'text/plain'
//         });
//         res.end("Error in Data");
//       }
//       if (result && result.length > 0 && result[0][0]) {
//         res.writeHead(200, {
//           'Content-Type': 'text/plain'
//         });
//         //console.log(result[0]);
//         res.end(JSON.stringify(result[0]));
//       }
//     });
// });

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
  //   let sql = `CALL add_order('${req.body.user_id}', ' ${req.body.dish_id}', ' ${req.body.rest_id}', '${req.body.dish_name}', '${req.body.rest_name}', '${req.body.order_type}', '${req.body.first_name}', '${req.body.last_name}', '${req.body.date}', '${req.body.time}');`;
  //   pool.query(sql, (err, result) => {
  //       console.log(err);
  //     if (err) {
  //       res.end("Error in Data");
  //     }
  //     if (result && result.length > 0 && result[0][0].status === 'ORDER_ADDED') {
  //       res.end(result[0][0].status);
  //     }
  //   });
  // });

  router.post('/update', (req, res) => {
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
  //   let sql = `CALL update_orderStatus('${req.body.order_id}', ' ${req.body.order_status}');`;
  //   pool.query(sql, (err, result) => {
  //       console.log(err);
  //     if (err) {
  //       res.end("Error in Data");
  //     }
  //     if (result && result.length > 0 && result[0][0].status === 'ORDER_UPDATED') {
  //       res.end(result[0][0].status);
  //     }
  //   });
  // });

  module.exports = router;