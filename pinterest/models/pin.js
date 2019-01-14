var mongoose = require('mongoose');
var schema = mongoose.schema;

var PinSchema = new schema({
    title : String,
    desc : String,
    username : String,
    path : String,
    isSave : Boolean
});

module.exports = mongoose.model('Pin',PinSchema);
