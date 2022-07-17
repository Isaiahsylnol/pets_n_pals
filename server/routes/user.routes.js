const { authJwt } = require("../middlewares");
const controller = require("../controllers/userAuth.controller");
module.exports = app => {
    const users = require("../controllers/user.controller.js");
  var router = require("express").Router();
  // Create a new user
  router.post("/", users.create);
  // Retrieve all users
  router.get("/", users.findAll);
  // Retrieve a single user with id
  router.get("/:id", users.findOne);
  // Update a user with id
  router.put("/:id", users.update);
  // Delete a user with id
  router.delete("/:id", users.delete);
  router.get("/test/public", controller.allAccess);
  router.get("/test/guarded", [authJwt.verifyToken], controller.userBoard);
  router.get(
    "/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );
  router.get(
    "/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
 
  app.use('/api/users', router);
}