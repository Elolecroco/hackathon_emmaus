const BaseController = require("./BaseController");
const { HistoryModel } = require("../models");

class HistoryController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new HistoryModel(req.query);
  }
}

module.exports = HistoryController;
