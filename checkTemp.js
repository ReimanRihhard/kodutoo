function checkTemp(i){

    if (i <= 20 && i > 0){
       return -1
   
    } else if (i <= 40 && i > 0){
        return 0
   
    } else if (i <= 60 && i > 0){
         return 1
   
    } else if (i > 60 && i > 0){
        return "Temperatuur on liiga suur"
    }  else {
       return "Temperatuur on miinuses"
    }
}

checkTemp()
