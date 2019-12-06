const db = require("../config/mysql")();
module.exports = function(app) {
    app.get('/bolig/soeg', (req, res) => {
        res.render('bolig-soeg');
    });


    app.get('/soeg', (req, res) => {
        let sql = `SELECT *
                FROM 
                boligstjernen.boliger
                WHERE sagsnummer LIKE ?
                `;
        let søg = '%' + req.query.sagsnummer + '%';
        db.query(sql, [søg,søg], function (err, results) {
            if (err) {
                res.send("");
                console.log("fejl:" + err);
              } else {
                if(typeof søg !== 'undefined' && results.length > 0 ) {
                    req.flash('info', 'Resultater');
                  } else {
                    req.flash('error', 'Der er desværre ikke nogen emner der matcher dine kriterier. Vi anbefaler at du udvider din søgning og prøver igen.');
                  }
                res.render("bolig-soeg-result", { results: results });
              }
        });
    });

}