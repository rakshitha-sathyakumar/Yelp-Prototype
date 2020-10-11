import React, { Component } from 'react';
import Navigationbar from '../navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from 'prop-types';
import profilepic from './../images/download.png'
import { connect } from 'react-redux';
import { getUser, updateUser } from '../../actions/userProfileAction';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Jumbotron, CardImg} from 'react-bootstrap';
import YelpImage from './../images/yelp_logo.jpg'
import axios from 'axios';
import backendServer from "../../backendServer";

class restUserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restUserProfile: []
        };
        this.onChange = this.onChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    componentWillMount() {
        axios.get(`${backendServer}/yelp/userProfile/${this.props.match.params.user_id}`)
        .then(res => {
            console.log(res);
            this.setState({ restUserProfile: res.data });
    })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onUpdate = (e) => {
        //prevent page from refresh
        e.preventDefault();

        let data = Object.assign({}, this.state);
        this.props.updateUser(data);
    };


    render() {
        console.log("hi")
        console.log(this.props);
        return (
        <div style={{margin:"5px"}}>
            <Navigationbar />
            <div class='jumbotron'>
                    <div class='row'>
                        <div class='col-xs-3 card profilePic' style={{position:"absolute"}}>
                            <label for='profileImage'>
                                    <a class='btn btn-secondary btn-sm btn-rounded'>
                                        <i class='fas fa-camera'></i></a>
                            </label>
                            <input type='file' name='profileImage' id='profileImage' style={{ display: 'none' }} value='' onChange={this.changeProfileImage}></input>
                            <card>
                                <CardImg variant='top' src={profilepic} className='profileImg'/>
                            </card>
                        </div>
                        <div class='col-xs-4 profileName' style={{position: "relative", marginLeft: "250px"}}>
                            <h1>{this.state.restUserProfile.first_name} {this.state.restUserProfile.last_name}</h1>
                            <h6> "{this.state.restUserProfile.headline}" </h6>
                            <p style={{fontSize:"13px"}}>{this.state.restUserProfile.email}</p>
                            
                        </div>
                    </div>
            </div>
             <div class='row' style={{ marginLeft:"10px"}}>
                <div class='col-xs-3' style={{marginLeft: "250px"}}>
                    <h3 style={{color:'red'}}> Basic Information</h3>
                    <hr />
                    <h5 style={{margin:"0px"}}> Contact Information</h5>
                    <p> {this.state.restUserProfile.contactNo}</p>
                    <h5 style={{margin:"0px"}}> Gender </h5>
                    <p>{this.state.restUserProfile.gender} </p>
                    <h5 style={{margin:"0px"}}> Address</h5>
                    <p> {this.state.restUserProfile.address}</p>
                    <h5 style={{margin:"0px"}}> Birthday </h5>
                    <p> {this.state.restUserProfile.dateofbirth}</p>
                </div>
                <div class='col-xs-12' style={{textAlign: "left", height: "100%", borderLeft: "1px solid #e6e6e6", marginLeft: "400px"}}>
                    <div style={{marginLeft: "10px"}}>
                        <h3 style={{color:'red'}}> About</h3>
                        <hr />
                        <h6 style={{margin:"0px"}}> Nickname </h6>
                        <p> {this.state.restUserProfile.nickname}</p>
                        <h6 style={{margin:"0px"}}> Yelping since </h6>
                        <p> {this.state.restUserProfile.yelpingsince}</p>
                        <h6 style={{margin:"0px"}}> When I am not yelping... </h6>
                        <p> {this.state.restUserProfile.notyelping} </p>
                        <h6 style={{margin:"0px"}}> Things I love </h6>
                        <p> {this.state.restUserProfile.thingsilove}</p>
                        <h6 style={{margin:"0px"}}> My Blog or Website</h6>
                        <p>{this.state.restUserProfile.website}</p>
                    </div>
                </div>
                </div>
            </div>
    )}
}

// userProfile.propTypes = {
//     getUser: PropTypes.func.isRequired,
//     user: PropTypes.object.isRequired
// }

// const mapStateToProps = state => { 
//     return ({
//     user: state.userProfile.user
// })};

// export default connect(mapStateToProps, { getUser })(userProfile);

export default restUserProfile;