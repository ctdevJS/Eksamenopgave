const db = require("../config/mysql")();
module.exports = function(app) {

    app.get('/admin/nyhed/opret', (req, res) => {
        res.render('admin-nyhed-opret');
    });

    app.post("/admin/nyhed/opret", (req, res, next) => {
      // opretter ny nyhed
        db.query(`INSERT INTO nyheder (titel, dato, tekst ) VALUES (?, ?, ?)`,
          [
            req.fields.titel,
            req.fields.dato,
            req.fields.tekst,
          ],
          (err, results) => {
            //fejlhåndtering
            if (err) {
              res.send("");
              console.log("fejl:" + err);
              
            } else {
              if(results.affectedRows === 1) {
                req.flash('info', 'Nyheden er gemt');
              } else {
                req.flash('error', 'noget gik galt');
              }
              res.redirect("/admin/nyhed");
              // data indsat korrekt
            }
          }
        );
      });
}