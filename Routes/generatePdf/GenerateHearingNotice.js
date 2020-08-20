var express = require("express");
var GenerateHearingNotice = express();

const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");
var mysql = require("mysql");
var config = require("../../DB");
var con = mysql.createPool(config);

GenerateHearingNotice.get("/:ID", function(req, res) {
  let fileName = `HearingNotices/${req.params.ID}.pdf`;
  res.download(fileName);
});
GenerateHearingNotice.post("/", function(req, res) {
  try {
    (async () => {
      try {
        var dataBinding = req.body;
        var templateHtml = fs.readFileSync(
          path.join(process.cwd(), "Routes", "Reporttemplates", "Notice.hbs"),
          "utf8"
        );

        // var template = handlebars.compile(templateHtml)(dataBinding);
        var finalHtml = handlebars.compile(templateHtml)(dataBinding);

        var storagepath = path.join(
          process.cwd(),
          "Reports",
          "HearingNotices",
          req.body.ApplicationNo + ".pdf"
        );

        var options = {
          format: "A4",
          headerTemplate: "<p></p>",

          margin: {
            top: "40px",
            bottom: "100px"
          },
          printBackground: true,
          path: storagepath
        };
        const browser = await puppeteer.launch();
        //for linux that does not install chrome together with puppeteer

        // const browser = await puppeteer.launch({
        //   executablePath: "/usr/local/bin/chrome"
        // });
        const page = await browser.newPage();
        await page.setContent(finalHtml);
        //  await page.emulate("screen");
        await page.pdf(options);
        await browser.close();
        //save rb1
        let fileName = req.body.Applicationno + ".pdf";
        let data = [
          req.body.ApplicationNo,
          "HearingNotices/",
          fileName,
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
            let sp = "call SaveHearingNotice(?,?,?,?)";
            connection.query(sp, data, function(error, results, fields) {
              if (error) {
                res.json({
                  success: false,
                  message: error.message
                });
              } else {
                res.json({
                  success: true,
                  message: "Generated"
                });
              }
              connection.release();
              // Don't use the connection here, it has been returned to the pool.
            });
          }
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

  // try {
  //   var storagepath = path.join(
  //     process.cwd(),
  //     "Reports",
  //     "HearingNotices",
  //     req.body.ApplicationNo + ".pdf"
  //   );
  //   pdf.create(pdfTemplate(req.body), {}).toFile(storagepath, err => {
  //     if (err) {
  //       res.send(Promise.reject());
  //     }

  //     //save notice
  //     let fileName = req.body.ApplicationNo + ".pdf";
  //     let data = [
  //       req.body.ApplicationNo,
  //       "HearingNotices/",
  //       fileName,
  //       res.locals.user
  //     ];

  //     con.getConnection(function(err, connection) {
  //       if (err) {
  //         res.json({
  //           success: false,
  //           message: err.message
  //         });
  //       } // not connected!
  //       else {
  //         let sp = "call SaveHearingNotice(?,?,?,?)";
  //         connection.query(sp, data, function(error, results, fields) {
  //           if (error) {
  //             // res.json({
  //             //   success: false,
  //             //   message: error.message
  //             // });
  //           } else {
  //             res.json({
  //               success: true,
  //               message: "Generated"
  //             });
  //           }
  //           connection.release();
  //           // Don't use the connection here, it has been returned to the pool.
  //         });
  //       }
  //     });

  //     //res.send(Promise.resolve());
  //   });
  // } catch (err) {
  //   res.json({
  //     success: false,
  //     message: err
  //   });
  // }
});

module.exports = GenerateHearingNotice;
