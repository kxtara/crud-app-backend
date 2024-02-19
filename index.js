const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

mongoose
  .connect(
    "mongodb+srv://admin:UrDezYbhCSPQrpGS@backenddb.wdbzhwe.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
    console.log("Connected to database!");
  })
  .catch(() => console.log("Connection failed"));
