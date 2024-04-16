let botao = document.querySelector("#adicionar-paciente")

//ADICIONA NOVO PACIENTE

botao.addEventListener("click", function (e) {
    e.preventDefault();

    //seleciona os valores que estão dentro dos input.
    let form = document.querySelector('#form-adiciona');

    let paciente = obtemDadosPaciente(form);

    

    let erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagemDeErro(erros)
        return 
    }

   
    adicionaPacienteNaTabela(paciente);

    let mensagemErro = document.querySelector(".erros")
    mensagemErro.innerHTML = ""
    form.reset()
});
//ADICIONA NOVO PACIENTE

function adicionaPacienteNaTabela (paciente) {
     let pacienteTr = montaTr(paciente);
     let tabela = document.querySelector('#tabela-pacientes');
     tabela.appendChild(pacienteTr);
} 


function obtemDadosPaciente (form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
};

function montaTr (paciente) {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    let nomeTd = montaTd(paciente.nome, "info-nome");
    let pesoTd =  montaTd(paciente.peso, "info-peso");
    let alturaTd =  montaTd(paciente.altura, "info-altura");
    let gorduraTd = montaTd(paciente.gordura, "info-gordura");
    let imcTd =  montaTd(paciente.imc, "info-imc");
    //Cria os elementos HTML tr e td a partir do evento de click do botao

    //coloca os valores dentro dos elementos HTML criados 
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc

    //coloca as td's como filhas das Tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr
};

function montaTd (dado, classe) {
    td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)
    return td
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco.")
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode estar em branco.")
    }

    if(paciente.altura.length == 0) {
        erros.push("A altura não pode estar em branco.")
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode estar em branco.")
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido.");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida.");
    }

    return erros;
}

function exibeMensagemDeErro(erros) {
    var ul = document.querySelector(".erros");

    ul.textContent = "";

    erros.forEach(function (erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}