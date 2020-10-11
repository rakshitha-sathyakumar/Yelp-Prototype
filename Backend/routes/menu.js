const express = require("express");
const router = express.Router();
const passwordHash = require('password-hash');
const pool = require('../pool.js');


router.get('/appetizer/:rest_id', (req, res) => {
      let sql = `CALL get_appetizer('${req.params.rest_id}');`;
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

router.get('/maincourse/:rest_id', (req, res) => {
    let sql = `CALL get_maincourse('${req.params.rest_id}');`;
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

router.get('/salad/:rest_id', (req, res) => {
    let sql = `CALL get_salad('${req.params.rest_id}');`;
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

router.get('/dessert/:rest_id', (req, res) => {
    let sql = `CALL get_dessert('${req.params.rest_id}');`;
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

router.get('/beverage/:rest_id', (req, res) => {
    let sql = `CALL get_beverage('${req.params.rest_id}');`;
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

router.get('/:rest_id', (req, res) => {
  let sql = `CALL get_userDishes('${req.params.rest_id}');`;
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




    module.exports = router;