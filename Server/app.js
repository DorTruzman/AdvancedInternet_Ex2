var cors = require("cors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

var indexRouter = require("./routes/index");
var productRouter = require("./routes/productRoutes");
var customerRouter = require("./routes/customerRoutes");

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/products", productRouter);
app.use("/customers", customerRouter);

module.exports = app;
