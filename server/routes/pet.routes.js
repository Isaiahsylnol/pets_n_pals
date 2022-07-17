module.exports = app => {
  const pets = require("../controllers/pet.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", pets.create);
  router.post(
    "/add-pet",
    pets.addPet
  );
  // Update a Tutorial with id
  router.put("/:id", pets.update);
  // Delete a Tutorial with id
  router.delete("/:id", pets.delete);
  // Create a new Tutorial
  router.delete("/", pets.deleteAll);
  app.use('/api/pets', router);
};