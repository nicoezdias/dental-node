const Dentist = require('../models/dentist');

exports.postDentist = (req, res, next) => {
	const name = req.body.name;
	const lastName = req.body.lastName;
	const license = req.body.license;
	Dentist.create({
		name: name,
		lastName: lastName,
		license: license,
	})
		.then((result) => {
			console.log(result);
			console.log('Created Product');
			res.redirect('/dentist');
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.postEditDentist = (req, res, next) => {
	console.log(req.body);
	const dentistId = req.body.dentistId;
	const name = req.body.name;
	const lastName = req.body.lastName;
	const license = req.body.license;
	Dentist.findByPk(dentistId)
		.then((dentist) => {
			console.log(dentist);
			dentist.name = name;
			dentist.lastName = lastName;
			dentist.license = license;
			return dentist.save();
		})
		.then((result) => {
			console.log('UPDATED PRODUCT!');
			res.redirect('/dentist');
		})
		.catch((err) => console.log(err));
};

exports.getDentists = (req, res, next) => {
	Dentist.findAll()
		.then((dentists) => {
			res.render('dentist/odontologos', {
				pageTitle: 'Clínica Odontológica',
				dentists: dentists,
			});
		})
		.catch((err) => console.log(err));
};
exports.getDentistById = async (req, res, next) => {
	const dentistId = req.params.dentistId;
	const dentist = await Dentist.findByPk(dentistId);
	res.status(200).json({
		status: 'success',
		message: 'Dentist by id',
		data: dentist,
	});
};

exports.getAltaOdontologos = (req, res, next) => {
	res.render('dentist/alta-odontologos', {
		pageTitle: 'Clínica Odontológica',
	});
};

exports.postDeleteDentist = (req, res, next) => {
	const dentistId = req.body.dentistId;
	Dentist.findByPk(dentistId)
		.then((dentist) => {
			return dentist.destroy();
		})
		.then((result) => {
			console.log('DESTROYED PRODUCT');
			res.redirect('/dentist');
		})
		.catch((err) => console.log(err));
};
