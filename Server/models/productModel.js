var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productSchema = new Schema({
	'name' : String,
	'price' : Number,
	'description' : String,
	'image' : String
});

module.exports = mongoose.model('product', productSchema);
