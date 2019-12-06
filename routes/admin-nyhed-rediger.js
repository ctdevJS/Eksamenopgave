const db = require("../config/mysql")();
module.exports = function(app) {
  
  app.get("/admin/nyhed/rediger/:id", (req, res, next) => {
    // selecter 1 nyheder efter id 
    let sql = `SELECT
		    nyheder.titel,
        nyheder.dato,
		    nyheder.tekst
        FROM
        nyheder
        WHERE
        id = ?`;
    db.query(sql, [req.params.id], function(err, results) {
      //fejlhåndtering
      if (err) {
        res.send("");
        console.log("fejl:" + err);
      } else {
        res.render("admin-nyhed-rediger", { result: results[0] });
      }
    });
  });

  app.post("/admin/nyhed/rediger/:id", (req, res) => {
    //opdatere nyhed
    let sql = `UPDATE nyheder
        SET 
        titel = ?,
        dato = ?,
        tekst = ?
        WHERE id = ?`;
    db.query(sql,
      [
        req.fields.titel,
        req.fields.dato,
        req.fields.tekst,
        req.params.id
      ],
      (err, result) => {
        if (err) {
          res.send("");
          console.log("fejl:" + err);
        } else {
            if(result.affectedRows === 1) {
                req.flash('info', 'Nyheden er redigeret');
              } else {
                req.flash('error', 'noget gik galt');
              }
          res.redirect("/admin/nyhed");
        }
      }
    );
  });
};
