var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var People = new Schema({
    name: { type : String , required : true },
    location: { type : String , required : true },
    datecreated: { type : Date , default : Date.now }
});

module.exports = mongoose.model("People", People);
