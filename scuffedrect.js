function rect(w,h){
    read = []
    for (i = 0; i<w; i++){
     for (j = 0; j<h; j++){    
       read.push('*')
    }
        read.push('\n')
    }
    let output = (read.join(""))
    console.log(output)
    
}

rect(7,8)

