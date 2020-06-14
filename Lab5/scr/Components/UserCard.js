import React, { Component } from "react";
import Ourseller from "./OurSeller";
import Adminpanel from "./AdminPanel";

import "./userCard.css";

export default class UserCard extends Component {
  render() {
    return (
      <div class="userCardContainer">
      <div class="rightGradientAfterFlip">
        <div class="flip">
          <div class="front">
          <div class="mr-grid">
            <div class="col1">
                <h1>{this.props.title}</h1>
              <Ourseller />
            </div>
          </div>
            <img
              class="userCardImage"
              src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/11/sale_23502_primary_image_wide-796x398.jpg"
            ></img>
          </div>
          <div class="back text-center">
              <h2>User menu</h2>
              <div className="cA"> 
                <p>If you want to buy this product just please click on the button below</p>
                <button type="submit" onClick={event =>  window.location.href=`/sellerspage/${this.props.id}`}>Buy this product</button>
              </div>
          </div>
        </div>
        <div class="text-card-cont">
          
          <div class="mr-grid">
            <div class="col1 ">
              <p class="userCardDescription module">
               {this.props.description?this.props.description.slice(0,100):""}
              </p>
            </div>
          </div>
          <div>
            
          </div>
          <div class="mr-grid">
              <div class="col1">
                <p class="userCardReviews">0 reviews</p>
              </div>
            </div>
            <div class="mr-grid">
              <div class="">
              </div>
              <div class="priceSection">
                <h6>
                {this.props.price}
                  <i class="material-icons"> &#x24;</i>
                </h6>
              </div>
            </div>
        </div>
      </div>
    </div>
    );
  }
}