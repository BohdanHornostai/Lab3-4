import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./userprofile.css";
import UserCard from "../Components/UserCard";
import ImageUploader from "../Components/ImageUploader";
import Review from "../Components/Review.js";

const token = localStorage.getItem("Token");
const user = localStorage.getItem("User");
let isLogined = token ? true : false;
const url = "http://localhost:8000/media/images/";

export default class userProfile extends Component {
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

  componentWillMount() {
    if (!isLogined) {
      this.props.history.push("/");
    }
  }
  componentDidMount() {
    if (!user)
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
          this.setState({ fetched: true });
          this.setState({ image: data.image.image });
          console.log(this.state);
        });
    else {
      this.setState(JSON.parse(user));
    }
  }

  render() {
    return (
      <div class="cnt cardSettings container">
        <header>
          <div className="report right">
            <button
              type="submit"
              onClick={(event) => (window.location.href = "/reportForm")}
            >
              Report
            </button>
          </div>
        </header>
        <main>
          <div class="">
            <div class="left">
              <div class="photo-left">
                <img
                  class="photo"
                  src={this.state.image ? url + this.state.image : ""}
                />
              </div>
              <div>
                <h4 class="name white-text">
                  {" "}
                  {this.state.first_name} {this.state.last_name}
                </h4>
              </div>

              <div class="mt-3">
                <div class="tab-content">
                  <div
                    class="tab-pane fade show active"
                    id="UserProducts"
                    role="tabpanel"
                  >
                    <div class="cardSettings">
                      <div class="row">
                        <UserCard
                          title="Title"
                          description="Information"
                          price="00000"
                        />
                        <UserCard
                          title="Title"
                          description="Information"
                          price="00000"
                        />
                        <UserCard
                          title="Title"
                          description="Information"
                          price="00000"
                        />
                        <UserCard
                          title="Title"
                          description="Information"
                          price="00000"
                        />
                        <UserCard
                          title="Title"
                          description="Information"
                          price="00000"
                        />
                        <UserCard
                          title="Title"
                          description="Information"
                          price="00000"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="Reviews"
                    role="tabpanel"
                  >
                    <div className="reviews">
                      <Review />
                      <Review />
                      <Review />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
