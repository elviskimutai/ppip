var express = require("express");
var ExecutiveReports = express();
var mysql = require("mysql");
var config = require("./../../DB");
var Joi = require("joi");
var con = mysql.createPool(config);
var auth = require("./../../auth");
ExecutiveReports.get("/:ID", function(req, res) {
  const ID = req.params.ID;
  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call GetMonthlyCasesDistributions(?)";
      connection.query(sp, [ID], function(error, results, fields) {
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
ExecutiveReports.get("/:ID/:PEType", function(req, res) {
  const ID = req.params.ID;
  const PEApplications = req.params.PEType;

  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      if (PEApplications === "PEApplications") {
        let sp = "call GetPEApplications(?)";
        connection.query(sp, [ID], function(error, results, fields) {
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
      if (PEApplications === "PECategory") {
        let sp = "call GetPEAppearanceFrequencyPercategory(?)";
        connection.query(sp, [ID], function(error, results, fields) {
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
    }
  });
});
// PE Appearance Frequency
ExecutiveReports.get("/:ID/:Val1/:Val2", function(req, res) {
  const ID = req.params.ID;
  const Val1 = req.params.Val1;
  const Val2 = req.params.Val2;
  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call GetPEAppearanceFrequency(?,?,?)";
     
      connection.query(sp, [ID, Val1, Val2], function(error, results, fields) {
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
// requests handled
ExecutiveReports.get("/:ID/:Val1/:Val2/:Val3", function(req, res) {
  const ID = req.params.ID;
  const Val1 = req.params.Val1;
  const Val2 = req.params.Val2;
  const Val3 = req.params.Val3;

  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      if (Val3 === "requesthandled") {
        let sp = "call Generaterequesthandled(?,?,?)";
        connection.query(sp, [ID, Val1, Val2], function(
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
      } else {
        {
          let sp = "call GetsuccessfullApplications(?,?,?,?)";
          connection.query(sp, [ID, Val1, Val2, Val3], function(
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
      }
    }
  });
});
module.exports = ExecutiveReports;
