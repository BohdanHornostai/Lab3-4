import React, { Component } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./header.css";

const token = localStorage.getItem('Token');
let isLogined = token ? true : false;
const url = "http://localhost:8000/media/images/"

function LogedinUser(props){
  return(
    <div class="btn-group rounded-circle size">
                <div className="logoNameMargin">
                  <h4 class="name white-text">
                    {" "}
                    {props.first_name} {props.last_name}
                  </h4>
                </div>
                
                <a
                  type="link"
                  class="btn dropdown-toggle "
                  data-toggle="dropdown"
                >
                  <figure class="fir-image-figure">
                    <a
                      class="fir-imageover"
                      rel="noopener"
                      target="_blank"
                      href="/userProfile"
                    >
                      <img
                        class="fir-author-image fir-clickcircle fir-circle"
                        src={props.img}
                      />
                      <div class="fir-imageover-color"></div>
                      <img
                        class="fir-imageover-image fir-clickcircle fir-circle"
                        src={props.img}
                      />
                    </a>
                  </figure>
                  <div>
              </div>
                </a>
                <div class="dropdown-menu">
                  <div>
                    <figure class="fir-image-figure ">
                      <a
                        class="fir-imageover"
                        rel="noopener"
                        target="_blank"
                        href="/userProfile"
                      >
                        <img
                          class="fir-author-image fir-clickcircle fir-margin"
                          src={props.img}
                        />
                        <div class="fir-imageover-color"></div>
                        <img
                          class="fir-imageover-image fir-clickcircle fir-margin"
                          src={props.img}
                        />
                      </a>

                      <figcaption>
                        <div class="fig-author-figure-title white-text ">
                          {props.first_name} {props.last_name}
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                  <Link to="/userProfile/myorders" class="dropdown-item colorLink">
                    My orders
                  </Link>
                  <Link to="/userProfile/myproducts" class="dropdown-item colorLink">
                    My products
                  </Link>
                  <Link to="/userProfile/settings" class="dropdown-item colorLink">
                    Settings
                  </Link>
                  <Link to="/userProfile/clientOrders" class="dropdown-item colorLink">
                    Client orders
                  </Link>
                  <a href="#" onClick={props.logOutClick} class="dropdown-item colorLink">
                    Log out
                  </a>
                </div>
              </div>
  )
}
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      username: "",
      first_name: "",
      last_name: "",
      last_login: null,
      date_joined: null,
      fetched: false,
      image: null
    };
  }

  logOut = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      }
    }).then(res => {
      localStorage.removeItem("Token");
      localStorage.removeItem("User");
      window.location.reload(false);
      return res.json();

    });

  }

  componentDidMount() {

    if (isLogined) {
      fetch('http://localhost:8000/users/me/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        }
      }).then(res => res.json()).then(data => {
        console.log(data);
        this.setState(data.user);
    localStorage.setItem('id', this.state.id);
        this.setState({ fetched: true });
        this.setState({image: data.image.image});
        localStorage.setItem("User", JSON.stringify(this.state));
        console.log(this.state);
      })
    }
  }
  render() {
    return (
      <>
        <Navbar
          className="navbar-custom sticky-top"
          collapseOnSelect
          expand="md"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/"><img src="Wanderlance.png " width="200"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              <Link class = "nav-link" to="/"> Home </Link>
                <Link class = "nav-link" to="/sellers"> Sellers </Link>
                <Link class = "nav-link" to="/contacts">
                  {" "}
                  Contacts{" "}
                </Link>
                <Link class = "nav-link" to="/login"> Login </Link>
              </Nav>
              {isLogined && this.state.fetched ? <LogedinUser 
              first_name={this.state.username} 
              last_name=""
              logOutClick={this.logOut}
              img = {url + this.state.image}/>:isLogined?<p></p>:                <div className="cA">
                  <button type="submit" onClick={event =>  window.location.href='/login'}>Click here to enter your account</button>
                </div>}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
