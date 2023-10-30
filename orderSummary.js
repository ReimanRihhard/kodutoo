var tellimus = { 
  "id": 2113, 
  "orderNumber": "E210126001", 
  "createdAt": "2021-01-26 16:04:24", 
  "clientName": "Kalle Tali", 
  "deliveryType": "Omniva smartpost", 
  "deliveryValue": 178, 
  "rows": [ 
    { 
      "article_id": 31, 
      "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W", 
      "product_code": "257549", 
      "price": 49.1666666667, 
      "amount": 1, 
      "vat": 0.2 
    }, 
    { 
      "article_id": 23420, 
      "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk", 
      "product_code": "355836", 
      "price": 5.0666666667, 
      "amount": 2, 
      "vat": 0.2 
    }, 
    { 
      "article_id": 23421, 
      "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk", 
      "product_code": "000000000501267301", 
      "price": 5.825, 
      "amount": 1, 
      "vat": 0.2 
    } 
  ] 
} 


kogusumma = 0
for (i = 0; i<tellimus.rows.length ; i++){
let Nimi = (tellimus.rows[i].name)
let Hind = ("Hind: " + Math.round(tellimus.rows[i].price * 100) / 100)
let Kogus = ("Kogus: " + tellimus.rows[i].amount)
let Kokku = ("Kokku: " + Math.round(tellimus.rows[i].price * tellimus.rows[i].amount * 100) / 100 + " eurot")
let Vat = (tellimus.rows[i].vat)
  kogusumma += (Math.round(tellimus.rows[i].price * tellimus.rows[i].amount * 100) / 100)
console.log(Nimi)
console.log(Hind)
console.log(Kogus)
console.log(Kokku)
}
let vatVahe = (kogusumma * 0.2)
let Kokku2 = vatVahe + kogusumma
console.log("Kogusumma KM'ita: " + Math.round(kogusumma * 100) / 100 + " eurot")
console.log("Kogusumma KM'iga: " + Math.round(Kokku2 * 100) / 100 + " eurot")
