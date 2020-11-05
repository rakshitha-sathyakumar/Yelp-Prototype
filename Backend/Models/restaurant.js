const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var restSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    street: {type: String, required: true},
    city: {type: String},
    zipcode: {type: String, required: true},
    cuisine: {type: String},
    contactInfo: {type: String},
    timings: {type: String},
    fileName: {type: String},
},
{
    versionKey: false
});

const restaurant = mongoose.model('restaurant', restSchema);
module.exports = restaurant;