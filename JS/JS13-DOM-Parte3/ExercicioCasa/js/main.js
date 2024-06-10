function calcular(){
    let recebeValor = document.getElementById("input").value
    let converter = recebeValor * 1.17 + 215
    let mostraResultado = document.createElement('p')
    mostraResultado.innerHTML = `Seu novo salário é de ${converter}`
    document.body.appendChild(mostraResultado)
}