import React, { Component } from 'react';
import Navigationbar from '../../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import backgroundImage from '../images/menuCard.jpg';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, Button, Card, CardGroup} from 'react-bootstrap';
import axios from 'axios';
import backendServer from "../../../backendServer";
import ReactPaginate from 'react-paginate';
import '../pagination.css';

export class getMaincourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maincourseList: [],
            offset: 0,
            perPage: 2,
            currentPage: 0,
            pageCount: null
        };
    }

    componentDidMount() {
        axios.get(`${backendServer}/yelp/viewMenu/maincourse/${localStorage.getItem("rest_id")}`)
        .then(res => {
            this.setState({ maincourseList: res.data });
        });
    }

    handlePageClick = e => {
        alert("inside handle");
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }
        );

    };

    componentWillReceiveProps(nextProps){
        this.setState({
          ...this.state,
          maincourseList : !nextProps.maincourseList ? this.state.maincourseList : nextProps.maincourseList,
          pageCount: Math.ceil(this.state.maincourseList.length / this.state.perPage)  
        }
       );	
      }

    render () {

        console.log(this.state.maincourseList);

        const count = this.state.maincourseList.length;
        const slice = this.state.maincourseList.slice(this.state.offset, this.state.offset + this.state.perPage);

        let paginationElement = (
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              breakLabel={<span className="gap">...</span>}
              pageCount={Math.ceil(this.state.maincourseList.length / this.state.perPage) > 0 ? Math.ceil(this.state.maincourseList.length / this.state.perPage) : 10}
              onPageChange={this.handlePageClick}
              forcePage={this.state.currentPage}
              containerClassName={"pagination"}
              previousLinkClassName={"previous_page"}
              nextLinkClassName={"next_page"}
              disabledClassName={"disabled"}
              activeClassName={"active"}
            />
          );

        let renderMaincourse;
        if (this.state.maincourseList) {
            renderMaincourse = slice.map((menu,key) => {
            var fileName = menu.fileText
            var imgSrc = `${backendServer}/yelp/upload/restaurant/${fileName}`
            return (
                <div>
                    <Card style={{borderLeft: "none", borderBottom: "none"}}>
                        <Card.Img src = {imgSrc} style={{width: "500px", height: "420px"}}></Card.Img>
                        <Card.Title style={{margin: "10px", fontSize: "25px"}}>{menu.dishName} </Card.Title>
                        <Card.Text style={{margin: "10px"}}>{menu.ingredients}</Card.Text>
                        <Card.Text style={{margin: "10px"}}>{menu.description}</Card.Text>
                        <Card.Text style={{margin: "10px"}}> ${menu.price}</Card.Text>
                        <div>
                        <Button style={{backgroundColor:"red", border: "1px solid red", marginLeft: "10px"}}> <Link to = {{pathname: `/editDish/${localStorage.getItem("rest_id")}/${menu._id}`}} style={{color: "white"}}> Edit dish </Link></Button>
                        </div>
                    </Card>
                    <br/>
                    <br/>
                </div>
            )
        })
    }
        return (
            <React.Fragment>
            <Navigationbar/>
            <div class='panel'>
            <div class="container">
                <center>
                <h1 style={{margin: "10px"}}> Main course </h1>
                </center>
                    {renderMaincourse}
                <center>
                    {paginationElement}
                </center>
                </div>
            </div>
        </React.Fragment>
        )
    }
         
}
export default getMaincourse;