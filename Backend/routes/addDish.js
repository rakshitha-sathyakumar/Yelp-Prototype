const express = require("express");
const router = express.Router();
// const passwordHash = require('password-hash');
const pool = require('../pool.js');

router.post('/', (req, res) => {
    let sql = `CALL add_dishes("${req.body.rest_id}", "${req.body.dish_name}", "${req.body.ingredients}", "${req.body.price}", "${req.body.description}", "${req.body.category}", "${req.body.fileText}");`;
    console.log(sql);
    pool.query(sql, (err, result) => {
        console.log(err);
      if (err) {
        // res.writeHead(500, {
        //   'Content-Type': 'text/plain'
        // });
        res.end("Error in Data");
      }
      if (result && result.length > 0 && result[0][0].status === 'DISH_ADDED') {
        // res.writeHead(200, {
        //   'Content-Type': 'text/plain'
        // })
        res.end(result[0][0].status);
      }
    //   else if (result && result.length > 0 && result[0][0].status === 'RESTAURANT_EXISTS') {
    //     // res.writeHead(401, {
    //     //   'Content-Type': 'text/plain'
    //     // })
    //     res.end(result[0][0].status);
    //   }
    });
  });

  module.exports = router;