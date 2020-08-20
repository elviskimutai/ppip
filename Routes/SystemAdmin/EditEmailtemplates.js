var express = require("express");
var EditEmailtemplates = express();

const path = require("path");
const fs = require("fs");
var mysql = require("mysql");
var config = require("./../../DB");
var con = mysql.createPool(config);
var auth = require("../../auth");
EditEmailtemplates.get(
  "/:ID",

  function(req, res) {
    const ID = req.params.ID + ".hbs";
    try {
      (async () => {
        try {
          con.getConnection(function(err, connection) {
            let sp = "call getEmailSubject(?)";
            connection.query(sp, [req.params.ID], function(
              error,
              results,
              fields
            ) {
              if (error) {
                res.json({
                  success: false,
                  message: error.message
                });
              } else {
                if (results[0][0]) {
                  let Subject = results[0][0].Subject;
                  var templateHtml = fs.readFileSync(
                    path.join(
                      process.cwd(),
                      "Routes",
                      "SystemAdmin",
                      "EmailTemplates",
                      ID
                    ),
                    "utf8"
                  );
                  res.json({
                    success: true,
                    Subject: Subject,
                    Template: templateHtml
                  });
                } else {
                  var templateHtml = fs.readFileSync(
                    path.join(
                      process.cwd(),
                      "Routes",
                      "SystemAdmin",
                      "EmailTemplates",
                      ID
                    ),
                    "utf8"
                  );
                  res.json({
                    success: true,
                    Subject: "",
                    Template: templateHtml
                  });
                }
              }
              connection.release();
            });
          });
        } catch (err) {
          res.json({
            success: false,
            message: err
          });
        }
      })();
    } catch (err) {
      res.json({
        success: false,
        message: err
      });
    }
  }
);
EditEmailtemplates.post("/:ID", auth.validateRole("Email Templates"), function(
  req,
  res
) {
  // const ID = req.params.ID;
  const ID = req.params.ID + ".hbs";
  const newTemplate = req.body.Template;
  const Subject = req.body.Subject;
  try {
    var filepath = path.join(
      process.cwd(),
      "Routes",
      "SystemAdmin",
      "EmailTemplates",
      ID
    );
    fs.writeFile(filepath, "", function() {});
    fs.writeFile(filepath, newTemplate, function() {});
    //update Subject
    con.getConnection(function(err, connection) {
      if (err) {
        res.json({
          success: false,
          message: err.message
        });
      } // not connected!
      else {
        let sp = "call UpdateEmailSubject(?,?,?)";
        connection.query(
          sp,
          [req.params.ID, Subject, res.locals.user],
          function(error, results, fields) {
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
          }
        );
      }
    });
    //end of Update Subject
  } catch (err) {
    res.json({
      success: false,
      message: err
    });
  }
});

module.exports = EditEmailtemplates;
