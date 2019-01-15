// Routing Methods Start from here
module.exports =function(app){
app.get('/',function(req,res,next){
    res.redirect('pins/index');
})
}
// Routing Method Ends Here