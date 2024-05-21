var numeros = [-2, 40, 16, 111, 33, 64]

console.log(numeros)
console.log(numeros[3])

console.clear()

var exercicio = ["Rafaella", "Rafael", "Gabriel", "Polly", "Sylvia", "Natália", "Mãe", "João"]
console.log(exercicio[3], exercicio[7])

var bid = [
    ["Banana", "Maça", "Morango"],
    ['Amora', true, 1],
    [null, "Uva", -350]
]

console.log(bid)
// console.log(bid[1][1])

console.clear()

var mercado = [
    ["Pipoca", "arroz", "fejão", "batata"], 
    ["molho de tomate", "alface", "leite em pó", "detergente"],
    ["leite de coco", "candida", "maçã", "vinagre"],
    ["bolacha", "azeite", "limão", "shampoo"]
]

console.log(`${mercado[0][2]} \n ${mercado[1][3]} \n ${mercado[2][2]} \n ${mercado[3][3]}`)

let moeda = ["Real", "Euro", "Coroa", "Dolar"]

console.log(moeda)
moeda[3] = "Yen"
console.log(moeda)

var exemplo = [5, 10, 15, 20, 25, 30]
console.log(exemplo)
var mudanca2 = exemplo.join( " ** ")
console.log(mudanca2)

console.clear()

var array = [0, 3, 6]
console.log(array.length)

let utilizapop = ["Polly", "André", "Gabriel", "Esther", "Jonatas"]
console.log(utilizapop)
var mudanca3 = utilizapop.pop()
console.log(mudanca3)

console.clear()

var nomescarros = ["Audi", "celta", "Uno", "HB20"]
var mudanca6 = nomescarros.shift()

var tristeza = [true, 40, false, "tristeza em dobro"]
var mudanca7 = tristeza.unshift("nice")
console.log(tristeza)