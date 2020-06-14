import React, { Component } from "react";

import "./home.css";

import UserCard from "../Components/UserCard";

const token = localStorage.getItem("Token");
let orders;

function Generate(){
  if(orders){
      return(<div className = "row col">
        {orders.map(order => <UserCard
        title = {order.title}
        description = {order.description}
        price = {order.price}
        id = {order.id}
        />)}
      </div>)
    
  }
}

export default class MyProducts extends Component {
   constructor(props){
     super(props);
       this.state = {
         fetched: false
     };
   };
  

  componentDidMount(){
    fetch('http://localhost:8000/services/my/', {
      method: 'GET',
      headers: {
          'Authorization': `Token ${token}`,
      },
  }).then(res => {
      return res.json()
  }).then(data => {
    orders = data;
    this.setState({fetched: true})
    console.log(orders);
  })

  }
  render() {
    return (
      <div class="cnt cardSettings cA text-center">
        <div className="cardSettings">
          <h2 class="card-title mb-0 text-center">My products</h2>
        </div>
        <main>
        <h4 class="card-title mb-0 text-center"> {orders?`You have ${orders.length} products on this account` :""} </h4>
        <button type="submit" onClick={(event) => (window.location.href = "/userProfile/myProducts/createProduct")}>Create product</button>
        
          {this.state.fetched?<Generate></Generate>:""}

        </main>
      </div>
    );
  }
}
