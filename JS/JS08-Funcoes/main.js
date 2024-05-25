function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(2, 3))



function media(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4
}
console.log(media(2, 3, 4, 5))

console.clear()



const media2 = (n1, n2, n3, n4) => {
    return (n1 + n2 + n3 + n4) / 4
}
console.log(media2(10, 20, 30, 40))

console.clear()

var onleadTela = () => {
    alert("sua tela está carregando")
    console.log("recarregou a tela")
}

var onclickBotao = () => {
    alert("Bem-vindo você clicou em mim")
    console.log("Você clicou em um botão")
}