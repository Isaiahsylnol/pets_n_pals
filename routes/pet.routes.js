const { authJwt } = require("../middlewares");

module.exports = (app) => {
  const pets = require("../controllers/pet.controller.js");
  const router = require("express").Router();

  // Create a new Pet
  router.post("/add-pet", pets.addPet);
  // Find a Pet with id
  router.post("/:id", pets.findOne);
  // Update a Pet with id
  router.put("/:id", [authJwt.verifyToken], pets.update);
  // Delete a Pet with id
  router.delete("/:id", pets.delete);
  //router.delete("/", pets.deleteAll);
  app.use("/api/pets", router);
};
