const BaseController = require("./BaseController");
const { ConfigModel } = require("../models");

class ConfigController extends BaseController {
  constructor(req, res, next) {
    super(req, res, next);
    this.model = new ConfigModel(req.query);
  }
}

module.exports = ConfigController;
