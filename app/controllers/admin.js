module.exports.formulario_inclusao_noticia = function(application, req, res) {
	res.render('admin/form_add_noticia', {validacao:{}, noticia:{}});
}

module.exports.noticias_salvar = function(application, req, res) {
	
	var noticia = req.body;
	req.assert('titulo', 'Título é obrigatório').notEmpty();
	req.assert('noticia', 'Noticia é obrigatório').notEmpty();
	req.assert('autor', 'Autor é obrigatório').notEmpty();
	req.assert('resume', 'Resumo deve ter entre 10 e 100 caracteres.').notEmpty().len(10,100);

	var errors = req.validationErrors();
	console.log(errors);

	if(errors){
		res.render('admin/form_add_noticia',{validacao: errors});
		return;
	}

	var connection = application.config.dbConnection();
 	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.salvarNoticia(noticia,connection,function(error, result){
		res.redirect('/noticias');
	})
	
}