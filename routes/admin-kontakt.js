const db = require("../config/mysql")();
module.exports = function(app) {

    app.get('/admin/kontakt/:id', (req, res) => {
        res.render('admin-kontakt');
    });
  
//   app.get("/admin/kontakt/:id", (req, res, next) => {
//     // selecter  
//     let sql = `SELECT
// 		kontakt.modtager_email,
//         kontakt.sender_email
//         FROM
//         kontakt
//         WHERE
//         id = ?`;
//     db.query(sql, [req.params.id], function(err, results) {
//       //fejlhåndtering
//       if (err) {
//         res.send("");
//         console.log("fejl:" + err);
//       } else {
//         res.render("admin-kontakt", { result: results[0] });
//       }
//     });
//   });

  app.post("/admin/kontakt/:id", (req, res) => {
    //opdatere 
    let sql = `UPDATE kontakt
        SET 
        modtager_email = ?,
        sender_email = ?
        WHERE id = ?`;
    db.query(sql,
      [
        req.fields.modtager_email,
        req.fields.sender_email,
        req.params.id
      ],
      (err, result) => {
        if (err) {
          res.send("");
          console.log("fejl:" + err);
        } else {
            if(result.affectedRows === 1) {
                req.flash('info', 'Email er redigeret, gå til kontakt for at se');
              } else {
                req.flash('error', 'noget gik galt');
              }
          res.redirect("/admin/index");
        }
      }
    );
  });
};
