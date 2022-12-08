var express = require("express");
var router = express.Router();
var productController = require("../controllers/productController.js");

router.get("/", productController.list);

router.get("/:id", productController.show);

router.post("/", productController.create);

router.put("/:id", productController.update);

router.delete("/:id", productController.remove);

module.exports = router;
