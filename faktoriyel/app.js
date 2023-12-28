// şimdi burada faktoriyel hesaplama programı yapmamız lazım bunun için de for döngüsü kullanmalıyız

//* öncelikle kullanıcıdan hangi sayının faktoriyelinin hesaplanacağının bilgisini alalım 

var sayi= window.prompt("Lütfen faktoriyelini hesaplatmak istediğiniz sayıyı giriniz :");

//öncelikle faktoriyel diye bir değişken oluşturarak buna 1 değerini atayalım 

var fak = 1;

// daha sonra bunu girilen sayıya kadar for döngüsü ile çarpalım ve sonuca ulaşalım 

for(let i=1; i<=sayi; i++){
    fak*=i;
}

//* şimdi de bunu ekrana yazdıralım ve kullanıcıya bilgisini verelim 

alert("Faktoriyelini hesapladığınız sayının faktoriyeli : "+ fak);