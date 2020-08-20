var express = require("express");
var GroupAccess = express();
var mysql = require("mysql");
var config = require("../../DB");
var con = mysql.createPool(config);
var auth = require("../../auth");
GroupAccess.get("/:ID", auth.validateRole("Assign Group Access"), function (
  req,
  res
) {
  const ID = req.params.ID;
  con.getConnection(function (err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message,
      });
    } // not connected!
    else {
      let sp = "call GetGroupRoles(?)";
      connection.query(sp, [ID], function (error, results, fields) {
        if (error) {
          res.json({
            success: false,
            message: error.message,
          });
        } else {
          res.json(results[0]);
        }
        connection.release();
      });
    }
  });
});

GroupAccess.put("/", auth.validateRole("Assign Group Access"), function (
  req,
  res
) {
  let data = [
    req.body.UserGroup,
    req.body.Role,
    req.body.Status,
    req.body.Name,
    res.locals.user,
  ];

  con.getConnection(function (err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message,
      });
    } // not connected!
    else {
      let sp = "call SaveGroupRoles(?,?,?,?,?)";
      connection.query(sp, data, function (error, results, fields) {
        if (error) {
          res.json({
            success: false,
            message: error.message,
          });
        } else {
          res.json({
            success: true,
            message: "updated",
          });
        }
        connection.release();
        // Don't use the connection here, it has been returned to the pool.
      });
    }
  });
});

module.exports = GroupAccess;
