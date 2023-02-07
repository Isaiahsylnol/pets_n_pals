module.exports = (app) => {
  const cart = require("../controllers/cart.controller.js");
  const router = require("express").Router();
  // Retrieve all users
  router.get("/", cart.findAll);
  // Retrieve a single user with id
  router.get("/:id", cart.findOne);
  // Create a user's cart
  router.post("/create-cart", cart.createCart);
  app.use("/api/cart", router);
};
