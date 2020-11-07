import React, { Component } from 'react';
import Navigationbar from '../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from 'prop-types';
import { getRest, updateRest } from '../../actions/restProfileActions';
import { connect } from 'react-redux';
import profilepic from './../images/download.png'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, Button} from 'react-bootstrap';
import axios from 'axios';
import backendServer from "../../backendServer";
import { bindActionCreators } from 'redux';

class updateRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileText: ''
    };
  }
  
componentWillMount() {
  this.props.getRest();
  console.log(this.props)
}

onChange= (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

onImageChange = (e) => {
  if(e.target.files && e.target.files[0]) {
    this.setState({
      file: e.target.files[0],
      fileText: e.target.files[0].name,
    });
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

handleUpdate = (e) => {
  e.preventDefault();
  const data = {
    name: e.target.name.value,
    street: e.target.street.value,
    city: e.target.city.value,
    zipcode: e.target.zipcode.value,
    email: e.target.email.value,
    contactNo: e.target.contact_info.value,
    timings: e.target.timings.value,
    cuisine: e.target.cuisine.value,
    deliveryMethod: e.target.delivery.value,
    fileName: this.state.fileText
  }
  this.props.updateRest(data);
  // if(action.payload === "RESTAURANT_UPDATED") {
  //   alert("Resayuarnt details updated")
  //   window.location = "/restaurant"
  //   }
};

    render() {
      var redirectVar = null;
      if (this.props.status === 'RESTAURANT_UPDATED') {
        redirectVar = <Redirect to = '/restaurant' />
      }
      return (
        <React.Fragment>
          {redirectVar}
          <Navigationbar />
          <div class='container'>
            <div class='row'>
              <div class='col-md-6' style={{ marginBottom: '5%' }}>
                <br />
                <h3 style={{ margin: "15px, 0px", color: 'red', float: 'left' }}>Restaurant Profile</h3>
                <br />
                <hr class='mb-3'></hr>
                <Form onSubmit ={this.handleUpdate}>
                <Form.Group controlId='name'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong >Name</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control name="name" onChange={this.onChange} defaultValue={this.props.user.name} type='text' />
                </Form.Group>
                <Form.Group controlId='street'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Street</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control name="street" onChange={this.onChange} defaultValue={this.props.user.street} type='text' />
                </Form.Group>
                <Form.Group controlId='city'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>City</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control name="city" onChange={this.onChange} defaultValue={this.props.user.city} type='text' />
                </Form.Group>
                <Form.Group controlId='zipcode'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Zipcode</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control name="zipcode" onChange={this.onChange} defaultValue={this.props.user.zipcode} type='text' />
                </Form.Group>
                <Form.Group controlId='contact'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Contact number</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control name="contact_info" onChange={this.onChange} defaultValue={this.props.user.contactNo} type='text' />
                </Form.Group>
                <Form.Group controlId='email'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Email ID</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control name="email" onChange={this.onChange} defaultValue={this.props.user.email} type='text' />
                </Form.Group>
                <Form.Group controlId='nickName'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Timings</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                  This field is required.
                  </Form.Text>
                  <Form.Control name="timings" onChange={this.onChange} defaultValue={this.props.user.timings}type='text' />
                </Form.Group>
                <Form.Group controlId='cuisine'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Cuisine</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                  This field is required.
                  </Form.Text>
                  <Form.Control name="cuisine" onChange={this.onChange} defaultValue={this.props.user.cuisine}type='text' />
                </Form.Group>
                <Form.Group controlId='delivery'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Delivery method</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                  This field is required.
                  </Form.Text>
                  <Form.Control name="delivery" onChange={this.onChange} defaultValue={this.props.user.deliveryMethod}type='text' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        <strong>Add a photo</strong>
                    </Form.Label>
                    <div class="custom-file">
                    <input type="file" name="image" accept="image/*" onChange={this.onImageChange}/>
                  </div>
                </Form.Group>
                <Button style={{backgroundColor: "red", border: "1px solid red"}} onClick={this.handleImageUpload}>
                  Upload
                </Button>
                <br />
                <br />
                <Button style={{backgroundColor: "red", border: "1px solid red"}} type='submit'>
                 Save changes
                </Button>
                <a href='/restaurant' style={{ marginLeft: '15px' }}>
                  Cancel
                </a>
                </Form>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }

  updateRestaurant.propTypes = {
    getRest: PropTypes.func.isRequired,
    updateRest: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    status: PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => { 
      return ({
      user: state.restProfile.user,
      status: state.restProfile.status
  })};
  
  export default connect(mapStateToProps, { getRest, updateRest })(updateRestaurant);