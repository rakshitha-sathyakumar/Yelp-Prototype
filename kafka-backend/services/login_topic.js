const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require('../config');
const User = require('../models/customer');
const Rest = require('../models/restaurant');

exports.loginService = function (msg, callback) {
    console.log("In SignUp Login Service path:", msg.path);
    switch (msg.path) {
        case "login":
            login(msg, callback);
            break;
    }
};


async function login(msg, callback) {
    console.log("Inside login in kafka backend login topic");
    let response = {};
    let err = {};
    console.log("Msg Body", msg.body);
    try {
        console.log(msg.body);
        let { email, password} = msg.body;
        console.log(msg.body);
        email = email.toLowerCase().trim();

        // Find user by email
        console.log("Here to find user from");

        let user = await User.findOne({
            email: msg.body.email,
        });

        if (user) {
            console.log(user);

            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                console.log("Invalid User");
                response.status = 400;
                response.message = "INCORRECT_PASSWORD";
                //console.log(err);
                return callback(null, response);
            } else {
                console.log("Valid User");
                response.status = 200;
                response.message = "USER_EXISTS";
                response.data = user;
                return callback(null, response);
                // const payload = { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email }; // Create JWT Payload

                // console.log(payload);
                // var token = jwt.sign(payload, keys.secret, {
                //     expiresIn: 900000 // in seconds
                // });
                // response.status = 200;
                // response.data = {
                //     success: true,
                //     token: 'Bearer ' + token
                // };
                
            }

        } else if (!user)
        {
            let rest = await Rest.findOne({
                email: msg.body.email,
        });

            if (rest) {
                console.log(rest);
    
                const validPassword = await bcrypt.compare(password, rest.password);
                if (!validPassword) {
                    console.log("Invalid User");
                    err.status = 400;
                    err.errors = { message: "INCORRECT_PASSWORD" };
                    console.log(err);
                    return callback(null, err);
                } else {
                    console.log("Valid User");
                    response.status = 200;
                    response.message = "USER_EXISTS";
                    response.data = rest;
                    return callback(null, response);
                    // console.log("Valid User");
                    // const payload = { id: rest.id, name: rest.name, email: rest.email }; // Create JWT Payload
    
                    // console.log(payload);
                    // var token = jwt.sign(payload, keys.secret, {
                    //     expiresIn: 900000 // in seconds
                    // });
                    // response.status = 200;
                    // response.data = {
                    //     success: true,
                    //     token: 'Bearer ' + token
                    // };
                    //return callback(null, response);
                }

        } else {
            err.status = 400;
            err.errors = { email: "NO_USER" }
            console.log(err);
            return callback(null, err);
        }
            
    } 
    } catch (error) {
        err.status = 500;
        err.message = "Internal Server Error";
        return callback(err, null);
    }
}