var uni = ["HTML", "1993", "CSS", "1996", "Bootstrap", "2011", "JS", "1995", "React", "2013", "Java", "1995"]
console.log(uni)
console.log(uni.length)
console.log(uni[6])
var mudanca = uni.toString()
console.log(mudanca)
var mudanca1 = uni.join("/")
console.log(mudanca1)
var mudanca2 = uni.unshift("IOS")
console.log(uni)


var bidi = [
    ["HTML", "1993", "CSS"],
    ["1996", "Bootstrap", "2011"],
    ["JS", "1995", "React"],
    ["2013", "Java", "1995"]
]

console.log(bidi)
console.log(bidi.length)
console.log(bidi[3][0])
bidi[2][0] = "JavaScript"
console.log(bidi)
delete bidi[3][1]
console.log(bidi)
var mudanca3 = bidi.push("pipoca")
console.log(bidi)