// merhabalar arkadaşlar burada beden kitle indexi adında bir program yapacağız

//*Bu programda kullanıcıdan bir kilosunu ve boyunu almamız lazım 
//*Beden kitle indexi denilen şey kilosu/boyunun karesi şeklinde hesaplanır

let a = window.prompt("Lütfen kilonuzu giriniz :");
let b = window.prompt("Lütfen boyunuzu giriniz");
let endex = a/b**2;
if(endex>18,5 && endex<24,5){
    alert("normal");
}
var normalsayi = String(endex);
document.write(typeof normalsayi );