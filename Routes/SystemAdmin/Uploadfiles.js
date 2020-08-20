var express = require("express");
var Uploadfiles = express();
var multer = require("multer");
var mysql = require("mysql");
var config = require("../../DB");
var con = mysql.createPool(config);
Uploadfiles.post("/", function(req, res) {
  try {
    var Timestamp = Date.now();
    var storage = multer.diskStorage({
      destination: function(req, file, cb) {
        cb(null, "uploads/profilepics");
      },
      filename: function(req, file, cb) {
        cb(null, Timestamp + "-" + file.originalname);
      }
    });
    //var upload = multer({ storage: storage }).single("file");//for single file
    var upload = multer({ storage: storage }).array("file"); //for multiple files

    upload(req, res, function(err) {
      var filename = Timestamp + "-" + req.files[0].originalname;

      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).send(filename);
      //return res.status(200).send(req.file);
    });
  } catch (e) {
    console.log(e);
  }
});
Uploadfiles.post("/:ID", function(req, res) {
  const ID = req.params.ID;
  try {
    if (ID == "Sign") {
      var Timestamp = Date.now();
      var storage = multer.diskStorage({
        destination: function(req, file, cb) {
          cb(null, "uploads/Signatures");
        },
        filename: function(req, file, cb) {
          cb(null, Timestamp + "-" + file.originalname);
        }
      });
      //var upload = multer({ storage: storage }).single("file");//for single file
      var upload = multer({ storage: storage }).array("file"); //for multiple files

      upload(req, res, function(err) {
        var filename = Timestamp + "-" + req.files[0].originalname;

        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).send(filename);
        //return res.status(200).send(req.file);
      });
    }
    if (ID == "Document") {
      var Timestamp = Date.now();
      var storage = multer.diskStorage({
        destination: function(req, file, cb) {
          cb(null, "uploads/Documents");
        },
        filename: function(req, file, cb) {
          cb(null, Timestamp + "-" + file.originalname);
        }
      });
      //var upload = multer({ storage: storage }).single("file");//for single file
      var upload = multer({ storage: storage }).array("file"); //for multiple files

      upload(req, res, function(err) {
        var filename = Timestamp + "-" + req.files[0].originalname;

        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).send(filename);
        //return res.status(200).send(req.file);
      });
    }
    
    if (ID == "decision") {
      var Timestamp = Date.now();
      var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, "uploads/Decisions");
        },
        filename: function (req, file, cb) {
          cb(null, Timestamp + "-" + file.originalname);
        }
      });
      //var upload = multer({ storage: storage }).single("file");//for single file
      var upload = multer({ storage: storage }).array("file"); //for multiple files

      upload(req, res, function (err) {
        var filename = Timestamp + "-" + req.files[0].originalname;

        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).send(filename);
      });
    }
    if (ID == "BankSlips") {
      var Timestamp = Date.now();
      var storage = multer.diskStorage({
        destination: function(req, file, cb) {
          cb(null, "uploads/BankSlips");
        },
        filename: function(req, file, cb) {
          cb(null, Timestamp + "-" + file.originalname);
        }
      });
      //var upload = multer({ storage: storage }).single("file");//for single file
      var upload = multer({ storage: storage }).array("file"); //for multiple files

      upload(req, res, function(err) {
        var filename = Timestamp + "-" + req.files[0].originalname;

        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).send(filename);
      });
    }
    if (ID == "CaseAnalysis") {
      var Timestamp = Date.now();
      var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, "uploads/CaseAnalysis");
        },
        filename: function (req, file, cb) {
          cb(null, Timestamp + "-" + file.originalname);
        }
      });
      //var upload = multer({ storage: storage }).single("file");//for single file
      var upload = multer({ storage: storage }).array("file"); //for multiple files

      upload(req, res, function (err) {
        var filename = Timestamp + "-" + req.files[0].originalname;

        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).send(filename);
      });
    }

    
  } catch (e) {
    console.log(e);
  }
});
Uploadfiles.post("/:ID/:Value", function(req, res) {
  const ID = req.params.ID;
 
  try {
    if (ID == "Docs") {
      var Timestamp = Date.now();
      var storage = multer.diskStorage({
        destination: function(req, file, cb) {
          cb(null, "uploads/HearingAttachments/Documents");
        },
        filename: function(req, file, cb) {
          cb(null, Timestamp + "-" + file.originalname);
        }
      });
      //var upload = multer({ storage: storage }).single("file");//for single file
      var upload = multer({ storage: storage }).array("file"); //for multiple files

      upload(req, res, function(err) {
        var filename = Timestamp + "-" + req.files[0].originalname;

        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).send(filename);
        //return res.status(200).send(req.file);
      });
    }
    if (ID == "Audios") {
      var Timestamp = Date.now();
      var storage = multer.diskStorage({
        destination: function(req, file, cb) {
          cb(null, "uploads/HearingAttachments/Audios");
        },
        filename: function(req, file, cb) {
          cb(null, Timestamp + "-" + file.originalname);
        }
      });
      //var upload = multer({ storage: storage }).single("file");//for single file
      var upload = multer({ storage: storage }).array("file"); //for multiple files

      upload(req, res, function(err) {
        var filename = Timestamp + "-" + req.files[0].originalname;

        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).send(filename);
        //return res.status(200).send(req.file);
      });
    }
    if (ID == "Vedios") {
      var Timestamp = Date.now();
      var storage = multer.diskStorage({
        destination: function(req, file, cb) {
          cb(null, "uploads/HearingAttachments/Vedios");
        },
        filename: function(req, file, cb) {
          cb(null, Timestamp + "-" + file.originalname);
        }
      });
      //var upload = multer({ storage: storage }).single("file");//for single file
      var upload = multer({ storage: storage }).array("file"); //for multiple files

      upload(req, res, function(err) {
        var filename = Timestamp + "-" + req.files[0].originalname;

        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).send(filename);
        //return res.status(200).send(req.file);
      });
    }
  } catch (e) {
    console.log(e);
  }
});
module.exports = Uploadfiles;
