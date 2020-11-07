const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require('../config');
const User = require('../models/customer');
const Rest = require('../models/restaurant');

exports.userSignUpService = function (msg, callback) {
    console.log("In SignUp Login Service path:", msg.path);
    switch (msg.path) {
        case "userSignUp":
            userSignUp(msg, callback);
            break;

        case "getUserDetails":
            getUserDetails(msg, callback);
            break;

        case "userUpdate":
            userUpdate(msg, callback);
            break;
        
        case "profilePicUpdate":
            profilePicUpdate(msg, callback);
            break;
        
        case "getMenu":
            getMenu(msg, callback);
            break;
        
        case "getAllMenu":
            getAllMenu(msg, callback);
            break;
        
        case "getAllUsers":
            getAllUsers(msg, callback);
            break; 
        
        case "addUserFollowing":
            addUserFollowing(msg, callback);
            break;

        case "userSearchResult":
            userSearchResult(msg, callback);
            break;
    }
};

async function userSignUp(msg, callback) {
    let err = {};
    let response = {};
    console.log("In user SignUp topic service. Msg: ", msg);

    await User.findOne({ email: msg.body.email })
        .then(user => {

            if (user) {
                response.status = 200;
                response.message = "USER_EXISTS";
                console.log(err);
                console.log("Returning error");
                return callback(null, response);
            }
            else{
            const newUser = new User({
                firstName: msg.body.first_name,
                lastName: msg.body.last_name,
                email: msg.body.email,
                password: msg.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => console.log(user))
                        .catch(err => console.log(err));
                });
            });

            console.log("User registered successfully");
            response.status = 200;
            response.message = "USER_ADDED";
            return callback(null, response);
        }

        });
}

async function getUserDetails(msg, callback) {
    let err = {};
    let response = {};
    console.log("In get user details topic service. Msg: ", msg);
    console.log(msg.body);
    
    await User.findById(
        { _id: msg.body },
        //{ safe: true, new: true, useFindAndModify: false },
    ).then(user => {
        console.log("User exists");
        response.status = 200;
        response.message = "USER_EXISTS";
        response.data = user
        return callback(null, response);
    })
    .catch(err => {
        console.log(err)
    });
}

async function userUpdate(msg, callback) {
    let err = {};
    let response = {};
    console.log("In user uopdate topic service. Msg: ", msg);
    console.log(msg.body);
    
    await User.findByIdAndUpdate(
        { _id: msg.userId },
        { $set: msg.body },
        { safe: true, new: true, useFindAndModify: false },
    ).then(user => {
        console.log(user);
        console.log("User registered successfully");
        response.status = 200;
        response.message = "USER_UPDATED";
        return callback(null, response);
    })
    .catch(err => {
        console.log(err)
    });
}

async function profilePicUpdate(msg, callback) {
    let err = {};
    let response = {};
    console.log("In profile pic update topic service. Msg: ", msg);
    console.log(msg.body);
    console.log(msg.userId)
    await User.findByIdAndUpdate(
        { _id: msg.userId },
        { fileName: msg.body },
        { safe: true, new: true, useFindAndModify: false },
    ).then(user => {
        console.log(user);
        console.log("User profile updated successfully");
        response.status = 200;
        response.message = "PROFILEPIC_UPDATED";
        return callback(null, response);
    })
    .catch(err => {
        console.log(err)
    });

}

async function getMenu(msg, callback) {
    let err = {};
    let response = {};
    console.log("In get menu topic service. Msg: ", msg);
    console.log(msg.keyword);
    if (msg.category === '1') {
        filter = { deliveryMethod: { $regex: msg.keyword, $options: 'i' } };
    }
    else  if (msg.category === '2') {
        filter = { city: { $regex: msg.keyword, $options: 'i' } };
    }
    else  if (msg.category === '3') {
        filter = { cuisine: { $regex: msg.keyword, $options: 'i' } };
    }
    else  if (msg.category === '4') {
        filter = { menu: {dishName: { $regex: msg.keyword, $options: 'i' } }};
    }
    else  if (msg.category === '5') {
        filter = { name: { $regex: msg.keyword, $options: 'i' } };
    }
    else {
        filter = {}
    }
    console.log(filter);
    await Rest.find(filter)
        .then(rest => {
        console.log(rest);
        console.log("Restaurant fetched successfully");
        response.status = 200;
        response.data = rest;
        response.message = "RESTAURANT_FETCHED";
        return callback(null, response);
    })
    .catch(err => {
        console.log(err)
    });

}



async function getAllMenu(msg, callback) {
    let err = {};
    let response = {};
    console.log("In get user details topic service. Msg: ", msg);
    console.log(msg.id);
    
    await Rest.find({_id: msg.id})
    .then(user => {
        console.log(user);
        response.status = 200;
        response.message = "USERS_FETCHED";
        response.data = user
        return callback(null, response);
    })
    .catch(err => {
        console.log(err)
    });
}

async function getAllUsers(msg, callback) {
    let err = {};
    let response = {};
    console.log("In get user details topic service. Msg: ", msg);
    console.log(msg.id);
    
    await User.find({_id: { $nin: msg.id} })
    .then(user => {
        //console.log("User exists");
        response.status = 200;
        response.message = "USERS_FETCHED";
        response.data = user
        return callback(null, response);
    })
    .catch(err => {
        console.log(err)
    });
}

async function addUserFollowing(msg, callback) {
    let err = {};
    let response = {};
    console.log("In register users to events topic service. Msg: ", msg);
    console.log(msg.body)

    await User.findOneAndUpdate(
        {_id: msg.id},
        {$push: {following: msg.body}},
        { safe: true, new: true, useFindAndModify: false }) 
        .then(user => {
                response.status = 200;
                response.data = user;
                response.message = "USER_FOLLOWED" ;
                console.log(user);
                // console.log("Returning error");
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
        });
             
}

async function userSearchResult(msg, callback) {
    let err = {};
    let response = {};
    console.log("In event search topic service. Msg: ", msg);
    console.log(msg.body)

    await User.find({
        '$or':[
        {firstName: {'$regex': msg.body, '$options': 'i'}},
        {lastName: {'$regex': msg.body, '$options': 'i'}},
        {nickName: {'$regex': msg.body, '$options': 'i'}}
        ]})
        .then(user => {
                response.status = 200;
                response.data = user;
                response.message = "USER_FETCHED" ;
                console.log(user);
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
    });
}