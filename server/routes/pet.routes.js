module.exports = app => {
  const pets = require("../controllers/pet.controller.js");
  const router = require("express").Router();
  // Find a Pet with id
  router.get("/:id", pets.findOne);
  // Create a new Pet
  router.post(
    "/add-pet",
    pets.addPet
  );
  // Update a Pet with id
  router.put("/:id", pets.update);
  // Delete a Pet with id
  router.delete("/:id", pets.delete);
  // Delete all Pets
  //router.delete("/", pets.deleteAll);
  app.use('/api/pets', router);
};