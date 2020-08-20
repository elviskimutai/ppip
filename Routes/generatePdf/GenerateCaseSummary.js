var express = require("express");
var GenerateCaseSummary = express();
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");
var mysql = require("mysql");
var config = require("../../DB");
var con = mysql.createPool(config);

groupBy = require("handlebars-group-by");
groupBy(handlebars);
GenerateCaseSummary.get("/:ID", function(req, res) {
  const ID = req.params.ID;

  con.getConnection(function(err, connection) {
    if (err) {
      res.json({
        success: false,
        message: err.message
      });
    } // not connected!
    else {
      let sp = "call GetPEResponseDetailsPerApplication(?)";
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
GenerateCaseSummary.post("/", function(req, res) {
  try {
    (async () => {
      try {
        var dataBinding = req.body;
        var templateHtml = fs.readFileSync(
          path.join(
            process.cwd(),
            "Routes",
            "Reporttemplates",
            "CaseSummary.hbs"
          ),
          "utf8"
        );

        // var template = handlebars.compile(templateHtml)(dataBinding);
        var finalHtml = handlebars.compile(templateHtml)(dataBinding);
        var storagepath = path.join(
          process.cwd(),
          "Reports",
          "Cases",
          req.body.Applicationno + ".pdf"
        );
        var options = {
          format: "A4",
          headerTemplate: "<p></p>",
          footerTemplate: `<div style="width:100%; text-align: center;font-weight: 700!important;font-size:10px;"><hr/>Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>`,
          displayHeaderFooter: true,
          margin: {
            top: "20px",
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
        res.json({
          success: true,
          message: "Generated"
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
});

module.exports = GenerateCaseSummary;
