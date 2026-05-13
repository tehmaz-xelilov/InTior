// 1 ci tapsiriq

let qiymet1 = "10";
let qiymet2 = "20";
let cem = Number(qiymet1) + Number(qiymet2);
console.log(cem);



// 2 ci tapsiriq
let mehsulAdi = "kivi";
let mehsulQiymet = 5;
let endirimFaizi = 20;
let stokdaVarmi = true;

let sonQiymet = mehsulQiymet * (100 - endirimFaizi) / 100;

console.log("Mehsul: " + mehsulAdi + "\nEndirimli Qiymət: " + sonQiymet)
