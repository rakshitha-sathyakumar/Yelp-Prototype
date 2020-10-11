import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { customerSignup } from '../../actions/signupAction'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import YelpImage from './../images/yelp_logo.jpg'
import axios from 'axios';

class CustomerSignup extends Component {
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
        //prevent page from refresh
        e.preventDefault();
        const data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
        }

        this.props.customerSignup(data);

        this.setState({
            signupFlag: 1
        });


    //     return axios.post('http://localhost:3001/yelp/customerSignUp', data)
    //     .then((response) => {
    //         if (response.status === 'USER_ADDED') {
    //             window.location = "/login"
    //         }
    //         if (response.status === 'USER_EXISTS') {
    //             this.setState({
    //                 signupFlag: "Email ID is already registered!"
    //             })
    //         }
    //     });
    }

    render() {
        //redirect based on successful signup
        let redirectVar = null;
        let message = "";
        // if (localStorage.getItem("user_id")) {
        //     redirectVar = <Redirect to="/Home" />
        // }
        if (this.props.user === "USER_ADDED" && this.state.signupFlag) {
            // alert("You have registered successfully");
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
                                        <h2 style={{color: "red"}}>Sign Up as customer for Yelp account</h2>
                                    </center>
                                        <hr/>
                                    </div>
                                    <form onSubmit={this.onSubmit}>
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="first_name" onChange={this.onChange} placeholder="First name" pattern="^[A-Za-z0-9 ]+$" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="last_name" onChange={this.onChange} placeholder="Last name" pattern="^[A-Za-z0-9 ]+$" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" name="email" onChange={this.onChange} placeholder="Email Id" pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$'%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$" title="Please enter valid email address" required />
                                        </div>
                                        <div style={{ fontSize: 10, color: "red"}}> {this.state.signupFlag}</div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" name="password" onChange={this.onChange} placeholder="Password" required />
                                        </div>
                                        <div style={{ color: "#ff0000" }}>{message}</div>
                                        <button style = {{width: "200px"}} type="submit" class="btn btn-danger">Signup</button><br /><br />
                                        <div><Link to='/restaurantsignup'>Signup as Restaurant Owner</Link></div><br />
                                        <div>Already have an account? <Link to='/login'>Login</Link></div>
                                    </form>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
}

CustomerSignup.propTypes = {
    customerSignup: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.signup.user
});

// export default CustomerSignup;
export default connect(mapStateToProps, { customerSignup })(CustomerSignup);