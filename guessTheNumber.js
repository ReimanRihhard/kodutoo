let x = Math.floor(Math.random() * 10) + 1
let triesleft = 3
console.log("Tries left: " + triesleft)

while(triesleft > 0){
i = parseFloat(prompt("Sisesta arv"))

if (i === x){
    console.log("Yay! Arvasid õige numbri ära!")
    break

} else if (x - i === 1 || x - i === -1) {

console.log("Ai, sa pakkusid väga lähedale.")
triesleft --
console.log("Tries left: " + triesleft)

} else if (triesleft === 0){

    console.log("Proovid otsas, uus number")
    break;
} else {
    console.log("Sorry, X ei ole õige number.")
    triesleft --
    console.log("Tries left: " + triesleft)
}
}
