import React, { useState } from "react";
import swal from "sweetalert";
const ForgotPassword = (props) => {
  const [inputs, setInputs] = useState("");

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
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
            alert("Password has been changed,Please check your Email");
            return (window.location = "#/");
           // window.location.reload();
           
          } else {
            swal("", data.results, "error");
          }
        })
      )
      .catch((err) => {
        swal("", err.message, "error");
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      Email: inputs.Email,
    };
    postData(process.env.REACT_APP_BASE_URL + "/api/ResetPassword", data);
  };

  return (
    <div className="container">
      <div className="row vertical-center-row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">RESET PASSWORD</h3>
                <form className="form-signin" onSubmit={handleSubmit}>
                  <label htmlFor="Datereceived" className="font-weight-bold">
                    Email
                  </label>
                  <div className="input-group form-group">
                    <input
                      type="email"
                      className="form-control"
                      required
                      onChange={handleInputChange}
                      value={inputs.Email}
                      name="Email"
                    />
                  </div>

                  <button
                    className="btn btn-lg btn-primary  text-uppercase float-right"
                    type="submit"
                  >
                    Reset password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
