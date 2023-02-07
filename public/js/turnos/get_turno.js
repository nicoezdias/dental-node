$(document).ready(function(){
    (function(){
        $.ajax({
            type : "GET",
            url : "/turnos",
            success: function(response){
              $.each(response, (i, turno) => {
              console.log("desde get " + turno)
                let get_More_Info_Btn = '<button' +
                                            ' id=' + '\"' + 'btn_id_' + turno.id + '\"' +
                                            ' type="button" class="btn btn-info btn_id">' +
                                            turno.id +
                                            '</button>';
                 let deleteButton = '<button' +
                                                      ' id=' + '\"' + 'btn_delete_' + turno.id + '\"' +
                                                      ' type="button" onclick="deleteBy('+turno.id+')" class="btn btn-danger btn_delete">' +
                                                      '&times' +
                                                      '</button>';
                let tr_id = 'tr_' + turno.id;
                let turnoRow = '<tr id=\"' + tr_id + "\"" + '>' +
                          '<td>' + get_More_Info_Btn + '</td>' +
                          '<td class=\"td_fecha\">' + new Date(turno.fecha).toISOString().slice(0,10)  + '</td>' +
                          '<td class=\"td_hora\">' + turno.hora + '</td>' +
                          '<td class=\"td_paciente\">' + turno.paciente.nombre + ' ' + turno.paciente.apellido + '</td>' +
                          '<td class=\"td_odontologo\">' + turno.odontologo.nombre + ' ' + turno.odontologo.apellido + '</td>' +
                          '<td>' + deleteButton + '</td>'
                          '</tr>';
                $('#turnoTable tbody').append(turnoRow);
              });
            },
            error : function(e) {
              alert("ERROR: ", e);
              console.log("ERROR: ", e);
            }
        });
    })();

    (function(){
        let pathname = window.location.pathname;
        if (pathname == "/turno.html") {
            $(".nav .nav-item a:last").addClass("active");
        }
    })();
});