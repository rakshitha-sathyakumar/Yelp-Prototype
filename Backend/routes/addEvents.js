const express = require("express");
const router = express.Router();
// const passwordHash = require('password-hash');
const pool = require('../pool.js');

router.post('/', (req, res) => {
    let sql = `CALL add_events(' ${req.body.rest_id}', '${req.body.event_name}', '${req.body.description}', '${req.body.time}', '${req.body.date}', '${req.body.location}', '${req.body.hashtag}');`;
    console.log(sql);
    pool.query(sql, (err, result) => {
        console.log(err);
      if (err) {
        res.end("Error in Data");
      }
      if (result && result.length > 0 && result[0][0].status === 'EVENT_ADDED') {
        res.end(result[0][0].status);
      }
    });
  });

  router.post('/update', (req, res) => {
    let sql = `CALL add_regis(' ${req.body.event_id}', '${req.body.first_name}', '${req.body.last_name}', '${req.body.user_id}', '${req.body.event_name}');`;
    console.log(sql);
    pool.query(sql, (err, result) => {
        console.log(err);
      if (err) {
        res.end("Error in Data");
      }
      if (result && result.length > 0 && result[0][0].status === 'REGISTERED') {
        res.end(result[0][0].status);
      }
    });
  });
  module.exports = router;