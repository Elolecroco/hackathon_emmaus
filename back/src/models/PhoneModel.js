const BaseModel = require("./BaseModel");

class PhoneModel extends BaseModel {
  constructor({ fields }) {
    super("phones");

    //securisation si fields vide et split de la chaine issue de la query
    this.init(fields && fields.split(","));
  }

  init(fields) {
    if (!fields) {
      this.fields.push("*");
    } else {
      this.queryFields = fields;
      if (this.queryFields.includes("id")) {
        this.fields.push(`phones.id`);
      }
      if (this.queryFields.includes("brand")) {
        this.fields.push(`phones.brand`);
      }
      if (this.queryFields.includes("model")) {
        this.fields.push(`phones.model`);
      }
      if (this.queryFields.includes("storage")) {
        this.fields.push(`phones.storage`);
      }
      if (this.queryFields.includes("ram")) {
        this.fields.push(`phones.ram`);
      }
    }
  }
}

module.exports = PhoneModel;
