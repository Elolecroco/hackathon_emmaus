const { Router } = require("express");
const { HistoryController } = require("../controllers");

const historyRouter = Router();

//ROUTES PHONES
historyRouter.get("", (req, res) => new HistoryController(req, res).getAll());
historyRouter.post("", (req, res) =>
  new HistoryController(req, res).postItem()
);

module.exports = historyRouter;
