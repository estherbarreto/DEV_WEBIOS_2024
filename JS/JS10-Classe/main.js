class Carro{
    constructor(nome, ano ){
        this.nome = nome;
        this.ano = ano;
    }

anoCarro(ano){
    return anoAtual - this.ano;
}
}

let carro1 = new Carro("KWID", 2012);
let carro2 = new Carro("MOBI", 2015);
let carro3 = new Carro("OUTLANDER", 2019);
console.log(carro1)

let anoAtual = new Date()
let recebeAno = anoAtual.getFullYear();
console.log(anoAtual)
console.log(recebeAno)
console.log(carro1.anoCarro(recebeAno))



