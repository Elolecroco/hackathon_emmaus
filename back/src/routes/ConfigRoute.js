const { Router } = require("express");
const { ConfigController } = require("../controllers");

const configRouter = Router();

configRouter.get("", (req, res, next) =>
  new ConfigController(req, res, next).getAll()
);

configRouter.put("/update", (req, res, next) =>
  new ConfigController(req, res, next).updateItem()
);

module.exports = configRouter;
