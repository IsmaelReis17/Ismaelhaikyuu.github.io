function clientes() {
  let opc = 0;
  const clientes = [];
  while (opc != 4) {
    opc = Number(
      prompt(
        `Escolha uma das opções abaixo:\n
    1- Cadastrar paciente\n
    2- Lista de espera\n
    3- Qual paciente será atendido?\n
    4- Sair`
      )
    );
    switch (opc) {
      case 1:
        let cliente = prompt(`Digite seu nome completo:`);
        clientes.push(cliente);
        alert(`O paciente: ${cliente}, foi adicionado!`);
        break;
      case 2:
        let relClientes = "";
        for (let i = 0; i < clientes.length; i++) {
          relClientes += `paciente nº : ${i + 1} ${clientes[i]}\n`;
        }
        alert(relClientes);
        break;

      case 3:
        let clienteExclui = prompt(`Qual paciente desejaria atender?`);
        let posicaoCliente = clientes.indexOf(clienteExclui);
        console.log(clientes);
        clientes.splice(posicaoCliente, 1);
        console.log(clientes);
        alert(`O paciente ${clienteExclui}, foi atendido`);

        break;
      case 4:
        alert(`Saindo.....`);
        break;
      default:
        alert(`opção inválida`);
    }
  }
}
clientes();
