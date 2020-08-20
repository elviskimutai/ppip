var express = require("express");
var configurations = express();
var mysql = require("mysql");
var config = require("../../DB");
var Joi = require("joi");
var con = mysql.createPool(config);
var auth = require("../../auth");
configurations.get("/:ID", function(req, res) {
  const ID = req.params.ID;
  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call GetCompanyDetails(?)";
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
configurations.get("/:ID/:Category", function(req, res) {
  const ID = req.params.ID;
  const Category = req.params.Category;

  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call GetLoogedinCompany(?,?)";
      connection.query(sp, [ID, Category], function(error, results, fields) {
        if (error) {
          res.json({
            success: false,
            message: error.message
          });
        } else {
          //console.log(Category);
          res.json(results[0]);
        }
        connection.release();
        // Don't use the connection here, it has been returned to the pool.
      });
    }
  });
});
configurations.post("/", auth.validateRole("System Configurations"), function(
  req,
  res
) {
  const schema = Joi.object().keys({
    Name: Joi.string()
      .min(3)
      .required(),
    PhysicalAdress: Joi.string()
      .min(3)
      .required(),
    Street: Joi.string()
      .min(3)
      .required(),
    PoBox: Joi.string()
      .min(3)
      .required(),
    PostalCode: Joi.string()
      .min(3)
      .required(),
    Town: Joi.string()
      .min(3)
      .required(),
    Telephone1: Joi.string()
      .allow("")
      .allow(null),
    Telephone2: Joi.string()
      .allow("")
      .allow(null),
    Mobile: Joi.string()
      .min(10)
      .required(),
    Fax: Joi.string()
      .allow("")
      .allow(null),
    Email: Joi.string().email({ minDomainAtoms: 2 }),
    Website: Joi.string()
      .uri()
      .allow("")
      .allow(null),
    PIN: Joi.string()
      .min(3)
      .required(),
    Logo: Joi.string()
      .min(3)
      .allow("")
      .allow(null),
    Code: Joi.string()
      .min(3)
      .required()
  });
  const result = Joi.validate(req.body, schema);
  if (!result.error) {
    let data = [
      req.body.Name,
      req.body.PhysicalAdress,
      req.body.Street,
      req.body.PoBox,
      req.body.PostalCode,
      req.body.Town,
      req.body.Telephone1,
      req.body.Telephone2,
      req.body.Mobile,
      req.body.Fax,
      req.body.Email,
      req.body.Website,
      req.body.PIN,
      req.body.Logo,
      res.locals.user,
      req.body.Code
    ];
    con.getConnection(function(err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message
        });
      } // not connected!
      else {
        let sp = "call SaveConfigurations(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
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
configurations.put("/:ID", auth.validateRole("System Configurations"), function(
  req,
  res
) {
  const schema = Joi.object().keys({
    Name: Joi.string()
      .min(3)
      .required(),
    PhysicalAdress: Joi.string()
      .min(3)
      .required(),
    Street: Joi.string()
      .min(3)
      .required(),
    PoBox: Joi.string()
      .min(3)
      .required(),
    PostalCode: Joi.string()
      .min(3)
      .required(),
    Town: Joi.string()
      .min(3)
      .required(),
    Telephone1: Joi.string()
      .allow("")
      .allow(null),
    Telephone2: Joi.string()
      .allow("")
      .allow(null),
    Mobile: Joi.string()
      .min(10)
      .required(),
    Fax: Joi.string()
      .allow("")
      .allow(null),
    Email: Joi.string().email({ minDomainAtoms: 2 }),
    Website: Joi.string()
      .uri()
      .allow("")
      .allow(null),
    PIN: Joi.string()
      .min(11)
      .required(),
    Logo: Joi.string()
      .min(3)
      .allow("")
      .allow(null)
  });

  const result = Joi.validate(req.body, schema);
  if (!result.error) {
    const ID = req.params.ID;
    let data = [
      req.body.Name,
      req.body.PhysicalAdress,
      req.body.Street,
      req.body.PoBox,
      req.body.PostalCode,
      req.body.Town,
      req.body.Telephone1,
      req.body.Telephone2,
      req.body.Mobile,
      req.body.Fax,
      req.body.Email,
      req.body.Website,
      req.body.PIN,
      req.body.Logo,
      res.locals.user,
      ID
    ];
    con.getConnection(function(err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message
        });
      } // not connected!
      else {
        let sp = "call UpdateConfigurations(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
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
  } else {
    res.json({
      success: false,
      message: result.error.details[0].message
    });
  }
});
configurations.delete(
  "/:ID",
  auth.validateRole("System Configurations"),
  function(req, res) {
    const ID = req.params.ID;
    let data = [res.locals.user, ID];
    con.getConnection(function(err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message
        });
      } // not connected!
      else {
        let sp = "call DeleteConfigurations(?,?)";
        connection.query(sp, data, function(error, results, fields) {
          if (error) {
            res.json({
              success: false,
              message: error.message
            });
          } else {
            res.json({
              success: true,
              message: "Deleted Successfully"
            });
          }
          connection.release();
          // Don't use the connection here, it has been returned to the pool.
        });
      }
    });
  }
);
module.exports = configurations;
