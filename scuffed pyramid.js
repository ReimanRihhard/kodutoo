let klotsid = 5100
let korrused = 0
let lahutaja = 0

while (klotsid>=lahutaja){
    lahutaja++
    klotsid = klotsid-lahutaja
    korrused++
}



console.log(korrused)
console.log(klotsid % korrused + " klotse j22b puudub j2rgmisest korrusest")
