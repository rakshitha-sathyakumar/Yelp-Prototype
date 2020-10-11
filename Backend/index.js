const app = require('./app');

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

const port = process.env.PORT || 3001;
var server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;


