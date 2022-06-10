const petController = require('../controllers/pet.controller');

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.post(
      "/api/auth/add-pet",
      petController.addPet
    );
    app.get("/api/auth/pet",
    petController.findPet);
  };