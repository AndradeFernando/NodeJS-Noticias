//var dbConnection = require('../../config/dbConnection');
module.exports = function(application) {

application.get('/noticias', function(req,res){

 	var connection = application.config.dbConnection();
 	var noticiasModel = new application.app.models.NoticiasDAO(connection);

noticiasModel.getNoticias(connection,function(error, result){

	//	res.send(result)
	res.render('./noticias/noticias', {noticias: result});
	//res.redirect('/noticias/noticias');
})

	

//	res.render('noticias/noticias');

})

}
