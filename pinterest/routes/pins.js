
module.exports = function(app){
    app.route('/pins/create')
    .get(function(req,res,next){
        res.render('pins/create');
    })
}