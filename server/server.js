const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const app = express();
// only requests from “http://localhost:3000” will be allowed.
const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

// Loading of products that the frontend will fetch
let products;
let product;
const fs = require('fs');
fs.readFile('products.json', (err, data) => {
  if(err) throw err;
  products = JSON.parse(data);
})
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
const dbConfig = require("./config/db.config");
const db = require("./models");
db.mongoose
.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// Test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend." });
});
// Products route
app.get("/products", (req, res) => {
  res.json({ data: products });
}); 
 
require("./routes/pet.routes.js")(app);
require("./routes/auth.routes.js")(app);
require("./routes/user.routes.js")(app);
require("./routes/cart.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});