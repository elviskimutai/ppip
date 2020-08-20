import React, { useEffect, useState } from "react";
import Select from "react-select";
import useFetchData from "../../Hooks/useFetchData";
import { Link } from "react-router-dom";
const Course_Enrollment = (props) => {
  const [inputs, setInputs] = useState({});
  const CourseClusters = useFetchData("api/CourseClusters");

  const [state, setState] = useState([]);
  const fetchData = () => {
    setState([]);
    let all = inputs.all ? inputs.all : false;
    let url = "api/EnrolmetPerCounty/" + inputs.countyID + "/" + all;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.sessionStorage.getItem("xtoken"),
      },
    })
      .then((res) => res.json())
      .then((Data) => {
        if (Data.length > 0) {
          setState(Data);
        } else {
          //  dispatch({ type: "FETCH_ERROR", payload: Data.error });
        }
      })
      .catch((err) => {
        // dispatch({ type: "FETCH_ERROR", payload: err.message });
      });
  };

  const handleSelectChange = (UserGroup, actionMeta) => {
    setInputs((inputs) => ({ ...inputs, [actionMeta.name]: UserGroup.value }));
  };
  const handleInputChange = (event) => {
    event.persist();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const CountiesOptions = [];
  if (CourseClusters.response) {
    CourseClusters.response.map((k, i) => {
      let col = {
        value: k.id,
        label: k.description,
      };
      CountiesOptions.push(col);
    });
  }

  return (
    <div id="content" className="content">
      <ol class="breadcrumb float-xl-right">
        <li class="breadcrumb-item">
          {" "}
          <Link to="/">Home </Link>{" "}
        </li>
        <li class="breadcrumb-item active">Course Enrollment</li>
      </ol>
      <h1 class="page-header mb-3"> Enrollment per Course Cluster</h1>
      <div style={{ backgroundColor: "white" }}>
        <div className="col-sm-12">
          <div className="row" style={{ paddingTop: "15px" }}>
            <div className="col-sm-6">
              <div class="form-group row m-b-15">
                <label class="col-form-label col-md-3">Select Course Cluster</label>
                <div class="col-md-9">
                  <Select
                    name="countyID"
                    value={CountiesOptions.filter(
                      (option) => option.value === inputs.countyID
                    )}
                    //defaultInputValue={inputs.securityGroupId}
                    onChange={handleSelectChange}
                    options={CountiesOptions}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div class="form-group row m-b-15">
                <label class="col-form-label col-md-6">All Clusters</label>
                <div class="col-md-6">
                  {/* <br/> */}
                  <input
                    style={{ marginTop: "12px" }}
                    className="checkbox"
                    type="checkbox"
                    name="all"
                    defaultChecked={inputs.all}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <button
                className="btn btn-primary"
                style={{ float: "left" }}
                onClick={fetchData}
              >
                Load
              </button>
            </div>
          </div>
        </div>
        <hr />
        {state.length > 0 ? (
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <h5 className="text-center">MINISTRY OF EDUCATION</h5>
                <h5 className="text-center">
                  TECHNICAL AND VOCATIONAL EDUCATION AND TRAINING
                </h5>
                <h5 className="text-center">TRAINEES ENROLMENT PER COURSE cLUSTER</h5>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">County</th>
                      <th scope="col">Male</th>
                      <th scope="col">Female</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.map((k) => {
                      return (
                        <tr>
                          <td>{k.countyName}</td>
                          <td>{k.male}</td>
                          <td>{k.female}</td>
                          <td>{k.total}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>Total</td>
                      <td>{state.reduce((total, i) => total + i.male, 0)}</td>
                      <td>{state.reduce((total, i) => total + i.female, 0)}</td>
                      <td>{state.reduce((total, i) => total + i.total, 0)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Course_Enrollment;
