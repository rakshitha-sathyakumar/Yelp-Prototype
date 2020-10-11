import React, { Component } from 'react';
import Navigationbar from '../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import backgroundImage from '../images/menuCard.jpg';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, Button, Card, CardGroup} from 'react-bootstrap';
import axios from 'axios';
import backendServer from '../../backendServer';
// import { getMainCourse } from './getMaincourse';

export class restOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restOrders: [],
            tempRestOrder: []
        };
    }


    componentDidMount() {
        axios.get(`${backendServer}/yelp/order/rest/${localStorage.getItem("rest_id")}`)
        .then(res => {
            this.setState({ restOrders: res.data,
            tempRestOrder: res.data });
            //console.log(this.state.appetizerList);
        });
    }


    handleCheckboxChange = (e) => {
        e.preventDefault();
        this.setState({
            orderStatus: e.target.value
        })
        this.setState ({
            order_id: e.target.id
        })
    }


    handleFilter = (e) => {
        //console.log(e.target.id);
        e.preventDefault();
        //this.setState({orders: e.target.id})
        let orders = e.target.id;
        let filteredData = this.state.restOrders.filter(order =>
            order.orders == orders
        );
        console.log(filteredData);
        this.setState({tempRestOrder:filteredData});
    }


    onUpdate = (e) => {
        e.preventDefault();
        const data = {
            order_id: this.state.order_id,
            order_status: this.state.orderStatus,
        }
        console.log(data);
        return axios.post(`${backendServer}/yelp/order/update`,data)
        .then((response) => {
            console.log(response.status)
          if (response.status === 200) {
            alert("Order updated")
           window.location = `/restOrders`
          }
        })
        .catch(function(error) {
           alert("Error")
        })
      }

      handleReset = (e) => {
        console.log("handle reset")
          e.preventDefault();
          let allOrders = this.state.restOrders;
          console.log(allOrders)
          this.setState({tempRestOrder: allOrders})
      }

    render () {
        let renderOrders = this.state.tempRestOrder.map(order => {
            let button1;
            let button2;
            if(order.order_type === 'pickup'){
                button1 = <Form.Check id = {order.order_id} name={order.dish_name} label='Pickup ready' 
                            value='Pickup ready' onChange={this.handleCheckboxChange} style={{marginLeft:"10px", color: 'red' }}/>
                button2 = <Form.Check id = {order.order_id} name={order.dish_name} label='Picked up' 
                    value='Picked up' onChange={this.handleCheckboxChange} style={{marginLeft:"10px", color: 'red' }}/>
            } else {
                button1 = <Form.Check id = {order.order_id} name={order.dish_name} label='On the way' 
                            value='On the way' onChange={this.handleCheckboxChange} style={{marginLeft:"10px", color: 'red' }}/>
                button2 = <Form.Check id = {order.order_id} name={order.dish_name} label='Delivered' 
                    value='Delivered' onChange={this.handleCheckboxChange} style={{marginLeft:"10px", color: 'red' }}/>
            }
            return (
                <div>
                    <Card style={{border: "none"}}>
                        <Card.Title style={{marginLeft:"10px", fontSize: "25px"}}>{order.dish_name} </Card.Title>
                        <Card.Text><span style={{fontWeight: "bold", marginLeft:"10px"}}> Customer: </span>
                            <Link to = {{pathname: `/userProfile/${order.user_id}`}}> {order.first_name} {order.last_name} </Link> </Card.Text>
                        {/* <Card.Text> <span style={{fontWeight: "bold", marginLeft:"10px"}}>Restuarant:</span> {order.rest_name}</Card.Text> */}
                        <Card.Text> <span style={{fontWeight: "bold", marginLeft:"10px"}}>Order type:</span> {order.order_type}</Card.Text>
                        <Card.Text> <span style={{fontWeight: "bold", marginLeft:"10px"}}>Order Status:</span> {order.order_status}</Card.Text>
                        <Card.Text> <span style={{fontWeight: "bold", marginLeft:"10px"}}>Orders:</span> {order.orders} </Card.Text>
                        <hr />
                        <Form onSubmit={this.onUpdate}>
                            <Form.Check
                                id = {order.order_id}
                                name={order.dish_name}
                                label='Order received'
                                value='Order received'
                                onChange={this.handleCheckboxChange}
                                style={{marginLeft:"10px", color: 'red' }}
                            />
                            <Form.Check
                                id = {order.order_id}
                                name={order.dish_name}
                                label='Preparing'
                                value='Preparing'
                                onChange={this.handleCheckboxChange}
                                style={{marginLeft:"10px", color: 'red' }}
                            />
                            {button1}
                            {button2}
                            <div>
                            <Button style={{ marginLeft:"10px", marginTop: "10px", backgroundColor: "red", border: "1px solid red"}} type="submit"> 
                                 Update order status </Button>
                            </div>
                        </Form>
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
                    <h1 style={{marginLeft: "10px", color:"red"}}> Your orders </h1>
                    <hr />
                        {renderOrders}
                    </div>
                    <div style={{float: "right"}}>
                       <h4 style={{margin: "10px", color:"red"}}> Filter </h4> 
                       <hr />
                       <Form>
                       <Form.Check
                            id = 'New order'
                            label='New Order'
                            onChange={this.handleFilter
                            }
                            style={{marginLeft:"10px" }}
                        />
                        <Form.Check
                            id = 'Delivered order'
                            label='Delivered Order'
                            onChange={this.handleFilter}
                            style={{marginLeft:"10px" }}
                        />
                        <Form.Check
                            id = 'Cancelled order'
                            label='Cancelled Order'
                            onChange={this.handleFilter}
                            style={{marginLeft:"10px" }}
                        />
                        <Button style={{marginLeft:"10px", marginTop: "10px", backgroundColor: "red", border: "1px solid red" }} type="submit" onClick={this.handleReset}> Remove filter </Button>
                        </Form>
                    </div>

                </div>
            </React.Fragment>
        )
    }
         
}
export default restOrders;