$(document).ready(function() {
    $("#add_new_turno").submit(function(evt) {
        evt.preventDefault();

        let formData = {
            fecha: $('#fecha').val(),
            hora: $('#hora').val(),
            paciente: {
              id: $('#paciente_id').val()
            },
            odontologo: {
              id: $('#odontologo_id').val()
            }
        }

        $.ajax({
            url: '/turnos',
            type: 'POST',
            contentType : "application/json",
            data: JSON.stringify(formData),
            dataType : 'json',
            async: false,
            cache: false,
            success: function (response) {
                let turno = response
               console.log("desde post " + turno)
                let successAlert = '<div class="alert alert-success alert-dismissible">' +
                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                    '<strong></strong> Turno agregado </div>'
                $("#response").append(successAlert);
                $("#response").css({"display": "block"});

                resetUploadForm();
            },
            error: function (response) {
                let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                    '<strong> Error intente nuevamente</strong> </div>'
                $("#response").append(errorAlert);
                $("#response").css({"display": "block"});

                resetUploadForm();
            }
        });
    });

    function resetUploadForm(){
        $('#fecha').val(""),
        $('#hora').val(""),
        $('#paciente_id').val(""),
        $('#odontologo_id').val("")
    }

    (function(){
        let pathname = window.location.pathname;
        if(pathname === "/"){
            $(".nav .nav-item a:first").addClass("active");
        } else if (pathname == "/turnos.html") {
            $(".nav .nav-item a:last").addClass("active");
        }
    })();
});