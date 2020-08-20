var express = require("express");
var router = express();
var role = express();
var mysql = require("mysql");
var config = require("./DB");
var con = mysql.createPool(config);
var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var mysql = require("mysql");
var con = mysql.createPool(config);
function validateRole(Role) {
  return function (req, res, next) {
    con.getConnection(function (err, connection) {
      if (err) {
        return res.json({
          success: false,
          message: err.message,
        });
      } // not connected!
      else {
        let sp = "call sp_ValidatePrivilege(?,?)";
        let user = res.locals.user;
        connection.query(sp, [user, Role], function (error, results, fields) {
          if (error) {
            return res.json({
              success: false,
              message: error.message,
            });
          } else {
            if (results[0].length > 0) {
              let type = req.method;
              if (type === "POST") {
                right = results[0][0].AddNew;
              } else if (type === "DELETE") {
                right = results[0][0].Remove;
              } else if (type === "PUT") {
                right = results[0][0].Edit;
              } else if (type === "GET") {
                right = results[0][0].View;
              }
              if (right) {
                next();
              } else {
                return res.json({
                  success: false,
                  message: "privilage violation." + Role,
                });
              }
            } else {
              return res.json({
                success: false,
                message: "privilage violation. " + Role,
              });
            }
          }
          connection.release();
          // Don't use the connection here, it has been returned to the pool.
        });
      }
    });
  };
}
function validateToken(req, res, next) {
  var token =
    req.body.token ||
    req.query.token ||
    req.headers.authorization ||
    req.headers["x-access-token"];

  if (token) {
    jwt.verify(token, "secret", function (err, decoded) {
      if (err) {
        //return res.redirect("/");
        return res.json({
          success: false,
          message: "Session has expired.",
        });
      } else {
        res.locals.user = decoded.UserName;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: "No token provided.",
    });
  }
}

router.get("/", function (req, res) {
  var token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (token) {
    jwt.verify(token, "secret", function (err, decoded) {
      if (err) {
        res.status(401).send("Unauthorized: Invalid token");
      } else {
        res.status(200).send("Valid token");
      }
    });
  } else {
    res.status(401).send("Unauthorized: No token provided");
  }
});

router.post("/", function (req, res) {
  con.getConnection(function (err, connection) {
    if (err) {
      return res.json({
        success: false,
        message: err.message,
      });
    } // not connected! getuser
    else {
      let Username = req.body.username;
      let sp = "call GetUser(?)";
      connection.query(sp, Username, function (error, results, fields) {
        if (error) {
          return res.json({
            success: false,
            message: error.message,
          });
        } else {
          if (results[0].length > 0) {
            let Password = results[0][0].Password;
            let user = results[0][0].Username;
            let isemailVerified = results[0][0].IsEmailverified;
            bcrypt.compare(req.body.password, Password, function (err, data) {
              if (err) {
                return res.status(404).json({
                  success: false,
                  message: "Connection failed. Please try again",
                });
              }
              if (data) {
                if (isemailVerified) {
                  var token = jwt.sign(
                    {
                      exp: Math.floor(Date.now() / 1000) + 600 * 60,
                      //exp: Math.floor(Date.now() / 1000) + 5 * 5,
                      UserName: user,
                    },
                    "secret"
                  );
                  res.json({
                    success: true,
                    message: "Enjoy your token!",
                    token: token,
                    userdata: results[0][0],
                  });
                } else {
                  res.json({
                    success: false,
                    message: "Email Not Verified!",
                    userdata: results[0][0],
                  });
                }
              } else {
                // if (err) {
                res.status(404).json({
                  success: false,
                  message: "Wrong password. Please try again",
                });
              }
            });
          } else {
            return res.status(404).json({
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
module.exports = {
  validateRole,
  validateToken,
  role,
  router,
};
