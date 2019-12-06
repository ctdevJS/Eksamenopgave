const db = require("../config/mysql")();
module.exports = function(app) {

  app.get('/admin/bolig/slet/:id', (req, res, next) => {
    // sletter nyhed udfra params.id
    db.query('DELETE FROM boliger WHERE id = ?', [req.params.id], (err, result) => {
      //fejlhåndtering
        if (err) {
            res.send("");
            console.log("fejl:" + err);
          } else {
            if(result.affectedRows === 1) {
              req.flash('info', 'Boligen er slettet');
            } else {
              req.flash('error', 'noget gik galt');
            }
            res.redirect("/admin/bolig");
          }
    });
});
};