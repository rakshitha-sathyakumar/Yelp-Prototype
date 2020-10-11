var assert = require('chai').assert;
var app = require('./index');

var chai = require('chai');
chai.use(require('chai-http'));
var expect = require('chai').expect;

var agent = require('chai').request.agent(app);


describe("Yelp", () => {
    describe('Login Test', () => {

        it('Incorrect Password',() => {
            agent.post("/yelp/login")
                .send({ email_id: "raksitha@gmail.com", password: "hithere" })
                .then((res) => {
                    expect(res.text).to.equal("INCORRECT_PASSWORD");
                })
                .catch(error => {
                    //console.log(error);
                });
        });

        it('Successful Login',() => {
            agent.post("/yelp/login")
                .send({ email_id: "houseofbagels@gmail.com", password: "password" })
                .then((res) => {
                    expect(res.status).to.equal(200);
                })
                .catch(error => {
                    //console.log(error);
                });
        });
    });
    

    describe('Get appetizer', () => {
        it('Fetch appetizer list from resturant id', () => {
            agent.get("/yelp/viewMenu/appetizer/1")
            .then((res) => {
                expect(JSON.parse(res.text)[0].category).to.equal('appetizer');
            }) 
            .catch(error => {
                //console.log(error);
            });
        });
    });

    describe('Search list', () => {
        it('Fetch restaurant details from search bar', () => {
            agent.get("/restaurantSearch/deli/1")
            .then( (res) => {
                expect(JSON.parse(res.text).length).to.be.at.least(1)
            }) 
            .catch(error => {
                //console.log(error);
            });
        });
    });

    describe('Update order', () => {
        it('Update the final order status', () => {
            agent.post("/yelp/order/update")
            .send({ order_id:'1', order_status:'Delivered'})
            .then((res) => {
                expect(res.status).to.equal(200)
            }) 
            .catch(error => {
                //console.log(error);
            });
        });
    });

    describe('Update profile pic', () => {
        it('Update the profile pic', () => {
            agent.post("/yelp/userProfile/updateProfilePic")
            .send({ fileText:'profile_pic.jpeg', user_id:'1'})
            .then((res) => {
                expect(res.status).to.equal(200)
            }) 
            .catch(error => {
                //console.log(error);
            });
        });
    });

});