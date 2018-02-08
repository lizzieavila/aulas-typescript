class Carro{
	private modelo: string
	private velocidade: number = 0
	private numeroPortas: number

	constructor(modelo: string, numeroPortas: number){
	this.modelo = modelo
	this.numeroPortas = numeroPortas

	}

	public acelerar(): void{
	this.velocidade = this.velocidade + 10
	}

	public velocideatual(): number{
	return this.velocidade
	}

	public parar(): void{
	this.velocidade = 0
	}
}
class Concessionaria{
	private endereco: string
	private listaCarros: any

	constructor(endereco: string){
	this.endereco = endereco

	}


	public fornecerEndereco(): string{
	return this.endereco
	}

	public mostrarListaCarros(): any{
	return this.listaCarros
	}
}
let Concessionaria = new Concessionaria('av', )
console.log(Concessionaria)