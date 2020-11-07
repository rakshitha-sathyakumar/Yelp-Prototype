const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require('../config');
const Order = require('../models/orders');

exports.messageService = function (msg, callback) {
    console.log("In Messages Service path:", msg.path);
    switch (msg.path) {
        case "addRestMessage":
            addRestMessage(msg, callback);
            break;
        
        // case "getUserMessage":
        //     getUserMessage(msg,callback);
        //     break;
    }
};

async function addRestMessage(msg, callback) {
    let err = {};
    let response = {};
    console.log("In restuarnt initial message topic service. Msg: ", msg);
    console.log(msg.body)

    await Order.findOneAndUpdate(
        {_id: msg.id},
        {$push: {message: msg.body}},
        { safe: true, new: true, useFindAndModify: false }) 
        .then(order => {
                response.status = 200;
                response.data = order;
                response.message = "MESSAGE_SENT" ;
                console.log(order);
                // console.log("Returning error");
                return callback(null, response);
            })
        .catch(err => {
                console.log(err)
        });
             
}

// async function getUserMessage(msg, callback) {
//     let err = {};
//     let response = {};
//     console.log("In orders topic service. Msg: ", msg);

//     await Order.find({ userId: msg.id })
//         .then(order => {
//             console.log("User exists");
//             response.status = 200;
//             response.message = "ORDERS_FETCHED";
//             response.data = order
//             return callback(null, response);
//         })
//         .catch(err => {
//             console.log(err)
//         });
// }
