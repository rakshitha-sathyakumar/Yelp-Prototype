const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require('../config');
const Rest = require('../models/restaurant');

exports.restSignUpService = function (msg, callback) {
    console.log("In restaurant profile Service path:", msg.path);
    switch (msg.path) {
        case "restSignUp":
            restSignUp(msg, callback);
            break;

        case "getRestDetails":
            getRestDetails(msg, callback);
            break;

        case "restUpdate":
            restUpdate(msg, callback);
            break;

        case "getAllRest":
            getAllRest(msg, callback);
            break;

        case "addRestMenu":
            addRestMenu(msg, callback);
            break;
        
        case "getRestMenu":
            getRestMenu(msg, callback);
            break;

        case "addRestReview":
            addRestReview(msg, callback);
            break;

        case "getDishDetails":
            getDishDetails(msg, callback);
            break;
        
        case "updateDishDetails":
            updateDishDetails(msg, callback);
            break;
    }
};

async function restSignUp(msg, callback) {
    let err = {};
    let response = {};
    console.log("In restauraunt signup topic service. Msg: ", msg);

    await Rest.findById( { _id: msg.body } )
        .then(rest => {

            if (rest) {
                response.status = 400;
                response.message = { email: "USER_EXISTS" };
                console.log(err);
                console.log("Returning error");
                return callback(null, response);
            }
            else{
            const newRest = new Rest({
                name: msg.body.name,
                email: msg.body.email,
                password: msg.body.password,
                street: msg.body.street,
                zipcode: msg.body.zipcode
                //userType: msg.body.userType
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newRest.password, salt, (err, hash) => {
                    if (err) throw err;
                    newRest.password = hash;
                    newRest
                        .save()
                        .then(rest => console.log(rest))
                        .catch(err => console.log(err));
                });
            });

            console.log("Rest registered successfully");
            response.status = 200;
            response.message = "USER_ADDED";
            return callback(null, response);
        }

        });
}

async function getRestDetails(msg, callback) {
    let err = {};
    let response = {};
    console.log("In get restaurant details topic service. Msg: ", msg);
    console.log(msg.body);
    
    await Rest.findById(
        { _id: msg.body },
        //{ safe: true, new: true, useFindAndModify: false },
    ).then(rest => {
        console.log("rest exists");
        response.status = 200;
        response.message = "REST_EXISTS";
        response.data = rest
        return callback(null, response);
    })
    .catch(err => {
        console.log(err)
    });
}

async function restUpdate(msg, callback) {
    let err = {};
    let response = {};
    console.log("In rest uopdate topic service. Msg: ", msg);
    console.log(msg.body);
    
    await Rest.findByIdAndUpdate(
        { _id: msg.restId },
        { $set: msg.body },
        { safe: true, new: true, useFindAndModify: false },
    ).then(user => {
        console.log(user);
        console.log("Restaurant details updated successfully");
        response.status = 200;
        response.message = "RESTAURANT_UPDATED";
        return callback(null, response);
    })
    .catch(err => {
        console.log(err)
    });
}

async function getAllRest(msg, callback) {
    let err = {};
    let response = {};
    console.log("In get all restaurants topic service. Msg: ", msg);

    await Event.find({}) 
        .then(rest => {
                response.status = 200;
                response.data = rest;
                response.message = "RESTAUTANT_FETCHED";
                console.log(rest);
                // console.log("Returning error");
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
        });
    
}

async function addRestMenu(msg, callback) {
    let err = {};
    let response = {};
    console.log("In add rest menu topic service. Msg: ", msg);
    console.log(msg.body)

    await Rest.findOneAndUpdate(
        {_id: msg.id},
        {$push: {menu: msg.body}},
        { safe: true, new: true, useFindAndModify: false }) 
        .then(rest => {
                response.status = 200;
                response.data = rest;
                response.message = "DISH_ADDED" ;
                console.log(rest);
                // console.log("Returning error");
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
        });
             
}

async function getRestMenu(msg, callback) {
    let err = {};
    let response = {};
    console.log("In get rest menu topic service. Msg: ", msg);
    console.log(msg.body)

    await Rest.find({ _id:  msg.id })
        .then(rest => {
                //console.log(rest);
                response.status = 200;
                const finalResult = rest[0].menu.filter(each => each.category === msg.category)
                response.data = finalResult;
                response.message = "DISH_FETCHED" ;
                console.log(rest);
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
        });
             
}

async function addRestReview(msg, callback) {
    let err = {};
    let response = {};
    console.log("In add restaurant review topic service. Msg: ", msg);
    console.log(msg.body)

    await Rest.findOneAndUpdate(
        {_id: msg.id},
        {$push: {review: msg.body}},
        { safe: true, new: true, useFindAndModify: false }) 
        .then(rest => {
                response.status = 200;
                response.data = rest;
                response.message = "REVIEW_ADDED" ;
                console.log(rest);
                // console.log("Returning error");
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
        });
             
}

async function getDishDetails(msg, callback) {
    let err = {};
    let response = {};
    console.log("In rget dish details topic service. Msg: ", msg);
    console.log(msg.id)

    await Rest.find(
        {_id: msg.restId},
        { menu: { $elemMatch: { _id: msg.dishId } } }) 
        .then(dish => {
                response.status = 200;
                response.data = dish;
                response.message = "DISH_FETCHED" ;
                console.log(dish);
                // console.log("Returning error");
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
        });
             
}

async function updateDishDetails(msg, callback) {
    let err = {};
    let response = {};
    console.log("In update dish details topic service. Msg: ", msg);
    console.log(msg.body);
    console.log(msg.restId);
    console.log(msg.dishId);

    await Rest.findOneAndUpdate(
        {'menu._id': msg.dishId}, 
        {$set :{'menu.$': msg.body}},
        { safe: true, new: true, useFindAndModify: false }) 
        .then(dish => {
                response.status = 200;
                response.data = dish;
                response.message = "DISH_UPDATED" ;
                console.log(dish);
                // console.log("Returning error");
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
        });
             
}









