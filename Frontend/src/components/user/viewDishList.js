import React, { Component } from 'react';
import Navigationbar from '../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import backgroundImage from '../images/menuCard.jpg';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, Button, Card, CardGroup} from 'react-bootstrap';
import axios from 'axios';
import backendServer from "../../backendServer";

export class getDish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [],
        };
        //this.changeHandler = this.changeHandler.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    componentWillMount() {
        axios.get(`${backendServer}/yelp/viewMenu/${localStorage.getItem("rest_id")}`)
        .then(res => {
            //console.log(res.data)
            this.setState({ menuList: res.data });
            // console.log(this.state.menuList);
        });
    }


    handleCheckboxChange = (e) => {
        this.setState({
            orderType: e.target.value
        })
        this.setState({
            dish_name: e.target.name
        })
        this.setState({
          dish_id: e.target.id
      })
    }

    onOrder = (e) => {
        e.preventDefault();
        var today = new Date();
        var current_date = (today.getMonth()+1)+"/"+today.getDate()+"/"+today.getFullYear();
        var current_time = (today.getHours() + ":"+today.getMinutes()+":"+today.getSeconds());
        const data = {
            user_id: localStorage.getItem("user_id"),
            rest_id: localStorage.getItem("rest_id"),
            rest_name: localStorage.getItem("rest_name"),
            dish_id: this.state.dish_id,
            dish_name: this.state.dish_name,
            order_type: this.state.orderType,
            first_name: localStorage.getItem("first_name"),
            last_name: localStorage.getItem("last_name"),
            date: current_date,
            time: current_time
        }
        console.log(data);
        return axios.post(`${backendServer}/yelp/order`,data)
        .then((response) => {
            console.log(response.status)
          if (response.status === 200) {
            alert("Order Successful ")
            window.location = `/user/orders`
          }
        })
        .catch(function(error) {
           alert("Error")
        })
      }
    
    render () {
        // console.log(this.state.saladList);
        let renderMenu = this.state.menuList.map(menu => {
            return (
                <div class="container">
                    <Card style={{marginLeft: "25px", border: "none"}}>
                        <Card.Title style={{fontSize: "25px", fontWeight: "bold", marginLeft:"10px"}}>{menu.dish_name} </Card.Title>
                        <hr />
                        <Card.Text style={{marginLeft:"10px"}}> <span style={{fontWeight: "bold"}}>Category:</span> {menu.category} </Card.Text>
                        <Card.Text style={{marginLeft:"10px"}}><span style={{fontWeight: "bold"}}>Ingredients:</span> {menu.ingredients}</Card.Text>
                        <Card.Text style={{marginLeft:"10px"}}> <span style={{fontWeight: "bold"}}>Description:</span> {menu.description}</Card.Text>
                        <Card.Text style={{marginLeft:"10px"}}> ${menu.price}</Card.Text>
                        <Form onSubmit={this.onOrder}>
                        <div>
                        <Form.Check
                            id = {menu.dish_id}
                            name={menu.dish_name}
                            label='Delivery'
                            value='delivery'
                            onChange={this.handleCheckboxChange}
                            style={{marginLeft:"10px", color: 'red' }}
                        />
                        <Form.Check
                            id = {menu.dish_id}
                            name={menu.dish_name}
                            label='Pickup'
                            value='pickup'
                            onChange={this.handleCheckboxChange}
                            style={{ marginLeft:"10px", color: 'red' }}
                        />
                        <Button type='submit' style={{ marginLeft:"10px", marginTop: "10px", backgroundColor: "red", border: "1px solid red"}}> Order now</Button>
                        </div>
                        </Form>
                        </Card>
                    <br/>
                    <hr />
                </div>
            )
        })
        return (
            <React.Fragment>
            <Navigationbar/>
            <div class="container">
                <center>
                <h1 style={{margin: "10px", color: "red"}}> Full menu </h1>
                </center>
                    {renderMenu}
            </div>
        </React.Fragment>
        )
    }
         
}
export default getDish;