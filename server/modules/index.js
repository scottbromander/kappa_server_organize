var express = require("express");
var router = express.Router();
var path = require("path");
var People = require("../models/people.js");

router.get("/people", function(req,res){
    People.find({}, function(err, data){
        if(err) {
          console.log(err);
        }

        res.send(data);
    });
});

router.post("/people", function(req,res){
    var addedPerson = new People({
        "name" : req.body.name,
        "location" : req.body.location
    });

    addedPerson.save(function(err, data){
        if(err){
          console.log(err);
        }

        res.send(data);
    });
});

router.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
