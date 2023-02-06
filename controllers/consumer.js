exports.getIndex = (req, res, next) => {
	res.render('consumer/index', {
		pageTitle: 'Clínica Odontológica',
	});
};
