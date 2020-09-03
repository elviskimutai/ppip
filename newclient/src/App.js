import React from "react";
import HomePage from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Countries from "./Pages/Configurations/Countries";
import Counties from "./Pages/Configurations/Counties";
import Towns from "./Pages/Configurations/Towns";
import Wards from "./Pages/Configurations/Wards";
import SubCounties from "./Pages/Configurations/SubCounties";

import Dashboard from "./Components/Dashboard";

import Smtp from "./Pages/Configurations/Smtp";
import SecurityGroups from "./Pages/Configurations/SecurityGroups";
import Users from "./Pages/Configurations/Users";
import Roles from "./Pages/Configurations/Roles";
import Login from "./Pages/Configurations/Login";
import Logout from "./Pages/Configurations/Logout";
import EditProfile from "./Pages/Configurations/EditProfile";
import ForgotPassword from "./Pages/Configurations/ForgotPassword";
import Register from "./Pages/Configurations/register";
import SupplierCategories from "./Pages/Configurations/SupplierCategories";
import Externalapi from "./Pages/Configurations/Externalapi";

function App() {
  let xtoken = window.sessionStorage.getItem("xtoken");
  if (xtoken) {
    return (
      <div
        id="page-container"
        class="fade page-sidebar-fixed page-header-fixed"
      >
        <HomePage />
        <HashRouter>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Users} />;
            <Route path="/Smtp" exact component={Smtp} />;
            <Route path="/Counties" exact component={Counties} />;
            <Route path="/Countries" exact component={Countries} />;
            <Route path="/SecurityGroups" exact component={SecurityGroups} />;
            <Route path="/Users" exact component={Users} />;
            <Route path="/Roles" exact component={Roles} />;
            <Route path="/Logout" exact component={Logout} />;
            <Route path="/EditProfile" exact component={EditProfile} />;
            <Route path="/DashBoard" exact component={Dashboard} />;
            <Route path="/Towns" exact component={Towns} />;
            <Route path="/Wards" exact component={Wards} />;
            <Route
              path="/SupplierCategories"
              exact
              component={SupplierCategories}
            />
            ;
            <Route path="/SubCounties" exact component={SubCounties} />;
            <Route path="/Externalapi" exact component={Externalapi} />;
          </Switch>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Login} />;
            <Route path="/Login" exact component={Login} />;
            <Route path="/Logout" exact component={Logout} />;
            <Route path="/ForgotPassword" exact component={ForgotPassword} />;
            <Route path="/Register" exact component={Register} />;
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
