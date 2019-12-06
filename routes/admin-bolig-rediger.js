const db = require("../config/mysql")();
module.exports = function(app) {
  
  app.get("/admin/bolig/rediger/:id", (req, res, next) => {
    // selecter 1  efter id 
    let sql = `SELECT
		boliger.sagsnummer,
    boliger.bolig_type,
		boliger.boligstørrelse,
		boliger.grundareal,
		boliger.pris,
		boliger.brutto,
		boliger.netto,
		boliger.titel,
		boliger.beskrivelse
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
        res.render("admin-bolig-rediger", { result: results[0] });
      }
    });
  });

  app.post("/admin/bolig/rediger/:id", (req, res) => {
    //opdatere nyhed
    let sql = `UPDATE boliger
        SET 
        sagsnummer = ?,
        bolig_type = ?,
        boligstørrelse = ?,
        grundareal = ?,
        pris = ?,
        brutto = ?,
        netto = ?,
        titel = ?,
        beskrivelse = ?
        WHERE id = ?`;
    db.query(sql,
      [
        req.fields.sagsnummer,
        req.fields.bolig_type,
        req.fields.boligstørrelse,
        req.fields.grundareal,
        req.fields.pris,
        req.fields.brutto,
        req.fields.netto,
        req.fields.titel,
        req.fields.beskrivelse,
        req.params.id
      ],
      (err, result) => {
        if (err) {
          res.send("");
          console.log("fejl:" + err);
        } else {
            if(result.affectedRows === 1) {
                req.flash('info', 'Boligen er redigeret');
              } else {
                req.flash('error', 'noget gik galt');
              }
          res.redirect("/admin/bolig");
        }
      }
    );
  });
};
