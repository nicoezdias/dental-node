const Patient = require('../models/patient');
const Address = require('../models/address');

exports.postPatient = (req, res, next) => {
	const name = req.body.name;
	const lastName = req.body.lastName;
	const dni = req.body.dni;
	const admissionDate = req.body.admissionDate;
	const email = req.body.email;

	const street = req.body.street;
	const city = req.body.city;
	const province = req.body.province;
	Patient.create({
		name: name,
		lastName: lastName,
		dni: dni,
		admissionDate: admissionDate,
		email: email,
	})
		.then((result) => {
			console.log(result.id);
			console.log('CREATED PATIENT ');
			return result.createAddress({
				street: street,
				city: city,
				province: province,
			});
		})
		.then((result) => {
			console.log(result.id);
			console.log('CREATED ADDRESS ');
			res.redirect('/patient');
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.postEditPatient = (req, res, next) => {
	const patientId = req.body.patientId;
	const name = req.body.name;
	const lastName = req.body.lastName;
	const dni = req.body.dni;
	const admissionDate = req.body.admissionDate;
	const email = req.body.email;

	const street = req.body.street;
	const city = req.body.city;
	const province = req.body.province;
	Patient.findByPk(patientId, { include: Address })
		.then((patient) => {
			patient.name = name;
			patient.lastName = lastName;
			patient.dni = dni;
			patient.admissionDate = admissionDate;
			patient.email = email;
			return patient.save();
		})
		.then((result) => {
			console.log('UPDATED PRODUCT!');
			return result.address;
		})
		.then((address) => {
			address.street = street;
			address.city = city;
			address.province = province;
			return address.save();
		})
		.then((result) => {
			console.log('UPDATED ADRRES!');
			res.redirect('/patient');
		})
		.catch((err) => console.log(err));
};

exports.getPatients = (req, res, next) => {
	Patient.findAll({ include: Address })
		.then((patients) => {
			res.render('patient/pacientes', {
				pageTitle: 'Clínica Odontológica',
				data: patients,
			});
		})
		.catch((err) => console.log(err));
};
exports.getPatientById = async (req, res, next) => {
	const patientId = req.params.patientId;
	const dentist = await Patient.findByPk(patientId, { include: Address });
	console.log(dentist);
	res.status(200).json({
		status: 'success',
		message: 'Dentist by id',
		data: dentist,
	});
};

exports.getAltaPacientes = (req, res, next) => {
	res.render('patient/alta-pacientes', {
		pageTitle: 'Clínica Odontológica',
	});
};

exports.postDeletePatient = (req, res, next) => {
	const patientId = req.body.patientId;
	Patient.findByPk(patientId)
		.then((patient) => {
			return patient.destroy();
		})
		.then((result) => {
			console.log('DESTROYED PATIENT');
			res.redirect('/patient');
		})
		.catch((err) => console.log(err));
};
