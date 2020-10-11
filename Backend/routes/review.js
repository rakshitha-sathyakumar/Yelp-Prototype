const express = require("express");
const router = express.Router();
// const passwordHash = require('password-hash');
const pool = require('../pool.js');

router.post('/', (req, res) => {
    rating = parseInt((req.body.rating))
    console.log(rating)
    let sql = `CALL add_reviews('${req.body.rest_id}', '${req.body.first_name}', '${req.body.last_name}', '${req.body.review}', '${req.body.date}', '${rating}');`;
    pool.query(sql, (err, result) => {
        console.log(result[0][0].status);
      if (err) {
        res.end("Error in Data");
      }
      if (result && result.length > 0 && result[0][0].status === 'REVIEW_ADDED') {
        res.end(result[0][0].status);
      }
    });
  });

  router.get('/:rest_id', (req, res) => {
    let sql = `CALL get_review('${req.params.rest_id}');`;
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
        res.end(JSON.stringify(result[0]));
      }
    });
});
  module.exports = router;