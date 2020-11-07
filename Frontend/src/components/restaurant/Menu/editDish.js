import React, { Component } from 'react';
import Navigationbar from '../../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from 'prop-types';
//import profilepic from '../../images/download.png'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import backendServer from "../../../backendServer";
import { getDish, updateDish} from '../../../actions/dishAction';

class editDish extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    //axios.get(`${backendServer}/yelp/editDish/${this.props.match.params.rest_id}/${this.props.match.params.dish_id}`)
    const restId = this.props.match.params.rest_id;
    const dishId = this.props.match.params.dish_id;
    this.props.getDish(restId, dishId)
    // .then(res => {
    //     this.setState({ menuList: res.data[0] });
    // })
  }

  onChange= (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

handleRadio = (e) => {
  this.setState({
    category: e.target.name
  });
}

onUpdate = (e) => {
  e.preventDefault();
  const data = {
    rest_id: this.props.match.params.rest_id,
    dish_id: this.props.match.params.dish_id,
    dishName: this.state.dish_name,
    ingredients: this.state.ingredients,
    price: this.state.price,
    description: this.state.description,
    category: this.state.category
  }
  // console.log(data.category);
  this.props.updateDish(data);
  if(this.props.status === 200) {
    window.location = `/viewDish`
  }
  //localStorage.setItem("dish_category", data.category)
  // return axios.post(`${backendServer}/yelp/editDish`,data)
  // .then((response) => {
  //     console.log(response.status)
  //   if (response.status === 200) {
  //     alert("Dish updated")
  //     window.location = `/menu/${data.category}`
  //   }
  // })
  // .catch(function(error) {
  //    alert("Error")
  // })
}
    render() {
      //const menuList = this.props.getUser;
      console.log(this.props)
      return (
        <React.Fragment>
          <Navigationbar />
          <div class='container'>
            <div class='row'>
              <div class='col-md-6' style={{ marginBottom: '5%' }}>
                <h3 style={{ margin: "15px, 0px", color: 'red', float: 'left' }}>Edit/update dish</h3>
                <br />
                <hr class='mb-3'></hr>
                <Form onSubmit={this.onUpdate}>
                <Form.Group controlId='firstName'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Name</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control onChange={this.onChange} name="dish_name" defaultValue={this.props.user.dishName} type='text' />
                </Form.Group>
                <Form.Group controlId='lastName'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Main Ingredients</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control onChange={this.onChange}  name="ingredients" defaultValue={this.props.user.ingredients} type='text' />
                </Form.Group>
                <Form.Group controlId='contact'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Dish Price</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control onChange={this.onChange}  name="price" defaultValue={this.props.user.price} type='text' />
                </Form.Group>
                <Form.Group controlId='email'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Description</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control onChange={this.onChange} name="description" defaultValue={this.props.user.description} type='text' />
                </Form.Group>
                <Form.Group controlId='category'>
                    <Form.Label style={{margin: "0px", padding: "0px"}}>
                        <strong>Category</strong>
                    </Form.Label><br />
                    <Form.Check 
                    name="Appetizer" onChange={this.handleRadio} label="Appetizer" />
                    <Form.Check 
                    name="Salads" onChange={this.handleRadio} label="Salads" />
                    <Form.Check 
                    name="Main Course" onChange={this.handleRadio} label="Main Course" />
                    <Form.Check 
                    name="Desserts" onChange={this.handleRadio} label="Desserts" />
                    <Form.Check 
                    name="Beverages" onChange={this.handleRadio} label="Beverages" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        <strong>Add Dish photo</strong>
                    </Form.Label>
                    <Form.File id="exampleFormControlFile1"/>
                </Form.Group>
                <Button variant='danger' type='submit'>
                  Update Changes
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


  editDish.propTypes = {
    getDish: PropTypes.func.isRequired,
    updateDish: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    status: PropTypes.object.isRequired
  };

  const mapStateToProps = state => {
    return ({
    user: state.addDish.user,
    status: state.addDish.status

  })};

  export default connect(mapStateToProps, { getDish, updateDish })(editDish);
  //export default editDish;