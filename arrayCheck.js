array = []


for(let j=0; j<5; j++){
  i = prompt("Sisesta sona")

  let jubasisestatud = false
    for(let k=0; k<array.length; k++){
      if (i === array[k]){
        jubasisestatud = true
        console.log("Juba sisestatud")
        break
      }
    }
      if (!jubasisestatud){
        array.push(i)
      }
    }

console.log(array)


