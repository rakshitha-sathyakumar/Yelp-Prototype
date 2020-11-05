import React, { Component } from 'react';
import Navigationbar from '../navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from 'prop-types';
import profilepic from './../images/download.png'
import { connect } from 'react-redux';
import { getUser } from '../../actions/userProfileAction';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Jumbotron, CardImg} from 'react-bootstrap';
import YelpImage from './../images/yelp_logo.jpg'
import axios from 'axios';
import backendServer from "../../backendServer";

class userProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileText: ''
        };
    }

    componentWillMount() {
        this.props.getUser();
        // console.log(this.props)
    }

    // onChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    handleUpdate = (e) => {
        //prevent page from refresh
        e.preventDefault();
        const data = {
            fileText: this.state.fileText, 
            user_id: localStorage.getItem("user_id")
        }
        return axios.post(`${backendServer}/yelp/userProfile/updateProfilePic`, data)
        .then((response) => {
            if (response.status === 200) {
              alert("Profilepic added")
              //window.location = "/userProfile"
            }
          })
          .catch(function(error) {
             alert("Error")
          })
        }

    onImageChange = (e) => {
        if(e.target.files && e.target.files[0]) {
          this.setState({
            file: e.target.files[0],
            fileText: e.target.files[0].name,
          });
          console.log(this.state.fileText)
        }
      }
      
      
      handleImageUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', this.state.file);
        const uploadConfig = {
          headers: {
            'content-type': 'multipart/form-data',
          }
        };
        axios.post(`${backendServer}/yelp/upload/item`, formData, uploadConfig)
        .then(response => {
            alert("Image uploaded successfully!");
            this.setState({
                user_image: response.data
              });
            })
            .catch(err => {
            console.log("Error");
        });

      }


    render() {
        console.log(this.props.user);
        var fileName = this.props.user.fileText
        var imgSrc = `${backendServer}/yelp/upload/restaurant/${fileName}`
        return (
        <div style={{margin:"5px"}}>
            <Navigationbar />
            <div class='jumbotron'>
                    <div class='row'>
                        <div class='col-xs-3 card profilePic' style={{position:"absolute"}}>
                            {/* <label for='profileImage'>
                                    <a class='btn btn-secondary btn-sm btn-rounded'>
                                        <i class='fas fa-camera'></i></a>
                            </label>
                            <input type='file' name='profileImage' id='profileImage' style={{ display: 'none' }} value='' onChange={this.changeProfileImage}></input> */}
                            <card>
                                <CardImg style={{height: "300px", width: "225px"}}variant='top' src={imgSrc} className='profileImg'/>
                            </card>
                        </div>
                        <div class='col-xs-4 profileName' style={{position: "relative", marginLeft: "250px"}}>
                            <h1>{this.props.user.firstName} {this.props.user.lastName}</h1>
                            <h6> "{this.props.user.headline}" </h6>
                            <p style={{fontSize:"13px"}}>{this.props.user.email}</p>
                            
                        </div>
                        
                        <div class='col-xs-4' style={{marginLeft: '300px'}}>
                            <ul class='list-unstyled'>
                                <li>

                                <label for='profileImage'>
                                    <a class='btn btn-secondary btn-sm btn-rounded'>
                                        <i class='fas fa-camera'></i> Add profile photo</a>
                            </label>
                            <input type='file' name='profileImage' id='profileImage' style={{ display: 'none'}} value='' onChange = {this.onImageChange}></input>{' '}
                            <a class="link" onClick={this.handleImageUpload}> Upload</a>{' '}
                            <a class="link" onClick={this.handleUpdate}> Save </a>
                            
                                </li>
                                <li>
                                    <a href='/update'>
                                        <span>
                                        <i class='fas fa-id-card'></i>{' '}
                                        </span>
                                        Update your profile
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div class='row' style={{ marginLeft:"10px"}}>
                <div class='col-xs-3' style={{ marginTop: "100px"}}>
                    {/* <p style={{ marginLeft: "10px",fontWeight: "bold"}}> Rakshitha Sathyakumar's Profile</p> */}
                    <ul class="list-unstyled">
                        <li style={{margin: "10px"}}>
                            <a href="#">
                                Profile Overview
                            </a>
                        </li>
                        <hr/>
                        <li style={{margin: "10px"}}>
                            <a href="#">
                                Messages
                            </a>
                        </li>
                        <hr/>
                        <li style={{margin: "10px"}}>
                            <a href="#">
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>
                <div class='col-xs-3' style={{marginLeft: "150px"}}>
                    <h3 style={{color:'red'}}> Basic Information</h3>
                    <hr />
                    <h5 style={{margin:"0px"}}> Contact Information</h5>
                    <p> {this.props.user.contactNo}</p>
                    <h5 style={{margin:"0px"}}> Gender </h5>
                    <p>{this.props.user.gender} </p>
                    <h5 style={{margin:"0px"}}> Location</h5>
                    <p> {this.props.user.address}</p>
                    <h5 style={{margin:"0px"}}> Birthday </h5>
                    <p> {this.props.user.dateOfBirth}</p>
                </div>
                <div class='col-xs-12' style={{textAlign: "left", height: "100%", borderLeft: "1px solid #e6e6e6", marginLeft: "400px"}}>
                    <div style={{marginLeft: "10px"}}>
                        <h3 style={{color:'red'}}> About</h3>
                        <hr />
                        <h6 style={{margin:"0px"}}> Nickname </h6>
                        <p> {this.props.user.nickName}</p>
                        <h6 style={{margin:"0px"}}> Yelping since </h6>
                        <p> {this.props.user.yelpingSince}</p>
                        <h6 style={{margin:"0px"}}> When I am not yelping... </h6>
                        <p> {this.props.user.notYelping} </p>
                        <h6 style={{margin:"0px"}}> Things I love </h6>
                        <p> {this.props.user.thingsiLove}</p>
                        <h6 style={{margin:"0px"}}> My Blog or Website</h6>
                        <p>{this.props.user.website}</p>
                    </div>
                </div>
                </div>
            </div>
    )}
}

userProfile.propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => { 
    return ({
    user: state.userProfile.user
})};

export default connect(mapStateToProps, { getUser })(userProfile);

// export default userProfile;