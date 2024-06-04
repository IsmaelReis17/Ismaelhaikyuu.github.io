class Carro {
  constructor(modelo, cor, ano) {
    this.modelo = modelo;
    this.cor = cor;
    this.ano = ano;
    this.velocidade = 0; // Initial speed of the car
    this.ligado = false; // Whether the car is turned on or off
  }

  ligar() {
    if (this.ligado == false) {
      this.ligado = true;
      console.log("o carro foi ligado");
    } else {
      console.log("o carro esta ligado");
    }
  }

  acelerar() {
    if (this.velocidade <= 300 && this.ligado == true) {
      this.velocidade += 60;
    } else {
      console.log("Voce nao pode correr mais ou o carro esta desligado");
    }
  }

  frear() {
    if (this.velocidade <= 60 && this.ligado == true) {
      this.velocidade = 0;
      this.ligado = false;
      console.log("Voce esta parado e o carro foi desligado");
    } else if (this.ligado == true) {
      this.velocidade -= 50;
    }
  }
}

// Creating an instance of Carro
const chevrolet = new Carro("Celta", "Vermelho", 2013);
console.log(chevrolet); // Outputting the initial state of the car
chevrolet.ligar(); // Turning on the car
chevrolet.acelerar(); // Accelerating the car
chevrolet.acelerar(); // Accelerating the car
chevrolet.acelerar(); // Accelerating the car
chevrolet.acelerar(); // Accelerating the car
chevrolet.acelerar(); // Accelerating the car
chevrolet.acelerar(); // Accelerating the car
chevrolet.acelerar(); // Accelerating the car
console.log(chevrolet); // Outputting the state of the car after accelerating
chevrolet.frear(); // Braking the car
chevrolet.frear(); // Braking the car
chevrolet.frear(); // Braking the car
chevrolet.frear(); // Braking the car
chevrolet.frear(); // Braking the car
chevrolet.frear(); // Braking the car
chevrolet.frear(); // Braking the car
console.log(chevrolet); // Outputting the state of the car after braking
