const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
require('dotenv').config()
const app = express();

const port = process.env.PORT || 3000;
const mongodbUri = process.env.MONGODB_URI;


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

mongoose
  .connect(mongodbUri)
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running on port 3000");
    });
    console.log("Connected to database!");
  })
  .catch(() => console.log("Connection failed"));
