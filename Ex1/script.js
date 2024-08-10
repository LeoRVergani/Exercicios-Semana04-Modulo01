console.log("Script funcionando")


function calcular() {

    var numero1 = parseFloat(document.getElementById("inputNumero1").value);
    var numero2 = parseFloat(document.getElementById("inputNumero2").value);

    var resultado = numero1 + numero2;

    document.getElementById("resultado").innerText = "O resultado é: " + resultado;

}