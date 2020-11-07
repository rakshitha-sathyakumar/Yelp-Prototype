const express = require("express");
const router = express.Router();
// const passwordHash = require('password-hash');
const pool = require('../pool.js');
var kafka = require('../kafka/client');

router.post('/initiate', (req, res) => {
    console.log(req.params)
    kafka.make_request("messages_topic", { "path": "addRestMessage", "id": req.body.orderId, "body": req.body}, function (err, results) {
    console.log(results);
    console.log("In make request call back", results);
    if (err) {
      console.log("Inside err");
      console.log(err);
      return res.status(err.status).send(err.message);
    } else {
      //console.log("Inside else", results);
      if (results.status === 200) {
        return res.send(results.message);
      } else {
        return res.status(results.status).send(results.errors);
      }
    }
  })
})

// route.get('/userMessages/:user_id', req, res) => {
//     kafka.make_request("messages_topic", { "path": "getUserMessage", "id": req.params.user_id}, function (err, results) {
//         console.log(results);
//         console.log("In make request call back", results);
//         if (err) {
//           console.log("Inside err");
//           console.log(err);
//           return res.status(err.status).send(err.message);
//         } else {
//           //console.log("Inside else", results);
//           if (results.status === 200) {
//             return res.status(results.status).send(results.data);
//           } else {
//             return res.status(results.status).send(results.errors);
//           }
//         }
//       })
// }

module.exports = router;