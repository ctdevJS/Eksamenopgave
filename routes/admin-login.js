const db = require("../config/mysql")();
const bcryptjs = require("bcryptjs");
module.exports = function(app) {

  app.get("/login", (req, res) => {
      res.render("admin-login");
  });

  app.post("/login", (req, res, next) => {
    //selecter login oplysninger
    db.query("SELECT id, admin_adgangskode FROM admin_login WHERE admin_brugernavn = ?",
      [req.fields.admin_brugernavn],
      (err, results) => {
        if (err) {
          //fejlhåndtering
          res.send("");
          console.log("fejl:" + err);
        } else if (results.length !== 1) {
          res.send("id er ikke 1");
        } else {
          // for af-kryptere adgangskode
          if (bcryptjs.compareSync(req.fields.admin_adgangskode, results[0].admin_adgangskode)) {
            req.session.user_id = results[0].id;
            res.redirect("/admin/index");
          } else {
            res.send("fejl, forkert login");
          }
        }
      }
    );
  });
};
