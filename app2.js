"use strict";
var carro = /** @class */ (function () {
    function carro() {
        this.velocidade = 0;
    }
    carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    carro.prototype.velocideatual = function () {
        return this.velocidade;
    };
    carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    return carro;
}());
var carroA;
new carro();
console.log(carroA);
