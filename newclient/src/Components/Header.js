import React from "react";
const HomePage = () => {
  return (
    <div id="header" class="header navbar-default">
      <div class="navbar-header">
        <a class="navbar-brand">
          <span class="navbar-logo"></span>{" "}
          <b>The Public Procurement Information Portal(PPIP)</b>
        </a>
        <button
          type="button"
          class="navbar-toggle"
          data-click="sidebar-toggled"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <ul class="navbar-nav navbar-right">
        <li class="navbar-form">
          <form action="#" method="POST" name="search">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter keyword"
              />
              <button type="button" class="btn btn-search">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </form>
        </li>

        <li class="dropdown navbar-user">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <img
              src={
                process.env.REACT_APP_BASE_URL +
                window.sessionStorage.getItem("Photo")
              }
              alt=""
            />
            <span class="d-none d-md-inline">
              {window.sessionStorage.getItem("UserName")}
            </span>{" "}
            <b class="caret"></b>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            {window.sessionStorage.getItem("SecurityGroupId") == 1 ? null : (
              <a href="#/EditProfile" class="dropdown-item">
                Edit Profile
              </a>
            )}

            <div class="dropdown-divider"></div>
            <a href="#Logout" class="dropdown-item">
              Log Out
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default HomePage;
