//loader alle npm pakker
const express = require('express');
var multer  = require('multer')
var upload = multer();
const app = express();

const ejs = require('ejs');
app.set('view engine', 'ejs');

//Require config
require('./config/session')(app);
require('./config/flash')(app);
require('./config/locals')(app);

require('dotenv').config();


app.use(upload.array());
app.use(express.static('./public'));

const formadable = require('express-formidable');
app.use(formadable());

//for protected routes
let protectedRoutes = [
    '/admin/'
];

app.use(protectedRoutes, (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
        return;
    } else {
        next();
    }
});


// require all js files via module exports
//admin nyhed
require('./routes/admin-index')(app);
require('./routes/admin-nyhed')(app);
require('./routes/admin-nyhed-opret')(app);
require('./routes/admin-nyhed-rediger')(app);
require('./routes/admin-nyhed-slet')(app);

//admin bolig
require('./routes/admin-bolig')(app);
require('./routes/admin-bolig-opret')(app);
require('./routes/admin-bolig-rediger')(app);
require('./routes/admin-bolig-slet')(app);

//admin kontakt
require('./routes/admin-kontakt')(app);
require('./routes/admin-login')(app);


//front-end
require('./routes/index')(app);
require('./routes/nyheder')(app);
require('./routes/kontakt')(app);
require('./routes/bolig-soeg')(app);
require('./routes/bolig')(app);




// angiver hvilken port sereven kører på
app.listen(3000, () => {
    console.log('http://localhost:3000');
})