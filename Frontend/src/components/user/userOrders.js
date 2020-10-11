import React, { Component } from 'react';
import Navigationbar from '../navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { Form, Button, Card, CardGroup} from 'react-bootstrap';
import axios from 'axios';
import backendServer from '../../backendServer';
// import { getMainCourse } from './getMaincourse';

export class userOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userOrders: [],
            tempUserOrders: []
        };
    }

    componentDidMount() {
        axios.get(`${backendServer}/yelp/order/${localStorage.getItem("user_id")}`)
        .then(res => {
            this.setState({ userOrders: res.data, tempUserOrders: res.data });
        });
    }

    handleCheckboxChange = (e) => {
        e.preventDefault();
        let order_status = e.target.id;
        let filteredData = this.state.userOrders.filter(order =>
            order.order_status == order_status
        );
        console.log(filteredData);
        this.setState({tempUserOrders:filteredData});
    }

    handleCancel = (e) => {
        e.preventDefault();
       const data = {
           order_id: e.target.id,
           order_status: e.target.name
       }
       return axios.post(`${backendServer}/yelp/order/update`,data)
        .then((response) => {
            console.log(response.status)
          if (response.status === 200) {
            alert("Order cancelled")
           window.location = `/user/orders`
          }
        })
        .catch(function(error) {
           alert("Error")
        })
    }

      handleReset = (e) => {
          e.preventDefault();
          let allOrders = this.state.userOrders;
          this.setState({tempUserOrders: allOrders})
      }

    render () {
        // console.log(this.state.yourOrders);
        let renderOrders = this.state.tempUserOrders.map(order => {
            return (
                <div>
                    <Card style={{border: "none"}}>
                        <Card.Title style={{marginLeft:"10px", fontSize: "25px"}}>{order.dish_name} </Card.Title>
                        <Card.Text> <span style={{fontWeight: "bold", marginLeft:"10px"}}>Restuarant:</span> {order.rest_name}</Card.Text>
                        <Card.Text> <span style={{fontWeight: "bold", marginLeft:"10px"}}>Order type:</span> {order.order_type}</Card.Text>
                        <Card.Text> <span style={{fontWeight: "bold", marginLeft:"10px"}}> Order date </span> {order.date}</Card.Text>
                        <Card.Text> <span style={{fontWeight: "bold", marginLeft:"10px"}}> Order time </span> {order.time}</Card.Text>
                        <Card.Text> <span style={{fontWeight: "bold", marginLeft:"10px"}}>Order status:</span> {order.order_status} </Card.Text>
                        <Button style={{backgroundColor: "red", border:"1px solid red", marginLeft:"10px"}} id={order.order_id} name=' Cancelled' onClick={this.handleCancel}> Cancel Order </Button>
                    </Card>
                    <hr />
                    <br/>
                    <br/>
                </div>
            )
        })
        
        return (
            <React.Fragment>
                <Navigationbar/>
                <div class="container">
                <div style={{float: "left"}}>
                    <center>
                    <h1 style={{margin: "10px", color:"red"}}> Your orders </h1>
                    </center>
                    <hr />
                    {renderOrders}
                </div>
                    <div style={{float: "right"}}>
                       <h4 style={{margin: "10px", color:"red"}}> Filter </h4> 
                       <hr />
                       <Form onSubmit={this.handleFilter}>
                       <Form.Check
                            id = ' Order received'
                            label='Order received'
                            onChange={this.handleCheckboxChange}
                            style={{marginLeft:"10px" }}
                        />
                        <Form.Check
                            id = ' Preparing'
                            label='Preparing'
                            onChange={this.handleCheckboxChange}
                            style={{marginLeft:"10px" }}
                        />
                        <Form.Check
                            id = ' Pickup ready'
                            label='Pickup ready'
                            onChange={this.handleCheckboxChange}
                            style={{marginLeft:"10px" }}
                        />
                        <Form.Check
                            id = ' On the way'
                            label='On the way'
                            onChange={this.handleCheckboxChange}
                            style={{marginLeft:"10px" }}
                        />
                        <Form.Check
                            id = ' Picked up'
                            label='Picked up'
                            onChange={this.handleCheckboxChange}
                            style={{marginLeft:"10px" }}
                        />
                        <Form.Check
                            id = " Delivered"
                            label='Delivered'
                            onChange={this.handleCheckboxChange}
                            style={{marginLeft:"10px" }}
                        />
                        <Button style={{marginLeft:"10px", marginTop: "10px", backgroundColor: "red", border: "1px solid red" }} type="submit" onClick={this.handleReset}> Remove filters </Button>
                        </Form>
                    </div>
                       
                </div>
                
            </React.Fragment>
        )
    }
         
}
export default userOrders;