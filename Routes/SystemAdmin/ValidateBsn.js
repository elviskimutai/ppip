var express = require("express");
var ValidateBsn = express();
ValidateBsn.post("/", function (req, res) {
  try {
    let url = req.body.url;
    let user = req.body.username;
    let password = req.body.password;
    var request = require("request");
    request.get(
      url,
      {
        auth: {
          user: user,
          pass: password,
          sendImmediately: false,
        },
      },
      function (error, response, body) {
        if (error) {
          res.json({
            success: false,
            message: error,
          });
        } else {
          res.json({
            success: true,
            data: JSON.parse(body),
          });
        }
      }
    );
  } catch (e) {
    res.json({
      success: false,
      message: "Error occured while sending Email",
    });
  }
});

module.exports = ValidateBsn;
