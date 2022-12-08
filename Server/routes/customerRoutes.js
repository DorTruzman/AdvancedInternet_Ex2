var express = require("express");
var router = express.Router();
var customerController = require("../controllers/customerController.js");

router.get("/", customerController.list);

router.get("/:id", customerController.show);

router.post("/", customerController.create);

router.put("/:id", customerController.update);

router.delete("/:id", customerController.remove);

module.exports = router;
