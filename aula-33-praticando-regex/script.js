function validar() {
    var formulario = document.getElementById("formulario");
    var CPF = formulario.cpf;

    // Remove caracteres não numéricos do CPF antes de validar
    var cpfNumerico = CPF.value.replace(/[^\d]/g, '');

    var re_cpf = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2}|\d{11})$/;

    if (re_cpf.test(cpfNumerico)) {
        alert("CPF válido");
    } else {
        alert("Digite um CPF válido");
    }
}

function formatarCPF(campo) {
    // Remove caracteres não numéricos do valor atual do campo
   var cpfAtual = campo.value.replace(/[^\d]/g, '');

//     // Verifica se o CPF já está formatado
   if (cpfAtual.length <= 11) {
    campo.value = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
}
