// window.alert("Bem-vindo ao caos");

// window.prompt("Deseja realmente sair do jogo?");

var time = prompt("Qual o nome do time?")

if(time == "São Paulo"){
    alert("O time é São Paulo")
    document.body.style.backgroundColor = "red"

    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "São Paulo - Rogério Ceni"
    document.body.appendChild(nomeTime)

}else if(time == "Corinthians"){
    alert("O time é Corinthians")
    document.body.style.backgroundColor = "black"

    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "Corinthians"
    nomeTime.style.color = "white"
    document.body.appendChild(nomeTime)


}else if(time == "Palmeiras"){
    alert("O time é Palmeiras")
    document.body.style.backgroundColor = "green"

    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "Palmeiras"
    document.body.appendChild(nomeTime)

}else{
    alert("Não sei qual o time")
}
