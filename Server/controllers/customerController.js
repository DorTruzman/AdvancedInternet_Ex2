var CustomerModel = require("../models/customerModel.js");

module.exports = {
  list: function (req, res) {
    CustomerModel.find(function (err, customers) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting customer.",
          error: err,
        });
      }

      return res.json(customers);
    });
  },

  show: function (req, res) {
    var id = req.params.id;

    CustomerModel.findOne({ _id: id }, function (err, customer) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting customer.",
          error: err,
        });
      }

      if (!customer) {
        return res.status(404).json({
          message: "No such customer",
        });
      }

      return res.json(customer);
    });
  },

  create: function (req, res) {
    var customer = new CustomerModel({
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      products: req.body.products,
    });

    customer.save(function (err, customer) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating customer",
          error: err,
        });
      }

      return res.status(201).json(customer);
    });
  },

  update: function (req, res) {
    var id = req.params.id;

    CustomerModel.findOne({ _id: id }, function (err, customer) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting customer",
          error: err,
        });
      }

      if (!customer) {
        return res.status(404).json({
          message: "No such customer",
        });
      }

      customer.name = req.body.name ? req.body.name : customer.name;
      customer.phone = req.body.phone ? req.body.phone : customer.phone;
      customer.address = req.body.address ? req.body.address : customer.address;
      customer.products = req.body.products
        ? req.body.products
        : customer.products;

      customer.save(function (err, customer) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating customer.",
            error: err,
          });
        }

        return res.json(customer);
      });
    });
  },

  remove: function (req, res) {
    var id = req.params.id;

    CustomerModel.findByIdAndRemove(id, function (err, customer) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the customer.",
          error: err,
        });
      }

      return res.status(204).json();
    });
  },
};
