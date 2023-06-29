const { Router } = require("express");
const { PhoneController } = require("../controllers");
const { ifPhoneAlreadyExists } = require("../middlewares/index");

const phoneRouter = Router();

//ROUTES PHONES
phoneRouter.get("", (req, res) => new PhoneController(req, res).getAll());
phoneRouter.post("", ifPhoneAlreadyExists, (req, res) =>
  new PhoneController(req, res).postItem()
);

module.exports = phoneRouter;
