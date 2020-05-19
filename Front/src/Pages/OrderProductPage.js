import React, { Component } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import UserCard from "../Components/UserCard";
import Ourseller from "../Components/OurSeller";
import Review from "../Components/Review.js";
import "./sellerspage.css";
import Footer from "../Components/Footer";
import ImageUploader from "../Components/ImageUploader";


export default class OrderProductPage extends Component {

  render() {
    return (
      <div>
        <section className="section back ">
          <div class="container bg-grey cont border border-dark">
            <h1 class="my-4 red ">Order form</h1>
            <form onSubmit={this.onSubmit}>
              <div class="row">
                <div class="col-md-8">
                  <div class="form-group text-left">
                    <label for="inputUsername">Order title</label>
                    <textarea
                      rows="1"
                      class="form-control"
                      name="description"
                      id="inputBio"
                      placeholder="Product description"
                      onChange={this.handleChange}
                    ></textarea>
                  </div>

                  <div class="form-group text-left">
                    <label for="inputUsername">Order description</label>
                    <textarea
                      rows="20"
                      class="form-control"
                      id="inputBio"
                      placeholder="Type the information that the seller will consider to make your order"
                      onChange={this.handleChange}
                    ></textarea>
                  </div>

                  <div className="cA">
                    <p className="text-white">
                      Choose files if u want seller to make smth with them
                    </p>
                    <div className="text-center">
                      <ImageUploader />
                    </div>
                  </div>
                </div>

                <div class="col-md-4 text-center cA margin-leftOrder">
                  <div className="row">
                    <h2 class="my-4 red ">Product you want to buy</h2>
                    <UserCard
                      title="Title"
                      description="Information"
                      price="00000"
                    />
                  </div>
                </div>
              </div>
            </form>

            <div className="border border-dark row"></div>
            <div className="text-center cA">
              <button type="submit">Create order</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
