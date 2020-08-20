var express = require("express");
var CustomReport = express();
var mysql = require("mysql");
var config = require("./../../DB");
var Joi = require("joi");
var con = mysql.createPool(config);
var auth = require("./../../auth");
CustomReport.get("/:Status/:FromDate/:Todate/:Alldates", function(req, res) {
  const Status = req.params.Status;
  const FromDate = req.params.FromDate;
  const Todate = req.params.Todate;
  const Alldates = req.params.Alldates;

  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call getCustomReport(?,?,?,?)";
      connection.query(sp, [Status, FromDate, Todate, Alldates], function(
        error,
        results,
        fields
      ) {
        if (error) {
          res.json({
            success: false,
            message: error.message
          });
        } else {
          res.json(results[0]);
        }
        connection.release();
        // Don't use the connection here, it has been returned to the pool.
      });
    }
  });
});

module.exports = CustomReport;
