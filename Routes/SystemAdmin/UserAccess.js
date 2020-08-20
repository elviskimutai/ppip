var express = require("express");
var UserAccess = express();
var mysql = require("mysql");
var config = require("../../DB");
var con = mysql.createPool(config);
var auth = require("../../auth");
UserAccess.get("/", function (req, res) {
  const ID = res.locals.user;
  con.getConnection(function (err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message,
      });
    } // not connected!
    else {
      let sp = "call GetUserRoles(?)";
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
UserAccess.get("/:ID", auth.validateRole("Assign User Access"), function (
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
      let sp = "call GetuserAccess(?)";
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

UserAccess.put("/", auth.validateRole("Assign User Access"), function (
  req,
  res
) {
  let data = [
    req.body.UserName,
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
      let sp = "call SaveuserAcces(?,?,?,?,?)";
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
UserAccess.put("/:ID/:User", auth.validateRole("Assign User Access"), function (
  req,
  res
) {
  const ID = req.params.ID;
  const User = req.params.User;

  con.getConnection(function (err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message,
      });
    } // not connected!
    else {
      if (ID === "Remove") {
        let sp = "call RemoveAllUserroles(?)";
        connection.query(sp, User, function (error, results, fields) {
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
      } else {
        let sp = "call GiveUserAllRoles(?)";
        connection.query(sp, User, function (error, results, fields) {
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
    }
  });
});
module.exports = UserAccess;
