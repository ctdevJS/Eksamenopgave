const db = require("../config/mysql")();
module.exports = function(app) {

    app.get("/admin/bolig/opret", (req, res, next) => {
      res.render('admin-bolig-opret');
    });


    app.post("/admin/bolig/opret", (req, res, next) => {
      // opretter ny nyhed
        db.query(`INSERT INTO boliger 
                (sagsnummer, bolig_type, boligstørrelse, grundareal, pris, brutto, netto, titel, beskrivelse )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
          ],
          (err, results) => {
            //fejlhåndtering
            if (err) {
              res.send("");
              console.log("fejl:" + err);
              
            } else {
              if(results.affectedRows === 1) {
                req.flash('info', 'Bolig er gemt');
              } else {
                req.flash('error', 'noget gik galt');
              }
              res.redirect("/admin/bolig");
              // data indsat korrekt
            }
          }
        );
      });
}