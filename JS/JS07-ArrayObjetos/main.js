let pessoa = {
    corDosOlhos: "verde",
    altura: 1.70,
    corCabelo: "Preto",
    nome: "Sara",
    sobrenome: "Lima",
    hobbies:["futebol", "LOL", "Tocar guitarra"],
    endereco: {
            rua: "jao medeiro",
            numero: 234,
            cidade: "são Paulo",
            estado: "SP"

    }
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.hobbies)
console.log(pessoa.hobbies[1])
console.log(pessoa.endereco)
console.log(pessoa.endereco.estado)

console.clear()

let tarefa = [
    {
        id: 1,
        isPronta: true,
        nomeTarefa: "pular"
    },
    {
        id: 2,
        isPronta: false,
        nomeTarefa: "comer"

    },
    {
        id: 3,
        isPronta: true,
        nomeTarefa: "fumar"
    }

]

console.log(tarefa)
console.log(tarefa[1])
console.log(tarefa[1].nomeTarefa)

console.clear()

let recebeJSON = JSON.stringify(pessoa);

console.log(recebeJSON)

var JSONITO = '{"corDosOlhos":"verde","altura":1.7,"corCabelo":"Preto","nome":"Sara","sobrenome":"Lima","hobbies":["futebol","LOL","Tocar guitarra"],"endereco":{"rua":"jao medeiro","numero":234,"cidade":"são Paulo","estado":"SP"}}'

console.log(JSONITO)
console.log(JSON.parse(JSONITO))