var express = require("express");
var ValidateTokenExpiry = express();
var jwt = require("jsonwebtoken");
ValidateTokenExpiry.get("/", function(req, res) {
  var token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (token) {
    jwt.verify(token, "secret", function(err, decoded) {
      if (err) {
        //return res.redirect("/");
        return res.json({
          success: false,
          message: "Session has expired."
        });
      } else {
        return res.json({
          success: true,
          message: "Valid."
        });
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: "No token provided."
    });
  }
});

module.exports = ValidateTokenExpiry;
