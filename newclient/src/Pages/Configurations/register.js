import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useFetchData from "../../Hooks/useFetchData";

const Register = (props) => {
  const [inputs, setInputs] = useState({});
  const [partners, setpartners] = useState([]);
  const SupplierCategories = useFetchData("/api/SupplierCategories");
  const Businessregistrationapi = useFetchData(
    "/api/Externalapi/Business registration"
  );
  const Counties = useFetchData("/api/counties");
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
  const ValidatBSN = (event) => {
    event.preventDefault();
    if (Businessregistrationapi.response) {
      let password = Businessregistrationapi.response[0].password;
      let url = Businessregistrationapi.response[0].url;
      let username = Businessregistrationapi.response[0].username;
      var resurl = url.replace("{bsn}", inputs.bus_reg_number);
      const data = {
        url: resurl,
        username: username,
        password: password,
      };
      fetch(process.env.REACT_APP_BASE_URL + "/api/ValidateBsn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) =>
          response.json().then((data) => {
            if (data.success) {
              if (data.data.count == 0) {
                alert("No records found or Invalid Registration Number");
              } else {
                let results = data.data.records;
                setInputs((inputs) => ({
                  ...inputs,
                  business_name: results[0].business_name,
                }));
                setInputs((inputs) => ({ ...inputs, email: results[0].email }));
                setInputs((inputs) => ({
                  ...inputs,
                  phone_number: results[0].phone_number,
                }));
                setInputs((inputs) => ({
                  ...inputs,
                  physical_address: results[0].physical_address,
                }));
                setInputs((inputs) => ({
                  ...inputs,
                  postal_address: results[0].postal_address,
                }));
                setInputs((inputs) => ({
                  ...inputs,
                  registration_date: results[0].registration_date,
                }));
                setInputs((inputs) => ({
                  ...inputs,
                  registration_number: results[0].registration_number,
                }));
                setInputs((inputs) => ({
                  ...inputs,
                  status: results[0].status,
                }));

                setpartners(results[0].partners);
                // business_name: "TRANSPHARMA HEALTHCARE CO. LIMITED"
                // email: null
                // partners: (3) [{…}, {…}, {…}]
                // phone_number: null
                // physical_address: "PLOT 209/8476  ,   KENYATTA AVENUE, PLOT 209/8476 KENYATTA AVENUE"
                // postal_address: "7883  - 00610"
                // registration_date: "2 October 2013"
                // registration_number: "CPR/2013/118524"
                // status: "registered"
              }
            } else {
              alert("Error Validating try again");
            }
          })
        )
        .catch((err) => {
          // swal("", err.message, "error");
        });
    }
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
  let BusinessTypeOptions = [
    { value: "Private", label: "Private" },
    {
      value: "Public",
      label: "Public",
    },
  ];
  const SupplierCategoriesOptions = [];
  if (SupplierCategories.response) {
    SupplierCategories.response.map((k, i) => {
      let col = {
        value: k.id_suppliercategories,
        label: k.name,
      };
      SupplierCategoriesOptions.push(col);
    });
  }
  const CountiesOptions = [];
  if (Counties.response) {
    Counties.response.map((k, i) => {
      let col = {
        value: k.id_counties,
        label: k.name,
      };
      CountiesOptions.push(col);
    });
  }

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
                  PPIP SUPPLIER REGISTRATION FORM
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
                        name="id_suppliercategories"
                        //value={this.state.LoginCategory}
                        onChange={handleSelectChange}
                        options={SupplierCategoriesOptions}
                        required
                      />
                    </div>
                    <div class="col-sm-6">
                      <label for="Name" className="font-weight-bold">
                        Business Type
                      </label>
                      <Select
                        name="id_suppliercategories"
                        //value={this.state.LoginCategory}
                        onChange={handleSelectChange}
                        options={BusinessTypeOptions}
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <label for="Name" className="font-weight-bold">
                        Operation County
                      </label>
                      <Select
                        name="id_counties"
                        //value={this.state.LoginCategory}
                        onChange={handleSelectChange}
                        options={CountiesOptions}
                        required
                      />
                    </div>
                    <div class="col-sm-6 ">
                      <label for="Location" className="font-weight-bold">
                        Business Number
                      </label>
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=" Business Number"
                          name="bus_reg_number"
                          onChange={handleInputChange}
                          value={inputs.bus_reg_number}
                          required
                        />
                        <div class="input-group-append">
                          <span
                            class="input-group-text"
                            style={{ cursor: "pointer" }}
                            id="basic-addon2"
                            onClick={ValidatBSN}
                          >
                            Validate
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <label for="Email" className="font-weight-bold">
                        Business Name
                      </label>

                      <input
                        type="text"
                        disabled
                        class="form-control"
                        name="business_name"
                        onChange={handleInputChange}
                        value={inputs.business_name}
                        required
                      />
                    </div>
                    <div class="col-sm-6">
                      <label for="Location" className="font-weight-bold">
                        Physical Address
                      </label>
                      <input
                        type="text"
                        disabled
                        class="form-control"
                        name="physical_address"
                        onChange={handleInputChange}
                        value={inputs.physical_address}
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <label
                        for="Companyregistrationdate"
                        className="font-weight-bold"
                      >
                        Registration Date{" "}
                      </label>
                      <input
                        type="text"
                        disabled
                        name="registration_date"
                        required
                        value={inputs.registration_date}
                        className="form-control"
                        onChange={handleInputChange}
                        id="registration_date"
                      />
                    </div>
                    <div class="col-sm-6">
                      <label for="PostalCode" className="font-weight-bold">
                        Email
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="email"
                        onChange={handleInputChange}
                        value={inputs.email}
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-3">
                      <label for="PO BOXs" className="font-weight-bold">
                        PIN
                      </label>

                      <input
                        type="text"
                        class="form-control"
                        name="PIN"
                        onChange={handleInputChange}
                        value={inputs.POBox}
                        required
                      />
                    </div>
                    <div class="col-sm-3">
                      <label for="Town" className="font-weight-bold">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="phone_number"
                        onChange={handleInputChange}
                        value={inputs.phone_number}
                        required
                      />
                    </div>
                    <div class="col-sm-3">
                      <label for="Town" className="font-weight-bold">
                        UserName
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="username"
                        onChange={handleInputChange}
                        value={inputs.username}
                        required
                      />
                    </div>
                    <div class="col-sm-3">
                      <label
                        for="Companyregistrationdate"
                        className="font-weight-bold"
                      >
                        Password
                      </label>
                      <input
                        type="text"
                        name="password"
                        required
                        value={inputs.password}
                        className="form-control"
                        onChange={handleInputChange}
                        id="password"
                      />
                    </div>
                  </div>

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
