import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { restaurantSignup } from '../../actions/signupAction'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import YelpImage from './../images/yelp_logo.jpg'
import axios from 'axios';

class RestaurantSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onSubmit = (e) => {
        console.log(this.state.street)
        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            street: this.state.street,
            zipcode: this.state.zipcode,
        }

        this.props.restaurantSignup(data);

        this.setState({
            signupFlag: 1
        });
        // return axios.post('http://localhost:3001/yelp/restSignUp', data)
        // .then((response) => {
        //     if (response.status === 'RESTAURANT_ADDED') {
        //         window.location = "/login"
        //     }
        //     if (response.status === 'RESTAURANT_EXISTS') {
        //         this.setState({
        //             signUpFlag: "Email ID is already registered!"
        //         })
        //     }
        // });
    }

    render() {
        //redirect based on successful signup
        let redirectVar = null;
        let message = "";
        if (this.props.user === "USER_ADDED" && this.state.signupFlag) {
            alert("You have registered successfully");
            redirectVar = <Redirect to="/Login" />
        }
        else if(this.props.user === "USER_EXISTS" && this.state.signupFlag){
            message = "Email id is already registered"
        }
        return (
            <div>
                {redirectVar}
                        <div>
                        <center>
                            <img src={YelpImage} style={{ height: 'fit-content' }} alt='yelp' />
                        </center>
                        </div>
                        <div class="container">
                            <div class="login-form">
                                <div class="main-div">
                                    <div class="panel">
                                    <center>
                                        <h2 style={{color: "red"}}>Sign Up as restauranteur for Yelp account</h2>
                                    </center>
                                        <hr/>
                                    </div>
                                    <form onSubmit={this.onSubmit}>
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="name" onChange={this.onChange} placeholder="Name" pattern="^[A-Za-z0-9 ]+$" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" name="email" onChange={this.onChange} placeholder="Email Id" pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$'%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$" title="Please enter valid email address" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" name="password" onChange={this.onChange} placeholder="Password" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="street" onChange={this.onChange} placeholder="Street" required />
                                        </div>
                                        <div class="d-inline-flex form-group">
                                            <input style={{width: "300px"}}type="text" class="form-control" name="zipcode" onChange={this.onChange} placeholder="zipcode" required />
                                        </div>
                                        <div style={{ color: "#ff0000" }}>{message}</div>
                                        <button style ={{width: "200px"}}type="submit" class="btn btn-danger">Sign Up</button><br /><br />
                                        <div>Already have an account? <Link to='/login'>Login</Link></div>
                                    </form>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
}


RestaurantSignup.propTypes = {
    restaurantSignup: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.signup.user
});

export default connect(mapStateToProps, { restaurantSignup})(RestaurantSignup);
// export default RestaurantSignup;