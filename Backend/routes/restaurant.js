const express = require("express");
const router = express.Router();
const passwordHash = require('password-hash');
const pool = require('../pool.js');

router.get('/:rest_id', (req, res) => {
    let sql = `CALL get_restaurant('${req.params.rest_id}');`;
    pool.query(sql, (err, result) => {
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
        res.end(JSON.stringify(result[0][0]));
      }
    });
  });


router.post('/update/:rest_id', (req, res) => {
  console.log(req.params.rest_id);
    let sql = `CALL update_restaurant('${req.params.rest_id}', '${req.body.name}', '${req.body.street}','${req.body.city}','${req.body.zipcode}', '${req.body.email}', '${req.body.contact_info}', '${req.body.timings}','${req.body.cuisine}', '${req.body.delivery_method}', '${req.body.fileText}');`;
    pool.query(sql, (err, result) => {
      // console.log(result);
      if (err) {
        console.log(err);
        res.writeHead(500, {
          'Content-Type': 'text/plain'
        });
        res.end("Error in Data");
      }
      if (result && result.length > 0 && result[0][0].status === 'RESTAURANT_UPDATED') {
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
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


  router.get('/', (req, res) => {
      let sql = `CALL get_allRestaurant();`;
      pool.query(sql, (err, result) => {
        // console.log(result);
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

    
  


module.exports=router;