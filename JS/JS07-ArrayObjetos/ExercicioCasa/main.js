var alunos = [
    {
        nome: "Ana",
        idade: 17,
        nota: 8,
        ano: "2B"
    },
    {
        nome: "Bruno",
        idade: 16,
        nota: 6,
        ano: "2C"
    },
    {
        nome: "Veronica",
        idade: 16,
        nota: 9,
        ano: "2C"
    },
    {
        nome: "Marta",
        idade: 15,
        nota: 5,
        ano: "3C"
    },
    {
        nome: "Brenno",
        idade: 19,
        nota: 6,
        ano: "3C"
    },
    {
        nome: "Maria",
        idade: 14,
        nota: 4,
        ano: "1F"
    }
]
console.log(alunos)
console.log(alunos[1])
console.log(alunos[5].nota)

var alunos = JSON.stringify(alunos)
console.log(alunos)