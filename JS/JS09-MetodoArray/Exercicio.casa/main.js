console.log("exercício 1");
var exercicio = [17, 43, 8, 4, 97, 56, 29];
exercicio.forEach(verificar);

function verificar(numero) {
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par`);
    } else {
        console.log(`O número ${numero} é ímpar`);
    }
}

console.clear();

console.log("exercício 2");
var exercicio2 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61];
var filter = exercicio2.filter((valor) => {
    return valor > 20 && valor < 80;
});
console.log(filter);
