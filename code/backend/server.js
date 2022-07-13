require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const inventoryRoutes = require("./routes/inventoryRoutes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/inventory", inventoryRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log("server listening for reqs on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
