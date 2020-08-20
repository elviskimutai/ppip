import React from "react";
import { Link } from "react-router-dom";
//import useValidateRole from "../Hooks/useValidateRole";
import useFetchData from "../Hooks/useFetchData";
const Sidebar = () => {
  const UserRoles = useFetchData("/api/UserAccess");
  const UserManagementModule = () => {
    return (
      <ul className="sub-menu">
        {useValidateRole("Security Groups", "View") ? (
          <li>
            <Link to="/SecurityGroups">SecurityGroups </Link>
          </li>
        ) : null}
        {useValidateRole("System Users", "View") ? (
          <li>
            <Link to="/Users">Users </Link>
          </li>
        ) : null}
        {useValidateRole("Roles", "View") ? (
          <li>
            <Link to="/Roles">Roles</Link>
          </li>
        ) : null}
      </ul>
    );
  };
  const useValidateRole = (rolename, action) => {
    if (UserRoles.isLoading) {
      let role = UserRoles.response.find((obj) => obj.RoleName === rolename);
      if (role) {
        if (action === "AddNew") {
          if (role.AddNew) {
            return true;
          } else {
            return false;
          }
        } else if (action === "View") {
          if (role.View) {
            return true;
          } else {
            return false;
          }
        } else if (action === "Edit") {
          if (role.Edit) {
            return true;
          } else {
            return false;
          }
        } else if (action === "Export") {
          if (role.Export) {
            return true;
          } else {
            return false;
          }
        } else if (action == "Remove") {
          if (role.Remove) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  const ConfigurationModule = () => {
    return (
      <ul className="sub-menu">
        {useValidateRole("Smtp", "View") ? (
          <li>
            <Link to="/Smtp">Smtp </Link>
          </li>
        ) : null}
        {useValidateRole("Countries", "View") ? (
          <li>
            <Link to="/Countries">Countries </Link>
          </li>
        ) : null}
        {useValidateRole("Counties", "View") ? (
          <li>
            <Link to="/Counties">Counties </Link>
          </li>
        ) : null}
        {useValidateRole("Towns", "View") ? (
          <li>
            <Link to="/Towns">Towns</Link>
          </li>
        ) : null}
        {useValidateRole("Supplier Categories", "View") ? (
          <li>
            <Link to="/SupplierCategories">Supplier Categories</Link>
          </li>
        ) : null}
        {useValidateRole("Sub Counties", "View") ? (
          <li>
            <Link to="/SubCounties">Sub Counties</Link>
          </li>
        ) : null}
        {useValidateRole("Wards", "View") ? (
          <li>
            <Link to="/Wards">Wards</Link>
          </li>
        ) : null}
      </ul>
    );
  };

  return (
    <div id="sidebar" className="sidebar">
      <div data-scrollbar="true" data-height="100%">
        <ul className="nav">
          <li className="nav-profile">
            <a href="javascript:;" data-toggle="nav-profile">
              <div className="cover with-shadow"></div>
              <div className="image">
                <img
                  src={
                    process.env.REACT_APP_BASE_URL +
                    window.sessionStorage.getItem("Photo")
                  }
                  alt=""
                />
              </div>
              <div className="info">
                <small>{window.sessionStorage.getItem("UserName")}</small>
              </div>
            </a>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-header">Navigation</li>
          <li>
            <b className="caret"></b>
            <i className="fa fa-address-book"></i>
            <Link to="/DashBoard">
              {" "}
              <span>DashBoard</span>{" "}
            </Link>
          </li>

          {useValidateRole("User Management", "View") ? (
            <li className="has-sub active">
              <a href="javascript:;">
                <b className="caret"></b>
                <i className="fa fa-address-book"></i>
                <span>User Management</span>
              </a>
              <UserManagementModule />
            </li>
          ) : null}
          {useValidateRole("Configurations", "View") ? (
            <li className="has-sub">
              <a href="javascript:;">
                <b className="caret"></b>
                <i className="fa fa-address-book"></i>
                <span>Configurations</span>
              </a>
              <ConfigurationModule />
            </li>
          ) : null}

          <li>
            <a
              href="javascript:;"
              class="sidebar-minify-btn"
              data-click="sidebar-minify"
            >
              <i class="fa fa-angle-double-left"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
