const express = require("express");
const router = express.Router();
const passwordHash = require('password-hash');
const pool = require('../pool.js');


router.get('/:rest_id', (req, res) => {
      let sql = `CALL get_events('${req.params.rest_id}');`;
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

router.get('/', (req,res) => {
  let sql = `CALL get_allEvents();`;
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

router.get('/eventDetails/:event_id', (req,res) => {
  let sql = `CALL get_userEvent('${req.params.event_id}');`;
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

router.get('/user/:user_id', (req, res) => {
  let sql = `CALL get_regEvents('${req.params.user_id}');`;
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