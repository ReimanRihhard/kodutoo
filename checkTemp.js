let i = parseFloat(prompt("Sisesta temperatuur"))

function checkTemp() {
   

    if (i <= 20){
    console.log(-1)
   
    } else if (i <= 40){
        console.log(0)
   
    } else if (i <= 60){
        console.log(1)
   
    } else {
        console.log("Temperatuur on miinuses I I Temperatuur liiga suur")
    }
}

checkTemp()
