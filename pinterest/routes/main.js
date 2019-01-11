// Routing Methods Start from here
module.exports =function(app){
app.get('/',function(req,res,next){
    res.render('pins/index');
})
}
// Routing Method Ends Here