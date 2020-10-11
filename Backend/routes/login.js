const express = require("express");
const router = express.Router();
const passwordHash = require('password-hash');
const pool = require('../pool.js');

var app = express();

router.post('/', (req, res) => {
    let sql = `CALL get_password('${req.body.email}');`;
    pool.query(sql, (err, result) => {
        console.log(result);
      if (err) {
        // res.writeHead(500, {
        //   'Content-Type': 'text/plain'
        // });
        res.send("Database Error");
      }
      if (result && result.length > 0 && result[0][0].status) {
        if (result[0][0].user_id && result[0][0].password === req.body.password) {
          let userObject = {
            user_id: result[0][0].user_id,
            first_name: result[0][0].first_name,
            last_name: result[0][0].last_name,
            email: result[0][0].email,
          };
          res.end(JSON.stringify(userObject))
        } 
        else if (result[0][0].rest_id && result[0][0].password === req.body.password) {
          userObject = {
            rest_id: result[0][0].rest_id,
            name: result[0][0].name,
            email: result[0][0].email,
            address: result[0][0].address,
            zipcode: result[0][0].zipcode,
          };
          res.end(JSON.stringify(userObject))
        } else {
          res.end("INCORRECT_PASSWORD");
        }
      } else {
        res.end("NO_USER");
      }
    });
  });

module.exports = router;