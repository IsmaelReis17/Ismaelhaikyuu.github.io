function calcular() {
  // Get input values
  var inicio = parseInt(document.getElementById("inicio").value);
  var pulo = parseInt(document.getElementById("pulo").value);
  var fim = parseInt(document.getElementById("fim").value);

  // Perform calculation
  var resultado = [];
  for (var i = inicio; i <= fim; i += pulo) {
    resultado.push(i);
  }

  // Display result
  document.getElementById("saida").innerText =
    "Resultado: " + resultado.join(", ");
}
