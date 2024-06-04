class Carros {
    constructor(modelo, cor, ano){
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.velocidade = 0;
        this.ligado = false;
    }
    ligar() {
        if (this.ligado == false){
            this.ligado = true;
        } else(
            console.log ("o carro ")
        ) 
    }
    acelerar() {
        if(this.velocidade <=300 && this.ligado == true){
            this.velocidade += 60;
            console.log(" meu carro e like")
        } else {
            
        }
    }