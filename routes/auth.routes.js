const { verifySignUp } = require("../middlewares");

module.exports = app => {
    const controller = require("../controllers/auth.controller");
    const router = require("express").Router();
    
    router.post(
    "/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  router.post("/signin", controller.signin);

  app.use('/api/users', router);
};