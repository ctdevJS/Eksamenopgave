const db = require("../config/mysql")();
module.exports = function(app) {
    app.get("/admin/bolig", (req, res) => {
        // selecter alle nyheder i liste, faldende efter dato
        let sql = `SELECT
        boliger.id,
        boliger.titel
        FROM
        boligstjernen.boliger`;
        db.query(sql, [req.fields.id], function(err, results) {
        //fejlhåndtering
        if (err) {
        res.send("");
        console.log("fejl:" + err);
        } else {
        res.render("admin-bolig", { results: results });
        }
        });
        });
}