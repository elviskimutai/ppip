var express = require("express");
var EmailVerification = express();
var mysql = require("mysql");
var config = require("../../DB");
var con = mysql.createPool(config);
EmailVerification.post("/", function(req, res) {
  let data = [req.body.Code, req.body.username];
  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call EmailVerification(?,?)";
      connection.query(sp, data, function(error, results, fields) {
        if (error) {
          res.json({
            success: false,
            message: "Error occurred while sending the request"
          });
        } else {
          res.json({
            success: true,
            message: "saved",
            results: results[0]
          });
        }
        connection.release();
      });
    }
  });
});

module.exports = EmailVerification;
