module.exports = function(app) {
    app.get('/admin/index', (req, res) => {
        res.render('admin-index');
    });
}