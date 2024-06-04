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
