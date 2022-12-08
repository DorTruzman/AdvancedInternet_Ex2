var ProductModel = require("../models/productModel.js");

module.exports = {
  list: function (req, res) {
    ProductModel.find(function (err, products) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting product.",
          error: err,
        });
      }

      return res.json(products);
    });
  },

  show: function (req, res) {
    var id = req.params.id;

    ProductModel.findOne({ _id: id }, function (err, product) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting product.",
          error: err,
        });
      }

      if (!product) {
        return res.status(404).json({
          message: "No such product",
        });
      }

      return res.json(product);
    });
  },

  create: function (req, res) {
    var product = new ProductModel({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
    });

    product.save(function (err, product) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating product",
          error: err,
        });
      }

      return res.status(201).json(product);
    });
  },

  update: function (req, res) {
    var id = req.params.id;

    ProductModel.findOne({ _id: id }, function (err, product) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting product",
          error: err,
        });
      }

      if (!product) {
        return res.status(404).json({
          message: "No such product",
        });
      }

      product.name = req.body.name ? req.body.name : product.name;
      product.price = req.body.price ? req.body.price : product.price;
      product.description = req.body.description
        ? req.body.description
        : product.description;
      product.image = req.body.image ? req.body.image : product.image;

      product.save(function (err, product) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating product.",
            error: err,
          });
        }

        return res.json(product);
      });
    });
  },

  remove: function (req, res) {
    var id = req.params.id;

    ProductModel.findByIdAndRemove(id, function (err, product) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the product.",
          error: err,
        });
      }

      return res.status(204).json();
    });
  },
};
