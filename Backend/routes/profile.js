const express = require("express");
const router = express.Router();
const passwordHash = require('password-hash');
const pool = require('../pool.js');
var kafka = require('../kafka/client');

router.get('/:user_id', (req, res) => {
  console.log(req.params.user_id);
  kafka.make_request("userSignUp_topic", { "path": "getUserDetails", "body": req.params.user_id}, function (err, results) {
    console.log(results);
    console.log("In make request call back", results);
    if (err) {
      console.log("Inside err");
      console.log(err);
      return res.status(err.status).send(err.message);
    } else {
      //console.log("Inside else", results);
      if (results.status === 200) {
        return res.status(results.status).send(results.data);
      } else {
        return res.status(results.status).send(results.errors);
      }
    }
  })
})


router.post('/update/:user_id', (req, res) => {
  console.log(req.params.user_id)
  kafka.make_request("userSignUp_topic", { "path": "userUpdate", "body": req.body, "userId": req.params.user_id }, function (err, results) {
    console.log(results);
    console.log("In make request call back", results);
    if (err) {
      console.log("Inside err");
      console.log(err);
      return res.status(err.status).send(err.message);
    } else {
      //console.log("Inside else", results);
      if (results.status === 200) {
        return res.end(results.message);
      } else {
        return res.end(results.message);
      }
    }
  })
  });


  router.post('/updateProfilePic', (req, res) => {
    console.log(req.user_id)
    kafka.make_request("userSignUp_topic", { "path": "profilePicUpdate", "body": req.fileText, "userId": req.user_id }, function (err, results) {
    console.log(results);
    console.log("In make request call back", results);
    if (err) {
      console.log("Inside err");
      console.log(err);
      return res.status(err.status).send(err.message);
    } else {
      //console.log("Inside else", results);
      if (results.status === 200) {
        return res.end(results.message);
      } else {
        return res.end(results.message);
      }
    }
  })
});

// get all the users for the new tab
router.get('/allUsers/:user_id', (req, res) => {
  kafka.make_request("userSignUp_topic", { "path": "getAllUsers", "id": req.params.user_id }, function (err, results) {
  console.log(results);
  console.log("In make request call back", results);
  if (err) {
    console.log("Inside err");
    console.log(err);
    return res.status(err.status).send(err.message);
  } else {
    //console.log("Inside else", results);
    if (results.status === 200) {
      return res.status(results.status).send(results.data);
    } else {
      return res.status(results.status).send(results.errors);
    }
  }
})
});

router.post('/updateFollowing/:user_id', (req, res) => {
  console.log(req.user_id)
  kafka.make_request("userSignUp_topic", { "path": "addUserFollowing", "body": req.body, "id": req.params.user_id }, function (err, results) {
  console.log(results);
  console.log("In make request call back", results);
  if (err) {
    console.log("Inside err");
    console.log(err);
    return res.status(err.status).send(err.message);
  } else {
    //console.log("Inside else", results);
    if (results.status === 200) {
      return res.end(results.message);
    } else {
      return res.end(results.message);
    }
  }
})
});


module.exports=router;