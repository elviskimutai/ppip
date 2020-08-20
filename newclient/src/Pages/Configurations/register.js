import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Register = (props) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: inputs.username,
      password: inputs.password,
    };
    // postData(process.env.REACT_APP_BASE_URL + "/api/login", data);
  };
  const handleSelectChange = (UserGroup, actionMeta) => {
    setInputs((inputs) => ({ ...inputs, [actionMeta.name]: UserGroup.value }));
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  let Signstyle = {
    height: 100,
    width: 150,
  };
  let divconatinerstyle = {
    "margin-top": "30px",
    "padding-top": "50px",
    width: "95%",
    margin: "0 auto",
    //
  };
  let childdiv = {
    margin: "30px",
  };
  let Categories = [
    { value: "Applicant", label: "Applicants/Suppliers/Interested Party" },
    {
      value: "PE",
      label: "Procuring Entity",
    },
  ];
  let rowstyle = {
    backgroundColor: "white",
  };
  return (
    <div className="container">
      <div style={divconatinerstyle}>
        <ToastContainer />
        <div className="row">
          <div class="col-sm-12">
            <div style={rowstyle}>
              <div
                style={{
                  backgroundColor: " #e74c3c",
                  marginTop: "10px",
                }}
              >
                <br />
                <h2
                  style={{
                    "text-align": "center",
                    color: "white",
                    marginBottom: "20px",
                  }}
                >
                  ARCMS USER REGISTRATION
                </h2>
                <hr />
              </div>
              <div style={childdiv}>
                <form onSubmit={handleSubmit}>
                  <div class="row">
                    <div class="col-sm-6">
                      <label for="Name" className="font-weight-bold">
                        Category{" "}
                      </label>
                      <Select
                        name="LoginCategory"
                        //value={this.state.LoginCategory}
                        onChange={handleSelectChange}
                        options={Categories}
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <label for="Name" className="font-weight-bold">
                        Organization Name{" "}
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="Name"
                        onChange={handleInputChange}
                        value={inputs.Name}
                        required
                      />
                    </div>
                    <div class="col-sm-6">
                      <label for="Location" className="font-weight-bold">
                        County
                      </label>

                      {/* <Select
                        name="County"
                        value={Counties.filter(
                          (option) => option.value === this.state.County
                        )}
                        onChange={this.handleSelectChange}
                        options={Counties}
                        required
                      /> */}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <label for="Email" className="font-weight-bold">
                        Email{" "}
                      </label>

                      <input
                        type="text"
                        class="form-control"
                        name="Email"
                        onChange={handleInputChange}
                        value={inputs.Email}
                        required
                      />
                    </div>
                    <div class="col-sm-6">
                      <label for="Location" className="font-weight-bold">
                        Location
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="Location"
                        onChange={handleInputChange}
                        value={inputs.Location}
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-3">
                      <label for="PO BOXs" className="font-weight-bold">
                        PO BOX{" "}
                      </label>

                      <input
                        type="text"
                        class="form-control"
                        name="POBox"
                        onChange={handleInputChange}
                        value={inputs.POBox}
                        required
                      />
                    </div>
                    <div class="col-sm-3">
                      <label for="PostalCode" className="font-weight-bold">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="PostalCode"
                        onChange={handleInputChange}
                        value={inputs.PostalCode}
                        required
                      />
                    </div>
                    <div class="col-sm-3">
                      <label for="Town" className="font-weight-bold">
                        Town
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="Town"
                        onChange={handleInputChange}
                        value={inputs.Town}
                        required
                      />
                    </div>
                    <div class="col-sm-3">
                      <label
                        for="Companyregistrationdate"
                        className="font-weight-bold"
                      >
                        Registration Date{" "}
                      </label>
                      <input
                        type="date"
                        name="Companyregistrationdate"
                        required
                        value={inputs.Companyregistrationdate}
                        className="form-control"
                        onChange={handleInputChange}
                        id="Companyregistrationdate"
                      />
                    </div>
                  </div>

                  {/* <div class="row">
                    <div class="col-sm-6">
                      <label for="Logo" className="font-weight-bold">
                        Logo{" "}
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="file"
                        onChange={onChangeHandler}
                        multiple
                      />
                      <div class="form-group">
                        <Progress
                          max="100"
                          color="success"
                          value={this.state.loaded}
                        >
                          {Math.round(this.state.loaded, 2)}%
                        </Progress>
                      </div>
                      <button
                        type="button"
                        class="btn btn-success "
                        onClick={this.onClickHandler}
                      >
                        Upload
                      </button>
                    </div>
                    <div class="col-sm-6">
                      <br />
                      <div className="form-group">
                        <img
                          alt=""
                          className=""
                          src={
                            process.env.REACT_APP_BASE_URL +
                            "/profilepics/" +
                            this.state.Logo
                          }
                          style={Signstyle}
                        />
                      </div>
                    </div>
                  </div> */}
                  <div className=" row">
                    <div className="col-sm-2" />
                    <div className="col-sm-8" />
                    <div className="col-sm-2">
                      <Link to="/login">
                        <button type="button" className="btn btn-danger">
                          Cancel
                        </button>
                      </Link>

                      <button
                        type="submit"
                        className="btn btn-primary float-right"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>

                <p></p>
                <div className="row">
                  <div className="card-footer col-sm-12">
                    <div className="d-flex justify-content-center links">
                      Already have an account? <Link to="/login">Login</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Register;
