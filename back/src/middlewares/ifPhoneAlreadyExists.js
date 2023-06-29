const { db } = require("../config");
const ifPhoneAlreadyExists = (req, res, next) => {
  const { brand, model, storage, ram, screen, gsm } = req.body;
  db.query(
    "SELECT * FROM phones WHERE brand = ? AND model = ? AND storage = ? AND ram = ? AND screen = ? AND gsm = ?",
    [brand, model, storage, ram, screen, gsm]
  )
    .then((phone) => {
      if (phone) {
        res.status(409).send("Ce modèle de téléphone existe déjà");
      } else {
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};
module.exports = ifPhoneAlreadyExists;
