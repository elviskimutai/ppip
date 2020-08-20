var express = require("express");
var updateprofile = express();
var mysql = require("mysql");
var config = require("../../DB");
var con = mysql.createPool(config);
var Joi = require("joi");
updateprofile.post("/", function(req, res) {
  const schema = Joi.object().keys({
    Name: Joi.string()
      .min(3)
      .required(),
    Phone: Joi.string()
      .min(10)
      .required(),
    Username: Joi.string()
      .min(3)
      .required(),
    Photo: Joi.string(),
    Email: Joi.string().required()
  });
  const result = Joi.validate(req.body, schema);
  if (!result.error) {
    let data = [
      req.body.Name,
      req.body.Email,
      req.body.Phone,
      req.body.Photo,
      req.body.Username
    ];

    con.getConnection(function(err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message
        });
      } // not connected!
      else {
        let sp = "call UpdateProfile(?,?,?,?,?)";
        connection.query(sp, data, function(error, results, fields) {
          if (error) {
            res.json({
              success: false,
              message: error.message
            });
          } else {
            res.json({
              success: true,
              message: "Updated"
            });
          }
          connection.release();
          // Don't use the connection here, it has been returned to the pool.
        });
      }
    });
  } else {
    res.json({
      success: false,
      message: result.error.details[0].message
    });
  }
});
updateprofile.put("/:ID", function(req, res) {
  const ID = req.params.ID;
  let data = [req.body.photo, ID];

  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call UpdateProfilePhoto(?,?)";
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
module.exports = updateprofile;
