"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroPortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroPortas = numeroPortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.velocideatual = function () {
        return this.velocidade;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco) {
        this.endereco = endereco;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaCarros = function () {
        return this.listaCarros;
    };
    return Concessionaria;
}());
var Concessionaria = new Concessionaria('av');
console.log(Concessionaria);
