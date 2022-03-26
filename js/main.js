var numeroSecreto = parseInt(Math.random()*11);
var tentativas = 0;
function Chutar() {
    var numeroEnviado = parseInt(document.getElementById("numberID").value);
    var elementoResultado = document.getElementById("resultado");
    tentativas += 1; 

    if (tentativas < 4) {
        if (numeroEnviado == numeroSecreto) {
            elementoResultado.innerHTML = `Você acertou!`
        } else if (numeroEnviado > 10 || numeroEnviado < 0) {
            elementoResultado.innerHTML = `Você deve digitar um número entre 0 e 10`
        } else if (numeroEnviado > numeroSecreto) {
            elementoResultado.innerHTML = `Você errou, o número secreto é menor do que você está achando`; 
        } else {
            elementoResultado.innerHTML = `Você errou, o número secreto é maior do que você está achando`;
        }
    } else {
        elementoResultado.innerHTML = `Acabaram suas tentativas!`
    }
}