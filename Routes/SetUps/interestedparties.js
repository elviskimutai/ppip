var express = require("express");
var interestedparties = express();
var mysql = require("mysql");
var config = require("../../DB");
var con = mysql.createPool(config);
var Joi = require("joi");
var auth = require("../../auth");
interestedparties.get("/", auth.validateRole("Interested Parties"), function(
  req,
  res
) {
  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call getAllinterestedparties()";
      connection.query(sp, function(error, results, fields) {
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
interestedparties.get("/:ID", auth.validateRole("Interested Parties"), function(
  req,
  res
) {
  const ID = req.params.ID;
  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call getinterestedpartiesPerApplication(?)";
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
interestedparties.get(
  "/:ID/:JR",
  auth.validateRole("Interested Parties"),
  function(req, res) {
    const ID = req.params.ID;
    con.getConnection(function(err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message
        });
      } // not connected!
      else {
        let sp = "call getJRinterestedpartiesPerApplication(?)";
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
  }
);
interestedparties.post(
  "/:Interestedparty",
  auth.validateRole("Interested Parties"),
  function(req, res) {
    const schema = Joi.object().keys({
      Name: Joi.string().required(),
      TelePhone: Joi.string()
        .min(10)
        .required(),
      Mobile: Joi.string()
        .min(10)
        .required(),
      ApplicationNO: Joi.string().required(),
      ContactName: Joi.string().required(),
      Email: Joi.string().email({ minDomainAtoms: 2 }),
      PhysicalAddress: Joi.string()
        .allow(null)
        .allow(""),
      PostalCode: Joi.string().required(),
      Town: Joi.string().required(),
      Designation: Joi.string().required(),
      POBox: Joi.string().required()
    });
    const result = Joi.validate(req.body, schema);
    if (!result.error) {
      let data = [
        req.body.Name,
        req.body.ApplicationNO,
        req.body.ContactName,
        req.body.Email,
        req.body.TelePhone,
        req.body.Mobile,
        req.body.PhysicalAddress,
        req.body.PostalCode,
        req.body.Town,
        req.body.POBox,
        res.locals.user,
        req.body.Designation
      ];
      con.getConnection(function(err, connection) {
        if (err) {
          res.json({
            success: false,
            message: err.message
          });
        } // not connected!
        else {
          let sp = "call Savejrinterestedparties(?,?,?,?,?,?,?,?,?,?,?,?)";
          connection.query(sp, data, function(error, results, fields) {
            if (error) {
              res.json({
                success: false,
                message: error.message
              });
            } else {
              res.json({
                success: true,
                message: "saved"
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
  }
);
interestedparties.post("/", auth.validateRole("Interested Parties"), function(
  req,
  res
) {
  const schema = Joi.object().keys({
    Name: Joi.string()
      .min(3)
      .required(),
    TelePhone: Joi.string()
      .min(10)
      .required(),
    Mobile: Joi.string()
      .min(10)
      .required(),
    ApplicationID: Joi.number()
      .integer()
      .min(1),
    ContactName: Joi.string()
      .min(2)
      .required(),
    Email: Joi.string().email({ minDomainAtoms: 2 }),
    PhysicalAddress: Joi.string()
      .allow(null)
      .allow(""),
    PostalCode: Joi.string()
      .min(1)
      .required(),
    Town: Joi.string()
      .min(2)
      .required(),
    Designation: Joi.string()
      .min(2)
      .required(),
    POBox: Joi.string()
      .min(1)
      .required()
  });
  const result = Joi.validate(req.body, schema);
  if (!result.error) {
    let data = [
      req.body.Name,
      req.body.ApplicationID,
      req.body.ContactName,
      req.body.Email,
      req.body.TelePhone,
      req.body.Mobile,
      req.body.PhysicalAddress,
      req.body.PostalCode,
      req.body.Town,
      req.body.POBox,
      res.locals.user,
      req.body.Designation
    ];
    con.getConnection(function(err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message
        });
      } // not connected!
      else {
        let sp = "call SaveInterestedParty(?,?,?,?,?,?,?,?,?,?,?,?)";
        connection.query(sp, data, function(error, results, fields) {
          if (error) {
            res.json({
              success: false,
              message: error.message
            });
          } else {
            res.json({
              success: true,
              message: "saved"
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
interestedparties.delete(
  "/:ID",
  auth.validateRole("Interested Parties"),
  function(req, res) {
    const ID = req.params.ID;
    let data = [ID, res.locals.user];
    con.getConnection(function(err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message
        });
      } // not connected!
      else {
        let sp = "call DeleteInterestedParty(?,?)";
        connection.query(sp, data, function(error, results, fields) {
          if (error) {
            res.json({
              success: false,
              message: error.message
            });
          } else {
            res.json({
              success: true,
              message: "deleted Successfully"
            });
          }
          connection.release();
          // Don't use the connection here, it has been returned to the pool.
        });
      }
    });
  }
);
module.exports = interestedparties;
