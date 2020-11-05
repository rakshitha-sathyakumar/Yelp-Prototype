const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require('../config');
const Event = require('../models/events');

exports.eventService = function (msg, callback) {
    console.log("In Events Service path:", msg.path);
    switch (msg.path) {
        case "createEvent":
            createEvent(msg, callback);
            break;

        case "getAllEvents":
            getAllEvents(msg, callback);
            break;

        case "getEventDetails":
            getEventDetails(msg, callback);
            break;

        case "getRestEvents":
            getRestEvents(msg, callback);
            break;

        case "addEventRegis":
            addEventRegis(msg, callback);
            break;

        case "userRegistration":
            userRegistration(msg, callback);
            break;
        
        case "userRegList":
            userRegList(msg, callback);
            break;
        case "eventSearch":
            eventSearch(msg, callback);
            break;
    }
};

async function createEvent(msg, callback) {
    let err = {};
    let response = {};
    console.log("In events topic service. Msg: ", msg);
    console.log(msg.body.event_name);

    await Event.findOne({ name: msg.body.event_name })
        .then(event => {

            if (event) {
                response.status = 400;
                response.message = { email: "EVENT_EXISTS" };
                console.log(err);
                console.log("Returning error");
                return callback(null, response);
            }
            else {
            new Event({
                restId: msg.body.rest_id,
                eventName: msg.body.event_name,
                eventDescription: msg.body.description,
                time: msg.body.time,
                date: msg.body.date,
                eventLocation: msg.body.location,
                hashtags: msg.body.hashtag,
                //userType: msg.body.userType
            }).save()
            .then(event => {
                response.data = event;
                console.log("Event added successfully");
                response.status = 200;
                response.message = "EVENT_ADDED";
                return callback(null, response);
                // response.status = 200;
                // return callback(null, response);
            })
            .catch(err => console.log(err));
             
           }

        }); 
}

async function getAllEvents(msg, callback) {
    let err = {};
    let response = {};
    console.log("In get all events topic service. Msg: ", msg);

    await Event.find({}) 
        .then(event => {
                response.status = 200;
                response.data = event;
                response.message = { email: "EVENT_EXISTS" };
                console.log(event);
                // console.log("Returning error");
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
        });
             
}

async function getEventDetails(msg, callback) {
    let err = {};
    let response = {};
    console.log("In get event details topic service. Msg: ", msg);
    console.log(msg.body)

    await Event.findOne({ _id: msg.body}) 
        .then(event => {
                response.status = 200;
                response.data = event;
                response.message = { email: "EVENT_EXISTS" };
                console.log(event);
                // console.log("Returning error");
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
        });
             
}

async function getRestEvents(msg, callback) {
    let err = {};
    let response = {};
    console.log("In get event details topic service. Msg: ", msg);
    console.log(msg.body)

    await Event.find({restId: msg.body}) 
        .then(event => {
                response.status = 200;
                response.data = event;
                response.message = { email: "EVENT_EXISTS" };
                console.log(event);
                // console.log("Returning error");
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
        });
             
}

async function addEventRegis(msg, callback) {
    let err = {};
    let response = {};
    console.log("In register users to events topic service. Msg: ", msg);
    console.log(msg.body)

    await Event.findOneAndUpdate(
        {_id: msg.id},
        {$push: {registration: msg.body}},
        { safe: true, new: true, useFindAndModify: false }) 
        .then(event => {
                response.status = 200;
                response.data = event;
                response.message = "USER_REGISTERED" ;
                console.log(event);
                // console.log("Returning error");
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
        });
             
}

async function userRegistration(msg, callback) {
    let err = {};
    let response = {};
    console.log("In register users to events topic service. Msg: ", msg);
    console.log(msg.id)

    await Event.find(
        { registration: { $elemMatch: { userId: msg.id } } }) 
        .then(event => {
                response.status = 200;
                response.data = event;
                response.message = "EVENTS_FETCHED" ;
                console.log(event);
                // console.log("Returning error");
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
        });
             
}

async function userRegList(msg, callback) {
    let err = {};
    let response = {};
    console.log("In register users to events topic service. Msg: ", msg);
    console.log(msg.id)

    await Event.find( { _id: msg.id})
        .then(event => {
                response.status = 200;
                response.data = event;
                response.message = "REGUSERS_FETCHED" ;
                console.log(event);
                // console.log("Returning error");
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
    });
             
}

async function eventSearch(msg, callback) {
    let err = {};
    let response = {};
    console.log("In event search topic service. Msg: ", msg);
    console.log(msg.body)

    await Event.find( { eventName: {$regex: /msg.body/}})
        .then(event => {
                response.status = 200;
                response.data = event;
                response.message = "EVENT_FETCHED" ;
                console.log(event);
                // console.log("Returning error");
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
    });
             
}



