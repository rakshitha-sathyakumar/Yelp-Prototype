import React, { Component } from 'react';
import Navigationbar from '../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
import illusionsImage from '../images/illusions.jpg';
import {Button, Card, CardGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import backendServer from "../../backendServer";

class viewEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventList: []
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

componentDidMount () {
    axios.get(`${backendServer}/yelp/viewEvents/${localStorage.getItem("rest_id")}`)
    .then(res => {
        //console.log(res.data)
        this.setState({ eventList: res.data });
        //console.log(this.state.appetizerList);
    });
}

handleOnClick = (e) => {
    console.log(e);
    localStorage.setItem("event_name", e.target.id);
    window.location()

}

    render() {
        console.log(this.state.eventList);
        let renderEvents = this.state.eventList.map(event => {
            return (
                    <div class='col-md-6'>
                        <Card style={{margin: "10px", border:"1px solid black"}}>
                            {/* <Card.Img variant="top" src={illusionsImage} /> */}
                            <Card.Body>
                            <Card.Title>{event.event_name}</Card.Title>
                            <Card.Text> <i class="fas fa-hourglass-half"></i> {event.date} {event.time}</Card.Text>
                            <Card.Text> <i class="fas fa-map-marker-alt"></i> {event.event_location} </Card.Text>
                            <Card.Text>{event.event_description}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to = {{pathname: `/regUser/${event.event_id}`}} style={{color: "red"}}> Registered people </Link>
                            </Card.Footer>
                        </Card>
                    </div>
                )
        })
        return (
            <React.Fragment>
            <Navigationbar />
            <div class="container">
            <h5 style={{marginTop:"25px", float:"left", fontWeight:"bold"}}> Add an event </h5>
            <Button href="/addEvent" style={{marginTop:"15px", float:"right", backgroundColor:"red", border: "1px solid red"}}> Create an event </Button><br/><br/>
            <hr />
            <h2 style={{textAlign:"center", color: "red"}}>Events</h2>
            <br />
                    <CardGroup>
                            {renderEvents}
                    </CardGroup>
            </div>
            </React.Fragment>
        )}
}

export default viewEvents;