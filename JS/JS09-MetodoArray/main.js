let frutas = ['morango, amora, melancia, maçã, limão, manga']

frutas.forEach(retornaInfo);
function retornaInfo(nomeFruta, indice){
    console.log(`nomeFruta: ${nomeFruta}`);
    console.log(`indice: ${indice}`);
}


let tarefas = [
    {
        id: 1,
        isPronta: true,
        nomeTarefa: "suicidio"
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

tarefas.forEach((tarefa) => console.log(tarefa.nomeTarefa))

console.clear()

let numeros = [ 4, 9, 16, 25]
let novoArray = numeros.map(Math.sqrt)

console.log("Array antigo" + numeros)
console.log("Novo Array" + novoArray)

let mapText = tarefas.map((retornaTexto) => {
  console.log(retornaTexto.nomeTarefa)
})

console.clear()

let numeros2 =[3, 13, 24, 36, 47, 50, 60, 78, 89]

let resultado = numeros2.filter(retornaFiltro)
 function retornaFiltro(num){
    return num > 30
 }

 console.log(resultado)

 let tarefaFiltro = tarefas.map((resultadoFiltro)=> {
 return resultadoFiltro.isPronta === false
 })

 console.log(tarefaFiltro)

console.clear()
let sapatos = [
    {marca :"Nike", quantidade: 3},
    {marca: "Adidas", quantidade: 5},
    {marca: "Puma", quantidade: 7}
]
console.log(sapatos.find((retornaFind) => {
    return (retornaFind.marca = "Puma")
}))
sapatos.find((retornaFind) => {
 return (retornaFind.marca = "Puma")
})