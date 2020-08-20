import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";
const Login = (props) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: inputs.username,
      password: inputs.password,
    };
    postData(process.env.REACT_APP_BASE_URL + "/api/login", data);
  };
  const postData = (url = ``, data = {}, req, res) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) =>
        response.json().then((data) => {
          if (data.success) {
            window.sessionStorage.setItem("xtoken", data.token);
            window.sessionStorage.setItem("UserName", data.userdata.Username);
            window.sessionStorage.setItem(
              "UserData",
              JSON.stringify(data.userdata)
            );
            window.sessionStorage.setItem("UserPhoto", data.userdata.Photo);
            window.location.reload();
            return (window.location = "#/");
          } else {
            let Msgg = data.message;
            if (Msgg === "Email Not Verified!") {
              let emailaddress = data.userdata.Email;
              let activationCode = data.userdata.ActivationCode;
              window.sessionStorage.setItem(
                "Unverifiedusername",
                data.userdata.Username
              );
              swal({
                title: "Email Not verified",
                text: "Click OK to send verification code to your email",
                icon: "warning",
                dangerMode: false,
              }).then((ValidateNow) => {
                if (ValidateNow) {
                  alert("Verification Code has been sent to your email");
                  this.setState({
                    VerifyEmailWindow: true,
                  });
                  this.SendMail(activationCode, emailaddress);
                }
              });
            } else {
              swal("", data.message, "error");
            }
          }
        })
      )
      .catch((err) => {
        swal("", err.message, "error");
      });
  };
  const handleresetpassword = (url) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) =>
        response.json().then((data) => {
          if (data.status === true) {
            swal("", data.msg, "success");
          } else {
            swal("", data.msg, "error");
          }
        })
      )
      .catch((err) => {
        swal("", "Login Failed", "error");
      });
  };
  const handlereset = () => {
    if (inputs.UserName) {
      handleresetpassword("/api/ResetPassword/" + inputs.UserName);
    } else {
      alert("Email is required");
    }
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  let btnstyle = {
    background: "#1ab394",
    color: "white",
  };

  return (
    <div className="container">
      <div className="row vertical-center-row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Sign In</h3>
                <form className="form-signin" onSubmit={handleSubmit}>
                  <label htmlFor="Datereceived" className="font-weight-bold">
                    Username
                  </label>
                  {/* <p>{process.env.REACT_APP_BASE_URL}</p> */}
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-user" />
                      </span>
                    </div>
                    <input
                      type="text"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Username"
                      required
                      onChange={handleInputChange}
                      name="username"
                      value={inputs.username}
                    />
                  </div>
                  <label htmlFor="Datereceived" className="font-weight-bold">
                    Password
                  </label>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-key" />
                      </span>
                    </div>
                    <input
                      type="password"
                      id="inputpassword"
                      className="form-control"
                      placeholder="password"
                      required
                      onChange={handleInputChange}
                      value={inputs.password}
                      name="password"
                    />
                  </div>
                  <div className="input-group form-group text">
                    <button
                      style={btnstyle}
                      type="submit"
                      className="btn  btn-primary form-control"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?{" "}
                <Link to="/Register">Create Account</Link>
              </div>
              <br />
              <div className="d-flex justify-content-center">
                <Link to="ForgotPassword">Forgot your password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
