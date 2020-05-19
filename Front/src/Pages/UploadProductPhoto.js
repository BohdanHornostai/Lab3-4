import React, { Component } from "react";

import "./home.css";
import "./myorders.css";
import OurSeller from "../Components/OurSeller";

import UserCard from "../Components/UserCard";
import OrderInfo from "../Components/OrderInfo";
import ImageUploader from "../Components/ImageUploader";

const token = localStorage.getItem("Token");
let isLogined = token ? true : false;
const url = "http://localhost:8000/media/images/";

export default class UploadProductPhoto extends Component {
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
      image: null,
    };
  }

  logOut = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/auth/logout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((res) => {
      localStorage.removeItem("Token");
      localStorage.removeItem("User");
      window.location.reload(false);
      return res.json();
    });
  };

  componentDidMount() {
    if (isLogined) {
      fetch("http://localhost:8000/users/me/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState(data.user);
          localStorage.setItem("id", this.state.id);
          this.setState({ fetched: true });
          this.setState({ image: data.image.image });
          localStorage.setItem("User", JSON.stringify(this.state));
          console.log(this.state);
        });
    }
  }
  render() {
    return (
      <div class="clientOrderContainer cardSettings cA text-center">
        <div className="cardSettings">
          <h2 class="card-title mb-0 text-center">Product photos</h2>
        </div>
        <main>
          <div className="text-center col-12">
            <h2 class="card-title mb-0 text-center">Title photo</h2>
            <div className="flex">
            <UserCard
          title="Title"
          description="Information"
          price="00000"
        />
          </div>
            <div>
              <img
                class="mt-3 col-md-6"
                src={this.state.image ? url + this.state.image : ""}
                width="100%"
                height="100%"
              />
                            <div class="mt-2">
              <p className="text-white">Choose title photo</p>
              </div>
              <ImageUploader />
            </div>
          </div>
        </main>
        <div className="text-center col-md-12">
            <div className="border border-dark row mt-2 mb-2"></div>
            <h2 class="card-title mb-0 text-center">Product photo</h2>
            <div>
              <img
                class="mt-3"
                src={this.state.image ? url + this.state.image : ""}
                width="100%"
                height="100%"
              />
              <div class="mt-2">
              <p className="text-white">Choose product photo</p>
                <ImageUploader />
              </div>
            </div>
          </div>
      </div>
    );
  }
}
