const express = require("express");
const router = express.Router();
const passwordHash = require('password-hash');
const pool = require('../pool.js');

router.get('/:user_id', (req, res) => {
  console.log(req.params.user_id);
    let sql = `CALL get_user('${req.params.user_id}');`;
    pool.query(sql, (err, result) => {
      console.log(result)
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
        console.log(result[0][0]);
        res.end(JSON.stringify(result[0][0]));
      }
    });
  });


router.post('/update/:user_id', (req, res) => {
    let sql = `CALL update_user('${req.params.user_id}', '${req.body.email}', '${req.body.first_name}', '${req.body.last_name}', '${req.body.gender}', '${req.body.address}', '${req.body.contactNo}', '${req.body.dateofbirth}',  '${req.body.nickname}', '${req.body.thingsilove}', '${req.body.notyelping}', '${req.body.headline}', '${req.body.website}', '${req.body.yelpingsince}');`;
    pool.query(sql, (err, result) => {
      if (err) {
        console.log(err);
        res.writeHead(500, {
          'Content-Type': 'text/plain'
        });
        res.end("Error in Data");
      }
      if (result && result.length > 0 && result[0][0].status === 'USER_UPDATED') {
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

  router.post('/updateProfilePic', (req, res) => {
    let sql = `CALL update_profilePic('${req.body.fileText}', '${req.body.user_id}');`;
    pool.query(sql, (err, result) => {
      if (err) {
        console.log(err);
        res.writeHead(500, {
          'Content-Type': 'text/plain'
        });
        res.end("Error in Data");
      }
      if (result && result.length > 0 && result[0][0].status === 'PROFILEPIC_UPDATED') {
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


module.exports=router;