import React, { Component } from "react";

export default class AdminPanel extends Component {
  render() {
    return (
      <div>
        <h2>Admin Panel</h2>
        <div className="cA">
          <button
            type="submit"
            onClick={(event) =>
              (window.location.href = `/userProfile/myProducts/Upload/${this.props.id}`)
            }
          >
            Upload a photo
          </button>
          <button
            type="submit"
            onClick={(event) =>
              (window.location.href = `/sellerspage/${this.props.id}`)
            }
          >
            Delete this product
          </button>
          <button
            type="submit"
            onClick={(event) =>
              (window.location.href = `/sellerspage/${this.props.id}`)
            }
          >
            Go to my product
          </button>
        </div>
      </div>
    );
  }
}
