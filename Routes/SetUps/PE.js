var express = require("express");
var PE = express();
var mysql = require("mysql");
var config = require("./../../DB");
var Joi = require("joi");
var con = mysql.createPool(config);

PE.get("/", function(req, res) {
  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call getPE()";
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
PE.get("/:ID/:Details", function(req, res) {
  const ID = req.params.ID;
  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call getPEPerApplicationNo(?)";
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
PE.get("/:ID", function(req, res) {
  const ID = req.params.ID;
  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call getOnePE(?)";
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
PE.post("/", function(req, res) {
  const schema = Joi.object().keys({
    Name: Joi.string().required(),
    County: Joi.string().required(),
    PEType: Joi.string().required(),
    Location: Joi.string().required(),
    POBox: Joi.string().required(),
    PostalCode: Joi.string().required(),
    Town: Joi.string().required(),
    Mobile: Joi.number().required(),
    Telephone: Joi.number().required(),
    Email: Joi.string().required(),
    Logo: Joi.string()
      .allow(null)
      .allow(""),
    Website: Joi.string()
      .allow(null)
      .allow(""),
    Companyregistrationdate: Joi.date().required(),
    PIN: Joi.string().required(),
    RegistrationNo: Joi.string().required(),
    Username: Joi.string().required()
  });

  const result = Joi.validate(req.body, schema);
  if (!result.error) {
    let data = [
      req.body.Name,
      req.body.PEType,
      req.body.Location,
      req.body.POBox,
      req.body.PostalCode,
      req.body.Town,
      req.body.Mobile,
      req.body.Telephone,
      req.body.Email,
      req.body.Logo,
      req.body.Website,
      req.body.Username,
      req.body.County,
      req.body.Companyregistrationdate,
      req.body.PIN,
      req.body.RegistrationNo
    ];
    con.getConnection(function(err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message
        });
      } // not connected!
      else {
        let sp = "call Savepe(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
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
PE.put("/:ID", function(req, res) {
  const schema = Joi.object().keys({
    Name: Joi.string()
      .min(2)
      .required(),
    County: Joi.string()
      .min(2)
      .required(),
    PEType: Joi.string().required(),
    Location: Joi.string().required(),
    POBox: Joi.string().required(),
    PostalCode: Joi.string().required(),
    Town: Joi.string().required(),
    Mobile: Joi.number()
      .min(10)
      .required(),
    Telephone: Joi.number()
      .min(10)
      .required(),
    Email: Joi.string().required(),
    Logo: Joi.string()
      .allow(null)
      .allow(""),
    Website: Joi.string()
      .min(3)
      .required(),
    Companyregistrationdate: Joi.date().required(),
    PIN: Joi.string()
      .min(3)
      .required(),
    RegistrationNo: Joi.string()
      .min(3)
      .required(),
    Username: Joi.string()
      .min(2)
      .required()
  });

  const result = Joi.validate(req.body, schema);
  if (!result.error) {
    const ID = req.params.ID;
    let data = [
      ID,
      req.body.Name,
      req.body.Location,
      req.body.POBox,
      req.body.PostalCode,
      req.body.Town,
      req.body.Mobile,
      req.body.Telephone,
      req.body.Email,
      req.body.Logo,
      req.body.Website,
      req.body.Username,
      req.body.County,
      req.body.Companyregistrationdate,
      req.body.PIN,
      req.body.RegistrationNo,
      req.body.PEType
    ];

    con.getConnection(function(err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message
        });
      } // not connected!
      else {
        let sp = "call UpdatePE(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
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
PE.delete("/:ID", function(req, res) {
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
      let sp = "call DeletePE(?,?)";
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
});
module.exports = PE;
