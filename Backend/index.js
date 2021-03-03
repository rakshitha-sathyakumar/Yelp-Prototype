var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');

//use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

//use express session to maintain session data
app.use(session({
    secret: 'ADD YOUR SECRET KEY',
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
}));

app.use(bodyParser.json());

//Allow Access Control
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

const { mongoDB } = require('./config');
const mongoose = require('mongoose');
//const Books = require('./Models/BookModel');

var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 500,
    bufferMaxEntries: 0
};

mongoose.connect(mongoDB, options, (err, res) => {
    if (err) {
        console.log(err);
        console.log(`MongoDB Connection Failed`);
    } else {
        console.log(`MongoDB Connected`);
    }
});


//const app = require('./app');

const login = require("./routes/login");
const custSignup = require("./routes/customerSignUp");
const restSignup = require("./routes/restSignUp");
const userProfile = require("./routes/profile");
const restProfile = require("./routes/restaurant");
const addDish = require("./routes/addDish");
const addEvent = require("./routes/addEvents");
const viewMenu = require("./routes/menu");
const viewEvent = require("./routes/getEvents");
const addReview = require("./routes/review");
const regUser = require("./routes/regUser");
const editDish = require("./routes/editDish");
const addOrder = require("./routes/order");
const searchBar = require("./routes/search");
const uploadImage = require("./routes/upload");
const allUsers = require("./routes/allUsers");
const messages = require("./routes/message");

app.use("/yelp/login", login);
app.use("/yelp/customerSignUp", custSignup);
app.use("/yelp/restSignUp", restSignup);
app.use("/yelp/userProfile", userProfile);
app.use("/yelp/restProfile", restProfile);
app.use("/yelp/addDish", addDish);
app.use("/yelp/addEvent", addEvent);
app.use("/yelp/viewMenu", viewMenu);
app.use("/yelp/viewEvents", viewEvent);
app.use("/yelp/addReview", addReview);
app.use("/yelp/regUser", regUser);
app.use("/yelp/editDish", editDish);
app.use("/yelp/order", addOrder);
app.use("/restaurantSearch", searchBar);
app.use("/yelp/upload", uploadImage);
app.use("/yelp/allUsers",allUsers);
app.use("/yelp/messages", messages);

const port = process.env.PORT || 3001;
var server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;


