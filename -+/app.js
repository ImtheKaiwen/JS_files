// sayı ne gatif mi pozitif mi buna bakacağız 

//* kullanıcıdan bir sayı almamız lazım öncelikle

var sayi = window.prompt("Lütfen bir sayı giriniz :");

if(sayi>0){
    alert("sayınız pozitiftir ");
}
else if(sayi==0){
    alert("sayınız 0 dır ! ")
}
else{
    alert("sayınız negatiftir !");
}
