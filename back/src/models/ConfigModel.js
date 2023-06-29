const BaseModel = require("./BaseModel");

class ConfigModel extends BaseModel {
  constructor({ fields }) {
    super("config");

    //securisation si fields vide et split de la chaine issue de la query
    this.init(fields && fields.split(","));
  }

  init(fields) {
    if (!fields) {
      this.fields.push("*");
    } else {
      this.queryFields = fields;
      if (this.queryFields.includes("id")) {
        this.fields.push(`config.id`);
      }
      if (this.queryFields.includes("storage")) {
        this.fields.push(`config.storage`);
      }
      if (this.queryFields.includes("ram")) {
        this.fields.push(`config.ram`);
      }
      if (this.queryFields.includes("screen")) {
        this.fields.push(`config.screen`);
      }
      if (this.queryFields.includes("gsm")) {
        this.fields.push(`config.gsm`);
      }
    }
  }
}

module.exports = ConfigModel;
