let botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function() {
    let xhr = new XMLHttpRequest()

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
    
            pacientes.forEach( function (paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else {
            alert(xhr.status)
        };

       
    })

    xhr.send();
});