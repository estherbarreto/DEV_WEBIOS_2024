var string = "Os alunos estão "
var string2 = " reprovados "
var string3 = "ou aprovados?"

console.log(string + string2 + string3)

console.log(`${string + string2 + string3}`)

console.clear()

var texto1 = "IOS fez uma excursão na TOTVS com três cabritinhos"

console.log(texto1.charAt(27))

var texto2 = "IOS"
var texto3 = "Está chovendo hamburguer"

console.log(`na variavel texto2 tem ${texto2.length} caracteres`)

console.log(`na variavel texto3 tem ${texto3.length} caracteres`)

console.clear()

var texto5 = "aqui esta em minusculo"
var texto4 = "AQUI ESTA EM MAIUSCULO"

console.log(`Minusculo: ${texto5.toLowerCase()}`)
console.log(`Maiusculo: ${texto4.toUpperCase()}`)

console.clear()

var str = "Mozilla"

console.log(str)
console.log(str.substring(1, 3))
console.log(str.substring(3))

console.clear()
 
 var texto6 = "olha a pipoca"
 console.log(texto6.replace ('pipoca', 'mulher'))

 var texto7 = "                  olha o gatinho laranja"
 console.log(texto7)
 console.log(texto7.trim())