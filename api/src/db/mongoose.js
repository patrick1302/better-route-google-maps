const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost/unicad", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
