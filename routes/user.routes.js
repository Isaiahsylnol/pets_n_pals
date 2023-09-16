const { authJwt } = require('../middlewares');
const controller = require('../controllers/auth.controller');
module.exports = app => {
  const users = require("../controllers/user.controller.js");
  const router = require("express").Router();
  // Retrieve all users
  router.get("/", users.findAll);
  // Retrieve a single user with id
  router.get("/:id", users.findOne);
  // Update a user with id
  router.put("/:id", users.update);
  // Delete a user with id
  router.delete("/:id", users.delete);
  // router.get("/test/public", controller.allAccess);
  router.get("/test/guarded", [authJwt.verifyToken], controller.userBoard);
  // router.get(
  //   "/test/mod",
  //   [authJwt.verifyToken, authJwt.isModerator],
  //   controller.moderatorBoard
  // );
  // router.get(
  //   "/test/admin",
  //   [authJwt.verifyToken, authJwt.isAdmin],
  //   controller.adminBoard
  // );
  app.use("/api/user", router);
}