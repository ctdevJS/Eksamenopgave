const db = require("../config/mysql")();
module.exports = function(app) {

    app.get("/bolig/:id", (req, res, next) => {
        // selecter 1  efter id 
        let sql = `SELECT *
            FROM
            boliger
            WHERE
            id = ?`;
        db.query(sql, [req.params.id], function(err, results) {
          //fejlhåndtering
          if (err) {
            res.send("");
            console.log("fejl:" + err);
          } else {
            res.render("bolig", { result: results[0] });
          }
        });
      });
}