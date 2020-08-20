var express = require("express");
var feesstructure = express();
var mysql = require("mysql");
var config = require("./../../DB");
var con = mysql.createPool(config);
var auth = require("./../../auth");
feesstructure.get("/", auth.validateRole("Fees structure"), function(req, res) {
  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call GetAllfeesstructures()";
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
feesstructure.get("/:ID", auth.validateRole("Fees structure"), function(
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
      let sp = "call GetOnefeesstructure(?)";
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
feesstructure.post("/", auth.validateRole("Fees structure"), function(
  req,
  res
) {
  let data = [
    req.body.Description,
    req.body.MinAmount,
    req.body.MaxAmount,
    req.body.Rate1,
    req.body.Rate2,
    req.body.MinFee,
    req.body.MaxFee,
    req.body.FixedFee,
    res.locals.user
  ];
  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call Savefeesstructure(?,?,?,?,?,?,?,?,?)";
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
});
feesstructure.put("/:ID", auth.validateRole("Fees structure"), function(
  req,
  res
) {
  const ID = req.params.ID;
  let data = [
    ID,
    req.body.Description,
    req.body.MinAmount,
    req.body.MaxAmount,
    req.body.Rate1,
    req.body.Rate2,
    req.body.MinFee,
    req.body.MaxFee,
    req.body.FixedFee,
    res.locals.user
  ];
  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call Updatefeesstructure(?,?,?,?,?,?,?,?,?,?)";
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
feesstructure.delete("/:ID", auth.validateRole("Fees structure"), function(
  req,
  res
) {
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
      let sp = "call Deletfeesstructure(?,?)";
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
module.exports = feesstructure;
