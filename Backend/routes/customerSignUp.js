const express = require("express");
const router = express.Router();
// const passwordHash = require('password-hash');
const pool = require('../pool.js');

router.post('/', (req, res) => {
    let sql = `CALL add_customer('${req.body.first_name}', '${req.body.last_name}','${req.body.email}', '${req.body.password}');`;
  
    pool.query(sql, (err, result) => {
        console.log(result);
      if (err) {
        // res.writeHead(500, {
        //   'Content-Type': 'text/plain'
        // });
        res.end("Error in Data");
      }
      if (result && result.length > 0 && result[0][0].status === 'USER_ADDED') {
        // res.writeHead(200, {
        //   'Content-Type': 'text/plain'
        // })
        res.end(result[0][0].status);
      }
      else if (result && result.length > 0 && result[0][0].status === 'USER_EXISTS') {
        // res.writeHead(401, {
        //   'Content-Type': 'text/plain'
        // })
        res.end(result[0][0].status);
      }
    });
  });

  module.exports = router;