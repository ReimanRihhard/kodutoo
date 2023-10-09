function checkTemp(i){

    if (i <= 20 && i > 0){
    console.log(-1)
   
    } else if (i <= 40 && i > 0){
        console.log(0)
   
    } else if (i <= 60 && i > 0){
        console.log(1)
   
    } else if (i > 60 && i > 0){
        console.log("Temperatuur liiga suur")
    }  else {
       console.log("Temperatuur on miinuses")
    }
}

checkTemp()
