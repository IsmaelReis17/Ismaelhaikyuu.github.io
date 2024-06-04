document.getElementById("botao").addEventListener("click", function () {
  // Obter os valores das notas e do nome do input
  var nome = document.getElementById("nome").value;
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);

  // Calcular a média das notas
  var media = (nota1 + nota2 + nota3) / 3;

  // Verificar se todos os campos foram preenchidos
  if (nome && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
    // Exibir o resultado na div de saída
    document.getElementById("saida").innerHTML =
      "Nome: " + nome + "<br/>" + "Média: " + media.toFixed(2);
  } else {
    // Exibir uma mensagem de erro se algum campo estiver vazio ou se alguma nota não for um número
    document.getElementById("saida").innerHTML =
      "Por favor, preencha todos os campos corretamente.";
  }
});
