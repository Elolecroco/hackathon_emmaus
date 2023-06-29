const { Router } = require("express");
const { PhoneController } = require("../controllers");

const phoneRouter = Router();

//ROUTES PHONES
phoneRouter.get("", (req, res) => new PhoneController(req, res).getAll());

module.exports = phoneRouter;
