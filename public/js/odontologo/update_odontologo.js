$(document).on('click', 'table button.btn_id', function () {
	let id_of_button = event.srcElement.id;
	let odontologoId = id_of_button.split('_')[2];
	$.ajax({
		url: '/dentist/id/' + odontologoId,
		type: 'GET',
		success: function (response) {
			let dentist = response.data;
			$('#div_odontologo_updating').css({ display: 'block' });
			$('#dentistId').val(dentist.id);
			$('#name').val(dentist.name);
			$('#lastName').val(dentist.lastName);
			$('#license').val(dentist.license);
		},
		error: function (error) {
			console.log(error);
			alert('Error -> ' + error);
		},
	});
});
