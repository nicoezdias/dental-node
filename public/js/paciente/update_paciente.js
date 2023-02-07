$(document).on('click', 'table button.btn_id', function () {
	let id_of_button = event.srcElement.id;
	let pacienteId = id_of_button.split('_')[2];

	$.ajax({
		url: '/patient/id/' + pacienteId,
		type: 'GET',
		success: function (response) {
			let patient = response.data;
			console.log(patient);
			$('#div_paciente_updating').css({ display: 'block' });
			$('#paciente_id').val(patient.id);
			$('#nombre').val(patient.name);
			$('#apellido').val(patient.lastName);
			$('#dni').val(patient.dni);
			$('#fechaIngreso').val(patient.admissionDate);
			$('#calle').val(patient.address.street);
			$('#ciudad').val(patient.address.city);
			$('#provincia').val(patient.address.province);
			$('#email').val(patient.email);
		},
		error: function (error) {
			console.log(error);
			alert('Error -> ' + error);
		},
	});
});
