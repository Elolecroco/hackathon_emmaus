const BaseModel = require("./BaseModel");

class UserModel extends BaseModel {
  constructor({ fields }) {
    super("users");

    //securisation si fields vide et split de la chaine issue de la query
    this.init(fields && fields.split(","));
  }

  getByEmailWithPass(email) {
    return this.db.query("SELECT * FROM users WHERE email = ?", [email]);
  }

  init(fields) {
    if (!fields) {
      this.fields.push("*");
    } else {
      this.queryFields = fields;
      if (this.queryFields.includes("id")) {
        this.fields.push(`users.id`);
      }
      if (this.queryFields.includes("firstname")) {
        this.fields.push(`users.firstname`);
      }
      if (this.queryFields.includes("lastname")) {
        this.fields.push(`users.lastname`);
      }
      if (this.queryFields.includes("email")) {
        this.fields.push(`users.email`);
      }
      if (this.queryFields.includes("role")) {
        this.fields.push(`users.role`);
      }
    }
  }
}

module.exports = UserModel;
