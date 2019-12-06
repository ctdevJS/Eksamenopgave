const db = require("../config/mysql")();
module.exports = function(app) {
    app.get("/admin/nyhed", (req, res) => {
        // selecter alle nyheder i liste, faldende efter dato
        let sql = `SELECT
            nyheder.id,
            nyheder.titel
            FROM
            boligstjernen.nyheder
            ORDER BY dato DESC`;
        db.query(sql, [req.fields.id], function(err, results) {
          //fejlhåndtering
          if (err) {
            res.send("");
            console.log("fejl:" + err);
          } else {
            res.render("admin-nyhed", { results: results });
          }
        });
      });
}