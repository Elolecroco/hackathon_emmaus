const BaseModel = require("./BaseModel");

class HistoryModel extends BaseModel {
  constructor({ fields }) {
    super("history");

    //securisation si fields vide et split de la chaine issue de la query
    this.init(fields && fields.split(","));
  }

  init(fields) {
    if (!fields) {
      this.fields.push("*");
    } else {
      this.queryFields = fields;
      if (this.queryFields.includes("id")) {
        this.fields.push(`history.id`);
      }
      if (this.queryFields.includes("brand")) {
        this.fields.push(`history.brand`);
      }
      if (this.queryFields.includes("model")) {
        this.fields.push(`history.model`);
      }
      if (this.queryFields.includes("storage")) {
        this.fields.push(`history.storage`);
      }
      if (this.queryFields.includes("ram")) {
        this.fields.push(`history.ram`);
      }
      if (this.queryFields.includes("price")) {
        this.fields.push(`history.price`);
      }
      if (this.queryFields.includes("rank")) {
        this.fields.push(`history.rank`);
      }
    }
  }
}

module.exports = HistoryModel;
