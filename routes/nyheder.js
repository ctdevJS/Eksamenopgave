const db = require("../config/mysql")();
module.exports = function(app) {

    app.get("/nyheder", (req, res, next) => {
        //selecter data i orden efter dato
        let sql = `SELECT
            nyheder.id,
            nyheder.titel,
            nyheder.dato,
            nyheder.tekst
            FROM
            boligstjernen.nyheder
            ORDER BY dato DESC`;
        db.query(sql, function(err, results) {
          //fejlhåndtering
          if (err) {
            res.send("");
            console.log("fejl:" + err);
          } else {
            res.render("nyheder", { results: results });
          }
        });
      });
}