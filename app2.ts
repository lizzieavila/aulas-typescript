class carro{
	private modelo:string
	private velocidade:number = 0
	private numeroportas :number

	public acelerar():void{
	this.velocidade = this.velocidade + 10
	}

	public velocideatual():number{
	return this.velocidade
	}

	public parar() :void{
	this.velocidade = 0
	}
}
let carroA new carro()
console.log(carroA)