interface IVeiculo{
	getTitulo();
	getRodas();

class Veiculo implements IVeiculo{
	
	constructor(private titulo:string="Nome Carro", private rodas:number=2){
	this.titulo = titulo;
	this.rodas=rodas;
	}
	getTitulo():string{
	return this.titulo;
	}
	getRodas():number{
	 return this.number;
	}
}
class Moto extends Veiculo{
	
}


let camaro:Veiculo = new Veiculo('Camaro');

let honda:Moto = new Moto();

console.log(honda.getTitulo());