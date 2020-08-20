import React, { useEffect, useState } from "react";
import useFetchData from "../Hooks/useFetchData";
import { Link } from "react-router-dom";
import { LineChart, ColumnChart, PieChart } from "react-chartkick";
import { Bar, Lone, Pie } from "react-chartjs-2";
const Dashboard = (props) => {
  const Staff = useFetchData("api/DashBoard/1/1/staff");
  const Students = useFetchData("api/DashBoard/1/Students");
  const Institutions = useFetchData("api/DashBoard/1");
  // const StudentsLoggedin = useFetchData("api/DashBoard/1/all/students/status/students");
  const UsersLoggedinandActive = useFetchData(
    "api/DashBoard/1/all/Users/activenow/systemusers"
  );
  const AllUsersLoggedinand = useFetchData(
    "api/DashBoard/1/all/Users/AllLogins/systemusers"
  );
  const Courses = useFetchData("api/Courses");
  const StudentsPerCounty = useFetchData("api/Students/1/1");
  const StudentsPerCountyOptions = [];
  if (StudentsPerCounty.response) {
    StudentsPerCounty.response.map((k, i) => {
      let col = [k.countyName, k.count];
      StudentsPerCountyOptions.push(col);
    });
  }
  let studebtspergenderdata = [];
  let totalStudents = 0;
  if (Array.isArray(Students.response)) {
    let male = Students.response.filter((option) => option.gender === "Male");
    let female = Students.response.filter((option) => option.gender != "Male");
    studebtspergenderdata.push(["Male", male[0].id]);
    studebtspergenderdata.push(["Female", female[0].id]);
    let totalmale = male[0].id;
    let totalfemale = female[0].id;
    totalStudents = totalmale + totalfemale;
  }else {
    // console.log("Empty",Students.response)
  }
  return (
    <div id="content" className="content">
      <ol class="breadcrumb float-xl-right">
        <li class="breadcrumb-item"></li>
        <li class="breadcrumb-item active">DashBoard</li>
      </ol>
      <h1 class="page-header mb-3">DashBoard</h1>
      <div>
        <div class="row">
          <div class="col-xl-3 col-md-6">
            <div class="widget widget-stats bg-info">
              <div class="stats-icon">
                <i class="fa fa-link"></i>
              </div>
              <div class="stats-info">
                <h4>TOTAL INSTITUTIONS</h4>
                <p>
                  {Institutions.response ? Institutions.response.length : 0}
                </p>
              </div>
              <div class="stats-link">
                <Link to="/Institutions">
                  View Detail <i class="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="widget widget-stats bg-blue">
              <div class="stats-icon">
                <i class="fa fa-desktop"></i>
              </div>
              <div class="stats-info">
                <h4>TOTAL TRAINEES</h4>
                <p>{totalStudents}</p>
              </div>
              <div class="stats-link">
                <Link to="/Students">
                  View Detail <i class="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6">
            <div class="widget widget-stats bg-orange">
              <div class="stats-icon">
                <i class="fa fa-users"></i>
              </div>
              <div class="stats-info">
                <h4>STAFF</h4>
                <p>{Staff.response ? Staff.response.length : 0}</p>
              </div>
              <div class="stats-link">
                <Link to="/Staffs">
                  View Detail <i class="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="widget widget-stats bg-red">
              <div class="stats-icon">
                <i class="fa fa-clock"></i>
              </div>
              <div class="stats-info">
                <h4>TOTAL COURSES</h4>
                <p>{Courses.response ? Courses.response.length : 0}</p>
              </div>
              <div class="stats-link">
                <Link to="/Courses">
                  View Detail <i class="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-8">
            <div
              class="panel-heading ui-sortable-handle"
              style={{ background: "black", height: "33px", color: "white" }}
            >
              <h4
                className="panel-title text-center"
                style={{ padding: "5px" }}
              >
                ENROLMENT PER COUNTY
              </h4>
            </div>
            <div style={{ background: "white", marginTop: "4px" }}>
              <ColumnChart data={StudentsPerCountyOptions} />
            </div>
          </div>
          <div class="col-xl-4">
            <div
              class="panel-heading ui-sortable-handle"
              style={{ background: "black", height: "33px", color: "white" }}
            >
              <h4
                className="panel-title text-center"
                style={{ padding: "5px" }}
              >
                TRAINEES GENDER DISTRIBUTION
              </h4>
            </div>
            <div style={{ background: "white" }}>
              <PieChart data={studebtspergenderdata} />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div
              class="panel-heading ui-sortable-handle"
              style={{ background: "black", height: "33px", color: "white" }}
            >
              <h4 className="panel-title" style={{ padding: "5px" }}>
                Active Users
              </h4>
            </div>
            <div style={{ background: "white", marginTop: "4px" }}>
              {UsersLoggedinandActive.response
                ? UsersLoggedinandActive.response.map((k, i) => {
                    return (
                      <div className="col-sm">
                        <b>
                          {k.name}:{k.id}
                        </b>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div class="col-xl-6">
            <div
              class="panel-heading ui-sortable-handle"
              style={{ background: "black", height: "33px", color: "white" }}
            >
              <h4 className="panel-title" style={{ padding: "5px" }}>
                All logins
              </h4>
            </div>
            <div style={{ background: "white", marginTop: "4px" }}>
              {AllUsersLoggedinand.response
                ? AllUsersLoggedinand.response.map((k, i) => {
                    return (
                      <div className="col-sm">
                        <b>
                          {k.name}:{k.totalLogins}
                        </b>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
