import React, { Component } from 'react';
import Navigationbar from '../navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { Form, Button, Card, CardGroup, Modal} from 'react-bootstrap';
import axios from 'axios';
import backendServer from '../../backendServer';
import ReactPaginate from 'react-paginate';
import '../restaurant/pagination.css';
// import { getMainCourse } from './getMaincourse';

export class userOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userOrders: [],
            tempUserOrders: [], 
            showModal: false,
            orderId: '',
            chatData: [],
            message: ''
        };
    }


    componentDidMount() {
        axios.get(`${backendServer}/yelp/order/${localStorage.getItem("user_id")}`)
        .then(res => {
            this.setState({ userOrders: res.data, tempUserOrders: res.data });
        });
    }

    handleOpenModal = (e) => {
        const filteredData = this.state.userOrders.filter(each => each._id === e.target.value)
        this.setState({ showModal: true, chatData: filteredData[0].message, orderId: e.target.value});
        
      }

      handleCloseModal = () => {
        this.setState({ showModal: false });
      }

      handleInputChange = (e) => {
        console.log(e.target.value)
        this.setState({
            message: e.target.value
        })
    }

      handleSendMessage = (e) => {
        e.preventDefault();
        console.log(this.state.message)
        var today = new Date();
        var current_date = ((today.getMonth()+1)+"/"+today.getDate()+"/"+today.getFullYear());
        var current_time = (today.getHours() + ":"+today.getMinutes()+":"+today.getSeconds());
        const data = {
            orderId: this.state.orderId,
            message: this.state.message,
            firstName: localStorage.getItem("first_name"),
            date: current_date,
            time: current_time,
            owner: localStorage.getItem("first_name")
        }
        console.log(data);
        axios.post(`${backendServer}/yelp/messages/initiate`, data)
        .then(response => {
            if(response.status === 200) {
                alert("Reply successfully sent")
            }
        })
    }
    

    render () {
        // const filteredData = this.state.userOrders.filter(each => each._id === this.state.orderId)
        // console.log(filteredData[0]);
        let renderChat;
        if(this.state.chatData.length >= 1) {
            renderChat = this.state.chatData.map(chat => {
                if(chat.firstName) {
                return (
                    <div>
                        <p style={{marginBottom:"0px", float:"right"}}> {chat.message} </p>
                        <p class="text-muted" style={{marginBottom:"0px", float:"right"}}> {chat.owner} </p>
                        <p class="text-muted" style={{float:"right"}}> {chat.date} {chat.time} </p>
                        <br />
                        <br />
                        <br />
                    </div>
                )
                } else {
                    return (
                        <div>
                            <p style={{marginBottom:"0px"}}> {chat.message} </p>
                            <p class="text-muted" style={{marginBottom:"0px"}}> {chat.owner} </p>
                            <p class="text-muted"> {chat.date} {chat.time} </p>
                            <br />
                        </div>
                    )
                }
            })
        }

        let renderOrders;
        if(this.state.tempUserOrders) {
            renderOrders = this.state.tempUserOrders.map(order => {
                console.log(order.message)
                if(order.message.length >= 1) {
                return (
                    <div>
                        <p> <b>Order Id</b>: {order._id} </p>
                        <p> <b>Restaurant Name </b>: {order.restName} </p>
                        <p> <b>Dish name </b>: {order.dishName} </p>
                        <Button value={order._id} style={{backgroundColor: "red", color: "white", border: "1px solid red"}} onClick={this.handleOpenModal}> Chat </Button>
                        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title style={{fontSize: "30px"}}> Your conversation </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {renderChat}
                            <input class="form-control input-md" type='text' style={{ height: '70px'}} onChange={this.handleInputChange}/>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button style={{border: "1px solid red", backgroundColor: "red", color: 'white',  width: "100px", borderRadius: '5px'}} onClick = {this.handleSendMessage}>Reply</Button>
                            </Modal.Footer>
                        </Modal>
                        <hr />
                        <br/>
                        <br/>
                    </div>
                )
            }
        })
    }
        
        return (
            <React.Fragment>
                <Navigationbar/>
                <div class="container">
                <div >
                    <center>
                    <h1 style={{margin: "10px", color:"red"}}> All messages </h1>
                    </center>
                    <hr />
                    {renderOrders} 
                </div>         
                </div>
                
            </React.Fragment>
        )
    }
         
}
export default userOrders;