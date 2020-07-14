const axios = require("axios");
require("dotenv").config();

const key = process.env.GOOGLE_MAPS_KEY;

module.exports = {
  async getRoutes(req, res) {
    const { origin, destination } = req.query;

    try {
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${key}`;

      const routes = await axios.get(url);

      res.send(routes.data.routes[0].overview_polyline.points);
    } catch (e) {
      res.status(500).send();
    }
  },
};
