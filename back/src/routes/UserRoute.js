const { Router } = require("express");
const { UserController } = require("../controllers");
const { hidePassword, verifyPassword } = require("../middlewares/index");

const userRouter = Router();

//ROUTES PHONES
userRouter.get(
  "",
  (req, res, next) => new UserController(req, res, next).getAll(),
  hidePassword
);
userRouter.get(
  "/:id",
  (req, res, next) => new UserController(req, res, next).getById(),
  hidePassword
);

userRouter.post(
  "/login",
  (req, res, next) => new UserController(req, res, next).getByEmailWithPass(),
  verifyPassword
);

userRouter.post("", (req, res) => new UserController(req, res).postItem());

module.exports = userRouter;
