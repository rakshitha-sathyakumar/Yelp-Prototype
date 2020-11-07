const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require('../config');
const Order = require('../models/orders');

exports.ordersService = function (msg, callback) {
    console.log("In Orders Service path:", msg.path);
    switch (msg.path) {

        case "addOrder":
            addOrder(msg, callback);
            break;

        case "getUserOrders":
            getUserOrders(msg, callback);
            break;

        case "getRestOrders":
            getRestOrders(msg, callback);
            break;

        case "getOrderStatus":
            getOrderStatus(msg, callback);
            break;

        case "updateOrderStatus":
            updateOrderStatus(msg, callback);
            break;
    }
};


async function addOrder(msg, callback) {
    let err = {};
    let response = {};
    console.log("In orders topic service. Msg: ", msg);
    newOrder = new Order({
        userId: msg.body.user_id,
        restId: msg.body.rest_id,
        restName: msg.body.rest_name,
        dishName: msg.body.dish_name,
        orderType: msg.body.order_type,
        date: msg.body.date,
        time: msg.body.time,
        firstName: msg.body.first_name,
        lastName: msg.body.last_name,
        orderStatus: 'Order received',
        finalOrderStatus: 'New order'

    });
    await Order.create(newOrder)
        .then(order => {
            console.log("Order placed successfully");
            response.status = 200;
            response.message = "ORDER_ADDED";
            return callback(null, response);
        })
    }

async function getUserOrders(msg, callback) {
    let err = {};
    let response = {};
    console.log("In orders topic service. Msg: ", msg);

    await Order.find({ userId: msg.id } )
        .then(order => {
            console.log("User exists");
            response.status = 200;
            response.message = "ORDERS_FETCHED";
            response.data = order
            return callback(null, response);
        })
        .catch(err => {
            console.log(err)
        });
}

async function getRestOrders(msg, callback) {
    let err = {};
    let response = {};
    console.log("In orders topic service. Msg: ", msg);

    await Order.find({restId: msg.id } )
        .then(order => {
            console.log("User exists");
            response.status = 200;
            response.message = "ORDERS_FETCHED";
            response.data = order
            return callback(null, response);
        })
        .catch(err => {
            console.log(err)
        });
}

async function getOrderStatus(msg, callback) {
    let err = {};
    let response = {};
    console.log("In orders topic service. Msg: ", msg);
    

    await Order.find({userId: msg.id }, {orderStatus: msg.status} )
        .then(order => {
            console.log("User exists");
            response.status = 200;
            response.message = "ORDERS_FETCHED";
            response.data = order
            return callback(null, response);
        })
        .catch(err => {
            console.log(err)
        });
}

async function updateOrderStatus(msg, callback) {
    let err = {};
    let response = {};
    console.log("In orders topic service. Msg: ", msg);
    console.log(msg.status)

    if(msg.status == 'Picked up' || msg.status == 'Delivered') {
    await Order.findByIdAndUpdate({_id: msg.id }, 
        {$set:{orderStatus: msg.status,finalOrderStatus: 'Delivered order'} })
        .then(order => {
            console.log("User exists");
            response.status = 200;
            response.message = "ORDERS_UPDATED";
            response.data = "ORDERS_UPDATED"
            return callback(null, response);
        })
        .catch(err => {
            console.log(err)
        });
    } else {
        await Order.findByIdAndUpdate({_id: msg.id }, 
            {$set:{orderStatus: msg.status} })
            .then(order => {
                console.log("User exists");
                response.status = 200;
                response.message = "ORDERS_UPDATED";
                response.data = order
                return callback(null, response);
            })
            .catch(err => {
                console.log(err)
            });
    }
} 