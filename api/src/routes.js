const express = require("express");
const router = express.Router();

const DeliveryController = require("./controllers/DeliveryController");
const DirectionsController = require("./controllers/DirectionsController");

// delivery
router.get("/delivery", DeliveryController.list);
router.post("/delivery", DeliveryController.create);
router.delete("/delivery/:id", DeliveryController.delete);

//directions
router.post("/getRoutes", DirectionsController.getRoutes);

module.exports = router;
