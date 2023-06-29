const BaseModel = require("./BaseModel");
const { db } = require("../config");

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

  updateItem(reqBody) {
    const paramKeys = Object.keys(reqBody);
    const paramVals = Object.values(reqBody);

    const sql1 = `UPDATE ${this.table} SET`;
    let sql2 = "";

    paramKeys.forEach((key) => {
      sql2 += `${key} = ?, `;
    });

    const removeLastChar = (string) =>
      (string = string.substring(0, string.length - 2));

    sql2 = removeLastChar(sql2);

    return this.db.query(`${sql1} ${sql2} WHERE ${this.table}.id = 1 `, [
      ...paramVals,
    ]);
  }
}

module.exports = ConfigModel;
