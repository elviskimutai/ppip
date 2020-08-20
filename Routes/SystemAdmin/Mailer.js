var express = require("express");
var Mailer = express();
const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");
var mysql = require("mysql");
var config = require("./../../DB");
var con = mysql.createPool(config);
let nodeMailer = require("nodemailer");
function SendResetPasswordmail(Destination, Subject, emailbody) {
  const output = `<p>Your New password is: <b>${emailbody}</b></p>`;
  con.getConnection(function (err, connection) {
    let sp = "call getSMTPDetails()";
    connection.query(sp, function (error, results, fields) {
      if (error) {
        return false;
      } else {
        let Host = results[0][0].Host;
        let Port = results[0][0].Port;
        let Sender = results[0][0].Sender;
        let Password = results[0][0].Password;
        let transporter = nodeMailer.createTransport({
          host: Host,
          port: Port,
          secure: true,
          auth: {
            // should be replaced with real sender's account
            user: Sender,
            pass: Password,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        let mailOptions = {
          // should be replaced with real recipient's account
          to: Destination,
          subject: Subject,
          html: output,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            //console.log(error)
            return false;
          } else {
            return true;
          }
        });
      }
      connection.release();
    });
  });
}

Mailer.post("/:ID", function (req, res) {
  try {
    const ID = req.params.ID;
    if (ID === "EmailVerification") {
      var dataBinding = req.body;
      var templateHtml = fs.readFileSync(
        path.join(
          process.cwd(),
          "Routes",
          "SystemAdmin",
          "EmailTemplates",
          "EmailVerification.hbs"
        ),
        "utf8"
      );
      var output = handlebars.compile(templateHtml)(dataBinding);
      con.getConnection(function (err, connection) {
        let sp = "call getSMTPDetails(?)";
        connection.query(sp, ["EmailVerification"], function (
          error,
          results,
          fields
        ) {
          if (error) {
            res.json({
              success: false,
              message: error.message,
            });
          } else {
            let Host = results[0][0].Host;
            let Port = results[0][0].Port;
            let Sender = results[0][0].Sender;
            let Password = results[0][0].Password;

            let transporter = nodeMailer.createTransport({
              host: Host,
              port: Port,
              secure: true,
              auth: {
                // should be replaced with real sender's account
                user: Sender,
                pass: Password,
              },
              tls: {
                rejectUnauthorized: false,
              },
            });

            let mailOptions = {
              to: req.body.to,
              subject: req.body.subject,
              html: output,
            };

            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                res.json({
                  success: false,
                  message: "Not Sent",
                });
              } else {
                res.json({
                  success: true,
                  message: "Sent",
                });
              }
            });
          }
          connection.release();
        });
      });
    }

    if (ID == "CreatAccount") {
      var dataBinding = req.body;
      var templateHtml = fs.readFileSync(
        path.join(
          process.cwd(),
          "Routes",
          "SystemAdmin",
          "EmailTemplates",
          "CreatAccount.hbs"
        ),
        "utf8"
      );
      var output = handlebars.compile(templateHtml)(dataBinding);

      con.getConnection(function (err, connection) {
        let sp = "call getSMTPDetails(?)";
        connection.query(sp, ["CreatAccount"], function (
          error,
          results,
          fields
        ) {
          if (error) {
            res.json({
              success: false,
              message: error.message,
            });
          } else {
            let Host = results[0][0].Host;
            let Port = results[0][0].Port;
            let Sender = results[0][0].Sender;
            let Password = results[0][0].Password;

            let transporter = nodeMailer.createTransport({
              host: Host,
              port: Port,
              secure: true,
              auth: {
                // should be replaced with real sender's account
                user: Sender,
                pass: Password,
              },
              tls: {
                rejectUnauthorized: false,
              },
            });

            let mailOptions = {
              to: req.body.to,
              subject: req.body.subject,
              html: output,
            };

            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                res.json({
                  success: false,
                  message: "Not Sent",
                });
              } else {
                res.json({
                  success: true,
                  message: "Sent",
                });
              }
            });
          }
          connection.release();
        });
      });
    }

    if (ID == "PEAcknowledgement") {
      var dataBinding = req.body;
      var templateHtml = fs.readFileSync(
        path.join(
          process.cwd(),
          "Routes",
          "SystemAdmin",
          "EmailTemplates",
          "PEAcknowledgement.hbs"
        ),
        "utf8"
      );
      var output = handlebars.compile(templateHtml)(dataBinding);

      con.getConnection(function (err, connection) {
        let sp = "call getSMTPDetails(?)";
        connection.query(sp, ["PEAcknowledgement"], function (
          error,
          results,
          fields
        ) {
          if (error) {
            res.json({
              success: false,
              message: error.message,
            });
          } else {
            let Host = results[0][0].Host;
            let Port = results[0][0].Port;
            let Sender = results[0][0].Sender;
            let Password = results[0][0].Password;

            let transporter = nodeMailer.createTransport({
              host: Host,
              port: Port,
              secure: true,
              auth: {
                // should be replaced with real sender's account
                user: Sender,
                pass: Password,
              },
              tls: {
                rejectUnauthorized: false,
              },
            });

            let mailOptions = {
              to: req.body.PPRAEmail,
              cc: req.body.Applicantemail,
              subject: req.body.subject,
              html: output,
            };

            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                res.json({
                  success: false,
                  message: "Not Sent",
                });
              } else {
                res.json({
                  success: true,
                  message: "Sent",
                });
              }
            });
          }
          connection.release();
        });
      });
    }
  } catch (e) {
    res.json({
      success: false,
      message: "Error occured while sending Email",
    });
  }
});
module.exports = { Mailer, SendResetPasswordmail };
