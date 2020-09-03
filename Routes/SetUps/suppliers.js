var express = require("express");
var Users = express();
var mysql = require("mysql");
var config = require("../../DB");
var con = mysql.createPool(config);
const bcrypt = require("bcryptjs");
var Joi = require("joi");
var randomstring = require("randomstring");
var auth = require("../../auth");
suppliers.get("/", auth.validateRole("Suppliers"), function (req, res) {
  con.getConnection(function (err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message,
      });
    } // not connected!
    else {
      let sp = "call GetUsers()";
      connection.query(sp, function (error, results, fields) {
        if (error) {
          res.json({
            success: false,
            message: error.message,
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
suppliers.get("/:ID", auth.validateRole("Suppliers"), function (req, res) {
  const ID = req.params.ID;
  con.getConnection(function (err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message,
      });
    } // not connected!
    else {
      let sp = "call GetUser(?)";
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
        // Don't use the connection here, it has been returned to the pool.
      });
    }
  });
});

suppliers.post("/", auth.validateRole("Suppliers"), function (req, res) {
  const schema = Joi.object().keys({
    supplier_name: Joi.string().required(),
    pin_number: Joi.string().required(),
    supplier_telephone: Joi.string().required(),
    supplier_email: Joi.string().email({ minDomainAtoms: 2 }),
    bus_reg_number: Joi.string().required(),
    business_type: Joi.string().required(),
    physical_address: Joi.string().allow(null).allow(""),
    postal_address: Joi.string().allow(null).allow(""),
    tcc_number: Joi.string().allow(null).allow(""),
    tcc_valid_date: Joi.date().allow(null).allow(""),
    tcc_valid_status: Joi.string().allow(null).allow(""),
    county_of_operation: Joi.string().allow(null).allow(""),
    permit_number: Joi.string().allow(null).allow(""),
    permit_expiry_date: Joi.string().allow(null).allow(""),
    permit_status: Joi.string().allow(null).allow(""),
    date_registered: Joi.date().allow(null).allow(""),
    black_list_reason: Joi.string().allow(null).allow(""),
    supplier_type: Joi.string().allow(null).allow(""),
    country: Joi.string().allow(null).allow(""),
    supplier_status: Joi.string().allow(null).allow(""),
    supplier_category: Joi.number().integer().min(1),
  });
  const result = Joi.validate(req.body, schema);
  if (!result.error) {
    bcrypt.hash(req.body.Password, 10, function (err, hash) {
      if (err) {
        return res.json({
          success: false,
          message: "failed to bcyrpt the password",
        });
      }
      let data = [
        req.body.Name,
        req.body.pin_number,
        req.body.supplier_telephone,
        req.body.supplier_email,
        req.body.bus_reg_number,
        req.body.business_type,
        req.body.physical_address,
        req.body.postal_address,
        req.body.tcc_number,
        req.body.tcc_valid_date,
        req.body.tcc_valid_status,
        req.body.county_of_operation,
        req.body.permit_number,
        req.body.permit_expiry_date,
        req.body.permit_status,
        req.body.date_registered,
        req.body.black_list_reason,
        req.body.supplier_type,
        req.body.country,
        req.body.supplier_status,
        req.body.supplier_category,
      ];
      con.getConnection(function (err, connection) {
        if (err) {
          res.json({
            success: false,
            message: err.message,
          });
        } // not connected!
        else {
          let sp = "call SaveUser(?,?,?,?,?,?,?,?,?,?,?)";
          connection.query(sp, data, function (error, results, fields) {
            if (error) {
              res.json({
                success: false,
                message: error.message,
              });
            } else {
              res.json({
                success: true,
                message: "saved",
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
      message: result.error.details[0].message,
    });
  }
});
suppliers.put("/:ID", auth.validateRole("Suppliers"), function (req, res) {
  const schema = Joi.object().keys({
    Name: Joi.string().min(3).required(),
    Phone: Joi.string().required(),
    UserGroupID: Joi.number().integer().min(1),
    Username: Joi.string().min(3).required(),
    Password: Joi.string().required(),
    Email: Joi.string().email({ minDomainAtoms: 2 }),
    Gender: Joi.string().allow(null).allow(""),
    Photo: Joi.string().allow(null).allow(""),
    IdNumber: Joi.string().allow(null).allow(""),
    IsActive: Joi.boolean(),
  });
  const result = Joi.validate(req.body, schema);
  if (!result.error) {
    const ID = req.params.ID;
    let data = [
      req.body.Name,
      req.body.Email,
      req.body.UserGroupID,
      ID,
      res.locals.user,
      req.body.Phone,
      req.body.IsActive,
      req.body.IDnumber,
      req.body.Gender,
      req.body.Photo,
    ];
    con.getConnection(function (err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message,
        });
      } // not connected!
      else {
        let sp = "call UpdateUser(?,?,?,?,?,?,?,?,?,?)";
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
  } else {
    res.json({
      success: false,
      message: result.error.details[0].message,
    });
  }
});
suppliers.delete("/:ID", auth.validateRole("Suppliers"), function (req, res) {
  const ID = req.params.ID;
  let data = [ID, res.locals.user];
  con.getConnection(function (err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message,
      });
    } // not connected!
    else {
      let sp = "call DeleteUser(?,?)";
      connection.query(sp, data, function (error, results, fields) {
        if (error) {
          res.json({
            success: false,
            message: error.message,
          });
        } else {
          res.json({
            success: true,
            message: "deleted Successfully",
          });
        }
        connection.release();
        // Don't use the connection here, it has been returned to the pool.
      });
    }
  });
});
module.exports = suppliers;
