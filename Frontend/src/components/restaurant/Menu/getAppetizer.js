import React, { Component } from 'react';
import Navigationbar from '../../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import backgroundImage from '../images/menuCard.jpg';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button, Card, CardGroup} from 'react-bootstrap';
import axios from 'axios';
import backendServer from "../../../backendServer";
import { getappetizer } from '../../../actions/menuAction';
import ReactPaginate from 'react-paginate';
import '../pagination.css';

export class getAppetizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appetizerList: [],
            offset: 0,
            perPage: 2,
            currentPage: 0,
            pageCount: null
        };
    }

    componentDidMount() {
        this.props.getappetizer();
        console.log(this.props);
        // this.setState({appetizerList: this.props.user});
        // this.forceUpdate();
        // console.log(this.props);
        // axios.get(`${backendServer}/yelp/viewMenu/appetizer/${localStorage.getItem("rest_id")}`)
        // .then(res => {
        //     console.log(res.data)
        //     
        //     //console.log(this.state.appetizerList);
        // });
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
        console.log(nextProps)
        this.setState({
          ...this.state,
          appetizerList : !nextProps.user ? this.state.appetizerList : nextProps.user,
          pageCount: Math.ceil(this.state.appetizerList.length / this.state.perPage)  
        }
       );	
      }


    render () {
        console.log(this.props.user)
        console.log(this.state.appetizerList);

        const count = this.state.appetizerList.length;
        const slice = this.state.appetizerList.slice(this.state.offset, this.state.offset + this.state.perPage);
        

        let paginationElement = (
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              breakLabel={<span className="gap">...</span>}
              pageCount={Math.ceil(this.state.appetizerList.length / this.state.perPage) > 0 ? Math.ceil(this.state.appetizerList.length / this.state.perPage) : 10}
              onPageChange={this.handlePageClick}
              forcePage={this.state.currentPage}
              containerClassName={"pagination"}
              previousLinkClassName={"previous_page"}
              nextLinkClassName={"next_page"}
              disabledClassName={"disabled"}
              activeClassName={"active"}
            />
          );
        let renderAppetizer;
        if (this.state.appetizerList){
            renderAppetizer = slice.map(menu => {
                var fileName = menu.dishFileName
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
                            <Button style={{backgroundColor:"red", border: "1px solid red", marginLeft: "10px"}}>
                            <Link to = {{pathname: `/editDish/${localStorage.getItem("rest_id")}/${menu.dish_id}`}} style={{color: "white"}}> Edit dish </Link></Button>
                            </div>
                        </Card>
                        <br/>
                        <br />
                        </div>
                )
            })
        }
        return (
            <React.Fragment>
                <Navigationbar/>
                <div class="container">
                    <center>
                    <h1 style={{margin: "10px", color: "red", fontSize: "40px"}}> Appetizers </h1>
                    </center>
                        {renderAppetizer}
                        <center>
                    {paginationElement}
                    </center>
                </div>
            </React.Fragment>
            
        )
    }
         
}


getAppetizer.propTypes = {
    getappetizer: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };

  const mapStateToProps = state => {
    return ({
    user: state.getMenu.user
  })
};

export default connect(mapStateToProps, { getappetizer })(getAppetizer);
//export default getAppetizer;