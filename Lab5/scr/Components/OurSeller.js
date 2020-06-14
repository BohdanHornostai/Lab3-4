import React, { Component } from "react";
import "./ourseller.css";
export default class OurSeller extends Component {
  render() {
    return (
      <div>
        <figure class="fir-image-figure">
          <a
            class="fir-imageover"
            rel="noopener"
            target="_blank"
            href="/userProfile"
          >
            <img
              class="fir-author-image fir-clickcircle"
              src="https://picsum.photos/200/150/?random"
              alt="David East - Author"
            />
            <div class="fir-imageover-color"></div>
            <img
              class="fir-imageover-image fir-clickcircle"
              src="https://picsum.photos/200/150/?random"
            />
          </a>

          <figcaption>
          <div class="fig-author-figure-title white-text red">Author</div>
            <div class="small grey">
              Last seen 10 min ago
            </div>
          </figcaption>
        </figure>
      </div>
    );
  }
}
