require("../db/mongoose");
const Delivery = require("../models/delivery");
const axios = require("axios");

module.exports = {
  async list(req, res) {
    try {
      const deliveries = await Delivery.find();
      res.send(deliveries);
    } catch (e) {
      res.status(500).send();
    }
  },
  async create(req, res) {
    try {
      const delivery = await Delivery.create(req.body);
      res.send(delivery).status(201);
    } catch (e) {
      res.status(500).send();
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      const delivery = await Delivery.findOneAndDelete({ _id: id });
      res.status(200).send(delivery);
    } catch (e) {
      res.status(500).send();
    }
  },
};
