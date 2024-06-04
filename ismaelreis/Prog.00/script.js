//let nome = prompt ("QUAL SEU NOME")
//alert(`seja bem vinda${nome}`)

//variavel e um local de armzenameto na memoria
//contt e let
// soma com interacao do usuario
//quando capturdo do prompt o valor com palavra
// let num = Number(
//   prompt("seja bem vindo a nossa caluladora" + "\nDigite um valor: ")
// );
// let num1 = Number(prompt("digite o segundo valor: "));
// let soma = num + num1;
// alert("o valor da soma")

// let escolha = Number(
// "Seja Bem Vinda a Nossa caluladora, Escolha Uma Das Opcoes Abaixo:\n" +
// "1 - soma\n" +
// "2 - Multuplicacao\n" +
// "3 - Divisao\n"
// );
// let num = Number(prompt("Digite um numero: "));
// let num1 = Number(prompt("Digite Outro Numero:"));
// if (escolha == 1) {
// let soma = num + num1;
// alert("A soma é igual a : $(soma)");
// } else if (escolha == 2) {
// let Multuplicacao = num + num1;
// alert("A soma é igual a : $(multilcacao)");
// } else if (escolha == 4) {
// let Divisao = num / num1;
// alert("soma é igual a : $(divisao)");
// }

//while (num0 !=5){
//let num, num1;
//vai ficar executanto enquanto o valor for diferente de 5
//prompt(
//"Seja Bem Vinda a Nossa caluladora, Escolha Uma Das Opcoes Abaixo:\n"+
//"1 - soma\n" +
//"2 - Multuplicacao\n" +
//"3 - Subtraco\n" +
//"4 - Divisao\n" +
//"5 - Sair"
//);
//};

//quando se tem um menu eu ossiveis escolhas pre estabelecidas, maisn

function alerta() {
  alert("bom dia");
}

function soma(x, y) {
  let soma = x + y;
  alert(`a soma foi $(soma)`);
}
function Multuplicacao(x, y) {
  let multilcacao = x + y;
  alert(`A MULTPLICAO foi $(multiplicao)`);
}
function divisao(x, y) {
  let divisao = x / y;
  alert(`A DIVISAO foi $(divisao)`);
}
function Subtraco(x, y) {
  let Subtraco = x - y;
  alert(``);
}
//alerta
//soma(3,5);
//let num = Number(prompt("digite um numro: "));
//let num1 = Number(prompt("digite outro numero: "));
//soma(num, num1);

//let frunta = `maca`;
//let frunta1 = `pera`;
//let frunta2 = `melao`;

//const array = []; //array vaizo sem informacoes salvas
//const array1 = ["gaivota", "cao", "gata"];
//array[0] = `maca`;
//array[1] = "jaca";
//array.push = "pera"; //adiciona um elemento no fim do array
//console.log(array);
//console.log(array);
//array.pop(); //elimina o ultimo elemento do array
//console.log(array);
//array.unshift(`maca`); //adiciona um elemento no inicio do array
//let tamanho = array.length; //mostra o tamanho do array
//console.log(array.length); //Mostra o tamanho do array
//console.log(tamanho);

//console.log(array.includes("jaca")); //verfica se existe um elemento no array
//se existir retorna true se retorna false
//console.log(array.includes("jaca")); //vertica a posicao especifica
//console.log(array);
//array.splice(2); //elimina um elemento de uma posicao espefica

function animais() {
  let opc = 0;
  while (opc != 2) {
    opc = Number(prompt)(
      prompt(
        `gostaria de adicinar um aninal?\n
        1 -sim\n
        2 -não`
      )
    );

    switch (opc) {
      case 1:
        let animal = prompt("Qual o animal");
        animal.push(animal);
        console.log(animais);
        break;
      case 2:
        alert("saindo");
        break;
      default:
        alert("Opcao invalida");
        break;
    }
  }
}

for (let i = 0; i < 10; i++) {
  alert(`o valor de i agora é: ${i}`);
}
