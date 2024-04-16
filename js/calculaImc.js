let pacientes = document.querySelectorAll(".paciente");
for(var i = 0;i < pacientes.length;i++){
    let paciente = pacientes[i];
    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");
    let imc = calculaImc(peso,altura)

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    if (!pesoEhValido){
        tdImc.textContent  = "peso inválido";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido")
    };

    if (!alturaEhValida){
        tdImc.innerHTML = "Altura inválida";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido")
    };

    if (alturaEhValida && pesoEhValido) {
      tdImc.textContent = imc;
    };
};

function calculaImc (peso,altura) {
    var imc = 0;

    imc = peso / (altura * 2)

    return imc.toFixed(2)
};

function validaPeso (peso) {
    if(peso > 0 && peso < 250){
        return true
    }else {
        return false
    };
};

function validaAltura (altura) {
    if(altura > 1.00 && altura < 3.00){
        return true
    }else {
        return false
    };
};