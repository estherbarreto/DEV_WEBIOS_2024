let primeiroElemento = document.getElementById("primeiroElemento");

primeiroElemento.style.color = 'purple';
primeiroElemento.innerText = "Siouxsie and the banshees";

let pegaClasse = document.getElementsByClassName("getClass")

console.log(pegaClasse);

console.clear

for(i = 0; i < pegaClasse.length; i++){
    pegaClasse[i].style.color = 'orange'
}

console.clear()

let byName = document.getElementsByName("filho");
console.log(byName)

byName.forEach(funcao)

function funcao (cont, indice){
  return byName[indice].style.color = "brown"
}

let byTagName = document.getElementsByTagName("p");

for(c = 0; c < byTagName.length; c++){
    byTagName[c].style.color = 'orange'
    byTagName[c].style.fontsize = '20px'
    byTagName[c].style.boxShadow = '5px 5px 5px black'
    if(c % 2){
        byTagName[c].style.backgroundColor = 'pink'
    
    }else {
        byTagName[c].style.backgroundColor = 'purple'
    }

}

let removendo = document.getElementById('remove1')
removendo.remove()

let recebeLista = document.getElementById('paiLista')

recebeLista.style.listStyle = "none"

