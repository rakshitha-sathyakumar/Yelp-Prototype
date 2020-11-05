var connection =  new require('./kafka/Connection');
//topics files
//var signin = require('./services/signin.js');
var userSignUpTopic = require('./services/userSignUp_topic');
var restSignUpTopic = require('./services/restSignUp_topic');
var eventsTopic = require('./services/events_topic');
var loginTopic = require('./services/login_topic');
var orderTopic = require('./services/orders_topic');
const mongoose = require('mongoose');
const {mongoDB} = require('./config');
var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 500,
    bufferMaxEntries: 0
};
//connect to mongoDB
mongoose.connect(mongoDB, options, (err, res) => {
    if (err) {
        console.log(err);
        console.log(`MongoDB Connection Failed`);
    } else {
        console.log(`MongoDB Connected`);
    }
});

function handleTopicRequest(topic_name, fname) {
    //var topic_name = 'root_topic';
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    consumer.on('message', function (message) {
        //console.log('message received for ' + topic_name + " ", fname);
        console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);

        switch (topic_name) {

            case 'userSignUp_topic':
                fname.userSignUpService(data.data, function (err, res) {
                    response(data, res, producer);
                    return;
                });
                break;

            case 'restSignUp_topic':
                fname.restSignUpService(data.data, function (err, res) {
                    response(data, res, producer);
                    return;
                });
                break;
            
            case 'events_topic':
                fname.eventService(data.data, function(err, res){
                    response(data, res, producer);
                    return;
                });
                break;

            case 'login_topic':
                fname.loginService(data.data, function(err, res){
                    response(data, res, producer);
                    return;
                });
                break;

            case 'orders_topic':
                fname.ordersService(data.data, function (err, res) {
                    response(data, res, producer);
                    return;
                });
                break;
        //     case 'sellerProfile_topic':
        //         fname.sellerProfileService(data.data, function (err, res) {
        //             response(data, res, producer);
        //             return;
        //         });
        //         break;
        //     case 'seller_topic':
        //         fname.sellerService(data.data, function (err, res) {
        //             response(data, res, producer);
        //             return;
        //         });
        //         break;
        //     case 'admin_topic':
        //         fname.adminService(data.data, function (err, res) {
        //             response(data, res, producer);
        //             return;
        //         });
        //         break;
        //     case 'customer_topic':
        //         fname.customerService(data.data, function (err, res) {
        //             response(data, res, producer);
        //             return;
        //         });
        //         break;
        //     case 'cart_topic':
        //         fname.cartService(data.data, function (err, res) {
        //             response(data, res, producer);
        //             return;
        //         });
        //         break;
        //     case 'order_topic':
        //         fname.orderService(data.data, function (err, res) {
        //             response(data, res, producer);
        //             return;
        //         });
        //         break;
        // }

    // });
        }
    });
}

function response(data, res, producer) {
    console.log('after handle', res);
    var payloads = [
        {
            topic: data.replyTo,
            messages: JSON.stringify({
                correlationId: data.correlationId,
                data: res
            }),
            partition: 0
        }
    ];
    producer.send(payloads, function (err, data) {
        console.log('producer send', data);
    });
    return;
}


handleTopicRequest("userSignUp_topic",userSignUpTopic);
handleTopicRequest("restSignUp_topic",restSignUpTopic);
handleTopicRequest("events_topic",eventsTopic);
handleTopicRequest("login_topic", loginTopic);
handleTopicRequest("orders_topic", orderTopic);