const { Router } = require("express");
const { HistoryController } = require("../controllers");

const historyRouter = Router();

//ROUTES PHONES
historyRouter.get("", (req, res) => new PhoneController(req, res).getAll());
historyRouter.post("", (req, res) => new PhoneController(req, res).postItem());

module.exports = historyRouter;
