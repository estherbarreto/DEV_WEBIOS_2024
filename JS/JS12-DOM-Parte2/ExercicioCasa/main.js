function recebeImg() {
    let img = document.createElement("img");
    img.src='./assets/img/thumb-1920-1000886.jpg'
    document.body.appendChild(img);

    let fundo = document.getElementById('corpo')
    fundo.style.backgroundColor = '#262525'
}

function recebeNome(){
    let nome = window.prompt('digite o seu nome')
    let mostraNome = document.createElement('p')
    mostraNome.innerText = Olà ${nome}, Bem-vindo a nossa academia
    document.body.appendChild(mostraNome)
}

function recebeNum(){
    let num = window.prompt('digite um número')
    if(num <= 10){
        for(let i = 1;i <= 10;i++){
            let mostraTabuada = document.createElement('p')
            mostraTabuada.innerText = ${num} x ${i} = ${num * i}
            document.body.appendChild(mostraTabuada)
        }
    }
}
