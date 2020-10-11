const express = require("express");
const router = express.Router();
// const passwordHash = require('password-hash');
const pool = require('../pool.js');


router.get('/:rest_id/:dish_id', (req, res) => {
    let sql = `CALL get_editDish('${req.params.rest_id}', '${req.params.dish_id}');`;
    console.log(sql)
    pool.query(sql, (err, result) => {
        console.log(result);
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'text/plain'
        });
        res.end("Error in Data");
      }
      if (result && result.length > 0 && result[0][0]) {
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        //console.log(result[0]);
        res.end(JSON.stringify(result[0]));
      }
    });
});

router.post('/', (req, res) => {
  console.log(req.params.rest_id);
    let sql = `CALL update_dish('${req.body.rest_id}', '${req.body.dish_id}', '${req.body.dish_name}', '${req.body.ingredients}', '${req.body.price}', '${req.body.description}', '${req.body.category}');`;
    pool.query(sql, (err, result) => {
      console.log(result);
      if (err) {
        console.log(err);
        res.writeHead(500, {
          'Content-Type': 'text/plain'
        });
        res.end("Error in Data");
      }
      if (result && result.length > 0 && result[0][0].status === 'DISH_UPDATED') {
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        console.log(result[0][0].status);
        res.end(result[0][0].status);
      }
      else if (result && result.length > 0 && result[0][0].status === 'NO_RECORD') {
        res.writeHead(401, {
          'Content-Type': 'text/plain'
        });
        res.end(result[0][0].status);
      }
    });
  });

module.exports = router;