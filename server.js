var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(process.env.PORT ||8080);
//const port = 8000;
//app.listen(port, () => {
//    console.log(`Example app listening on port ${port}!`)
//  });
// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/about');
});
app.get('/resume', function (req, res) {
    res.render('pages/resume');
});
app.get('/contact', function (req, res) {
    res.render('pages/contact');
});
app.get('/portfolio', function (req, res) {
    res.render('pages/portfolio');
});