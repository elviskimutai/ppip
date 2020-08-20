var express = require("express");
var Signup = express();
var mysql = require("mysql");
var config = require("../../DB");
var con = mysql.createPool(config);
const bcrypt = require("bcryptjs");
var randomstring = require("randomstring");
var Joi = require("joi");
Signup.post("/", function(req, res) {
  const schema = Joi.object().keys({
    Name: Joi.string()
      .min(3)
      .required(),
    Phone: Joi.string()
     
      .required(),
    UserGroup: Joi.number()
      .integer()
      .min(1),
    Username: Joi.string()
      .min(1)
      .required(),
    Category: Joi.string()
    .required(),
    IDnumber: Joi.string().min(1),
    DOB: Joi.date().required(),
    Password: Joi.string().required(),
    Email: Joi.string().required()
  });
  const result = Joi.validate(req.body, schema);
  if (!result.error) {
    bcrypt.hash(req.body.Password, 10, function(err, hash) {
      if (err) {
        return res.json({
          success: false,
          message: "failed to bcyrpt the password"
        });
      }

      let activationCode = randomstring.generate(5);
      let data = [
        req.body.Name,
        req.body.Username,
        req.body.Email,
        req.body.Phone,
        hash,
        req.body.Category,
        activationCode,
        req.body.IDnumber,

        req.body.DOB
      ];
      con.getConnection(function(err, connection) {
        if (err) {
          res.json({
            success: false,
            message: err.message
          });
        } // not connected!
        else {
          let sp = "call Signup(?,?,?,?,?,?,?,?,?)";
          connection.query(sp, data, function(error, results, fields) {
            if (error) {
              res.json({
                success: false,
                message: error.message
              });
            } else {
              res.json({
                success: true,
                message: "saved",
                activationCode: activationCode
              });
            }
            connection.release();
            // Don't use the connection here, it has been returned to the pool.
          });
        }
      });
    });
  } else {
    res.json({
      success: false,
      message: result.error.details[0].message
    });
  }
});

Signup.put("/:Email/:ActivationCode", function(req, res) {
  const Email = req.params.Email;
  const ActivationCode = req.params.ActivationCode;

  let data = [true, Email, ActivationCode];
  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call activation(?,?,?)";
      connection.query(sp, data, function(error, results, fields) {
        if (error) {
          res.json({
            success: false,
            message: error.message
          });
        } else {
          res.json({
            success: true,
            message: "updated"
          });
        }
        connection.release();
        // Don't use the connection here, it has been returned to the pool.
      });
    }
  });
});
module.exports = Signup;
