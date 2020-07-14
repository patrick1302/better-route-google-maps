const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deliverySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  delivery_date: {
    type: Date,
    required: true,
  },
  start_point_delivery: {
    type: String,
    required: true,
    trim: true,
  },
  end_point_delivery: {
    type: String,
    required: true,
    trim: true,
  },
});

const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = Delivery;
