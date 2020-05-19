import React, { Component } from "react";
import "./footer.css";
export default class Footer extends Component {
    render() {
      return (
        <footer className="back FooterCentr">
        <div className="container grey">
          <div className="footer-cols">           
            <ul>
              <li>Community</li>
              <li>
                <a href="#">Our blog</a>
              </li>
              <li>
                <a href="#">Last news</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>

            </ul>
            <ul>
              <li>About us</li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Usefull links</a>
              </li>
              <li>
                <a href="#">Support us</a>
              </li>
              <li>
                <a href="#">F.A.Q.</a>
              </li>
            </ul>

            <ul>
              <li>Others</li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>

            </ul>
          </div>
        </div>
        <div className="footer-bottom text-center">
        Wanderlance © 2020
        </div>
      </footer>
      );
    }
}