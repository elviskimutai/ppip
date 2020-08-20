var express = require("express");
var ResetPassword = express();
var mysql = require("mysql");
var config = require("../../DB");
var con = mysql.createPool(config);
var randomstring = require("randomstring");
var mailer = require("./Mailer");
const bcrypt = require("bcryptjs");
ResetPassword.put("/", function (req, res) {
  let Newpassword = req.body.NewPassword;
  bcrypt.hash(Newpassword, 10, function (err, hash) {
    if (err) {
      return res.json({
        success: false,
        message: "failed to bcyrpt the password",
      });
    }
    let data = [hash, req.body.Username];
    con.getConnection(function (err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message,
        });
      } // not connected!
      else {
        let sp = "call Updatepassword(?,?)";
        connection.query(sp, data, function (error, results, fields) {
          if (error) {
            res.json({
              success: false,
              message: "Error occurred while sending the request",
            });
          } else {
            res.json({
              success: true,
            });
          }
          connection.release();
        });
      }
    });
  });
});
ResetPassword.post("/", function (req, res) {
  let Newpassword = randomstring.generate(5);
  bcrypt.hash(Newpassword, 10, function (err, hash) {
    if (err) {
      return res.json({
        success: false,
        message: "failed to bcyrpt the password",
      });
    }
    let data = [req.body.Email, hash];
    con.getConnection(function (err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message,
        });
      } // not connected!
      else {
        let sp = "call Resetpassword(?,?)";
        connection.query(sp, data, function (error, results, fields) {
          if (error) {
            res.json({
              success: false,
              message: "Error occurred while sending the request",
            });
          } else {
            if (results[0][0].msg === "User Not Found") {
              res.json({
                success: false,
                results: results[0][0].msg,
              });
            } else {
              mailer.SendResetPasswordmail(
                req.body.Email,
                "PASSWORD RESET",
                Newpassword
              );
              res.json({
                success: true,
                results: results[0][0].msg,
              });
            }
          }
          connection.release();
        });
      }
    });
  });
});
ResetPassword.get("/:ID/:Pass", function (req, res) {
  con.getConnection(function (err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message,
      });
    } // not connected! getuser
    else {
      let Username = req.params.ID;
      let sp = "call getuser(?)";
      connection.query(sp, Username, function (error, results, fields) {
        if (error) {
          res.json({
            success: false,
            message: error.message,
          });
        } else {
          if (results[0].length > 0) {
            let Password = results[0][0].Password;
            bcrypt.compare(req.params.Pass, Password, function (err, data) {
              if (err) {
                res.status(404).json({
                  success: false,
                  message: "Connection failed. Please try again",
                });
              }
              if (data) {
                res.json({
                  success: true,
                });
              } else {
                res.status(404).json({
                  success: false,
                  message: "Incorect old password.",
                });
              }
            });
          } else {
            res.status(404).json({
              success: false,
              message: "Sorry, user does not exist or disabled account.",
            });
          }
        }
        connection.release();
        // Don't use the connection here, it has been returned to the pool.
      });
    }
  });
});
module.exports = ResetPassword;
