import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Logout extends Component {
  constructor() {
    super();
    this.state = {};
    this.logout = this.logout.bind(this);
  }
  submit = (url) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.sessionStorage.getItem("xtoken"),
      },
      // },
      // body: JSON.stringify(inputs),
    })
      .then((response) => {
        // if (response.status == "200") {
        //   handlefetchdata()
        //   swal("", "Transaction Successful", "success");
        // } else {
        //   swal("", "Could not be saved", "error");
        // }
      })
      .catch((err) => {
        //swal("", "Failed", "error");
      });
  };
  logout = () => {
    let UserId = window.sessionStorage.getItem("UserId");
    let SecurityGroupId = window.sessionStorage.getItem("SecurityGroupId");
    if (SecurityGroupId == "1") {
      let url = "/api/login/" + UserId + "/student";
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + window.sessionStorage.getItem("xtoken"),
        },
      })
        .then((response) => {})
        .catch((err) => {});
    } else {
      let url = "/api/login/" + UserId + "/users";
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + window.sessionStorage.getItem("xtoken"),
        },
      })
        .then((response) => {})
        .catch((err) => {});
    }

    window.sessionStorage.clear();
    localStorage.clear();
    return <Redirect to="/" push />;
  };

  clicka = () => {
    document.getElementById("nav-profile-tab").click();
  };
  componentDidMount() {
    this.clicka();
  }

  render() {
    return (
      <a
        id="nav-profile-tab"
        onClick={this.logout}
        href="/"
        className="btn btn-default btn-flat"
      ></a>
    );
  }
}
export default Logout;
