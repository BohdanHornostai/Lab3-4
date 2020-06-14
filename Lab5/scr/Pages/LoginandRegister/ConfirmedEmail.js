import React, { Component } from "react";

export default class ConfirmedEmail extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            active: null
        };
      }
  componentDidMount() {
    const { id } = this.props.match.params;
    const { token } = this.props.match.params;
    fetch(`http://localhost:8000/auth/register_confirm/${id}/${token}/`, {
      method: `GET`,
    }).then(resp =>{
        this.setState({
            active: resp.status
        })
    })
  }
  
  render() {
    return (
      <div> 
        {this.state.active==400?<div>        <p className="white-text text-center">
в
        </p></div>:                  <section id="music" className="section back">
        <section id="video" className="section bg-grey mg-top">
          <h1-1>Thanks for your confimation</h1-1>
        </section>
        </section>}
      </div>
    );
  }
}
