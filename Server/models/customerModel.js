var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  name: String,
  phone: String,
  address: String,
  products: {
    type: [Schema.Types.ObjectId],
    ref: "Product",
  },
});

module.exports = mongoose.model("customer", customerSchema);
