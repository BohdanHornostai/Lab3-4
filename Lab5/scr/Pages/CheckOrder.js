import React, { Component } from "react";
import UserCard from "../Components/UserCard";
import "./sellerspage.css";
import ImageUploader from "../Components/ImageUploader";

export default class CheckOrder extends Component {
  render() {
    return (
      <div>
        <section className="section back ">
          <div class="container bg-grey cont border border-dark">
            <h1 class="my-4 red ">
              Order status
              <span class="badge border grey orderStatus">
                {" "}
                InProcess
                <i class="fa fa-check whiteIcon" aria-hidden="true"></i>
              </span>
              <div className="cA">
                <p className="text-white">
                  Choose files if u want seller to make smth with them
                </p>
                <div className="text-center">
                  <ImageUploader />
                </div>
              </div>
            </h1>
          </div>
        </section>
      </div>
    );
  }
}
