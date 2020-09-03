var express = require("express");
var cors = require("cors");
var app = express();
var Users = require("./Routes/SystemAdmin/Users");
var usergroups = require("./Routes/SystemAdmin/UserGroups");
var Signup = require("./Routes/SystemAdmin/Signup");
var Mailer = require("./Routes/SystemAdmin/Mailer");
var auth = require("./auth");
var ValidateTokenExpiry = require("./Routes/SystemAdmin/ValidateTokenExpiry");
var Roles = require("./Routes/SystemAdmin/Roles");
var SMSdetails = require("./Routes/SetUps/SMSdetails");
var Auditrails = require("./Routes/SystemAdmin/Auditrails");
var EditEmailtemplates = require("./Routes/SystemAdmin/EditEmailtemplates");
var bodyParser = require("body-parser");
var Uploadfiles = require("./Routes/SystemAdmin/Uploadfiles");
var UserAccess = require("./Routes/SystemAdmin/UserAccess");
var GroupAccess = require("./Routes/SystemAdmin/GroupAccess");
var configurations = require("./Routes/SystemAdmin/configurations");
var ValidateBsn = require("./Routes/SystemAdmin/ValidateBsn");
var EmailVerification = require("./Routes/SystemAdmin/EmailVerification");
var ResetPassword = require("./Routes/SystemAdmin/ResetPassword");
var sms = require("./Routes/SMS/sms");
//setups

var procurementmethods = require("./Routes/SetUps/procurementmethods");
var counties = require("./Routes/SetUps/counties");
var countries = require("./Routes/SetUps/countries");
var Towns = require("./Routes/SetUps/Towns");
var Tenderstatus = require("./Routes/SetUps/Tenderstatus");
var Awardstatus = require("./Routes/SetUps/Awardstatus");
var PE = require("./Routes/SetUps/PE");
var SupplierCategories = require("./Routes/SetUps/SupplierCategories");
var api = require("./Routes/SetUps/api");
var Contractstatus = require("./Routes/SetUps/Contractstatus");
var Milestonestatus = require("./Routes/SetUps/Milestonestatus");
var Teamtypes = require("./Routes/SetUps/Teamtypes");
var Initiationtype = require("./Routes/SetUps/Initiationtype");
var Releasetag = require("./Routes/SetUps/Releasetag");
var Procurementcategoryext = require("./Routes/SetUps/Procurementcategoryext");
var Milestonetype = require("./Routes/SetUps/Milestonetype");


//var Dashboard = require("./Routes/Applications/Dashboard");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(express.static("uploads"));
app.use(express.static("Reports"));
//app.use("/Reports", express.static(__dirname + "Reports"));

app.use("/api/ValidateTokenExpiry", ValidateTokenExpiry);
app.use("/AuthToken", auth.router);
app.use("/api/Signup", Signup);
app.use("/api/login", auth.router);
app.use("/api/upload", Uploadfiles);
app.use("/api/sendmail", Mailer.Mailer);

app.use("/api/EmailVerification", EmailVerification);
app.use("/api/Towns", Towns);
app.use("/api/countries", countries);
app.use("/api/counties", counties);
app.use("/api/sendsms", sms);
app.use("/api/ResetPassword", ResetPassword);
//mpesa

app.use("/api/SupplierCategories", SupplierCategories);
app.use("/api/PE", PE);
app.use("/api/Externalapi", api);
app.use("/api/ValidateBsn", ValidateBsn);

app.use(auth.validateToken);
app.use("/api/EditEmailtemplates", EditEmailtemplates);
app.use("/api/SMSdetails", SMSdetails);
app.use("/api/users", Users);
app.use("/api/usergroups", usergroups);
app.use("/api/roles", Roles);
app.use("/api/auditrails", Auditrails);
app.use("/api/UserAccess", UserAccess);
app.use("/api/GroupAccess", GroupAccess);
app.use("/api/configurations", configurations);
//configuration

app.use("/api/procurementmethods", procurementmethods);
app.use("/api/Tenderstatus", Tenderstatus);
app.use("/api/Awardstatus", Awardstatus);
app.use("/api/Contractstatus", Contractstatus);
app.use("/api/Milestonestatus", Milestonestatus);
app.use("/api/Teamtypes", Teamtypes);
app.use("/api/Initiationtype", Initiationtype);
app.use("/api/Releasetag", Releasetag);
app.use("/api/Procurementcategoryext", Procurementcategoryext);
app.use("/api/Milestonetype", Milestonetype);

app.use((req, res, next) => {
  const error = new Error("resource not found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
