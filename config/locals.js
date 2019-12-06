const db = require("../config/mysql")();

module.exports = function(app) {
    app.use(function(req, res, next) {

        let sql =   `SELECT *
                FROM boligstjernen.boliger
                ORDER BY RAND()
                LIMIT 1`;
        db.query(sql, function(err, result) {
            if (err) {
                console.log(err);
                req.app.locals.randProduct = {};
            }
            req.app.locals.randProduct = result[0];
        });



        let sqlBolig =  `SELECT
        kategorier.id,
        kategorier.kategorier
        FROM
        boligstjernen.kategorier`;
        db.query(sqlBolig, function(err, results) {
        if (err) {
        console.log(err);
        req.app.locals.boligKategorier = {};
        }
        req.app.locals.boligKategorier = results;
        });



        let sqlEmail =  `SELECT *
        FROM
        boligstjernen.kontakt`;
        db.query(sqlEmail, function(err, result) {
        if (err) {
        console.log(err);
        req.app.locals.adminEmails = {};
        }
        req.app.locals.adminEmails = result[0];
        });
        return next();

        
    });
}