var fs = require('fs');
var Hogan = require('hogan.js');
const sgMail = require('@sendgrid/mail');

var template = fs.readFileSync('./views/emailTemplate.ejs', 'utf-8');
var compiledTemplate = Hogan.compile(template);

module.exports = function (app) {
   app.get('/kontakt', (req, res) => {
        res.render('kontakt');
   });

   app.post('/kontakt', (req, res) => {
    //  console.log(req.fields);
       sgMail.setApiKey('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');
       const msg = {
     to: 'stylez5555@gmail.com',
     from: req.fields.email,
     subject: 'Mail fra boligstjernen',
     html: compiledTemplate.render({name: req.fields.navn, tlf: req.fields.tlf, adresse: req.fields.adresse, besked: req.fields.besked})
   };
   sgMail.send(msg);
   res.render('index');
   });
}