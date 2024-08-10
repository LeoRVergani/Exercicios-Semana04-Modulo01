const numero1 = parseFloat(document.getElementById("inputNumero1").value);
const numero2 = parseFloat(document.getElementById("inputNumero2").value);

function soma (numero1, numero2){
    const resultado = numero1 + numero2;
    return resultado
}

function gerarResultado(event){
    event.preventDefault();

    const numero1 = parseFloat(document.getElementById("inputNumero1").value);
    const numero2 = parseFloat(document.getElementById("inputNumero2").value);

    console.log(soma(numero1, numero2))
}

document.getElementById('calculo').addEventListener('submit', gerarResultado);