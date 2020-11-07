const express = require("express");
const router = express.Router();
// const passwordHash = require('password-hash');
const pool = require('../pool.js');
var kafka = require('../kafka/client');


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

router.post('/', (req, res) => {
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
        return res.end(results.message);
      } else {
        return res.end(results.message);
      }
    }
  })
  });
  //   let sql = `CALL update_dish('${req.body.rest_id}', '${req.body.dish_id}', '${req.body.dish_name}', '${req.body.ingredients}', '${req.body.price}', '${req.body.description}', '${req.body.category}');`;
  //   pool.query(sql, (err, result) => {
  //     console.log(result);
  //     if (err) {
  //       console.log(err);
  //       res.writeHead(500, {
  //         'Content-Type': 'text/plain'
  //       });
  //       res.end("Error in Data");
  //     }
  //     if (result && result.length > 0 && result[0][0].status === 'DISH_UPDATED') {
  //       res.writeHead(200, {
  //         'Content-Type': 'text/plain'
  //       });
  //       console.log(result[0][0].status);
  //       res.end(result[0][0].status);
  //     }
  //     else if (result && result.length > 0 && result[0][0].status === 'NO_RECORD') {
  //       res.writeHead(401, {
  //         'Content-Type': 'text/plain'
  //       });
  //       res.end(result[0][0].status);
  //     }
  //   });
  // });

module.exports = router;